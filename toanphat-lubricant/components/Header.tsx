"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import categories from "@/data/categories.json";
import brands from "@/data/brands.json";
import HeaderSearch from "@/components/HeaderSearch";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-green-2 text-white/85 text-xs px-7 py-2 flex justify-between flex-wrap gap-2">
        <div className="flex gap-5">
          <a href="tel:0911472286" className="font-semibold hover:text-white transition">Hotline: 0911.472.286 – 0913.391.453</a>
          <span className="hidden sm:inline">Giao hàng toàn quốc</span>
        </div>
        <div className="hidden sm:block">Phân phối chính hãng Saigon Petro – Singtec – AP Oil – TP Lubricants</div>
      </div>
      <header className="bg-green sticky top-0 z-50 shadow-lg">
        <div className="px-7 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 py-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image src="/logo.jpg" alt="Toàn Phát Lubricant" width={48} height={48} className="object-contain" />
            </div>
            <div>
              <div className="text-white font-black text-lg leading-tight">TOÀN PHÁT</div>
              <div className="text-amber-100/80 text-[10px] uppercase tracking-wide">Lubricant Distributor</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-stretch h-16">
            <Link href="/" className="text-white/90 font-bold text-sm px-4 h-full flex items-center hover:bg-black/10 border-b-2 border-transparent hover:border-amber transition">Trang Chủ</Link>
            <div className="relative group h-full">
              <button className="text-white/90 font-bold text-sm px-4 h-full flex items-center hover:bg-black/10 border-b-2 border-transparent group-hover:border-amber transition">Sản Phẩm ▾</button>
              <div className="hidden group-hover:flex absolute top-full left-1/2 -translate-x-1/2 bg-white border border-gray-100 rounded-b-xl shadow-2xl p-6 gap-10 min-w-[660px]">
                <div className="flex-1">
                  <h4 className="text-[11px] font-extrabold text-green uppercase tracking-widest border-b-2 border-green-4 pb-1 mb-3">Danh Mục</h4>
                  <div className="grid grid-cols-2 gap-x-6">
                    {categories.map(c=><Link key={c.key} href={`/products?cat=${c.key}`} className="block text-gray-600 text-sm py-1.5 hover:text-green hover:font-semibold transition">{c.name}</Link>)}
                  </div>
                </div>
                <div className="w-36">
                  <h4 className="text-[11px] font-extrabold text-green uppercase tracking-widest border-b-2 border-green-4 pb-1 mb-3">Thương Hiệu</h4>
                  {brands.filter(b=>b.key!=="other").map(b=><Link key={b.key} href={`/products?brand=${b.key}`} className="block text-gray-600 text-sm py-1.5 hover:text-green hover:font-semibold transition">{b.name}</Link>)}
                </div>
              </div>
            </div>
            <Link href="/gioi-thieu" className="text-white/90 font-bold text-sm px-4 h-full flex items-center hover:bg-black/10 border-b-2 border-transparent hover:border-amber transition">Giới Thiệu</Link>
            <Link href="/tin-tuc" className="text-white/90 font-bold text-sm px-4 h-full flex items-center hover:bg-black/10 border-b-2 border-transparent hover:border-amber transition">Tin Tức</Link>
            <Link href="/tu-van" className="text-white/90 font-bold text-sm px-4 h-full flex items-center hover:bg-black/10 border-b-2 border-transparent hover:border-amber transition">Tư Vấn</Link>
            <Link href="/lien-he" className="text-white/90 font-bold text-sm px-4 h-full flex items-center hover:bg-black/10 border-b-2 border-transparent hover:border-amber transition">Liên Hệ</Link>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <HeaderSearch />
            <a href="tel:0911472286" className="bg-amber text-green-2 px-4 py-2 rounded-md font-extrabold text-sm flex items-center gap-2 hover:bg-amber-2 transition"><Phone size={16} /> Gọi Ngay</a>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <HeaderSearch />
            <button className="text-white p-2" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden bg-green-2 px-5 py-3 flex flex-col gap-1">
            {[["/" ,"Trang Chủ"],["/products","Sản Phẩm"],["/gioi-thieu","Giới Thiệu"],["/tin-tuc","Tin Tức"],["/tu-van","Tư Vấn Chọn Dầu"],["/lien-he","Liên Hệ"]].map(([href,label])=>(
              <Link key={href} href={href} onClick={()=>setOpen(false)} className="text-white py-2 border-b border-white/10 last:border-0 font-semibold text-sm">{label}</Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
