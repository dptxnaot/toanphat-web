import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = { title:"Liên Hệ", description:"Liên hệ Toàn Phát Lubricant. Hotline: 0911.472.286." };
export default function LienHePage() {
  return (
    <main className="px-4 md:px-7 py-10 max-w-5xl mx-auto">
      <div className="text-center mb-10"><span className="section-label">Liên Hệ</span><h1 className="text-3xl font-black">Liên Hệ <span className="text-green">Toàn Phát</span></h1><p className="text-gray-500 text-sm mt-2">Chúng tôi sẵn sàng tư vấn và báo giá trong thời gian sớm nhất.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="space-y-4 text-sm text-gray-600 mb-6">
            {[["🏢","Công ty","Công ty TNHH SX TM Dầu Nhớt Toàn Phát"],["📍","Văn phòng","689/25 Hương Lộ 2, Phường Bình Trị Đông, TP.HCM"],["📞","Hotline",<><a href="tel:0911472286" className="text-green font-semibold hover:underline">0911.472.286</a> – <a href="tel:0913391453" className="text-green font-semibold hover:underline">0913.391.453</a></>],["📧","Email",<a href="mailto:daunhottoanphat@gmail.com" className="text-green font-semibold hover:underline">daunhottoanphat@gmail.com</a>],["💬","Zalo",<a href="https://zalo.me/0911472286" target="_blank" rel="noreferrer" className="text-green font-semibold hover:underline">zalo.me/0911472286</a>],["📘","Facebook",<a href="https://www.facebook.com/daunhottoanphat/" target="_blank" rel="noreferrer" className="text-green font-semibold hover:underline">facebook.com/daunhottoanphat</a>],["🕐","Giờ làm việc","Thứ 2 – Thứ 7: 7:00 – 18:00"]].map(([ic,lb,val])=>(
              <div key={lb as string} className="flex items-start gap-3"><span className="text-xl">{ic}</span><div><div className="font-bold text-gray-800 mb-0.5">{lb}</div><div>{val}</div></div></div>
            ))}
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 h-56"><iframe title="Bản đồ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5857745781263!2d106.60606177576061!3d10.766372789381812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d004b8af68f%3A0x5706d77a912d38bb!2zQ8O0bmcgVHkgVE5ISCBTWCBUTSBE4bqndSBOaOG7m3QgVG_DoG4gUGjDoXQ!5e0!3m2!1svi!2s!4v1786216242542!5m2!1svi!2s" width="100%" height="100%" style={{border:0}} loading="lazy" allowFullScreen/></div>
        </div>
        <ContactForm/>
      </div>
    </main>
  );
}
