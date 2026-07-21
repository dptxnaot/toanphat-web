"use client";
import { useMemo,useState } from "react";
import Link from "next/link";
import ProductCard,{ Product } from "@/components/ProductCard";
import productsData from "@/data/products.json";
import { Truck,Car,Bike,Factory,Cog,Phone,ArrowRight } from "lucide-react";
const OPTS=[
  {key:"xetai",label:"Xe Tải / Xe Khách",sublabel:"Động cơ Diesel tải nặng",icon:Truck,catKeys:["diesel"]},
  {key:"oto",label:"Ô Tô Con",sublabel:"Xăng / Diesel nhẹ",icon:Car,catKeys:["oto"]},
  {key:"xemay",label:"Xe Máy",sublabel:"Scooter / Số / Côn tay",icon:Bike,catKeys:["xemay"]},
  {key:"congnghiep",label:"Máy Công Nghiệp",sublabel:"Thủy lực, bánh răng, cắt gọt",icon:Factory,catKeys:["congnghiep","thuyluc","banhrang","catgot"]},
  {key:"hopso",label:"Hộp Số / Cầu Xe",sublabel:"Xe tải, xe ben, xe chuyên dụng",icon:Cog,catKeys:["hopso"]},
];
export default function TuVanPage() {
  const [vehicle,setVehicle]=useState<string|null>(null);
  const products=productsData as Product[];
  const suggestions=useMemo(()=>{ if(!vehicle)return []; const o=OPTS.find(x=>x.key===vehicle); if(!o)return []; return products.filter(p=>o.catKeys.includes(p.catKey)).slice(0,8); },[vehicle,products]);
  const sel=OPTS.find(o=>o.key===vehicle);
  return (
    <main className="px-4 md:px-7 py-10 max-w-5xl mx-auto">
      <div className="text-center mb-10"><span className="section-label">Tư Vấn</span><h1 className="text-3xl font-black">Bộ Chọn <span className="text-green">Dầu Nhớt</span></h1><p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto leading-relaxed">Chọn loại xe hoặc máy móc — hệ thống gợi ý sản phẩm phù hợp.</p></div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
        {OPTS.map(o=>{const Icon=o.icon;return(
          <button key={o.key} onClick={()=>setVehicle(o.key)} className={`p-4 rounded-xl border text-center transition group ${vehicle===o.key?"bg-green text-white border-green shadow-lg":"bg-white border-gray-200 hover:border-green hover:shadow-md"}`}>
            <Icon size={28} className={`mx-auto mb-2 ${vehicle===o.key?"text-amber":"text-gray-400 group-hover:text-green"} transition`}/>
            <div className="font-bold text-sm leading-snug">{o.label}</div>
            <div className={`text-[11px] mt-1 ${vehicle===o.key?"text-white/70":"text-gray-400"}`}>{o.sublabel}</div>
          </button>
        );})}
      </div>
      {vehicle&&(
        <div className="mt-10">
          <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
            <h2 className="text-xl font-black">Sản Phẩm <span className="text-green">Phù Hợp</span>{sel&&<span className="text-gray-400 font-normal text-base ml-2">— {sel.label}</span>}</h2>
            <Link href={`/products?cat=${OPTS.find(o=>o.key===vehicle)?.catKeys[0]??""}`} className="text-xs font-bold text-green hover:underline flex items-center gap-1">Xem tất cả <ArrowRight size={13}/></Link>
          </div>
          {suggestions.length>0?(
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">{suggestions.map(p=><ProductCard key={p.slug} p={p}/>)}</div>
              <div className="mt-10 bg-green-4 border border-green/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div><div className="font-bold text-green-2 mb-1">Chưa chắc sản phẩm nào phù hợp?</div><div className="text-sm text-gray-600">Gọi ngay để kỹ thuật viên tư vấn miễn phí.</div></div>
                <div className="flex gap-3 flex-shrink-0">
                  <a href="tel:0911472286" className="btn-primary !bg-green !text-white hover:!bg-green-2 whitespace-nowrap"><Phone size={15}/> 0911.472.286</a>
                  <a href="https://zalo.me/0911472286" target="_blank" rel="noreferrer" className="btn-outline !text-green !border-green hover:!bg-green hover:!text-white whitespace-nowrap">Zalo</a>
                </div>
              </div>
            </>
          ):<div className="text-center py-12 text-gray-400">Vui lòng liên hệ hotline để được tư vấn.</div>}
        </div>
      )}
    </main>
  );
}
