"use client";
import { useEffect } from "react";
import Link from "next/link";
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-7 py-20">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-black mb-3">Đã xảy ra lỗi</h2>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">Có lỗi không mong muốn. Vui lòng thử lại hoặc liên hệ Toàn Phát.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button onClick={reset} className="btn-primary !bg-green !text-white hover:!bg-green-2 inline-flex">Thử lại</button>
          <Link href="/" className="btn-outline !text-green !border-green hover:!bg-green hover:!text-white inline-flex">Về Trang Chủ</Link>
        </div>
      </div>
    </main>
  );
}
