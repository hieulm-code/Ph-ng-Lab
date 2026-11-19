import React from 'react';
import { BookOpen, RotateCcw, Search } from 'lucide-react';
import { GRADE_ROADMAP, type ProjectLevel } from '../data/projects';

interface ProjectFilterSectionProps {
  selectedGrade: number | 'all';
  selectedLevel: ProjectLevel | 'all';
  searchQuery: string;
  filteredCount: number;
  totalCount: number;
  isLoading: boolean;
  gradeCounts: Record<number, number>;
  onGradeChange: (grade: number | 'all') => void;
  onLevelChange: (level: ProjectLevel | 'all') => void;
  onSearchChange: (q: string) => void;
  onResetFilters: () => void;
  onQuickSelectRoadmap: (grade: number | 'all', level?: ProjectLevel) => void;
}

const LEVELS: Array<{ value: ProjectLevel | 'all'; label: string; symbol?: string }> = [
  { value: 'all', label: 'Tất cả cấp độ' },
  { value: 'Cơ bản', label: 'Cơ bản', symbol: '●' },
  { value: 'Trung bình', label: 'Trung bình', symbol: '◆' },
  { value: 'Nâng cao', label: 'Nâng cao', symbol: '▲' },
];

export const ProjectFilterSection: React.FC<ProjectFilterSectionProps> = ({
  selectedGrade,
  selectedLevel,
  searchQuery,
  filteredCount,
  totalCount,
  isLoading,
  gradeCounts,
  onGradeChange,
  onLevelChange,
  onSearchChange,
  onResetFilters,
  onQuickSelectRoadmap,
}) => {
  const hasActiveFilter =
    selectedGrade !== 'all' || selectedLevel !== 'all' || searchQuery.trim().length > 0;

  return (
    <section id="bo-loc-du-an" className="border-b-4 border-[#60C3AC] bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        {/* Roadmap Ribbon: Grade 1 - 9 aligned with SGK Kết nối tri thức */}
        <div className="border-b border-[#D9EFEA] pb-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-[#17685B] uppercase">
                <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Lộ trình Khối 1 – Khối 9 · SGK Kết nối tri thức</span>
              </p>
              <h2 className="mt-1.5 font-display text-2xl font-extrabold tracking-tight text-[#0C2B27] text-balance sm:text-[28px]">
                Kho tàng 48 Dự án mẫu CodeKitten Lab
              </h2>
            </div>

            <a
              href="#thu-vien-du-an"
              className="text-xs font-bold text-[#0F766E] hover:underline whitespace-nowrap shrink-0"
            >
              Xem thư viện theo 4 chủ đề bên dưới ↓
            </a>
          </div>

          {/* Interactive Grade Roadmap Cards linking directly into filtered library */}
          <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {GRADE_ROADMAP.map((item) => {
              const isActive =
                selectedGrade === item.gradeValue &&
                (!item.levelHint || selectedLevel === item.levelHint);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onQuickSelectRoadmap(item.gradeValue, item.levelHint)}
                  className={`flex h-full flex-col justify-between rounded-xl border p-4 text-left transition-all cursor-pointer ${
                    isActive
                      ? 'border-[#0C2B27] bg-[#FFF8CC] shadow-[0_3px_0_#0C2B27]'
                      : 'border-[#CFE9E3] bg-[#F7FCFB] hover:border-[#60C3AC] hover:bg-[#FFFFFF]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-sm font-extrabold text-[#0C2B27] whitespace-nowrap">
                        {item.label}
                      </span>
                      <span className="rounded bg-[#E6F7F3] px-2 py-0.5 text-[11px] font-bold text-[#17685B] tabular-nums whitespace-nowrap shrink-0">
                        {item.countLabel}
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 min-h-[2.6em] text-xs leading-relaxed text-[#2D5952] text-pretty">
                      {item.skillsSummary}
                    </p>
                  </div>
                  <p className="mt-2.5 truncate border-t border-[#E0F2EE] pt-2 text-[11px] font-semibold text-[#0F766E]">
                    Tiêu biểu: {item.highlightTitles.join(', ')}
                  </p>
                </button>
              );
            })}

            <button
              type="button"
              onClick={onResetFilters}
              className="flex h-full flex-col justify-between rounded-xl border border-dashed border-[#60C3AC] bg-[#ECFAF7] p-4 text-left hover:bg-[#FFF34D]/50 transition-colors cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-sm font-extrabold text-[#0C2B27] whitespace-nowrap">
                    Xem toàn bộ
                  </span>
                  <span className="rounded bg-[#FFF34D] px-2 py-0.5 text-[11px] font-bold text-[#0C2B27] tabular-nums whitespace-nowrap shrink-0">
                    48 dự án
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 min-h-[2.6em] text-xs leading-relaxed text-[#2D5952] text-pretty">
                  Hiển thị đầy đủ 4 chủ đề tự động lướt từ Nhập môn đến Khối 9.
                </p>
              </div>
              <p className="mt-2.5 truncate border-t border-[#CBEAE2] pt-2 text-[11px] font-bold text-[#0F766E]">
                Khám phá tất cả chủ đề →
              </p>
            </button>
          </div>
        </div>

        {/* Smart AJAX Filter Bar */}
        <div className="pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="font-display text-lg font-extrabold text-[#0C2B27] text-balance">
                Bộ lọc thông minh theo Khối lớp &amp; Cấp độ
              </h3>
              <p className="mt-1 text-xs text-[#2D5952] text-pretty">
                Chọn khối lớp hoặc từ khóa kỹ năng để lọc nhanh các dự án ngay trên trang.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <span className="rounded-lg bg-[#FFF34D] px-3 py-1.5 text-xs font-bold text-[#0C2B27] tabular-nums">
                {isLoading
                  ? 'Đang tải dự án...'
                  : `Hiển thị ${filteredCount} / ${totalCount} dự án`}
              </span>
              {hasActiveFilter && (
                <button
                  type="button"
                  onClick={onResetFilters}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17685B] hover:underline cursor-pointer whitespace-nowrap shrink-0"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Đặt lại bộ lọc</span>
                </button>
              )}
            </div>
          </div>

          {/* Filter Row 1: Grade 1 - 9 */}
          <div className="mt-5">
            <label className="block text-xs font-bold text-[#1E4741] mb-2">
              Lọc theo Khối Lớp
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => onGradeChange('all')}
                className={`min-h-[40px] rounded-lg border px-3.5 py-2 text-xs font-bold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedGrade === 'all'
                    ? 'border-[#0C2B27] bg-[#60C3AC] text-[#0C2B27]'
                    : 'border-[#CFE9E3] bg-[#FFFFFF] text-[#1E4741] hover:border-[#60C3AC] hover:bg-[#F2FBF9]'
                }`}
              >
                Tất cả khối
              </button>

              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((grade) => {
                const isSelected = selectedGrade === grade;
                const count = gradeCounts[grade];
                return (
                  <button
                    key={grade}
                    type="button"
                    onClick={() => onGradeChange(grade)}
                    className={`min-h-[40px] rounded-lg border px-3.5 py-2 text-xs font-bold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
                      isSelected
                        ? 'border-[#0C2B27] bg-[#60C3AC] text-[#0C2B27]'
                        : 'border-[#CFE9E3] bg-[#FFFFFF] text-[#1E4741] hover:border-[#60C3AC] hover:bg-[#F2FBF9]'
                    }`}
                  >
                    Khối {grade}
                    {typeof count === 'number' ? (
                      <span
                        className={`ml-1.5 text-[11px] ${
                          isSelected ? 'text-[#0C2B27]/80' : 'text-[#4F7B73]'
                        }`}
                      >
                        ({count})
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filter Row 2: Level & Search */}
          <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <label className="block text-xs font-bold text-[#1E4741] mb-2">
                Lọc theo Cấp độ
              </label>
              <div className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-[#CFE9E3] bg-[#F2FBF9] p-1">
                {LEVELS.map((lvl) => {
                  const isActive = selectedLevel === lvl.value;
                  return (
                    <button
                      key={lvl.value}
                      type="button"
                      onClick={() => onLevelChange(lvl.value)}
                      className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-bold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#FFF34D] text-[#0C2B27] shadow-xs'
                          : 'text-[#2D5952] hover:bg-[#FFFFFF] hover:text-[#0C2B27]'
                      }`}
                    >
                      {lvl.symbol ? (
                        <span
                          className={`mr-1.5 ${
                            lvl.value === 'Cơ bản'
                              ? 'text-[#059669]'
                              : lvl.value === 'Trung bình'
                              ? 'text-[#D97706]'
                              : 'text-[#4338CA]'
                          }`}
                          aria-hidden="true"
                        >
                          {lvl.symbol}
                        </span>
                      ) : null}
                      {lvl.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-full lg:max-w-xs">
              <label
                htmlFor="project-search"
                className="block text-xs font-bold text-[#1E4741] mb-2"
              >
                Tìm nhanh theo tên hoặc kỹ năng
              </label>
              <div className="relative">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#4F7B73]"
                  aria-hidden="true"
                />
                <input
                  id="project-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="VD: Hà Nội, nhị phân, tọa độ, AI..."
                  className="min-h-[42px] w-full rounded-lg border border-[#CFE9E3] bg-[#F7FCFB] py-2 pr-3 pl-9 text-sm text-[#0C2B27] placeholder:text-[#668E87] focus:border-[#60C3AC] focus:bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
