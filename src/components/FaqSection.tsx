import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  linkLabel: string;
  linkHref: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'tuoi-phu-hop',
    question: 'Con chưa biết gì về lập trình (lớp 1–3) có học được trên CodeKitten Lab không?',
    answer:
      'Hoàn toàn phù hợp. CodeKitten thiết kế 100% khối lệnh tiếng Việt kéo thả trực quan bằng màu sắc, bắt đầu từ nhóm 6 dự án Nhập môn (làm quen nhân vật, ẩn/hiện, phát thông điệp) trước khi nâng dần lên làm game và AI.',
    linkLabel: 'Xem 6 dự án Nhập môn trong Kho 48+ →',
    linkHref: '#bo-loc-du-an',
  },
  {
    id: 'thoi-luong-bai',
    question: 'Thời lượng mỗi dự án mẫu trên CodeKitten Lab kéo dài bao lâu?',
    answer:
      'Mỗi dự án mẫu được thiết kế gọn trong 35–60 phút tùy cấp độ (Cơ bản, Trung bình, Nâng cao), giúp học sinh vừa học tư duy vừa hoàn thành ngay một sản phẩm game, hoạt hình hoặc ứng dụng AI hoàn chỉnh trong một buổi học.',
    linkLabel: 'Khám phá ngay Kho 48 dự án mẫu ↑',
    linkHref: '#thu-vien-du-an',
  },
  {
    id: 'bam-sat-sgk',
    question: 'Nội dung trên CodeKitten Lab có liên quan đến môn Tin học ở trường không?',
    answer:
      'Có. Từ Khối 4 đến Khối 9, hệ thống 48 dự án mẫu bám sát chương trình Tin học bộ sách Kết nối tri thức với cuộc sống: hệ tọa độ (X,Y), góc quay hình học, 3 cấu trúc lập trình, tìm kiếm tuần tự/nhị phân, biểu diễn dữ liệu và gỡ lỗi.',
    linkLabel: 'Lọc dự án theo Khối lớp của con ↑',
    linkHref: '#bo-loc-du-an',
  },
  {
    id: 'thiet-bi',
    question: 'Phụ huynh có cần mua thêm bộ kit robot đắt tiền để học ở nhà không?',
    answer:
      'Không bắt buộc. Ở Mức 1, con học trực tiếp trên máy tính/trình duyệt và có thể kết hợp vật liệu sẵn có quanh nhà như bìa cứng, que gỗ. Nếu gia đình muốn mở rộng ở Mức 2, chỉ cần webcam/micro có sẵn của laptop là đã chạy được dự án AI Vision & Voice.',
    linkLabel: 'Tìm hiểu Mô hình 3 Cấp độ Thực hành ↑',
    linkHref: '#thuc-hanh-doi-thuc',
  },
  {
    id: 'ho-tro',
    question: 'Sau khi đăng ký tài khoản miễn phí, gia đình sẽ nhận được những gì?',
    answer:
      'Phụ huynh nhận ngay tài khoản thực hành CodeKitten Studio mở khóa bộ dự án mẫu theo khối lớp của con, kèm 1 buổi đánh giá tư duy logic và gợi ý lộ trình cá nhân hóa từ giáo viên TEKY.',
    linkLabel: 'Đăng ký nhận tài khoản miễn phí ngay ↓',
    linkHref: '#dang-ky',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('tuoi-phu-hop');

  return (
    <section
      id="faq-codekitten"
      className="border-b-4 border-[#60C3AC] bg-[#0F3D36] py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[960px] px-6">
        <div className="text-center">
          <p className="inline-flex rounded-md bg-[#FFF34D] px-3 py-1 text-xs font-bold tracking-wide text-[#0C2B27] uppercase whitespace-nowrap">
            Giải đáp dành cho Phụ huynh &amp; Học sinh
          </p>
          <h2 className="mt-2.5 font-display text-2xl font-extrabold tracking-tight text-[#FFFFFF] text-balance sm:text-3xl">
            Câu hỏi thường gặp về CodeKitten Lab
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[#D1ECE6] text-pretty">
            Những thông tin quan trọng trước khi con bắt đầu buổi thực hành lập trình – AI
            đầu tiên.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border-2 border-[#60C3AC]/40 bg-[#FFFFFF] shadow-sm"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? '' : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-sm font-extrabold text-[#0C2B27] hover:bg-[#F7FCFB] transition-colors cursor-pointer sm:text-base"
                >
                  <span className="text-pretty">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#17685B] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-[#E3F2EF] bg-[#FFFFFF] px-5 pt-3 pb-4 text-sm leading-relaxed text-[#2D5952] text-pretty">
                    <p>{item.answer}</p>
                    <a
                      href={item.linkHref}
                      className="mt-2.5 inline-block text-xs font-bold text-[#0F766E] hover:underline"
                    >
                      {item.linkLabel}
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
