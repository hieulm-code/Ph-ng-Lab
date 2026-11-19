import React from 'react';

interface NavbarProps {
  onOpenPlayground: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlayground }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-[#60C3AC]/40 bg-[#FFFFFF]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-3.5">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-extrabold tracking-tight text-[#0C2B27] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#60C3AC]"
        >
          CodeKitten Lab
        </a>

        {/* Zone 2: 4 concise single-line internal navigation links */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#1E4741]"
        >
          <a
            href="#gioi-thieu-lam-game"
            className="hover:text-[#0C2B27] hover:underline decoration-[#60C3AC] decoration-2 underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Làm game 15 phút
          </a>
          <a
            href="#tu-duy-cot-loi"
            className="hover:text-[#0C2B27] hover:underline decoration-[#60C3AC] decoration-2 underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Tư duy cốt lõi
          </a>
          <a
            href="#thu-vien-du-an"
            className="hover:text-[#0C2B27] hover:underline decoration-[#60C3AC] decoration-2 underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Kho 48 dự án
          </a>
          <a
            href="#thuc-hanh-doi-thuc"
            className="hover:text-[#0C2B27] hover:underline decoration-[#60C3AC] decoration-2 underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Thực hành &amp; FAQ
          </a>
        </nav>

        {/* Zone 3: 1 Primary CTA in Downey Green */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenPlayground}
            className="rounded-lg bg-[#60C3AC] px-4 py-2 text-xs font-bold text-[#0C2B27] transition-colors duration-150 hover:bg-[#FFF34D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C2B27] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Vào phòng thực hành
          </button>
        </div>
      </div>
    </header>
  );
};
