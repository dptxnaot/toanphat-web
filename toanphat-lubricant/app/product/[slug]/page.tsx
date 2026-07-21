import productsData from "@/data/products.json";
import { Product } from "@/components/ProductCard";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { getProductImage, getProductXoImage } from "@/lib/productImage";
import ProductTabs from "@/components/ProductTabs";
import type { Metadata } from "next";
import { Phone } from "lucide-react";

const products = productsData as Product[];

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    description: `${p.name} – ${p.spec}. Phân phối chính hãng bởi Toàn Phát. Hotline: 0911.472.286.`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const specs = product.spec.split("|").map((s) => s.trim());
  const relatedBrand = products
    .filter((p) => p.brandKey === product.brandKey && p.slug !== product.slug)
    .slice(0, 4);
  const relatedCat = products
    .filter((p) => p.catKey === product.catKey && p.slug !== product.slug && p.brandKey !== product.brandKey)
    .slice(0, 4);

  const phuyImg = getProductImage(product.brandKey);
  const xoImg = getProductXoImage(product.brandKey);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.spec,
    brand: { "@type": "Brand", name: product.brand },
    offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "VND" },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { position: 1, name: "Trang chủ", item: "https://toanphat-web.vercel.app" },
      { position: 2, name: "Sản phẩm", item: "https://toanphat-web.vercel.app/products" },
      { position: 3, name: product.name },
    ],
  };

  return (
    <main className="px-4 md:px-7 py-10 max-w-6xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Breadcrumb */}
      <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1 flex-wrap">
        <Link href="/" className="hover:text-green">Trang chủ</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-green">Sản phẩm</Link>
        <span>/</span>
        <span className="text-green font-semibold truncate">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ẢNH SẢN PHẨM */}
        <div className="space-y-3">
          {xoImg ? (
            /* Có cả phuy + xô → hiện 2 ảnh cạnh nhau */
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center h-64">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={phuyImg}
                  alt={`${product.name} – Phuy 200L`}
                  className="w-full h-full object-contain p-3"
                />
              </div>
              <div className="bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center h-64">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={xoImg}
                  alt={`${product.name} – Xô 18L`}
                  className="w-full h-full object-contain p-3"
                />
              </div>
              {/* Label bên dưới */}
              <div className="text-center text-xs font-semibold text-gray-500">📦 Phuy 200L</div>
              <div className="text-center text-xs font-semibold text-gray-500">🪣 Xô 18L</div>
            </div>
          ) : (
            /* Chỉ có 1 ảnh phuy */
            <div className="bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center h-80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={phuyImg}
                alt={product.name}
                className="w-full h-full object-contain p-4"
              />
            </div>
          )}
        </div>

        {/* THÔNG TIN */}
        <div>
          <div className="text-xs font-bold text-green uppercase tracking-wide mb-1">
            {product.brand}
          </div>
          <h1 className="text-2xl font-black mb-3 leading-snug">{product.name}</h1>
          {product.badge && (
            <span className="inline-block bg-amber text-green-2 text-[11px] font-extrabold px-3 py-1 rounded mb-4">
              {product.badge}
            </span>
          )}

          <table className="w-full text-sm mb-5">
            <tbody>
              {specs.map((s, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 text-gray-500 pr-4 w-32">Thông số {i + 1}</td>
                  <td className="py-2 font-semibold">{s}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-green-4 rounded-xl p-4 mb-5">
            <div className="text-xs text-green font-bold uppercase tracking-wide mb-1">Giá bán</div>
            <div className="text-xl font-black text-green-2">Liên hệ báo giá</div>
            <div className="text-xs text-gray-500 mt-1">Ưu đãi cho đại lý và số lượng lớn</div>
          </div>

          <div className="flex gap-3">
            <a href="tel:0911472286"
              className="btn-primary !bg-green !text-white hover:!bg-green-2 flex-1 justify-center">
              <Phone size={15} /> Gọi Báo Giá
            </a>
            <a href="https://zalo.me/0911472286" target="_blank" rel="noreferrer"
              className="btn-outline !text-green !border-green hover:!bg-green hover:!text-white flex-1 justify-center">
              Zalo
            </a>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12">
        <ProductTabs product={product} specs={specs} />
      </div>

      {/* Form */}
      <div className="mt-10">
        <ContactForm productName={product.name} />
      </div>

      {/* Sản phẩm liên quan cùng thương hiệu */}
      {relatedBrand.length > 0 && (
        <div className="mt-14">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-black">Cùng <span className="text-green">{product.brand}</span></h2>
            <Link href={`/products?brand=${product.brandKey}`} className="text-xs font-bold text-green hover:underline">Xem tất cả →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {relatedBrand.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        </div>
      )}

      {/* Sản phẩm liên quan cùng danh mục */}
      {relatedCat.length > 0 && (
        <div className="mt-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-black">Cùng <span className="text-green">Công Dụng</span></h2>
            <Link href={`/products?cat=${product.catKey}`} className="text-xs font-bold text-green hover:underline">Xem tất cả →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {relatedCat.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        </div>
      )}
    </main>
  );
}
