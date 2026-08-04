"use client";
import { useState } from "react";

interface FormState {
  name: string;
  phone: string;
  company: string;
  usage: string;
  message: string;
}
interface FormErrors {
  name?: string;
  phone?: string;
}

function validatePhone(p: string) {
  return /^(0[3|5|7|8|9])[0-9]{8}$/.test(p.replace(/\s|\./g, ""));
}

export default function ContactForm({ productName = "" }: { productName?: string }) {
  const [status, setStatus] = useState<"idle"|"sending"|"done"|"error">("idle");
  const [form, setForm] = useState<FormState>({ name:"", phone:"", company:"", usage:"", message:"" });
  const [errors, setErrors] = useState<FormErrors>({});

  function validate() {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Vui lòng nhập họ tên.";
    if (!form.phone.trim()) e.phone = "Vui lòng nhập số điện thoại.";
    else if (!validatePhone(form.phone)) e.phone = "Số không hợp lệ (10 số, đầu 03x/05x/07x/08x/09x).";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xbdwgkro", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          company: form.company || "Không có",
          usage: form.usage || "Không có",
          product: productName,
          message: form.message,
          _subject: `Báo giá từ ${form.name} – ${form.phone}${form.company ? ` (${form.company})` : ""}`,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setForm({ name:"", phone:"", company:"", usage:"", message:"" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") return (
    <div className="bg-green-4 border border-green/20 rounded-xl p-8 max-w-xl text-center">
      <div className="text-4xl mb-3">✅</div>
      <div className="font-bold text-green-2 text-lg mb-1">Đã gửi thành công!</div>
      <p className="text-sm text-gray-600">
        Toàn Phát sẽ liên hệ lại sớm nhất. Hotline:{" "}
        <a href="tel:0911472286" className="text-green font-semibold">0911.472.286</a>
      </p>
      <button onClick={() => setStatus("idle")} className="mt-4 text-xs text-green font-semibold hover:underline">
        Gửi yêu cầu khác
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 max-w-xl" noValidate>
      <h3 className="font-bold text-lg mb-1">
        {productName ? "Yêu Cầu Báo Giá" : "Gửi Yêu Cầu Liên Hệ"}
      </h3>
      {productName && (
        <p className="text-xs text-gray-500 mb-4">
          Sản phẩm: <span className="font-semibold text-green">{productName}</span>
        </p>
      )}

      <div className="space-y-3">
        {/* Họ tên */}
        <div>
          <input placeholder="Họ và tên *" value={form.name}
            onChange={e => { setForm({...form, name: e.target.value}); setErrors({...errors, name: undefined}); }}
            className={`w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green/30 transition ${errors.name ? "border-red-400 bg-red-50" : "border-gray-300 focus:border-green"}`}/>
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Số điện thoại */}
        <div>
          <input placeholder="Số điện thoại * (VD: 0911472286)" value={form.phone}
            type="tel" inputMode="numeric"
            onChange={e => { setForm({...form, phone: e.target.value}); setErrors({...errors, phone: undefined}); }}
            className={`w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green/30 transition ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-300 focus:border-green"}`}/>
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>

        {/* Tên công ty */}
        <input placeholder="Tên công ty / đơn vị (nếu có)"
          value={form.company}
          onChange={e => setForm({...form, company: e.target.value})}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green"/>

        {/* Mục đích sử dụng */}
        <input
          placeholder="Sử dụng cho máy / thiết bị nào? (VD: máy CNC, xe tải 5 tấn, máy nén khí...)"
          value={form.usage}
          onChange={e => setForm({...form, usage: e.target.value})}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green"/>

        {/* Ghi chú thêm */}
        <textarea placeholder="Số lượng cần mua, yêu cầu đặc biệt..."
          value={form.message} rows={3}
          onChange={e => setForm({...form, message: e.target.value})}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green resize-none"/>

        <button type="submit" disabled={status === "sending"}
          className="btn-primary !bg-green !text-white hover:!bg-green-2 w-full justify-center disabled:opacity-60">
          {status === "sending" ? "Đang gửi..." : status === "error" ? "❌ Lỗi – Thử lại" : "Gửi Yêu Cầu Báo Giá"}
        </button>

        <p className="text-[11px] text-gray-400 text-center">
          Hoặc gọi trực tiếp:{" "}
          <a href="tel:0911472286" className="text-green font-semibold">0911.472.286</a>
        </p>
      </div>
    </form>
  );
}