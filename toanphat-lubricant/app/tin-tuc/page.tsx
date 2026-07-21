import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title:"Tin Tức & Kiến Thức Dầu Nhớt" };
const ARTICLES=[
  {slug:"khi-nao-can-thay-dau-nhot",title:"Khi Nào Cần Thay Dầu Nhớt? Dấu Hiệu Nhận Biết",excerpt:"Dầu nhớt bẩn là nguyên nhân hàng đầu gây hỏng động cơ. Tìm hiểu các dấu hiệu cần thay dầu nhớt ngay.",cat:"Bảo Dưỡng Xe",date:"15/06/2025",readTime:"4 phút"},
  {slug:"dau-khoang-va-dau-tong-hop",title:"Dầu Khoáng Và Dầu Tổng Hợp: Khác Nhau Như Thế Nào?",excerpt:"Hai loại dầu nhớt phổ biến nhất — dầu khoáng và dầu tổng hợp — ưu nhược điểm và nên chọn loại nào?",cat:"Kiến Thức",date:"01/06/2025",readTime:"5 phút"},
  {slug:"chon-dau-thuy-luc-cho-may-cong-nghiep",title:"Hướng Dẫn Chọn Dầu Thủy Lực Cho Máy Công Nghiệp",excerpt:"Chọn sai dầu thủy lực có thể gây hỏng bơm, van và xy lanh. Đây là các tiêu chí quan trọng cần nắm.",cat:"Công Nghiệp",date:"20/05/2025",readTime:"6 phút"},
  {slug:"tai-sao-chon-saigon-petro",title:"Tại Sao Dầu Nhớt Saigon Petro Được Tin Dùng Rộng Rãi?",excerpt:"Saigon Petro là thương hiệu dầu nhớt hàng đầu Việt Nam. Tìm hiểu lý do hàng triệu khách hàng tin dùng.",cat:"Thương Hiệu",date:"10/05/2025",readTime:"3 phút"},
  {slug:"dau-nhot-cho-xe-tai-diesel",title:"Dầu Nhớt Cho Xe Tải Diesel: Những Điều Cần Biết",excerpt:"Xe tải diesel có yêu cầu đặc biệt về dầu nhớt. Tìm hiểu tiêu chuẩn API, SAE và cách chọn đúng.",cat:"Xe Tải",date:"25/04/2025",readTime:"5 phút"},
  {slug:"bao-quan-dau-nhot-dung-cach",title:"Cách Bảo Quản Dầu Nhớt Đúng Cách Tránh Giảm Chất Lượng",excerpt:"Bảo quản không đúng cách làm dầu nhớt bị oxy hóa, nhiễm nước và giảm hiệu quả bôi trơn.",cat:"Kiến Thức",date:"15/04/2025",readTime:"4 phút"},
];
const CAT_COLORS:Record<string,string>={"Bảo Dưỡng Xe":"bg-blue-100 text-blue-700","Kiến Thức":"bg-green-4 text-green","Công Nghiệp":"bg-orange-100 text-orange-700","Thương Hiệu":"bg-amber/20 text-amber-700","Xe Tải":"bg-purple-100 text-purple-700"};
export default function TinTucPage() {
  return (
    <main className="px-4 md:px-7 py-10 max-w-6xl mx-auto">
      <nav className="text-xs text-gray-500 mb-6"><Link href="/" className="hover:text-green">Trang chủ</Link>{" / "}<span className="text-green font-semibold">Tin Tức</span></nav>
      <div className="text-center mb-10"><span className="section-label">Tin Tức & Kiến Thức</span><h1 className="text-3xl font-black">Cẩm Nang <span className="text-green">Dầu Nhớt</span></h1><p className="text-gray-500 text-sm mt-2">Kiến thức hữu ích về dầu nhớt từ đội ngũ kỹ thuật Toàn Phát.</p></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTICLES.map(a=>(
          <Link key={a.slug} href={`/tin-tuc/${a.slug}`} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition group block">
            <div className="h-44 bg-gradient-to-br from-green-4 to-gray-50 flex items-center justify-center"><span className="text-5xl">📰</span></div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3"><span className={`text-[10px] font-bold px-2 py-0.5 rounded ${CAT_COLORS[a.cat]??"bg-gray-100 text-gray-600"}`}>{a.cat}</span><span className="text-[11px] text-gray-400">{a.date} · {a.readTime}</span></div>
              <h2 className="font-bold text-sm leading-snug mb-2 group-hover:text-green transition line-clamp-2">{a.title}</h2>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{a.excerpt}</p>
              <div className="mt-4 text-xs font-bold text-green group-hover:translate-x-1 transition-transform inline-block">Đọc tiếp →</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-16 bg-green-4 border border-green/20 rounded-2xl p-8 text-center">
        <h2 className="font-black text-xl mb-2">Cần Tư Vấn Thêm?</h2>
        <p className="text-sm text-gray-600 mb-5">Đội ngũ kỹ thuật Toàn Phát luôn sẵn sàng giải đáp.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/tu-van" className="btn-primary !bg-green !text-white hover:!bg-green-2 inline-flex">Tư Vấn Chọn Dầu</Link>
          <a href="tel:0911472286" className="btn-outline !text-green !border-green hover:!bg-green hover:!text-white inline-flex">Gọi 0911.472.286</a>
        </div>
      </div>
    </main>
  );
}
