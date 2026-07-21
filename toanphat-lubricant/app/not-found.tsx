import Link from "next/link";
import { ArrowLeft, Search, Phone } from "lucide-react";
export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-7 py-20">
      <div className="text-center max-w-md">
        <div className="text-8xl font-black text-green/10 leading-none mb-2">404</div>
        <h1 className="text-2xl font-black mb-3">Không tìm thấy trang</h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/" className="btn-primary !bg-green !text-white hover:!bg-green-2 inline-flex"><ArrowLeft size={16}/> Về Trang Chủ</Link>
          <Link href="/products" className="btn-outline !text-green !border-green hover:!bg-green hover:!text-white inline-flex"><Search size={16}/> Xem Sản Phẩm</Link>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100"><p className="text-xs text-gray-400 mb-2">Cần hỗ trợ?</p><a href="tel:0911472286" className="inline-flex items-center gap-2 text-green font-bold text-sm"><Phone size={15}/> 0911.472.286</a></div>
      </div>
    </main>
  );
}
