import React, { useEffect, useState } from 'react';
import { ExternalLink, Flag, RotateCcw, Square, X } from 'lucide-react';
import type { Project } from '../data/projects';
import { ProjectThumbnail } from './ProjectThumbnail';

interface CodeKittenModalProps {
  project: Project | null;
  onClose: () => void;
  onJumpToRegister: (grade?: number) => void;
}

export const CodeKittenModal: React.FC<CodeKittenModalProps> = ({
  project,
  onClose,
  onJumpToRegister,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    setIsRunning(false);
    setStepCount(0);
  }, [project?.id]);

  useEffect(() => {
    if (!isRunning) return;
    const timer = window.setInterval(() => {
      setStepCount((prev) => (prev + 1) % 6);
    }, 850);
    return () => window.clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  const minGrade = Math.min(...project.grades);
  const maxGrade = Math.max(...project.grades);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="codekitten-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1F1E]/65 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[#CBE4E1] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top IDE Bar mimicking CodeKitten Studio */}
        <div className="flex items-center justify-between gap-4 border-b border-[#115E59] bg-[#0F766E] px-5 py-3.5 text-white">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-display text-base font-bold tracking-tight whitespace-nowrap">
              CodeKitten Studio
            </span>
            <span aria-hidden="true" className="text-[#99F6E4]">
              /
            </span>
            <h3
              id="codekitten-modal-title"
              className="truncate text-sm font-semibold text-[#F0FDFA]"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng màn hình thực hành"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer shrink-0"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Workspace Split: Blocks Left + Stage Right */}
        <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-12">
          {/* Left: Interactive Vietnamese CodeKitten Blocks */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wide text-[#4E6D6A] uppercase">
                Khối lệnh kéo thả mẫu
              </span>
              <span className="text-xs font-medium text-[#0F766E] tabular-nums">
                {project.level} · Khối {minGrade}–{maxGrade}
              </span>
            </div>

            <div className="mt-3 flex-1 rounded-xl border border-[#DCECEB] bg-[#F8FCFC] p-4">
              <div className="space-y-2.5">
                {project.codeBlocks.map((block, index) => {
                  const isActiveStep = isRunning && stepCount % project.codeBlocks.length === index;
                  return (
                    <div
                      key={`${block.label}-${index}`}
                      className={`rounded-lg px-3.5 py-2.5 text-xs font-semibold text-white transition-transform duration-150 ${
                        isActiveStep ? 'translate-x-2 ring-2 ring-[#0F2928]' : ''
                      }`}
                      style={{ backgroundColor: block.color }}
                    >
                      <span className="mr-2 font-mono text-[10px] uppercase opacity-80">
                        [{block.category}]
                      </span>
                      <span>{block.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 border-t border-[#E1EEED] pt-4">
                <p className="text-xs font-semibold text-[#0F2928]">
                  Kiến thức học sinh đạt được:
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#4E6D6A]">
                  {project.summary}
                </p>
                <div className="mt-3 text-xs text-[#0F766E]">
                  {project.skills.join('  |  ')}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stage Simulator */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wide text-[#4E6D6A] uppercase">
                Sân khấu chạy thử (Stage)
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsRunning(true)}
                  className={`inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-xs font-semibold transition-colors cursor-pointer ${
                    isRunning
                      ? 'border-[#16A34A] bg-[#DCFCE7] text-[#166534]'
                      : 'border-[#D5E6E4] bg-white text-[#15803D] hover:bg-[#F0FDF4]'
                  }`}
                >
                  <Flag className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  <span>Chạy thử</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsRunning(false);
                    setStepCount(0);
                  }}
                  className="inline-flex h-8 items-center gap-1 rounded-md border border-[#D5E6E4] bg-white px-2.5 text-xs font-semibold text-[#B91C1C] hover:bg-[#FEF2F2] cursor-pointer"
                >
                  <Square className="h-3 w-3 fill-current" aria-hidden="true" />
                  <span>Dừng</span>
                </button>
              </div>
            </div>

            <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-xl border border-[#CBE4E1] bg-[#EFF7F6]">
              <ProjectThumbnail project={project} />

              {isRunning ? (
                <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between rounded-lg bg-[#0F2928]/88 px-3.5 py-2 text-xs text-white backdrop-blur-xs">
                  <span className="truncate font-medium">
                    Đang thực thi: {project.codeBlocks[stepCount % project.codeBlocks.length]?.label}
                  </span>
                  <span className="ml-2 font-mono text-[11px] text-[#5EEAD4] tabular-nums">
                    Bước {stepCount + 1}
                  </span>
                </div>
              ) : null}
            </div>

            {/* Action Footer */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onJumpToRegister(minGrade);
                }}
                className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#0F766E] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#0B5E58] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Nhận tài khoản thực hành dự án này</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsRunning(false);
                  setStepCount(0);
                }}
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-[#D5E6E4] bg-white px-4 py-2.5 text-xs font-semibold text-[#355351] hover:border-[#0F766E] hover:text-[#0F766E] cursor-pointer whitespace-nowrap"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Đặt lại</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
