import React, { useState } from 'react';
import { ArrowDownRight, ArrowRight, Layers, Play } from 'lucide-react';
import {
  CORE_CONCEPTS,
  PROJECTS,
  type CoreConcept,
  type Project,
} from '../data/projects';

interface CoreConceptsSectionProps {
  onFilterBySkill: (keyword: string) => void;
  onOpenProject: (project: Project) => void;
}

export const CoreConceptsSection: React.FC<CoreConceptsSectionProps> = ({
  onFilterBySkill,
  onOpenProject,
}) => {
  const [selectedId, setSelectedId] = useState<CoreConcept['id']>('events');
  const activeConcept =
    CORE_CONCEPTS.find((c) => c.id === selectedId) || CORE_CONCEPTS[0];
  const linkedProject =
    PROJECTS.find((p) => p.id === activeConcept.sampleProjectId) || PROJECTS[0];

  return (
    <section
      id="tu-duy-cot-loi"
      className="border-b-4 border-[#60C3AC] bg-[#FFF9D6] py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-b border-[#0C2B27]/15 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex w-fit rounded-md bg-[#60C3AC] px-2.5 py-1 text-xs font-bold tracking-wide text-[#0C2B27] uppercase whitespace-nowrap">
              5 Trụ cột Tư duy Lập trình &amp; AI
            </p>
            <h2 className="mt-2.5 font-display text-2xl font-extrabold tracking-tight text-[#0C2B27] text-balance sm:text-3xl">
              Học gì tại Phòng Lập trình - AI CodeKitten Lab?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#1E4741] text-pretty sm:text-base">
              Thay vì học lý thuyết khô khan, học sinh làm chủ 5 khái niệm khoa học máy
              tính cốt lõi qua việc lắp ghép khối lệnh và chạy ngay dự án trên sân khấu
              CodeKitten.
            </p>
          </div>

          <a
            href="#bo-loc-du-an"
            className="inline-flex min-h-[42px] w-fit items-center gap-2 rounded-xl border border-[#0C2B27]/25 bg-[#FFFFFF] px-4 py-2 text-xs font-bold text-[#0C2B27] hover:bg-[#60C3AC] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Xem lộ trình theo Khối lớp</span>
            <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Interactive Split: 5 Concept Selectors Left + Live Concept Workbench Right */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left 5-concept Interactive Selector List */}
          <div
            role="tablist"
            aria-label="5 khái niệm lập trình cốt lõi"
            className="flex flex-col justify-between gap-3 lg:col-span-5"
          >
            {CORE_CONCEPTS.map((concept) => {
              const isSelected = concept.id === activeConcept.id;
              return (
                <button
                  key={concept.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(concept.id)}
                  className={`group flex items-start gap-4 rounded-2xl border-2 p-4 text-left transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'border-[#0C2B27] bg-[#FFFFFF] shadow-[0_4px_0_#60C3AC]'
                      : 'border-[#0C2B27]/12 bg-[#FFFFFF]/80 hover:border-[#0C2B27] hover:bg-[#FFFFFF]'
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold tabular-nums ${
                      isSelected
                        ? 'bg-[#0C2B27] text-[#FFF34D]'
                        : 'bg-[#E9F7F4] text-[#0C2B27]'
                    }`}
                  >
                    {concept.indexLabel}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <span className="font-display text-base font-extrabold text-[#0C2B27] whitespace-nowrap">
                        {concept.title}
                      </span>
                      <span className="text-xs font-semibold text-[#2E6B61] whitespace-nowrap">
                        / {concept.englishName}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-2 min-h-[2.6em] text-xs leading-relaxed text-[#2D5952] text-pretty">
                      {concept.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Live Concept Inspector & Internal Cross-Links */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border-2 border-[#0C2B27] bg-[#FFFFFF] p-6 shadow-[0_6px_0_#60C3AC] sm:p-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#60C3AC]/40 pb-4">
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#17685B]">
                  <Layers className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Khái niệm {activeConcept.indexLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeConcept.englishName}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenProject(linkedProject)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#FFF34D] px-3 py-1.5 text-xs font-bold text-[#0C2B27] hover:bg-[#60C3AC] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  <span>Mở dự án mẫu</span>
                </button>
              </div>

              <h3 className="mt-5 font-display text-2xl font-extrabold text-[#0C2B27] text-balance">
                {activeConcept.title} ({activeConcept.englishName})
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1E4741] text-pretty">
                {activeConcept.shortDesc}
              </p>

              {/* Visual CodeKitten Block Stack Preview */}
              <div className="mt-5 rounded-xl border border-[#CFE9E3] bg-[#FFFFFF] p-4">
                <p className="text-xs font-bold tracking-wide text-[#2D5952] uppercase">
                  Khối lệnh mẫu trên CodeKitten Studio
                </p>
                <div className="mt-3 space-y-2">
                  {activeConcept.blockCode.map((line, i) => (
                    <div
                      key={line}
                      className="rounded-lg px-3.5 py-2.5 font-mono text-xs font-semibold text-white shadow-xs"
                      style={{
                        backgroundColor: activeConcept.blockColor,
                        marginLeft: i === 1 ? '14px' : i === 2 ? '24px' : '0px',
                      }}
                    >
                      {line}
                    </div>
                  ))}
                </div>
                <p className="mt-3.5 text-xs font-medium text-[#1E4741]">
                  Ví dụ thực tế: {activeConcept.exampleNote}
                </p>
              </div>
            </div>

            {/* Linked Sample Project Preview & Internal Section Links */}
            <div className="mt-6 flex flex-col gap-4 border-t border-[#60C3AC]/40 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={linkedProject.imageUrl}
                  alt={linkedProject.title}
                  referrerPolicy="no-referrer"
                  className="h-14 w-20 shrink-0 rounded-lg border border-[#CFE9E3] object-cover"
                />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-[#17685B]">
                    Dự án ứng dụng tiêu biểu
                  </p>
                  <p className="truncate font-display text-sm font-extrabold text-[#0C2B27]">
                    {linkedProject.title}
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpenProject(linkedProject)}
                    className="mt-0.5 text-xs font-bold text-[#0F766E] hover:underline cursor-pointer"
                  >
                    Chạy thử trong CodeKitten Studio →
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onFilterBySkill(activeConcept.filterKeyword)}
                className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl border-2 border-[#0C2B27] bg-[#60C3AC] px-4 py-2 text-xs font-extrabold text-[#0C2B27] hover:bg-[#FFF34D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Lọc dự án "{activeConcept.title}"</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
