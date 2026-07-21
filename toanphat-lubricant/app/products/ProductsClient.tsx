"use client";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard, { Product } from "@/components/ProductCard";
import categories from "@/data/categories.json";
import brands from "@/data/brands.json";
import productsData from "@/data/products.json";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
const PAGE_SIZE = 20;
type SortKey = "default"|"name-az"|"name-za"|"brand";
const allProducts = productsData as Product[];
const brandCounts = brands.reduce<Record<string,number>>((a,b)=>({...a,[b.key]:allProducts.filter(p=>p.brandKey===b.key).length}),{});
const catCounts = categories.reduce<Record<string,number>>((a,c)=>({...a,[c.key]:allProducts.filter(p=>p.catKey===c.key).length}),{});
function FilterBtn({active,onClick,label,count}:{active:boolean;onClick:()=>void;label:string;count:number}) {
  return <button onClick={onClick} className={`flex w-full items-center justify-between text-sm px-3 py-1.5 rounded-lg transition ${active?"bg-green text-white font-semibold":"text-gray-600 hover:bg-gray-100"}`}><span>{label}</span><span className={`text-[11px] ${active?"text-white/70":"text-gray-400"}`}>({count})</span></button>;
}
function FilterPanel({q,setQ,brand,setBrand,cat,setCat}:{q:string;setQ:(v:string)=>void;brand:string;setBrand:(v:string)=>void;cat:string;setCat:(v:string)=>void}) {
  return (
    <div className="space-y-5">
      <div className="relative"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Tìm sản phẩm..." className="w-full border border-gray-200 rounded-lg pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green bg-gray-50"/></div>
      <div><h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-2">Thương Hiệu</h4><div className="space-y-0.5"><FilterBtn active={brand==="all"} onClick={()=>setBrand("all")} label="Tất cả" count={allProducts.length}/>{brands.map(b=><FilterBtn key={b.key} active={brand===b.key} onClick={()=>setBrand(b.key)} label={b.name} count={brandCounts[b.key]??0}/>)}</div></div>
      <div><h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-2">Danh Mục</h4><div className="space-y-0.5"><FilterBtn active={cat==="all"} onClick={()=>setCat("all")} label="Tất cả" count={allProducts.length}/>{categories.map(c=><FilterBtn key={c.key} active={cat===c.key} onClick={()=>setCat(c.key)} label={c.name} count={catCounts[c.key]??0}/>)}</div></div>
      {(brand!=="all"||cat!=="all"||q)&&<button onClick={()=>{setBrand("all");setCat("all");setQ("")}} className="text-xs text-red-500 font-semibold hover:underline">✕ Xóa bộ lọc</button>}
    </div>
  );
}
export default function ProductsClient() {
  const params = useSearchParams();
  const [brand,setBrand] = useState(params.get("brand")||"all");
  const [cat,setCat] = useState(params.get("cat")||"all");
  const [q,setQ] = useState("");
  const [sort,setSort] = useState<SortKey>("default");
  const [page,setPage] = useState(1);
  const [showFilter,setShowFilter] = useState(false);
  useEffect(()=>{setPage(1);},[brand,cat,q,sort]);
  const filtered = useMemo(()=>{
    let list = allProducts.filter(p=>{
      if(brand!=="all"&&p.brandKey!==brand)return false;
      if(cat!=="all"&&p.catKey!==cat)return false;
      if(q&&!(p.name+p.spec+p.brand).toLowerCase().includes(q.toLowerCase()))return false;
      return true;
    });
    if(sort==="name-az")list=[...list].sort((a,b)=>a.name.localeCompare(b.name,"vi"));
    else if(sort==="name-za")list=[...list].sort((a,b)=>b.name.localeCompare(a.name,"vi"));
    else if(sort==="brand")list=[...list].sort((a,b)=>a.brand.localeCompare(b.brand,"vi"));
    else list=[...list].sort((a,b)=>{const o={"BÁN CHẠY":0,"CHÍNH HÃNG":1,"CAO CẤP":2};return (o[a.badge as keyof typeof o]??3)-(o[b.badge as keyof typeof o]??3);});
    return list;
  },[brand,cat,q,sort]);
  const paginated = filtered.slice(0,page*PAGE_SIZE);
  const remaining = filtered.length-paginated.length;
  const headerLabel = brand!=="all"?brands.find(b=>b.key===brand)?.name?.toUpperCase():cat!=="all"?categories.find(c=>c.key===cat)?.name?.toUpperCase():null;
  return (
    <main className="px-4 md:px-7 py-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-8">
        {headerLabel&&<span className="inline-block bg-green/10 text-green text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded mb-2">{headerLabel}</span>}
        <h1 className="text-2xl md:text-3xl font-black">Sản Phẩm <span className="text-green">Chính Hãng</span></h1>
        <p className="text-gray-500 text-sm mt-1">Bấm vào sản phẩm để xem chi tiết thông số và liên hệ báo giá</p>
      </div>
      {(brand!=="all"||cat!=="all")&&(
        <div className="flex flex-wrap gap-2 mb-4">
          {brand!=="all"&&<span className="inline-flex items-center gap-1 bg-green/10 text-green text-xs font-semibold px-3 py-1 rounded-full">{brands.find(b=>b.key===brand)?.name}<button onClick={()=>setBrand("all")}><X size={12}/></button></span>}
          {cat!=="all"&&<span className="inline-flex items-center gap-1 bg-green/10 text-green text-xs font-semibold px-3 py-1 rounded-full">{categories.find(c=>c.key===cat)?.name}<button onClick={()=>setCat("all")}><X size={12}/></button></span>}
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="hidden md:block md:w-52 flex-shrink-0"><div className="sticky top-24"><FilterPanel q={q} setQ={setQ} brand={brand} setBrand={setBrand} cat={cat} setCat={setCat}/></div></aside>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
            <div className="flex items-center gap-3">
              <button onClick={()=>setShowFilter(true)} className="md:hidden flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm font-semibold"><SlidersHorizontal size={14}/>Lọc{(brand!=="all"||cat!=="all")&&<span className="w-4 h-4 rounded-full bg-green text-white text-[10px] flex items-center justify-center">{[brand!=="all",cat!=="all"].filter(Boolean).length}</span>}</button>
              <span className="text-sm text-gray-500">Hiện thị <strong>{filtered.length}</strong> sản phẩm</span>
            </div>
            <div className="relative"><select value={sort} onChange={e=>setSort(e.target.value as SortKey)} className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm font-semibold pr-8 focus:outline-none focus:border-green cursor-pointer"><option value="default">Mặc định</option><option value="name-az">Tên A → Z</option><option value="name-za">Tên Z → A</option><option value="brand">Theo thương hiệu</option></select><ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"/></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {paginated.map(p=><ProductCard key={p.slug} p={p}/>)}
          </div>
          {filtered.length===0&&<div className="text-center text-gray-400 py-20"><div className="text-5xl mb-4">🔍</div><p className="font-semibold mb-2">Không tìm thấy sản phẩm phù hợp.</p><button onClick={()=>{setBrand("all");setCat("all");setQ("")}} className="text-green text-sm font-bold hover:underline">Xóa bộ lọc</button></div>}
          {remaining>0&&<div className="text-center mt-8"><button onClick={()=>setPage(p=>p+1)} className="btn-primary !bg-green !text-white hover:!bg-green-2">Xem thêm {remaining} sản phẩm</button></div>}
        </div>
      </div>
      {showFilter&&(
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={()=>setShowFilter(false)}/>
          <div className="relative ml-auto w-72 bg-white h-full overflow-y-auto p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-5"><h3 className="font-bold text-base">Bộ Lọc</h3><button onClick={()=>setShowFilter(false)}><X size={20}/></button></div>
            <FilterPanel q={q} setQ={setQ} brand={brand} setBrand={setBrand} cat={cat} setCat={setCat}/>
            <button onClick={()=>setShowFilter(false)} className="mt-6 w-full btn-primary !bg-green !text-white justify-center">Áp Dụng ({filtered.length})</button>
          </div>
        </div>
      )}
    </main>
  );
}
