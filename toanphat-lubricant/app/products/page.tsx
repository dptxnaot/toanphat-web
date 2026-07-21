import { Suspense } from "react";
import ProductsClient from "./ProductsClient";
export default function ProductsPage() {
  return <Suspense fallback={<div className="px-7 py-20 text-center text-gray-400">Đang tải sản phẩm...</div>}><ProductsClient/></Suspense>;
}
