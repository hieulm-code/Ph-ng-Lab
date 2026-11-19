import React, { useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { THEMES, type Project, type ThemeId, type ThemeMeta } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectLibrarySectionProps {
  projects: Project[];
  activeTheme: ThemeId | 'all';
  isFilteredByAttributes: boolean;
  isLoading: boolean;
  errorMessage: string | null;
  onThemeChange: (theme: ThemeId | 'all') => void;
  onOpenProject: (project: Project) => void;
  onResetFilters: () => void;
}

interface ThemeCarouselRowProps {
  theme: ThemeMeta;
  bandBgClass: string;
  projects: Project[];
  onOpenProject: (project: Project) => void;
  onSelectTheme: (id: ThemeId) => void;
}

const THEME_BAND_COLORS: Record<ThemeId, string> = {
  'van-hoa-dia-ly': 'bg-[#60C3AC]',
  'game-hoat-hinh': 'bg-[#FFF9D6]',
  'thuat-toan-logic': 'bg-[#FFFFFF]',
  'tich-hop-ai': 'bg-[#60C3AC]',
};

const ThemeCarouselRow: React.FC<ThemeCarouselRowProps> = ({
  theme,
  bandBgClass,
  projects,
  onOpenProject,
  onSelectTheme,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  if (projects.length === 0) return null;

  // Duplicate cards seamlessly so the marquee glides continuously without gaps
  const repeatedProjects =
    projects.length <= 4
      ? [...projects, ...projects, ...projects, ...projects]
      : [...projects, ...projects];
  const durationSeconds = Math.max(26, Math.round(projects.length * 4.2));

  return (
    <div
      className={`border-b-4 border-[#0C2B27]/12 py-10 last:border-b-0 ${bandBgClass}`}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#0C2B27]">
              <span className="rounded-md bg-[#FFF34D] px-2.5 py-0.5 border border-[#0C2B27]/15 whitespace-nowrap">
                {theme.indexLabel}
              </span>
              <span aria-hidden="true">·</span>
              <span className="whitespace-nowrap">{theme.audienceHighlight}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums whitespace-nowrap">{projects.length} dự án</span>
            </div>
            <h3 className="mt-2 font-display text-xl font-extrabold text-[#0C2B27] text-balance sm:text-2xl">
              {theme.title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm font-medium text-[#0E3933] text-pretty">
              {theme.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              aria-pressed={isPaused}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#0C2B27]/20 bg-[#FFFFFF]/90 px-3 py-2 text-xs font-bold text-[#0C2B27] hover:bg-[#FFF34D] transition-colors cursor-pointer whitespace-nowrap"
            >
              {isPaused ? (
                <>
                  <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  <span>Tiếp tục lướt</span>
                </>
              ) : (
                <>
                  <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Tạm dừng</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => onSelectTheme(theme.id)}
              className="min-h-[40px] rounded-lg border-2 border-[#0C2B27] bg-[#FFFFFF] px-3.5 py-2 text-xs font-extrabold text-[#0C2B27] hover:bg-[#FFF34D] transition-colors cursor-pointer whitespace-nowrap"
            >
              Xem tất cả {projects.length} dự án
            </button>
          </div>
        </div>
      </div>

      {/* Full-width Auto-Gliding Marquee (Pauses smoothly on hover / focus / toggle) */}
      <div className="marquee-wrapper mt-6 overflow-hidden py-1">
        <div
          className="marquee-track gap-5 px-3"
          data-paused={isPaused ? 'true' : 'false'}
          style={{ '--marquee-duration': `${durationSeconds}s` } as React.CSSProperties}
        >
          {repeatedProjects.map((project, idx) => (
            <ProjectCard
              key={`${project.id}-slide-${idx}`}
              project={project}
              onOpenProject={onOpenProject}
              className="w-[82vw] max-w-[330px] shrink-0 sm:w-[310px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectLibrarySection: React.FC<ProjectLibrarySectionProps> = ({
  projects,
  activeTheme,
  isFilteredByAttributes,
  isLoading,
  errorMessage,
  onThemeChange,
  onOpenProject,
  onResetFilters,
}) => {
  const showCarouselMode = activeTheme === 'all' && !isFilteredByAttributes;

  return (
    <section
      id="thu-vien-du-an"
      className="border-b-4 border-[#0C2B27]/15 bg-[#EAF8F4]"
    >
      {/* Top Section Header + Theme Selector Tabs on Soft Mint Ground */}
      <div className="border-b border-[#60C3AC]/40 bg-[#EAF8F4] py-10">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="inline-flex rounded-md bg-[#FFF34D] px-2.5 py-1 text-xs font-bold tracking-wide text-[#0C2B27] uppercase whitespace-nowrap">
                  Thư viện Dự án Thực chiến · Tự động trình chiếu
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-[#0C2B27] text-balance sm:text-3xl">
                  Khám phá 48 sản phẩm theo 4 Chủ đề nổi bật
                </h2>
              </div>

              <p className="text-xs font-semibold text-[#17685B] whitespace-nowrap">
                Di chuột vào thẻ để tạm dừng &amp; mở dự án
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Chủ đề dự án CodeKitten"
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTheme === 'all'}
                onClick={() => onThemeChange('all')}
                className={`min-h-[40px] rounded-lg border px-4 py-2 text-xs font-bold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTheme === 'all'
                    ? 'border-[#0C2B27] bg-[#FFF34D] text-[#0C2B27] shadow-xs'
                    : 'border-[#CFE9E3] bg-[#FFFFFF] text-[#0C2B27] hover:bg-[#FFF34D]/70'
                }`}
              >
                Tất cả 4 Chủ đề
              </button>

              {THEMES.map((theme) => {
                const isSelected = activeTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => onThemeChange(theme.id)}
                    className={`min-h-[40px] rounded-lg border px-4 py-2 text-xs font-bold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'border-[#0C2B27] bg-[#FFF34D] text-[#0C2B27] shadow-xs'
                        : 'border-[#CFE9E3] bg-[#FFFFFF] text-[#0C2B27] hover:bg-[#FFF34D]/70'
                    }`}
                  >
                    {theme.indexLabel}: {theme.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Body Area: Loading / Error / Empty / Alternating Auto-Gliding Bands / Filtered Grid */}
      {isLoading ? (
        <div className="mx-auto max-w-[1200px] px-6 py-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="h-[360px] animate-pulse rounded-2xl border border-[#0C2B27]/15 bg-[#FFFFFF] p-5"
              >
                <div className="aspect-[4/3] w-full rounded-xl bg-[#E7F5F2]" />
                <div className="mt-4 h-4 w-2/3 rounded bg-[#E7F5F2]" />
                <div className="mt-2 h-3 w-full rounded bg-[#F1FAF8]" />
              </div>
            ))}
          </div>
        </div>
      ) : errorMessage ? (
        <div className="mx-auto max-w-[1200px] px-6 py-10">
          <div className="rounded-2xl border border-[#FECACA] bg-[#FFFFFF] p-8 text-center">
            <p className="text-sm font-bold text-[#991B1B]">{errorMessage}</p>
            <button
              type="button"
              onClick={onResetFilters}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#991B1B] px-4 py-2 text-xs font-semibold text-white hover:bg-[#7F1D1D] cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Thử tải lại dữ liệu</span>
            </button>
          </div>
        </div>
      ) : projects.length === 0 ? (
        <div className="mx-auto max-w-[1200px] px-6 py-10">
          <div className="rounded-2xl border border-[#0C2B27]/15 bg-[#FFFFFF] p-10 text-center">
            <h3 className="font-display text-lg font-extrabold text-[#0C2B27]">
              Không tìm thấy dự án khớp bộ lọc hiện tại
            </h3>
            <p className="mt-2 text-sm text-[#2D5952]">
              Hãy thử chọn khối lớp khác hoặc đặt lại bộ lọc để xem toàn bộ kho dự án CodeKitten.
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="mt-5 inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#60C3AC] px-5 py-2.5 text-xs font-bold text-[#0C2B27] hover:bg-[#FFF34D] cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Xem tất cả dự án</span>
            </button>
          </div>
        </div>
      ) : showCarouselMode ? (
        /* Mode A: Alternating Color Bands with Auto-Gliding Marquee Rows */
        <div>
          {THEMES.map((theme) => {
            const themeProjects = projects.filter((p) => p.themeId === theme.id);
            return (
              <ThemeCarouselRow
                key={theme.id}
                theme={theme}
                bandBgClass={THEME_BAND_COLORS[theme.id]}
                projects={themeProjects}
                onOpenProject={onOpenProject}
                onSelectTheme={(id) => onThemeChange(id)}
              />
            );
          })}
        </div>
      ) : (
        /* Mode B: AJAX Filtered Grid */
        <div className="bg-[#60C3AC] py-10">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenProject={onOpenProject}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
