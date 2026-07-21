import Link from "next/link";
import { getProductImage } from "@/lib/productImage";

export type Product = {
  brand: string; brandKey: string; catKey: string;
  name: string; spec: string; badge: string; slug: string;
};

const BADGE_STYLE: Record<string, string> = {
  "BÁN CHẠY": "bg-red-500 text-white",
  "CAO CẤP": "bg-amber text-green-2",
  "CHÍNH HÃNG": "bg-green text-white",
  "CALTEX": "bg-red-700 text-white",
};

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/product/${p.slug}`}
      className="bg-white rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 block border border-gray-100 group">
      <div className="relative bg-gray-50 h-36 flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={getProductImage(p.brandKey)} alt={p.brand}
          className="h-full w-full object-contain p-1 group-hover:scale-105 transition-transform duration-300" />
        {p.badge && (
          <span className={`absolute top-2 left-2 text-[10px] font-extrabold px-2 py-0.5 rounded z-10 ${BADGE_STYLE[p.badge] ?? "bg-gray-200 text-gray-700"}`}>
            {p.badge}
          </span>
        )}
      </div>
      <div className="p-3">
        <div className="text-[10px] font-bold text-green uppercase tracking-wide mb-0.5">{p.brand}</div>
        <div className="font-bold text-sm leading-snug line-clamp-2 mb-1 min-h-[2.5rem]">{p.name}</div>
        <div className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed mb-3 min-h-[2rem]">{p.spec}</div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-red-500">Liên hệ</span>
          <span className="bg-green text-white text-[11px] font-bold px-3 py-1 rounded-md group-hover:bg-green-2 transition">Chi Tiết →</span>
        </div>
      </div>
    </Link>
  );
}
