import Hero from "@/components/Hero";
import ProductCard, { Product } from "@/components/ProductCard";
import Link from "next/link";
import categories from "@/data/categories.json";
import brands from "@/data/brands.json";
import products from "@/data/products.json";
import { ShieldCheck, Truck, DollarSign, Wrench, Droplet } from "lucide-react";
import { AnimateIn, AnimateStagger, AnimateStaggerItem } from "@/components/AnimateIn";

export default function HomePage() {
  const featured = (products as Product[]).filter(p=>p.badge==="BÁN CHẠY").slice(0,10);
  return (
    <main>
      <Hero/>
      {/* Danh mục */}
      <section className="px-7 py-14 bg-[#f5f6f8]">
        <AnimateIn><div className="text-center mb-9"><span className="section-label">Danh Mục</span><h2 className="text-3xl font-black">Danh Mục <span className="text-green">Sản Phẩm</span></h2></div></AnimateIn>
        <AnimateStagger className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {categories.map(c=>(
            <AnimateStaggerItem key={c.key}>
              <Link href={`/products?cat=${c.key}`} className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:border-green hover:-translate-y-1 hover:shadow-lg transition group block">
                <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-lg bg-green-4 group-hover:bg-green transition">
                  <Droplet size={20} strokeWidth={1.8} className="text-green group-hover:text-white transition"/>
                </div>
                <div className="font-bold text-sm">{c.name}</div>
              </Link>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </section>
      {/* Thương hiệu */}
      <section className="px-7 py-14 bg-white border-t border-gray-100">
        <AnimateIn><div className="text-center mb-9"><span className="section-label">Cung Cấp</span><h2 className="text-3xl font-black"><span className="text-green">Thương Hiệu</span></h2></div></AnimateIn>
        <AnimateStagger className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {brands.filter(b=>b.key!=="other").map(b=>(
            <AnimateStaggerItem key={b.key}>
              <Link href={`/products?brand=${b.key}`} className="group flex flex-col items-center gap-2 hover:-translate-y-1 transition">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.key==="sgp"?"/logos/sgp.png":b.key==="apo"?"/logos/apo.png":b.key==="singtec"?"/logos/singtec.png":b.key==="tp"?"/logos/tp.jpg":"/logos/caltex.png"}
                  alt={b.name} className="w-36 h-20 object-contain p-2 rounded-xl border border-gray-200 bg-white group-hover:border-green group-hover:shadow-lg transition"/>
                <span className="text-xs font-bold text-gray-600 group-hover:text-green transition">{b.name}</span>
              </Link>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </section>
      {/* Sản phẩm bán chạy */}
      <section className="px-7 py-14 bg-[#f5f6f8]">
        <AnimateIn><div className="text-center mb-9"><span className="section-label">Nổi Bật</span><h2 className="text-3xl font-black">Sản Phẩm <span className="text-green">Bán Chạy</span></h2></div></AnimateIn>
        <AnimateStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
          {featured.map(p=><AnimateStaggerItem key={(p as Product).slug}><ProductCard p={p as Product}/></AnimateStaggerItem>)}
        </AnimateStagger>
        <AnimateIn delay={0.2}><div className="text-center mt-8"><Link href="/products" className="btn-primary !bg-green !text-white hover:!bg-green-2">Xem Tất Cả Sản Phẩm</Link></div></AnimateIn>
      </section>
      {/* Why us */}
      <section className="px-7 py-14 bg-white border-t border-gray-100">
        <AnimateIn><div className="text-center mb-9"><span className="section-label">Tại Sao Chọn Chúng Tôi</span><h2 className="text-3xl font-black">Toàn Phát – <span className="text-green">Uy Tín Hàng Đầu</span></h2></div></AnimateIn>
        <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[{I:ShieldCheck,t:"Hàng Chính Hãng 100%",d:"Phân phối trực tiếp từ nhà sản xuất, đảm bảo nguồn gốc rõ ràng."},{I:Truck,t:"Giao Hàng Toàn Quốc",d:"Cam kết đúng hẹn, đủ số lượng, an toàn."},{I:DollarSign,t:"Giá Cạnh Tranh",d:"Nhập trực tiếp không qua trung gian, ưu đãi đại lý."},{I:Wrench,t:"Tư Vấn Chuyên Sâu",d:"Kỹ thuật viên tư vấn đúng loại dầu phù hợp."}].map(({I,t,d})=>(
            <AnimateStaggerItem key={t}>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition h-full">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-lg bg-green-4"><I className="text-green" size={22}/></div>
                <div className="font-bold mb-2">{t}</div>
                <div className="text-sm text-gray-500">{d}</div>
              </div>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>
      </section>
      {/* CTA */}
      <section className="px-7 py-16 bg-green-2 text-center">
        <AnimateIn>
          <h2 className="text-white text-2xl md:text-3xl font-black mb-4">Cần Tư Vấn Chọn Dầu Nhớt Phù Hợp?</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto text-sm">Đội ngũ kỹ thuật Toàn Phát sẵn sàng hỗ trợ bạn chọn đúng sản phẩm.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/tu-van" className="btn-primary inline-flex">Tư Vấn Ngay</Link>
            <Link href="/lien-he" className="btn-outline inline-flex">Liên Hệ Báo Giá</Link>
          </div>
        </AnimateIn>
      </section>
    </main>
  );
}
