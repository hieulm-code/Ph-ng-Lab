import React from 'react';
import { ArrowDownRight, Blocks, Clock, Gamepad2, Play } from 'lucide-react';

interface GameIntroSectionProps {
  onOpenFeaturedGame: () => void;
  onJumpToTheme01: () => void;
}

export const GameIntroSection: React.FC<GameIntroSectionProps> = ({
  onOpenFeaturedGame,
  onJumpToTheme01,
}) => {
  return (
    <section
      id="gioi-thieu-lam-game"
      className="border-b-4 border-[#60C3AC] bg-[#FFFFFF] py-14 lg:py-18"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Visual Poster: Tự làm game Em Yêu Việt Nam chỉ 15 phút (Continuous Motion) */}
          <div className="lg:col-span-6">
            <div className="animate-poster-float group relative overflow-hidden rounded-2xl border-2 border-[#0C2B27] bg-[#E8F7F3] shadow-[0_14px_0_#60C3AC] transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/assets/aistudio/4e8e57c9-6eca-499f-94c3-6a4fc778f896_3b797461.png"
                alt="Học sinh tự lập trình game Em Yêu Việt Nam chỉ trong 15 phút trên nền tảng CodeKitten với câu hỏi lịch sử Bình Ngô Đại Cáo và nhân vật Cua Đỏ cầm chìa khóa vàng"
                referrerPolicy="no-referrer"
                className="block aspect-square w-full object-cover"
              />
              {/* Subtle GPU-composited light sweep */}
              <div
                aria-hidden="true"
                className="animate-poster-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/55 to-transparent"
              />
            </div>
          </div>

          {/* Right Editorial Breakdown matching the visual */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="inline-flex w-fit items-center gap-1.5 rounded-md bg-[#FFF34D] px-3 py-1 text-xs font-bold tracking-wide text-[#0C2B27] uppercase whitespace-nowrap">
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Lập trình Game trên CodeKitten · Chỉ 15 phút</span>
            </p>

            <h2
              className="mt-3 font-display font-extrabold tracking-tight text-[#0C2B27] text-balance"
              style={{ fontSize: 'clamp(1.65rem, 2.75vw, 2.35rem)', lineHeight: 1.2 }}
            >
              Tự tay làm Game &ldquo;Em Yêu Việt Nam&rdquo; chỉ trong 15&nbsp;phút
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#2D5952] text-pretty sm:text-base">
              Ngay trên trình duyệt máy tính, học sinh tự xây dựng hoàn chỉnh trò chơi
              tương tác giàu bản sắc dân tộc: từ màn mở đầu{' '}
              <strong className="text-[#0C2B27]">Em Yêu Việt Nam</strong> với thuyền rồng,
              hoa sen, chim Lạc đến màn giải đố lịch sử{' '}
              <strong className="text-[#0C2B27]">Bình Ngô Đại Cáo</strong> cùng chú Cua Đỏ
              tìm chìa khóa vàng.
            </p>

            {/* 2 Concrete Highlights explaining what's on the screen */}
            <div className="mt-6 space-y-3.5">
              <div className="flex items-start gap-3.5 rounded-xl border border-[#DCECE8] bg-[#F7FCFB] p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#60C3AC] text-[#0C2B27]">
                  <Blocks className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-sm font-extrabold text-[#0C2B27] text-balance">
                    Ghép khối lệnh tiếng Việt trực quan bên trái màn hình
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#2D5952] text-pretty">
                    Kéo – thả các khối Chuyển động, Sự kiện, Điều khiển và Hiển thị phân
                    màu rõ ràng giúp trẻ hiểu ngay logic lập trình.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-xl border border-[#DCECE8] bg-[#F7FCFB] p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF34D] text-[#0C2B27]">
                  <Gamepad2 className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-sm font-extrabold text-[#0C2B27] text-balance">
                    Thiết kế màn hỏi đáp A–B–C–D &amp; bản đồ kho báu tương tác
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#2D5952] text-pretty">
                    Lồng ghép kiến thức Lịch sử – Địa lý Việt Nam vào game trắc nghiệm:
                    chọn đúng đáp án Nguyễn Trãi để mở khóa kho báu.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons linking internally & opening CodeKitten Studio */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenFeaturedGame}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border-2 border-[#0C2B27] bg-[#60C3AC] px-5 py-2.5 text-xs font-extrabold text-[#0C2B27] shadow-[0_4px_0_#0C2B27] transition-all duration-150 hover:bg-[#FFF34D] active:translate-y-[2px] active:shadow-[0_2px_0_#0C2B27] cursor-pointer whitespace-nowrap shrink-0"
              >
                <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                <span>Chạy thử game Văn hóa VN</span>
              </button>

              <button
                type="button"
                onClick={onJumpToTheme01}
                className="inline-flex min-h-[46px] items-center gap-1.5 rounded-xl border border-[#CFE9E3] bg-[#F7FCFB] px-4 py-2.5 text-xs font-bold text-[#0C2B27] hover:border-[#0C2B27] hover:bg-[#FFF8CC] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Xem Chủ đề 01: Văn hóa &amp; Địa lý VN</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
