import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project, ProjectLevel } from '../data/projects';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectCardProps {
  project: Project;
  onOpenProject: (project: Project) => void;
  className?: string;
}

const LEVEL_STYLES: Record<
  ProjectLevel,
  { symbol: string; bg: string; text: string; border: string }
> = {
  'Cơ bản': {
    symbol: '●',
    bg: 'bg-[#ECFDF5]',
    text: 'text-[#065F46]',
    border: 'border-[#60C3AC]',
  },
  'Trung bình': {
    symbol: '◆',
    bg: 'bg-[#FFF34D]',
    text: 'text-[#0C2B27]',
    border: 'border-[#EAB308]',
  },
  'Nâng cao': {
    symbol: '▲',
    bg: 'bg-[#EEF2FF]',
    text: 'text-[#312E81]',
    border: 'border-[#A5B4FC]',
  },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenProject,
  className = '',
}) => {
  const levelStyle = LEVEL_STYLES[project.level];
  const minGrade = Math.min(...project.grades);
  const maxGrade = Math.max(...project.grades);
  const gradeRangeText =
    minGrade === maxGrade ? `Khối ${minGrade}` : `Khối ${minGrade}–${maxGrade}`;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border-2 border-[#0C2B27]/12 bg-[#FFFFFF] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0C2B27] hover:shadow-lg ${className}`}
    >
      {/* Thumbnail with Top-Left Level Classification Tag */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2FBF9] border-b border-[#E3F2EF]">
        <ProjectThumbnail project={project} />

        {/* Single Top-Left Level Tag with Color + Geometric Symbol */}
        <div
          className={`absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-bold shadow-xs ${levelStyle.bg} ${levelStyle.text} ${levelStyle.border}`}
        >
          <span aria-hidden="true" className="text-[10px] leading-none">
            {levelStyle.symbol}
          </span>
          <span>{project.level}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5">
        {/* Quiet 1-line metadata kicker */}
        <div className="flex min-w-0 items-center gap-1.5 text-xs font-semibold text-[#17685B] tabular-nums">
          <span className="whitespace-nowrap shrink-0">
            {project.gradeBadgeText || gradeRangeText}
          </span>
          <span aria-hidden="true" className="shrink-0">
            ·
          </span>
          <span className="whitespace-nowrap shrink-0">
            {project.durationMinutes} phút
          </span>
          <span aria-hidden="true" className="shrink-0">
            ·
          </span>
          <span className="truncate">{project.themeLabel}</span>
        </div>

        {/* Bold Project Title (uniform 2-line height) */}
        <h3 className="mt-2 line-clamp-2 min-h-[2.75em] font-display text-[17px] font-extrabold leading-snug text-[#0C2B27] text-balance group-hover:text-[#156A5C] transition-colors">
          {project.title}
        </h3>

        <p className="mt-1.5 line-clamp-2 min-h-[2.6em] text-xs leading-relaxed text-[#38605A] text-pretty">
          {project.summary}
        </p>

        {/* Skill Tags: Uniform 2-line cap separated by | */}
        <div className="mt-3.5 border-t border-[#E6F4F1] pt-3">
          <p className="line-clamp-2 min-h-[2.6em] text-xs leading-relaxed text-[#1E4741]">
            <span className="font-bold text-[#0C2B27]">Kỹ năng: </span>
            {project.skills.join(' | ')}
          </p>
        </div>

        {/* Bottom Secondary CTA */}
        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={() => onOpenProject(project)}
            className="inline-flex min-h-[42px] w-full items-center justify-center gap-1.5 rounded-xl border border-[#60C3AC] bg-[#60C3AC]/22 px-4 py-2 text-xs font-bold text-[#0C2B27] transition-colors duration-150 hover:border-[#0C2B27] hover:bg-[#FFF34D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C2B27] cursor-pointer whitespace-nowrap"
          >
            <span>Mở dự án</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
};
