import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
const ARTICLES=[
  {slug:"khi-nao-can-thay-dau-nhot",title:"Khi Nào Cần Thay Dầu Nhớt?",cat:"Bảo Dưỡng Xe",date:"15/06/2025",readTime:"4 phút",
    content:[{type:"intro",text:"Dầu nhớt bẩn là nguyên nhân hàng đầu gây hỏng động cơ sớm. Thay dầu đúng thời điểm kéo dài tuổi thọ và tiết kiệm chi phí sửa chữa."},{type:"h2",text:"1. Dựa theo số km hoặc thời gian"},{type:"text",text:"Dầu khoáng: 5.000–7.000 km. Bán tổng hợp: 7.000–10.000 km. Tổng hợp: 10.000–15.000 km."},{type:"h2",text:"2. Màu sắc dầu"},{type:"text",text:"Dầu mới màu vàng trong. Chuyển đen sì là dấu hiệu cần thay ngay."},{type:"h2",text:"3. Mức dầu thấp"},{type:"text",text:"Thường xuyên phải bổ sung → xe có thể bị rò rỉ hoặc hao dầu."},{type:"cta",text:"Liên hệ Toàn Phát để được tư vấn loại dầu phù hợp."}]},
  {slug:"dau-khoang-va-dau-tong-hop",title:"Dầu Khoáng Và Dầu Tổng Hợp",cat:"Kiến Thức",date:"01/06/2025",readTime:"5 phút",
    content:[{type:"intro",text:"Khi mua dầu nhớt, bạn thường gặp hai loại chính: dầu khoáng và dầu tổng hợp."},{type:"h2",text:"Dầu khoáng"},{type:"text",text:"Chiết xuất từ dầu thô. Giá rẻ, phổ biến, phù hợp xe cũ. Thay sau 5.000–7.000 km."},{type:"h2",text:"Dầu tổng hợp"},{type:"text",text:"Tổng hợp hóa học, hiệu suất cao hơn. Tuổi thọ 10.000–15.000 km. Giá cao hơn 2–3 lần."},{type:"cta",text:"Không chắc nên dùng loại nào? Gọi kỹ thuật viên Toàn Phát tư vấn miễn phí."}]},
  {slug:"chon-dau-thuy-luc-cho-may-cong-nghiep",title:"Chọn Dầu Thủy Lực Máy Công Nghiệp",cat:"Công Nghiệp",date:"20/05/2025",readTime:"6 phút",
    content:[{type:"intro",text:"Chọn sai dầu thủy lực có thể gây hỏng bơm, van điều khiển và xy lanh — chi phí hàng chục triệu."},{type:"h2",text:"Xác định độ nhớt (ISO VG)"},{type:"text",text:"VG 32: áp lực thấp. VG 46: phổ biến nhất. VG 68: áp lực cao. VG 100+: máy lớn."},{type:"h2",text:"HLP (có kẽm) vs HM (không kẽm)"},{type:"text",text:"HLP: phổ biến cho bơm pittong và bánh răng. HM: cho servo valve nhạy cảm với kẽm."},{type:"cta",text:"Toàn Phát phân phối đầy đủ dầu thủy lực Saigon Petro, Singtec, AP Oil và Caltex."}]},
  {slug:"tai-sao-chon-saigon-petro",title:"Tại Sao Chọn Dầu Nhớt Saigon Petro",cat:"Thương Hiệu",date:"10/05/2025",readTime:"3 phút",
    content:[{type:"intro",text:"Saigon Petro (SP) thuộc PV Oil — một trong những nhà sản xuất dầu nhớt lớn nhất trong nước."},{type:"h2",text:"Tiêu chuẩn quốc tế"},{type:"text",text:"Đạt API, ISO và DIN. Ổn định giữa các lô sản xuất."},{type:"h2",text:"Giá cạnh tranh"},{type:"text",text:"Thấp hơn nhập khẩu cùng phân khúc 20–30%, đảm bảo chất lượng tương đương."},{type:"cta",text:"Toàn Phát là đại lý phân phối chính hãng Saigon Petro. Liên hệ ngay để được báo giá tốt nhất."}]},
  {slug:"dau-nhot-cho-xe-tai-diesel",title:"Dầu Nhớt Xe Tải Diesel",cat:"Xe Tải",date:"25/04/2025",readTime:"5 phút",
    content:[{type:"intro",text:"Động cơ diesel xe tải hoạt động tải nặng, nhiệt độ cao. Chọn đúng dầu là yếu tố quyết định tuổi thọ động cơ."},{type:"h2",text:"Tiêu chuẩn API"},{type:"text",text:"CF-4: xe cũ. CI-4/CI-4 Plus: xe turbo Euro 3–4. CK-4: xe mới Euro 5–6."},{type:"h2",text:"Độ nhớt SAE"},{type:"text",text:"15W-40: phổ biến nhất VN. 20W-50: xe nặng, khí hậu nóng. 10W-30: xe mới, tiết kiệm nhiên liệu."},{type:"cta",text:"Cần tư vấn dầu nhớt cho đội xe tải? Gọi ngay 0911.472.286."}]},
  {slug:"bao-quan-dau-nhot-dung-cach",title:"Bảo Quản Dầu Nhớt Đúng Cách",cat:"Kiến Thức",date:"15/04/2025",readTime:"4 phút",
    content:[{type:"intro",text:"Nhiều đơn vị mua số lượng lớn nhưng không biết bảo quản đúng, khiến dầu bị oxy hóa trước khi dùng."},{type:"h2",text:"Nơi bảo quản"},{type:"text",text:"Nơi khô ráo, thoáng mát, tránh ánh nắng. Nhiệt độ lý tưởng: 10–40°C."},{type:"h2",text:"Vị trí thùng phuy"},{type:"text",text:"Đặt nằm ngang để tránh nước thấm vào qua ron. Đóng nắp kín sau khi lấy dầu."},{type:"cta",text:"Toàn Phát tư vấn miễn phí về lưu trữ và quản lý dầu nhớt cho doanh nghiệp."}]},
];
export async function generateStaticParams() { return ARTICLES.map(a=>({slug:a.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> {
  const {slug}=await params; const a=ARTICLES.find(x=>x.slug===slug);
  if(!a) return {};
  return {title:a.title,description:a.content.find(c=>c.type==="intro")?.text?.slice(0,160)};
}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const a=ARTICLES.find(x=>x.slug===slug);
  if(!a) return notFound();
  const others=ARTICLES.filter(x=>x.slug!==slug).slice(0,3);
  return (
    <main className="px-4 md:px-7 py-10 max-w-4xl mx-auto">
      <nav className="text-xs text-gray-500 mb-6"><Link href="/" className="hover:text-green">Trang chủ</Link>{" / "}<Link href="/tin-tuc" className="hover:text-green">Tin Tức</Link>{" / "}<span className="text-green font-semibold">{a.title}</span></nav>
      <article>
        <div className="mb-4 flex items-center gap-2 flex-wrap"><span className="bg-green-4 text-green text-[11px] font-bold px-2 py-0.5 rounded">{a.cat}</span><span className="text-xs text-gray-400">{a.date} · {a.readTime}</span></div>
        <h1 className="text-2xl md:text-3xl font-black leading-snug mb-6">{a.title}</h1>
        <div>
          {a.content.map((b,i)=>{
            if(b.type==="intro") return <p key={i} className="text-gray-600 leading-relaxed mb-4 text-base border-l-4 border-green pl-4 bg-green-4 py-3 pr-3 rounded-r-lg">{b.text}</p>;
            if(b.type==="h2") return <h2 key={i} className="text-lg font-black mt-6 mb-2">{b.text}</h2>;
            if(b.type==="text") return <p key={i} className="text-gray-600 leading-relaxed mb-3 text-sm">{b.text}</p>;
            if(b.type==="cta") return <div key={i} className="mt-8 bg-green-4 border border-green/20 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><p className="text-sm font-semibold text-green-2">{b.text}</p><a href="tel:0911472286" className="btn-primary !bg-green !text-white hover:!bg-green-2 whitespace-nowrap flex-shrink-0"><Phone size={15}/> Gọi Ngay</a></div>;
            return null;
          })}
        </div>
      </article>
      {others.length>0&&<div className="mt-16 border-t border-gray-100 pt-10"><h2 className="text-lg font-black mb-5">Bài Viết <span className="text-green">Liên Quan</span></h2><div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{others.map(x=><Link key={x.slug} href={`/tin-tuc/${x.slug}`} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-green transition group"><div className="text-[10px] font-bold text-green mb-1">{x.cat}</div><div className="font-bold text-sm leading-snug group-hover:text-green transition line-clamp-2">{x.title}</div><div className="text-xs text-gray-400 mt-2">{x.readTime}</div></Link>)}</div></div>}
    </main>
  );
}
