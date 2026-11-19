import React, { useState } from 'react';
import { ArrowDown, ArrowUp, FolderCheck, Layers3, Wrench } from 'lucide-react';

interface RealWorldLabSectionProps {
  onJumpToRegister: () => void;
}

const PRACTICE_LEVELS = [
  {
    id: 'muc-1',
    step: 'Mức 1',
    title: 'Vật liệu sẵn có, tiết kiệm ngay tại nhà',
    description:
      'Học sinh sử dụng các vật dụng quen thuộc quanh nhà như bìa cứng, que gỗ, băng dính, bóng nhỏ, bút màu để dựng mô hình sân khấu và tương tác cùng bài học CodeKitten.',
    outcomes: [
      'Không cần mua thêm thiết bị đắt tiền vẫn thực hành trọn vẹn',
      'Kết hợp tư duy thủ công sáng tạo với kịch bản game trên màn hình',
    ],
    image: '/assets/aistudio/Ph_ng_L_p_tr_nh_-_AI_f3852004.png',
    imageAlt: 'Không gian CodeKitten Lab 3D với Codie, Desie và các khối lệnh trực quan',
  },
  {
    id: 'muc-2',
    step: 'Mức 2',
    title: 'Tích hợp Webcam, Micro & Bộ Kit thực hành',
    description:
      'Mở rộng tính năng lập trình và AI từ màn hình máy tính ra thiết bị thật qua webcam, micro, bo mạch mở rộng hoặc bộ lắp ráp cảm biến LEGO WeDo 2.0.',
    outcomes: [
      'Biến câu lệnh kéo thả thành tín hiệu điều khiển đèn, động cơ và xe tự hành',
      'Trải nghiệm trọn vẹn mô hình AI Vision & Voice tương tác thời gian thực',
    ],
    image: '/assets/aistudio/imgi_6_real-kit_77c4f630.webp',
    imageAlt: 'Từ bài lập trình trên màn hình điều khiển xe robot và mạch đèn thực tế',
  },
  {
    id: 'muc-3',
    step: 'Mức 3',
    title: 'Lưu trữ Hồ sơ Năng lực (Digital Portfolio) & Đồng hành 1-1',
    description:
      'Mọi tựa game, phim hoạt hình và dự án AI sau khi hoàn thành đều được lưu vào Bộ sưu tập minh chứng cá nhân, giúp phụ huynh theo dõi rõ nét sự tiến bộ qua từng tuần.',
    outcomes: [
      'Lưu giữ sản phẩm cá nhân có link chia sẻ cho gia đình và thầy cô',
      'Thầy cô TEKY đánh giá định kỳ về tư duy logic, thuật toán và sáng tạo',
    ],
    image: '/assets/aistudio/2091a77d-3d6d-4924-93b8-933cea64206c_976a3a21.png',
    imageAlt: 'Codie, Desie và Mèo CodeKitten hoàn thành sản phẩm lập trình sáng tạo',
  },
];

export const RealWorldLabSection: React.FC<RealWorldLabSectionProps> = ({
  onJumpToRegister,
}) => {
  const [activeId, setActiveId] = useState<string>('muc-2');
  const activeLevel =
    PRACTICE_LEVELS.find((l) => l.id === activeId) || PRACTICE_LEVELS[0];

  return (
    <section
      id="thuc-hanh-doi-thuc"
      className="border-b-4 border-[#60C3AC] bg-[#EAF8F4] py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-4 border-b border-[#60C3AC]/40 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex w-fit rounded-md bg-[#FFF34D] px-2.5 py-1 text-xs font-bold tracking-wide text-[#0C2B27] uppercase whitespace-nowrap">
              Từ Lab Ảo ra Đời Thực · Digital Portfolio
            </p>
            <h2 className="mt-2.5 font-display text-2xl font-extrabold tracking-tight text-[#0C2B27] text-balance sm:text-3xl">
              Mô hình Thực hành 3 Cấp độ &amp; Lưu trữ Hồ sơ Năng lực
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#2D5952] text-pretty sm:text-base">
              Học sinh kiểm thử ý tưởng trên phòng Lab ảo CodeKitten trước, sau đó kết nối
              ra mô hình thật và xây dựng bộ sưu tập sản phẩm số của riêng mình.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#thu-vien-du-an"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-[#0C2B27]/20 bg-[#FFFFFF] px-3.5 py-2 text-xs font-bold text-[#0C2B27] hover:bg-[#FFF34D] transition-colors whitespace-nowrap"
            >
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Quay lại Kho 48 dự án mẫu</span>
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left 3 Interactive Level Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
            {PRACTICE_LEVELS.map((lvl, idx) => {
              const isSelected = lvl.id === activeLevel.id;
              return (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setActiveId(lvl.id)}
                  className={`flex flex-1 flex-col justify-between rounded-2xl border-2 p-4.5 text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#0C2B27] bg-[#FFF8CC] shadow-[0_4px_0_#0C2B27]'
                      : 'border-[#CFE9E3] bg-[#FFFFFF] hover:border-[#0C2B27]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#17685B] uppercase whitespace-nowrap">
                        {idx === 0 ? (
                          <Layers3 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        ) : idx === 1 ? (
                          <Wrench className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        ) : (
                          <FolderCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        )}
                        <span>{lvl.step}</span>
                      </span>
                      <span className="text-[11px] font-bold text-[#0C2B27] whitespace-nowrap">
                        {isSelected ? 'Đang xem' : 'Chọn xem →'}
                      </span>
                    </div>
                    <h3 className="mt-1.5 font-display text-base font-extrabold text-[#0C2B27] text-balance">
                      {lvl.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-[#2D5952] text-pretty">
                      {lvl.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Visual Spotlight Card */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border-2 border-[#0C2B27] bg-[#FFFFFF] p-6 shadow-[0_6px_0_#60C3AC]">
            <div>
              <div className="overflow-hidden rounded-xl border border-[#CFE9E3] bg-[#FFFFFF] aspect-[16/10] flex items-center justify-center">
                <img
                  src={activeLevel.image}
                  alt={activeLevel.imageAlt}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-contain p-2"
                />
              </div>

              <div className="mt-5">
                <span className="text-xs font-bold text-[#17685B] uppercase">
                  {activeLevel.step} · Giá trị dành cho học sinh &amp; phụ huynh
                </span>
                <h3 className="mt-1 font-display text-xl font-extrabold text-[#0C2B27] text-balance">
                  {activeLevel.title}
                </h3>

                <ul className="mt-3 space-y-2 text-sm text-[#1E4741] text-pretty">
                  {activeLevel.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0F766E]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#60C3AC]/40 pt-4">
              <a
                href="#faq-codekitten"
                className="text-xs font-bold text-[#0F766E] hover:underline"
              >
                Xem câu hỏi thường gặp của phụ huynh ↓
              </a>

              <button
                type="button"
                onClick={onJumpToRegister}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border-2 border-[#0C2B27] bg-[#60C3AC] px-4 py-2 text-xs font-extrabold text-[#0C2B27] hover:bg-[#FFF34D] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Nhận lộ trình phù hợp cho con</span>
                <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
