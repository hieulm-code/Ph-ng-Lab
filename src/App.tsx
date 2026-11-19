import { useCallback, useEffect, useMemo, useState } from 'react';
import { CodeKittenModal } from './components/CodeKittenModal';
import { CoreConceptsSection } from './components/CoreConceptsSection';
import { FaqSection } from './components/FaqSection';
import { GameIntroSection } from './components/GameIntroSection';
import { HeroSection } from './components/HeroSection';
import { LeadFooterSection } from './components/LeadFooterSection';
import { Navbar } from './components/Navbar';
import { ProjectFilterSection } from './components/ProjectFilterSection';
import { ProjectLibrarySection } from './components/ProjectLibrarySection';
import { RealWorldLabSection } from './components/RealWorldLabSection';
import {
  PROJECTS,
  type Project,
  type ProjectLevel,
  type ThemeId,
} from './data/projects';

interface ProjectsApiResponse {
  total: number;
  filteredCount: number;
  gradeCounts: Record<number, number>;
  projects: Project[];
}

export default function App() {
  const [selectedGrade, setSelectedGrade] = useState<number | 'all'>('all');
  const [selectedLevel, setSelectedLevel] = useState<ProjectLevel | 'all'>('all');
  const [activeTheme, setActiveTheme] = useState<ThemeId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [totalCount, setTotalCount] = useState<number>(PROJECTS.length);
  const [filteredCount, setFilteredCount] = useState<number>(PROJECTS.length);
  const [gradeCounts, setGradeCounts] = useState<Record<number, number>>(() => {
    const initial: Record<number, number> = {};
    for (let g = 1; g <= 9; g++) {
      initial[g] = PROJECTS.filter((p) => p.grades.includes(g)).length;
    }
    return initial;
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [leadPreselectedGrade, setLeadPreselectedGrade] = useState<number | undefined>(
    undefined
  );

  // Real AJAX fetch to /api/projects when filters change (no page reload)
  useEffect(() => {
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setIsLoading(true);
      setErrorMessage(null);
      try {
        const params = new URLSearchParams();
        if (selectedGrade !== 'all') params.set('grade', String(selectedGrade));
        if (selectedLevel !== 'all') params.set('level', selectedLevel);
        if (activeTheme !== 'all') params.set('theme', activeTheme);
        if (searchQuery.trim()) params.set('q', searchQuery.trim());

        const res = await fetch(`/api/projects?${params.toString()}`, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error('Không thể tải danh sách dự án.');
        }
        const data: ProjectsApiResponse = await res.json();
        setProjects(data.projects);
        setTotalCount(data.total);
        setFilteredCount(data.filteredCount);
        setGradeCounts(data.gradeCounts);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setErrorMessage('Không thể kết nối máy chủ để lọc dự án. Vui lòng thử lại.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }, 110);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [selectedGrade, selectedLevel, activeTheme, searchQuery]);

  const isFilteredByAttributes = useMemo(
    () =>
      selectedGrade !== 'all' ||
      selectedLevel !== 'all' ||
      searchQuery.trim().length > 0,
    [selectedGrade, selectedLevel, searchQuery]
  );

  const handleResetFilters = useCallback(() => {
    setSelectedGrade('all');
    setSelectedLevel('all');
    setActiveTheme('all');
    setSearchQuery('');
  }, []);

  const handleOpenPlayground = useCallback(() => {
    const featured =
      projects[0] ||
      PROJECTS.find((p) => p.id === 'teky-giai-toan-ai') ||
      PROJECTS[0];
    setActiveProject(featured);
  }, [projects]);

  const handleOpenCulturalGame = useCallback(() => {
    const featured =
      PROJECTS.find((p) => p.id === 'chuyen-du-hanh-xuyen-viet') ||
      PROJECTS.find((p) => p.id === 'xin-chao-ha-noi') ||
      PROJECTS[0];
    setActiveProject(featured);
  }, []);

  const handleJumpToTheme01 = useCallback(() => {
    setSelectedGrade('all');
    setSelectedLevel('all');
    setSearchQuery('');
    setActiveTheme('van-hoa-dia-ly');
    document
      .getElementById('thu-vien-du-an')
      ?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleFilterBySkill = useCallback((keyword: string) => {
    setSelectedGrade('all');
    setSelectedLevel('all');
    setActiveTheme('all');
    setSearchQuery(keyword);
    document
      .getElementById('thu-vien-du-an')
      ?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleQuickSelectRoadmap = useCallback(
    (grade: number | 'all', level?: ProjectLevel) => {
      setSelectedGrade(grade);
      setSelectedLevel(level ?? 'all');
      setActiveTheme('all');
      setSearchQuery('');
      document
        .getElementById('thu-vien-du-an')
        ?.scrollIntoView({ behavior: 'smooth' });
    },
    []
  );

  const handleJumpToRegister = useCallback(
    (grade?: number) => {
      if (grade) {
        setLeadPreselectedGrade(grade);
      } else if (selectedGrade !== 'all') {
        setLeadPreselectedGrade(selectedGrade);
      }
      document.getElementById('dang-ky')?.scrollIntoView({ behavior: 'smooth' });
    },
    [selectedGrade]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#0C2B27]">
      <Navbar onOpenPlayground={handleOpenPlayground} />

      <main className="flex-1">
        {/* Section 1: Hero Banner & Internal Section Quick Links */}
        <HeroSection
          onOpenPlayground={handleOpenPlayground}
          totalProjects={totalCount}
        />

        {/* Section 2: Giới thiệu Lập trình Game Em Yêu Việt Nam trên CodeKitten */}
        <GameIntroSection
          onOpenFeaturedGame={handleOpenCulturalGame}
          onJumpToTheme01={handleJumpToTheme01}
        />

        {/* Section 3: 5 Trụ cột Tư duy Lập trình & AI */}
        <CoreConceptsSection
          onFilterBySkill={handleFilterBySkill}
          onOpenProject={setActiveProject}
        />

        {/* Section 4: Lộ trình SGK Khối 1–9 & Bộ lọc thông minh AJAX */}
        <ProjectFilterSection
          selectedGrade={selectedGrade}
          selectedLevel={selectedLevel}
          searchQuery={searchQuery}
          filteredCount={filteredCount}
          totalCount={totalCount}
          isLoading={isLoading}
          gradeCounts={gradeCounts}
          onGradeChange={setSelectedGrade}
          onLevelChange={setSelectedLevel}
          onSearchChange={setSearchQuery}
          onResetFilters={handleResetFilters}
          onQuickSelectRoadmap={handleQuickSelectRoadmap}
        />

        {/* Section 5: Thư viện 48 Dự án Mẫu CodeKitten (4 Chủ đề tự động lướt & xen kẽ màu nền) */}
        <ProjectLibrarySection
          projects={projects}
          activeTheme={activeTheme}
          isFilteredByAttributes={isFilteredByAttributes}
          isLoading={isLoading}
          errorMessage={errorMessage}
          onThemeChange={setActiveTheme}
          onOpenProject={setActiveProject}
          onResetFilters={handleResetFilters}
        />

        {/* Section 6: Từ Phòng Lab Ảo ra Đời thực (3 Cấp độ & Hồ sơ Năng lực) */}
        <RealWorldLabSection onJumpToRegister={() => handleJumpToRegister()} />

        {/* Section 7: Câu hỏi thường gặp (FAQ) */}
        <FaqSection />
      </main>

      {/* Section 8: Chân trang & Form Đăng ký (Chốt Lead) */}
      <LeadFooterSection preselectedGrade={leadPreselectedGrade} />

      {/* CodeKitten Studio Modal */}
      <CodeKittenModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onJumpToRegister={handleJumpToRegister}
      />
    </div>
  );
}
