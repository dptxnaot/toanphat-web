"use client";
import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import productsData from "@/data/products.json";
import { Product } from "@/components/ProductCard";
const products = productsData as Product[];
export default function HeaderSearch() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = q.trim().length > 1 ? products.filter(p=>(p.name+p.brand+p.spec).toLowerCase().includes(q.toLowerCase())).slice(0,8) : [];
  useEffect(()=>{ if(open) setTimeout(()=>inputRef.current?.focus(),50); },[open]);
  useEffect(()=>{ const fn=(e:KeyboardEvent)=>{ if(e.key==="Escape") setOpen(false); }; window.addEventListener("keydown",fn); return ()=>window.removeEventListener("keydown",fn); },[]);
  return (
    <>
      <button onClick={()=>setOpen(true)} className="text-white/80 hover:text-white p-2 transition" aria-label="Tìm kiếm"><Search size={18} /></button>
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={()=>setOpen(false)} />
          <div className="relative z-10 bg-white mx-4 mt-20 md:mx-auto md:w-[640px] rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100">
              <Search size={18} className="text-gray-400 flex-shrink-0" />
              <input ref={inputRef} value={q} onChange={e=>setQ(e.target.value)} placeholder="Tìm sản phẩm, thương hiệu..." className="flex-1 text-base outline-none placeholder:text-gray-400" />
              <button onClick={()=>setOpen(false)} className="text-gray-400 hover:text-gray-700"><X size={18} /></button>
            </div>
            {q.trim().length > 1 && (
              <div className="max-h-80 overflow-y-auto">
                {results.length > 0 ? results.map(p=>(
                  <Link key={p.slug} href={`/product/${p.slug}`} onClick={()=>{setOpen(false);setQ("");}}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition border-b border-gray-50 last:border-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/brands/${p.brandKey}.svg`} alt={p.brand} className="w-10 h-7 object-cover rounded flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold truncate">{p.name}</div>
                      <div className="text-xs text-gray-400 truncate">{p.brand} · {p.spec}</div>
                    </div>
                    <span className="text-xs text-green font-bold flex-shrink-0">Xem →</span>
                  </Link>
                )) : <div className="px-4 py-8 text-center text-gray-400 text-sm">Không tìm thấy sản phẩm phù hợp.</div>}
              </div>
            )}
            {q.trim().length <= 1 && <div className="px-4 py-6 text-center text-gray-400 text-sm">Nhập ít nhất 2 ký tự để tìm kiếm</div>}
          </div>
        </div>
      )}
    </>
  );
}
