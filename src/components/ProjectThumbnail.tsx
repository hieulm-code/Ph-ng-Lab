import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectThumbnailProps {
  project: Project;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ project }) => {
  const [failedUrl, setFailedUrl] = useState<string | null>(null);
  const imgError = failedUrl === project.imageUrl;

  if (project.imageUrl && !imgError) {
    return (
      <img
        src={project.imageUrl}
        alt={`Hình minh họa dự án ${project.title}`}
        referrerPolicy="no-referrer"
        onError={() => setFailedUrl(project.imageUrl)}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#60C3AC]/25 via-[#F2FBF9] to-[#FFF34D]/25 p-4 text-center">
      <Code2 className="h-7 w-7 text-[#0C2B27]" aria-hidden="true" />
      <span className="line-clamp-2 text-xs font-bold text-[#0C2B27]">{project.title}</span>
    </div>
  );
};
