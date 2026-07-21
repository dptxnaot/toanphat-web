"use client";
import { useState } from "react";
import { Product } from "@/components/ProductCard";
import { Phone } from "lucide-react";
const TABS = ["Thông tin","Tài liệu kỹ thuật"] as const;
type Tab = typeof TABS[number];
export default function ProductTabs({ product, specs }: { product: Product; specs: string[] }) {
  const [tab, setTab] = useState<Tab>("Thông tin");
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <div className="flex border-b border-gray-200 bg-gray-50">
        {TABS.map(t => (
          <button key={t} onClick={()=>setTab(t)}
            className={`px-6 py-3 text-sm font-bold border-b-2 transition -mb-px ${tab===t?"border-green text-green bg-white":"border-transparent text-gray-500 hover:text-green"}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="p-6">
        {tab==="Thông tin" && (
          <div className="text-sm text-gray-600 leading-relaxed space-y-4 max-w-3xl">
            <p><strong className="text-gray-800">{product.name}</strong> là sản phẩm thuộc thương hiệu <strong className="text-green">{product.brand}</strong>, được Toàn Phát Lubricant phân phối chính hãng.</p>
            <div>
              <div className="font-bold text-gray-800 mb-2">Thông số kỹ thuật:</div>
              <ul className="space-y-1.5">{specs.map((s,i)=><li key={i} className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">✓</span><span>{s}</span></li>)}</ul>
            </div>
            <div className="bg-amber/10 border border-amber/30 rounded-xl p-4">
              <div className="font-bold text-amber-700 text-sm mb-1">Lưu ý sử dụng</div>
              <p className="text-xs text-gray-600 leading-relaxed">Vui lòng liên hệ kỹ thuật viên Toàn Phát để được tư vấn liều lượng, chu kỳ thay dầu phù hợp.</p>
            </div>
          </div>
        )}
        {tab==="Tài liệu kỹ thuật" && (
          <div className="max-w-3xl">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">📋</div>
              <div className="font-bold text-gray-700 mb-2">Tài liệu đang được cập nhật</div>
              <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto leading-relaxed">TDS/MSDS cho <strong>{product.name}</strong> đang cập nhật. Liên hệ để nhận tài liệu qua email hoặc Zalo.</p>
              <a href="tel:0911472286" className="btn-primary !bg-green !text-white hover:!bg-green-2 inline-flex"><Phone size={15} /> Gọi Yêu Cầu Tài Liệu</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
