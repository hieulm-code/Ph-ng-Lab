import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { PROJECTS, type ProjectLevel, type ThemeId } from './src/data/projects';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface LeadRecord {
  id: string;
  parentName: string;
  phone: string;
  grade: number;
  createdAt: string;
}

const leadsStore: LeadRecord[] = [];

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3000);

  app.use(express.json());

  // AJAX endpoint: Filter 48+ CodeKitten sample projects without page reload
  app.get('/api/projects', (req, res) => {
    const gradeParam = req.query.grade ? String(req.query.grade) : 'all';
    const levelParam = req.query.level ? String(req.query.level) : 'all';
    const themeParam = req.query.theme ? String(req.query.theme) : 'all';
    const queryParam = req.query.q ? String(req.query.q).trim().toLowerCase() : '';

    let filtered = PROJECTS;

    if (gradeParam !== 'all') {
      const gradeNum = Number(gradeParam);
      if (!Number.isNaN(gradeNum) && gradeNum >= 1 && gradeNum <= 9) {
        filtered = filtered.filter((p) => p.grades.includes(gradeNum));
      }
    }

    if (levelParam !== 'all') {
      const validLevels: ProjectLevel[] = ['Cơ bản', 'Trung bình', 'Nâng cao'];
      if (validLevels.includes(levelParam as ProjectLevel)) {
        filtered = filtered.filter((p) => p.level === levelParam);
      }
    }

    if (themeParam !== 'all') {
      const validThemes: ThemeId[] = [
        'van-hoa-dia-ly',
        'game-hoat-hinh',
        'thuat-toan-logic',
        'tich-hop-ai',
      ];
      if (validThemes.includes(themeParam as ThemeId)) {
        filtered = filtered.filter((p) => p.themeId === themeParam);
      }
    }

    if (queryParam.length > 0) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(queryParam) ||
          p.summary.toLowerCase().includes(queryParam) ||
          p.skills.some((s) => s.toLowerCase().includes(queryParam))
      );
    }

    const gradeCounts: Record<number, number> = {};
    for (let g = 1; g <= 9; g++) {
      gradeCounts[g] = PROJECTS.filter((p) => p.grades.includes(g)).length;
    }

    res.json({
      total: PROJECTS.length,
      filteredCount: filtered.length,
      gradeCounts,
      projects: filtered,
    });
  });

  // AJAX endpoint: Lead capture form submission
  app.post('/api/leads', (req, res) => {
    const { parentName, phone, grade } = req.body ?? {};

    const cleanName = typeof parentName === 'string' ? parentName.trim() : '';
    const cleanPhone = typeof phone === 'string' ? phone.replace(/[\s.-]/g, '').trim() : '';
    const parsedGrade = Number(grade);

    if (cleanName.length < 2) {
      res.status(400).json({
        error: 'Vui lòng nhập họ và tên phụ huynh (tối thiểu 2 ký tự).',
      });
      return;
    }

    const vnPhoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;
    if (!vnPhoneRegex.test(cleanPhone)) {
      res.status(400).json({
        error: 'Số điện thoại (Zalo) chưa đúng định dạng Việt Nam (VD: 0912345678).',
      });
      return;
    }

    if (Number.isNaN(parsedGrade) || parsedGrade < 1 || parsedGrade > 9) {
      res.status(400).json({
        error: 'Vui lòng chọn khối lớp của con từ Khối 1 đến Khối 9.',
      });
      return;
    }

    const record: LeadRecord = {
      id: `CK-${Date.now().toString(36).toUpperCase()}`,
      parentName: cleanName,
      phone: cleanPhone,
      grade: parsedGrade,
      createdAt: new Date().toISOString(),
    };

    leadsStore.push(record);

    res.status(201).json({
      success: true,
      registrationCode: record.id,
      parentName: record.parentName,
      grade: record.grade,
      trialUsername: `teky_k${record.grade}_${record.id.slice(-4).toLowerCase()}`,
      message: 'Đăng ký thành công! Tài khoản thực hành CodeKitten đã sẵn sàng.',
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`CodeKitten Lab server listening on http://localhost:${PORT}`);
  });
}

startServer();
