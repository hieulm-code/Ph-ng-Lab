import React from 'react';
import { ArrowDown, ArrowRight, Play } from 'lucide-react';
import { SunburstBackdrop } from './SunburstBackdrop';

interface HeroSectionProps {
  onOpenPlayground: () => void;
  totalProjects: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPlayground,
  totalProjects,
}) => {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-4 border-[#60C3AC]"
    >
      {/* Rotating Sunburst Background */}
      <SunburstBackdrop tone="hero" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Editorial Column */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="inline-flex w-fit items-center rounded-md bg-[#60C3AC] px-3 py-1 text-[11px] font-bold tracking-wider text-[#0C2B27] uppercase sm:text-xs whitespace-nowrap">
              Phòng Lập trình - AI · CodeKitten Lab
            </p>

            <h1
              className="mt-4 font-display font-extrabold tracking-tight text-[#0C2B27] text-balance"
              style={{ fontSize: 'clamp(1.85rem, 3.25vw, 2.95rem)', lineHeight: 1.14 }}
            >
              PHÒNG LẬP TRÌNH - AI: TỪ Ý TƯỞNG ĐẾN TỰA GAME ĐẦU TAY
            </h1>

            <h2 className="mt-5 max-w-[540px] text-base leading-relaxed font-medium text-[#163D38] text-pretty sm:text-lg">
              Với thao tác kéo thả trực quan trên nền tảng CodeKitten, học sinh từ Khối 1
              đến Khối 9 tự tay thiết kế game, phim hoạt hình và dạy máy tính nhận diện
              hình ảnh, giọng nói ngay tại nhà.
            </h2>

            {/* Key Tags: Clean unboxed typography linking to internal sections */}
            <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-sm font-bold text-[#0C2B27]">
              <a
                href="#tu-duy-cot-loi"
                className="underline decoration-[#60C3AC] decoration-2 underline-offset-4 hover:text-[#156A5C] whitespace-nowrap shrink-0"
              >
                Kéo thả lệnh
              </a>
              <span aria-hidden="true" className="text-[#2E6B61]">
                |
              </span>
              <a
                href="#thu-vien-du-an"
                className="underline decoration-[#60C3AC] decoration-2 underline-offset-4 hover:text-[#156A5C] whitespace-nowrap shrink-0"
              >
                Làm game
              </a>
              <span aria-hidden="true" className="text-[#2E6B61]">
                |
              </span>
              <a
                href="#thu-vien-du-an"
                className="underline decoration-[#60C3AC] decoration-2 underline-offset-4 hover:text-[#156A5C] whitespace-nowrap shrink-0"
              >
                Dự án AI
              </a>
              <span aria-hidden="true" className="text-[#2E6B61]">
                |
              </span>
              <a
                href="#bo-loc-du-an"
                className="underline decoration-[#60C3AC] decoration-2 underline-offset-4 hover:text-[#156A5C] whitespace-nowrap shrink-0"
              >
                Bám sát SGK Kết nối tri thức
              </a>
            </div>

            {/* Primary CTA (Downey Green) + Secondary internal anchor */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenPlayground}
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-xl border-2 border-[#0C2B27] bg-[#60C3AC] px-6 py-3 text-sm font-extrabold text-[#0C2B27] shadow-[0_4px_0_#0C2B27] transition-all duration-150 hover:bg-[#FFF34D] active:translate-y-[2px] active:shadow-[0_2px_0_#0C2B27] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C2B27] cursor-pointer whitespace-nowrap shrink-0"
              >
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                <span>Trải nghiệm CodeKitten ngay</span>
              </button>

              <a
                href="#bo-loc-du-an"
                className="inline-flex min-h-[46px] items-center gap-1.5 rounded-xl bg-[#FFFFFF]/90 px-4 py-2.5 text-sm font-bold text-[#0C2B27] border border-[#60C3AC]/60 hover:bg-[#FFFFFF] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Khám phá {totalProjects} dự án mẫu</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Transparent Cutout Illustration (Codie, Desie & CodeKitten) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <img
              src="/assets/aistudio/2091a77d-3d6d-4924-93b8-933cea64206c_976a3a21.png"
              alt="Nhân vật CodeKitten và học sinh cùng lắp ghép các khối lệnh kéo thả nhiều màu sắc"
              referrerPolicy="no-referrer"
              className="animate-character-float h-auto max-h-[430px] w-full max-w-[540px] object-contain drop-shadow-[0_20px_28px_rgba(12,43,39,0.18)] transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Full-Width 4-Column Proof Strip linking directly to internal sections */}
        <div className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-[#60C3AC]/60 bg-[#FFFFFF]/92 p-5 backdrop-blur-xs sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="#tu-duy-cot-loi"
            className="group flex flex-col justify-between rounded-xl p-2.5 transition-colors hover:bg-[#F2FBF9]"
          >
            <div className="flex items-center justify-between gap-2 font-display text-xl font-extrabold text-[#0C2B27] tabular-nums xl:text-2xl whitespace-nowrap">
              <span>5 Khái niệm</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#17685B] opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-[#2D5952] text-pretty">
              Sự kiện, Vòng lặp, Điều kiện, Biến số và Nhận diện AI
            </p>
          </a>

          <a
            href="#bo-loc-du-an"
            className="group flex flex-col justify-between rounded-xl p-2.5 transition-colors hover:bg-[#F2FBF9]"
          >
            <div className="flex items-center justify-between gap-2 font-display text-xl font-extrabold text-[#0C2B27] tabular-nums xl:text-2xl whitespace-nowrap">
              <span>{totalProjects} Dự án mẫu</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#17685B] opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-[#2D5952] text-pretty">
              Lộ trình Khối 1–9 bám sát SGK Tin học Kết nối tri thức
            </p>
          </a>

          <a
            href="#thu-vien-du-an"
            className="group flex flex-col justify-between rounded-xl p-2.5 transition-colors hover:bg-[#F2FBF9]"
          >
            <div className="flex items-center justify-between gap-2 font-display text-xl font-extrabold text-[#0C2B27] tabular-nums xl:text-2xl whitespace-nowrap">
              <span>4 Chủ đề</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#17685B] opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-[#2D5952] text-pretty">
              Văn hóa Việt Nam, Game 2D, Thuật toán &amp; Tích hợp AI
            </p>
          </a>

          <a
            href="#thuc-hanh-doi-thuc"
            className="group flex flex-col justify-between rounded-xl p-2.5 transition-colors hover:bg-[#F2FBF9]"
          >
            <div className="flex items-center justify-between gap-2 font-display text-xl font-extrabold text-[#0C2B27] tabular-nums xl:text-2xl whitespace-nowrap">
              <span>3 Cấp độ Lab</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#17685B] opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-[#2D5952] text-pretty">
              Từ Lab ảo ra vật liệu đời thường, bộ kit &amp; Portfolio
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
