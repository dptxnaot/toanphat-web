import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck,Truck,DollarSign,Wrench,Award,Users } from "lucide-react";
export const metadata: Metadata = { title:"Giới Thiệu", description:"Công ty TNHH SX TM Dầu Nhớt Toàn Phát – nhà phân phối chính hãng Saigon Petro, Singtec Oil, AP Oil, TP Lubricants." };
const BRANDS=[
  {key:"sgp",img:"/logos/sgp.png",name:"Saigon Petro",desc:"Thương hiệu hàng đầu Việt Nam. Toàn Phát là nhà phân phối chính hãng."},
  {key:"apo",img:"/logos/apo.png",name:"AP Oil",desc:"Dầu nhớt công nghiệp cao cấp. Toàn Phát là đại lý phân phối chính hãng."},
  {key:"singtec",img:"/logos/singtec.png",name:"Singtec Oil",desc:"Nhập khẩu từ Singapore, tiêu chuẩn quốc tế. Toàn Phát phân phối chính thức."},
  {key:"tp",img:"/logos/tp.jpg",name:"TP Lubricants",desc:"Nhãn hàng riêng của Toàn Phát, cam kết chất lượng và giá cạnh tranh."},
];
const SUPPLY=[
  {name:"Caltex",img:"/logos/caltex.png",desc:"Thương hiệu Chevron toàn cầu. Toàn Phát có thể cung cấp theo yêu cầu."},
  {name:"Shell",img:"/logos/shell.png",desc:"Thương hiệu dầu nhớt hàng đầu thế giới. Cung cấp theo yêu cầu."},
  {name:"Castrol",desc:"Thương hiệu cao cấp của BP. Cung cấp theo yêu cầu."},
];
const VALUES=[
  {I:ShieldCheck,t:"Hàng Chính Hãng 100%",d:"Phân phối trực tiếp, đầy đủ hóa đơn chứng từ."},
  {I:Truck,t:"Giao Hàng Toàn Quốc",d:"63 tỉnh thành, cam kết đúng hẹn, đủ số lượng."},
  {I:DollarSign,t:"Giá Cạnh Tranh",d:"Nhập trực tiếp không qua trung gian."},
  {I:Wrench,t:"Tư Vấn Kỹ Thuật",d:"Chọn đúng loại dầu cho từng thiết bị."},
  {I:Award,t:"Uy Tín Lâu Năm",d:"Tin dùng bởi hàng trăm khách hàng doanh nghiệp."},
  {I:Users,t:"Hỗ Trợ Tận Tâm",d:"Phản hồi nhanh qua hotline và Zalo."},
];
export default function GioiThieuPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-green-2 via-green to-green-3 px-7 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-amber text-green-2 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded">Về Chúng Tôi</span>
          <h1 className="text-white text-3xl md:text-4xl font-black leading-tight mt-4 mb-4">Công Ty TNHH SX TM<br/><span className="text-amber">Dầu Nhớt Toàn Phát</span></h1>
          <p className="text-white/80 text-sm leading-relaxed max-w-2xl mx-auto">Nhà phân phối chính thức Saigon Petro, AP Oil, Singtec và TP Lubricants. Cung cấp thêm Caltex, Shell, Castrol và nhiều thương hiệu uy tín khác.</p>
        </div>
      </section>
      <section className="px-7 py-16 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label">Câu Chuyện</span>
            <h2 className="text-2xl font-black mb-4">Hành Trình Xây Dựng <span className="text-green">Niềm Tin</span></h2>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>Toàn Phát Lubricant được thành lập với sứ mệnh mang đến thị trường Việt Nam sản phẩm dầu nhớt chất lượng cao, giá cạnh tranh và dịch vụ tư vấn chuyên nghiệp.</p>
              <p>Chúng tôi tự hào là nhà phân phối chính hãng: <strong>Saigon Petro, Singtec Oil, AP Oil</strong> và nhãn hàng riêng <strong>TP Lubricants</strong>. Ngoài ra còn cung cấp <strong>Caltex, Shell, Castrol</strong> theo yêu cầu.</p>
            </div>
            <div className="flex gap-8 mt-8">
              {[["200+","Sản Phẩm"],["5","Thương Hiệu"],["63","Tỉnh Thành"]].map(([n,l])=>(
                <div key={l}><div className="text-3xl font-black text-green">{n}</div><div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mt-1">{l}</div></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {BRANDS.map(b=>(
              <div key={b.key} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt={b.name} className="w-full h-16 object-contain mb-2"/>
                <div className="text-xs font-bold text-gray-700">{b.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-7 py-16 bg-[#f5f6f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10"><span className="section-label">Cam Kết</span><h2 className="text-2xl font-black">Giá Trị Cốt Lõi <span className="text-green">Của Chúng Tôi</span></h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(v=>(
              <div key={v.t} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-green-4 flex items-center justify-center mb-4"><v.I size={22} className="text-green"/></div>
                <h3 className="font-bold mb-2">{v.t}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-7 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8"><span className="section-label">Đối Tác</span><h2 className="text-2xl font-black">Thương Hiệu <span className="text-green">Chính Hãng</span></h2></div>
          <div className="space-y-4 mb-10">
            {BRANDS.map(b=>(
              <div key={b.key} className="flex items-center gap-5 bg-gray-50 rounded-xl p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt={b.name} className="w-24 h-14 object-contain flex-shrink-0"/>
                <div><div className="font-bold text-sm">{b.name}</div><div className="text-xs text-gray-500 mt-1">{b.desc}</div></div>
              </div>
            ))}
          </div>
          <div className="text-center mb-6"><span className="section-label">Có Thể Cung Cấp</span><h2 className="text-xl font-black">Thương Hiệu <span className="text-green">Cung Cấp Thêm</span></h2><p className="text-sm text-gray-500 mt-1">Không phải đại lý chính thức nhưng có thể hỗ trợ theo yêu cầu.</p></div>
          <div className="flex flex-wrap gap-4">
            {SUPPLY.map(b=>(
              <div key={b.name} className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-3 flex-1 min-w-[180px]">
                {b.img&&<img src={b.img} alt={b.name} className="w-16 h-10 object-contain flex-shrink-0"/>}
                <div><div className="font-bold text-sm">{b.name}</div><div className="text-xs text-gray-500 mt-0.5">{b.desc}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-7 py-16 bg-green-2 text-center">
        <h2 className="text-white text-2xl font-black mb-4">Liên Hệ Với Toàn Phát Ngay</h2>
        <p className="text-white/80 mb-6 text-sm">Hotline: <strong className="text-amber">0911.472.286</strong> – <strong className="text-amber">0913.391.453</strong></p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/products" className="btn-primary">Xem Sản Phẩm</Link>
          <Link href="/lien-he" className="btn-outline">Liên Hệ Báo Giá</Link>
        </div>
      </section>
    </main>
  );
}
