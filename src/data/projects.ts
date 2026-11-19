export type ProjectLevel = 'Cơ bản' | 'Trung bình' | 'Nâng cao';

export type ThemeId =
  | 'van-hoa-dia-ly'
  | 'game-hoat-hinh'
  | 'thuat-toan-logic'
  | 'tich-hop-ai';

export interface CodeBlockSnippet {
  category:
    | 'Sự kiện'
    | 'Chuyển động'
    | 'Điều khiển'
    | 'Biến số'
    | 'Trí tuệ nhân tạo'
    | 'Hiển thị';
  color: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  themeId: ThemeId;
  themeLabel: string;
  level: ProjectLevel;
  grades: number[];
  gradeBadgeText?: string;
  skills: string[];
  summary: string;
  durationMinutes: number;
  imageUrl: string;
  codeBlocks: CodeBlockSnippet[];
  codeKittenUrl: string;
}

export interface ThemeMeta {
  id: ThemeId;
  indexLabel: string;
  title: string;
  subtitle: string;
  audienceHighlight: string;
}

export interface CoreConcept {
  id: 'events' | 'loops' | 'conditionals' | 'variables' | 'ai-vision';
  indexLabel: string;
  title: string;
  englishName: string;
  shortDesc: string;
  exampleNote: string;
  filterKeyword: string;
  sampleProjectId: string;
  blockColor: string;
  blockCode: string[];
}

export const CORE_CONCEPTS: CoreConcept[] = [
  {
    id: 'events',
    indexLabel: '01',
    title: 'Sự kiện',
    englishName: 'Events',
    shortDesc:
      'Hiểu cách chương trình khởi chạy khi có tác động tương tác như bấm phím, chạm chuột hoặc phát/nhận thông điệp giữa các nhân vật.',
    exampleNote: 'Nhân vật bắt đầu di chuyển ngay khi bạn nhấn nút Cờ xanh hoặc phím mũi tên.',
    filterKeyword: 'Sự kiện',
    sampleProjectId: 'nhom-khoi-lenh-su-kien',
    blockColor: '#EAB308',
    blockCode: [
      'khi bấm vào lá cờ xanh',
      'phát tin nhắn "Mở_Sân_Khấu"',
      'khi nhận tin nhắn "Mở_Sân_Khấu" -> hiện nhân vật',
    ],
  },
  {
    id: 'loops',
    indexLabel: '02',
    title: 'Vòng lặp',
    englishName: 'Loops',
    shortDesc:
      'Tối ưu hóa tư duy logic bằng cách hướng dẫn máy tính tự động lặp lại công việc nhiều lần mà không cần xếp lại câu lệnh trùng lặp.',
    exampleNote: 'Vẽ đa giác, hoa văn sắc màu hoặc điều khiển đàn cá bơi liên tục chỉ với 1 khối Lặp lại.',
    filterKeyword: 'lặp',
    sampleProjectId: 'thuc-hanh-lenh-lap-tin-hoc-5',
    blockColor: '#F97316',
    blockCode: [
      'lặp lại 4 lần:',
      '  di chuyển 100 bước',
      '  xoay phải 90 độ để vẽ hình vuông',
    ],
  },
  {
    id: 'conditionals',
    indexLabel: '03',
    title: 'Điều kiện',
    englishName: 'Conditionals',
    shortDesc:
      'Làm chủ cấu trúc rẽ nhánh "Nếu... thì... ngược lại..." giúp chương trình biết tự phân tích tình huống và chọn hành động phù hợp.',
    exampleNote: 'Kiểm tra điều kiện chạm mục tiêu, trả lời đúng câu đố hoặc mở rương kho báu.',
    filterKeyword: 'rẽ nhánh',
    sampleProjectId: 'cau-truc-re-nhanh-tin-hoc-5',
    blockColor: '#2563EB',
    blockCode: [
      'nếu <Có_Chìa_Khóa = Đúng> thì:',
      '  mở Rương_Kho_Báu phát sáng',
      'ngược lại -> báo "Hãy đi tìm chìa khóa!"',
    ],
  },
  {
    id: 'variables',
    indexLabel: '04',
    title: 'Biến số',
    englishName: 'Variables',
    shortDesc:
      'Làm quen khái niệm lưu trữ dữ liệu qua hình ảnh "chiếc hộp nhớ" cho điểm số, thời gian đếm ngược, lực ném hay số lần thử.',
    exampleNote: 'Lưu điểm thưởng mỗi khi nhân vật thu thập ngôi sao hoặc vượt qua màn chơi.',
    filterKeyword: 'Biến',
    sampleProjectId: 'su-dung-bien-tin-hoc-5',
    blockColor: '#DC2626',
    blockCode: [
      'đặt Số_Ngôi_Sao thành 0 khi bắt đầu',
      'khi chạm Ngôi_Sao -> thay đổi Số_Ngôi_Sao thêm 1',
      'nếu Thời_Gian = 0 thì thông báo tổng điểm',
    ],
  },
  {
    id: 'ai-vision',
    indexLabel: '05',
    title: 'Nhận diện bằng AI',
    englishName: 'AI Vision & Voice',
    shortDesc:
      'Dạy máy tính nhận diện hình ảnh qua webcam, giọng nói tiếng Việt và giúp học sinh hiểu rõ bước nào đang ứng dụng trí tuệ nhân tạo.',
    exampleNote: 'Mèo Teky và Robot AI đọc câu hỏi toán học và nhận diện đáp án bằng giọng nói.',
    filterKeyword: 'AI',
    sampleProjectId: 'teky-giai-toan-ai',
    blockColor: '#0D9488',
    blockCode: [
      'bật nhận diện giọng nói Tiếng Việt (AI Voice)',
      'nếu <Đáp_Án_Nói = Kết_Quả_Đúng> thì:',
      '  Teky khen ngợi và cộng điểm thưởng',
    ],
  },
];

export interface GradeRoadmapItem {
  id: string;
  label: string;
  gradeValue: number | 'all';
  levelHint?: ProjectLevel;
  countLabel: string;
  skillsSummary: string;
  highlightTitles: string[];
}

export const GRADE_ROADMAP: GradeRoadmapItem[] = [
  {
    id: 'nhap-mon',
    label: 'Nhập môn Cơ bản',
    gradeValue: 1,
    levelHint: 'Cơ bản',
    countLabel: '6 dự án',
    skillsSummary: 'Làm quen CodeKitten, khối lệnh Ẩn/Hiện, Sự kiện & Thông điệp.',
    highlightTitles: ['Giao diện CodeKitten', 'Khối lệnh thông điệp'],
  },
  {
    id: 'khoi-1-2',
    label: 'Khối 1 – Khối 2',
    gradeValue: 2,
    countLabel: '2 dự án',
    skillsSummary: 'Khởi đầu kéo thả câu lệnh qua chủ đề quê hương và Hà Nội.',
    highlightTitles: ['Xin chào Hà Nội', 'Tung tăng phố phường Hà Nội'],
  },
  {
    id: 'khoi-3',
    label: 'Khối 3',
    gradeValue: 3,
    countLabel: '9 dự án',
    skillsSummary: 'Hội thoại nhân vật, hoạt ảnh, vẽ hình, game Arcade và AI cơ bản.',
    highlightTitles: ['TEKY Giải Toán (AI)', 'Cuộc Đua Rùa Và Thỏ'],
  },
  {
    id: 'khoi-4',
    label: 'Khối 4',
    gradeValue: 4,
    countLabel: '12 dự án',
    skillsSummary: 'Hệ tọa độ (X, Y), góc quay hình học, biến và biểu thức dữ liệu.',
    highlightTitles: ['Bể Cá Kỹ Thuật Số', 'Lễ Hội Ném Còn'],
  },
  {
    id: 'khoi-5',
    label: 'Khối 5',
    gradeValue: 5,
    countLabel: '9 dự án',
    skillsSummary: 'Làm chủ tuần tự, rẽ nhánh, vòng lặp & tích hợp AI Voice/Vision.',
    highlightTitles: ['Cấu trúc lặp (AI)', 'Đấu trường đặc sản Việt'],
  },
  {
    id: 'khoi-6-7',
    label: 'Khối 6 – Khối 7',
    gradeValue: 7,
    countLabel: '6 dự án',
    skillsSummary: 'Thuật toán sắp xếp, tìm kiếm tuần tự và tìm kiếm nhị phân.',
    highlightTitles: ['Thuật toán sắp xếp', 'Tìm kiếm nhị phân'],
  },
  {
    id: 'khoi-8-9',
    label: 'Khối 8 – Khối 9',
    gradeValue: 8,
    countLabel: '4 dự án',
    skillsSummary: 'Biểu diễn dữ liệu, chuyển lưu đồ sang chương trình & Gỡ lỗi.',
    highlightTitles: ['Biểu diễn dữ liệu', 'Gỡ lỗi (Debugging)'],
  },
];

export const THEMES: ThemeMeta[] = [
  {
    id: 'van-hoa-dia-ly',
    indexLabel: 'Chủ đề 01',
    title: 'Văn hóa & Địa lý Việt Nam',
    subtitle:
      'Kết hợp tư duy lập trình với kiến thức lịch sử, danh lam thắng cảnh và bản sắc văn hóa dân tộc.',
    audienceHighlight: 'Phụ huynh yêu thích',
  },
  {
    id: 'game-hoat-hinh',
    indexLabel: 'Chủ đề 02',
    title: 'Sáng tạo Game & Hoạt hình',
    subtitle:
      'Tự thiết kế nhân vật, hiệu ứng chuyển động, vật lý va chạm và âm thanh sống động cho tựa game đầu tay.',
    audienceHighlight: 'Học sinh hào hứng',
  },
  {
    id: 'thuat-toan-logic',
    indexLabel: 'Chủ đề 03',
    title: 'Tư duy Thuật toán & Logic',
    subtitle:
      'Làm chủ cấu trúc rẽ nhánh, vòng lặp, danh sách và các thuật toán tìm kiếm – sắp xếp bám sát SGK Kết nối tri thức.',
    audienceHighlight: 'Chuyên sâu Khối 3–9',
  },
  {
    id: 'tich-hop-ai',
    indexLabel: 'Chủ đề 04',
    title: 'Tích hợp AI thông minh',
    subtitle:
      'Ứng dụng AI Voice, AI Vision và tương tác thông minh trực tiếp trong khối lệnh CodeKitten.',
    audienceHighlight: 'Công nghệ AI thực chiến',
  },
];

export const PROJECTS: Project[] = [
  // ==========================================
  // CHỦ ĐỀ 01: VĂN HÓA & ĐỊA LÝ VIỆT NAM (12)
  // ==========================================
  {
    id: 'xin-chao-ha-noi',
    title: 'Xin chào Hà Nội',
    themeId: 'van-hoa-dia-ly',
    themeLabel: 'Văn hóa & Địa lý VN',
    level: 'Cơ bản',
    grades: [1],
    skills: ['Tọa độ & Chuyển động (X,Y)', 'Lập trình cơ bản', 'Hội thoại nhân vật'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten đưa nhân vật mèo Teky tham quan Quảng trường Ba Đình và Thủ đô Hà Nội.',
    durationMinutes: 35,
    imageUrl: '/assets/aistudio/imgi_7_1dd46e13a95626325eb709151bb4ac7c_a9fc1cde.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm vào lá cờ xanh' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'lướt trong 1 giây tới x: -40 y: 20' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'nói "Xin chào Hà Nội!" trong 2 giây' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=xin-chao-ha-noi',
  },
  {
    id: 'tung-tang-pho-phuong-ha-noi',
    title: 'Bài 2: Tung tăng phố phường Hà Nội',
    themeId: 'van-hoa-dia-ly',
    themeLabel: 'Văn hóa & Địa lý VN',
    level: 'Cơ bản',
    grades: [2],
    skills: ['Điều khiển chuyển động', 'Trang phục & Hoạt ảnh', 'Lập trình cơ bản'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten dạo bước dưới hàng đèn lồng lung linh phố cổ Hà Nội.',
    durationMinutes: 35,
    imageUrl: '/assets/aistudio/imgi_8_ef4114d64442a0ade03edaaa2d175f2a_ddc8db84.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm phím mũi tên phải' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'di chuyển 10 bước về phía trước' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'chuyển sang trang phục bước đi tiếp theo' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=tung-tang-pho-phuong-ha-noi',
  },
  {
    id: 'chuyen-du-hanh-xuyen-viet',
    title: 'Chuyến Du Hành Xuyên Việt',
    themeId: 'van-hoa-dia-ly',
    themeLabel: 'Văn hóa & Địa lý VN',
    level: 'Cơ bản',
    grades: [3],
    skills: ['Tọa độ & Chuyển động (X,Y)', 'Chuyển phông nền', 'Khám phá địa danh'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten đồng hành cùng mèo Teky từ Cột cờ Lũng Cú đi dọc dải đất hình chữ S.',
    durationMinutes: 45,
    imageUrl: '/assets/aistudio/imgi_10_dcf30cd471aaf4580a97576f870835a2_9292803d.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm phím mũi tên phải' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'chuyển phông nền sang "Cột cờ Lũng Cú"' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'lướt trong 2 giây tới điểm đến mới' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=chuyen-du-hanh-xuyen-viet',
  },
  {
    id: 'chinh-phuc-hoi-thi-nem-con',
    title: 'Chinh phục hội thi ném còn',
    themeId: 'van-hoa-dia-ly',
    themeLabel: 'Văn hóa & Địa lý VN',
    level: 'Trung bình',
    grades: [4],
    skills: ['Góc phóng & Trọng lực', 'Biến điểm số', 'Văn hóa dân gian'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten tái hiện hội thi ném còn truyền thống với màn nâng cấp Level Up.',
    durationMinutes: 50,
    imageUrl: '/assets/aistudio/imgi_20_f31115ee0b736b3f38762554ec4830b9_e28a4b96.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm phím khoảng trắng để ném còn' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'thay đổi y theo quỹ đạo cong parabol' },
      { category: 'Biến số', color: '#EF4444', label: 'nếu xuyên qua vòng còn thì tăng Điểm' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=chinh-phuc-hoi-thi-nem-con',
  },
  {
    id: 'dac-san-3-mien',
    title: 'Đặc sản 3 miền',
    themeId: 'van-hoa-dia-ly',
    themeLabel: 'Văn hóa & Địa lý VN',
    level: 'Trung bình',
    grades: [4],
    skills: ['Điều hướng mê cung (X,Y)', 'Cảm biến chạm tường', 'Ẩm thực 3 miền'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten vượt mê cung thu thập bản đồ đặc sản Bắc – Trung – Nam.',
    durationMinutes: 50,
    imageUrl: '/assets/aistudio/imgi_23_f717c9f2579e7b9b9f6938f6e2b5778c_5d23c862.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm các phím mũi tên di chuyển' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu đang chạm tường mê cung thì lùi lại' },
      { category: 'Biến số', color: '#EF4444', label: 'cộng 1 đặc sản vào Bộ_Sưu_Tập' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=dac-san-3-mien',
  },
  {
    id: 'dua-tai-chinh-phuc-dac-san-viet',
    title: 'Đua tài chinh phục đặc sản Việt',
    themeId: 'van-hoa-dia-ly',
    themeLabel: 'Văn hóa & Địa lý VN',
    level: 'Nâng cao',
    grades: [4],
    skills: ['Thuật toán tìm đường', 'Biến đếm thời gian', 'Tọa độ & Chuyển động (X,Y)'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten thử thách tốc độ giải mê cung nâng cao để chinh phục đặc sản Việt.',
    durationMinutes: 60,
    imageUrl: '/assets/aistudio/imgi_25_88617a7505c69079c0370a5b7607e9e5_07d4a44c.png',
    codeBlocks: [
      { category: 'Biến số', color: '#EF4444', label: 'đặt Thời_Gian = 60 và đếm ngược' },
      { category: 'Điều khiển', color: '#F97316', label: 'lặp lại cho đến khi chạm cổng đích' },
      { category: 'Biến số', color: '#EF4444', label: 'lưu Kỷ_Lục_Thời_Gian hoàn thành' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=dua-tai-chinh-phuc-dac-san-viet',
  },
  {
    id: 'le-hoi-nem-con',
    title: 'Lễ Hội Ném Còn',
    themeId: 'van-hoa-dia-ly',
    themeLabel: 'Văn hóa & Địa lý VN',
    level: 'Nâng cao',
    grades: [4],
    skills: ['Góc quay & Biểu thức lực', 'Biến & Biểu thức dữ liệu', 'Va chạm mục tiêu'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten mô phỏng lễ hội Ném Còn vùng Tây Bắc với góc ném và lực gió biến thiên.',
    durationMinutes: 60,
    imageUrl: '/assets/aistudio/imgi_27_aac4eadf5da80cc1543c321000ab0da0_ed2698d7.png',
    codeBlocks: [
      { category: 'Biến số', color: '#EF4444', label: 'đặt Góc_Ném và Lực_Ném từ thanh trượt' },
      { category: 'Điều khiển', color: '#F97316', label: 'lặp lại cho đến khi chạm Vòng Còn' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'cập nhật x, y theo công thức vật lý' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=le-hoi-nem-con',
  },
  {
    id: 'tranh-tai-nem-con',
    title: 'Tranh tài ném còn',
    themeId: 'van-hoa-dia-ly',
    themeLabel: 'Văn hóa & Địa lý VN',
    level: 'Trung bình',
    grades: [4],
    skills: ['Chế độ 2 người chơi', 'Biến tỷ số', 'Điều khiển sự kiện'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten đối kháng tranh tài ném còn giữa mèo Teky và bạn nhỏ.',
    durationMinutes: 50,
    imageUrl: '/assets/aistudio/imgi_29_61d4a7232b554c6d000b6d8565e71fed_a55556d4.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'phát tin nhắn "Lượt_Người_Chơi_2"' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu trúng tâm vòng còn thì cộng 2 điểm' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'công bố người chiến thắng' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=tranh-tai-nem-con',
  },
  {
    id: 'dau-truong-dac-san-viet',
    title: 'Đấu trường đặc sản Việt',
    themeId: 'van-hoa-dia-ly',
    themeLabel: 'Văn hóa & Địa lý VN',
    level: 'Trung bình',
    grades: [5],
    skills: ['Cấu trúc rẽ nhánh', 'Biến & Biểu thức dữ liệu', 'Giải mê cung logic'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten kết hợp thi đấu giải mã mê cung và trả lời câu hỏi đặc sản 63 tỉnh thành.',
    durationMinutes: 55,
    imageUrl: '/assets/aistudio/imgi_35_d1b7d38d92f42e30ebe12e687b931063_13969eda.png',
    codeBlocks: [
      { category: 'Điều khiển', color: '#F97316', label: 'nếu chạm trạm kiểm tra thì hỏi câu đố' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu trả lời đúng thì mở cổng mê cung' },
      { category: 'Biến số', color: '#EF4444', label: 'tăng Điểm_Đặc_Sản thêm 10' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=dau-truong-dac-san-viet',
  },
  {
    id: 'giao-dien-codekitten',
    title: 'Giao diện Codekitten',
    themeId: 'van-hoa-dia-ly',
    themeLabel: 'Văn hóa & Địa lý VN',
    level: 'Cơ bản',
    grades: [1, 2],
    gradeBadgeText: 'CƠ BẢN',
    skills: ['Làm quen sân khấu CodeKitten', 'Chuyển động cơ bản', 'Lập trình cơ bản'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten giúp học sinh làm quen khu vực khối lệnh, sân khấu và nhân vật trước Thành cổ.',
    durationMinutes: 35,
    imageUrl: '/assets/aistudio/imgi_49_9c81363a222da15571de17d4fb8d282d_6ac617d8.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm vào lá cờ xanh' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'đi tới x: 0 y: -40' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'nói "Chào mừng tới CodeKitten!"' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=giao-dien-codekitten',
  },
  {
    id: 'khoi-lenh-an-hien',
    title: 'Khối lệnh Ẩn / Hiện',
    themeId: 'van-hoa-dia-ly',
    themeLabel: 'Văn hóa & Địa lý VN',
    level: 'Cơ bản',
    grades: [1, 2],
    gradeBadgeText: 'CƠ BẢN',
    skills: ['Khối lệnh Ẩn / Hiện', 'Sân khấu múa rối', 'Cấu trúc tuần tự'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten thực hành điều khiển nhân vật xuất hiện và biến mất trên sân khấu lễ hội truyền thống.',
    durationMinutes: 35,
    imageUrl: '/assets/aistudio/imgi_50_4fcfc457e4dc786a860ce14e31409f7c_ec29eea0.png',
    codeBlocks: [
      { category: 'Hiển thị', color: '#8B5CF6', label: 'ẩn nhân vật khi bắt đầu sân khấu' },
      { category: 'Điều khiển', color: '#F97316', label: 'đợi 1.5 giây' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'hiện nhân vật kèm âm thanh trống hội' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=khoi-lenh-an-hien',
  },
  {
    id: 'khoi-lenh-thong-diep',
    title: 'Khối lệnh thông điệp (Nhận và phát tin)',
    themeId: 'van-hoa-dia-ly',
    themeLabel: 'Văn hóa & Địa lý VN',
    level: 'Cơ bản',
    grades: [2, 3],
    gradeBadgeText: 'CƠ BẢN',
    skills: ['Phát & Nhận thông điệp', 'Nút Play tương tác', 'Hiệu ứng đêm đèn trời'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten đồng bộ cảnh thả đèn trời lung linh bằng khối lệnh phát và nhận tin nhắn.',
    durationMinutes: 40,
    imageUrl: '/assets/aistudio/imgi_51_d03ab78af1441b5a47e1b8c5cca5d7cf_2a00f314.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm vào nút PLAY thì phát tin "Bắt đầu"' },
      { category: 'Sự kiện', color: '#EAB308', label: 'khi nhận tin nhắn "Bắt đầu"' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'đèn trời lướt nhẹ lên bầu trời' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=khoi-lenh-thong-diep',
  },

  // ==========================================
  // CHỦ ĐỀ 02: SÁNG TẠO GAME & HOẠT HÌNH (13)
  // ==========================================
  {
    id: 'chuyen-cun-con-va-meo-con',
    title: 'Chuyện Cún Con Và Mèo Con',
    themeId: 'game-hoat-hinh',
    themeLabel: 'Game & Hoạt hình',
    level: 'Cơ bản',
    grades: [3],
    skills: ['Hội thoại & Giao tiếp nhân vật', 'Trang phục & Hoạt ảnh (Animation)'],
    summary:
      'Học sinh tạo một đoạn hoạt hình trên CodeKitten, trong đó Cún con và Mèo con trò chuyện cùng nhau trước Nhà thờ Lớn.',
    durationMinutes: 40,
    imageUrl: '/assets/aistudio/imgi_9_245629d7d4e853ea6df1fd3170554324_3cd4de7a.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm vào lá cờ xanh' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'Mèo con nói "Chào Cún con nhé!"' },
      { category: 'Sự kiện', color: '#EAB308', label: 'phát tin nhắn "Lượt_Cún_Trả_Lời"' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=chuyen-cun-con-va-meo-con',
  },
  {
    id: 'cuoc-dua-rua-va-tho',
    title: 'Cuộc Đua Rùa Và Thỏ',
    themeId: 'game-hoat-hinh',
    themeLabel: 'Game & Hoạt hình',
    level: 'Trung bình',
    grades: [3],
    skills: ['Hội thoại & Giao tiếp nhân vật', 'Trang phục & Hoạt ảnh (Animation)'],
    summary:
      'Học sinh tạo hoạt hình tương tác trên CodeKitten mô phỏng cuộc đua giữa Rùa và Thỏ cùng nhiều tình huống bất ngờ.',
    durationMinutes: 45,
    imageUrl: '/assets/aistudio/imgi_12_a6f63f8430011a3a1982c03d01b4374c_1fe1a9c9.png',
    codeBlocks: [
      { category: 'Điều khiển', color: '#F97316', label: 'lặp lại cho đến khi chạm vạch đích' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'Rùa đi 3 bước, Thỏ chạy 12 bước' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu Thỏ ở giữa đường thì ngủ 3 giây' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=cuoc-dua-rua-va-tho',
  },
  {
    id: 'doi-san-moi',
    title: 'Dơi Săn Mồi',
    themeId: 'game-hoat-hinh',
    themeLabel: 'Game & Hoạt hình',
    level: 'Cơ bản',
    grades: [3],
    skills: ['Game Arcade', 'Thế giới động vật', 'Chuyển động theo con trỏ'],
    summary:
      'Sản phẩm là một trò chơi tương tác được xây dựng trên nền tảng CodeKitten với nhân vật dơi bay săn mồi trên thảo nguyên.',
    durationMinutes: 40,
    imageUrl: '/assets/aistudio/imgi_13_a6fa20f9a013cc41fc5a0fb40456e86a_f9cfab5c.png',
    codeBlocks: [
      { category: 'Chuyển động', color: '#3B82F6', label: 'lướt nhẹ theo hướng con trỏ chuột' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'đổi trang phục vỗ cánh mỗi 0.15 giây' },
      { category: 'Biến số', color: '#EF4444', label: 'cộng điểm khi bắt được mục tiêu' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=doi-san-moi',
  },
  {
    id: 'giai-cuu-gau-bac-cuc',
    title: 'Giải Cứu Gấu Bắc Cực',
    themeId: 'game-hoat-hinh',
    themeLabel: 'Game & Hoạt hình',
    level: 'Cơ bản',
    grades: [3],
    skills: ['Biến & Biểu thức dữ liệu', 'Thế giới động vật', 'Vật lý nhảy'],
    summary:
      'Trò chơi giải cứu Gấu Bắc Cực trên CodeKitten, trong đó người chơi điều khiển gấu con vượt qua các tảng băng trôi.',
    durationMinutes: 45,
    imageUrl: '/assets/aistudio/imgi_14_5116a684fbf3f381f9f89ddb4a02014a_e3d63dda.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm phím mũi tên lên' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'nhảy qua khe băng an toàn' },
      { category: 'Biến số', color: '#EF4444', label: 'tăng Điểm_Giải_Cứu thêm 10' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=giai-cuu-gau-bac-cuc',
  },
  {
    id: 'gioi-thieu-ban-than',
    title: 'Giới Thiệu Bản Thân',
    themeId: 'game-hoat-hinh',
    themeLabel: 'Game & Hoạt hình',
    level: 'Cơ bản',
    grades: [3],
    skills: ['Hội thoại & Giao tiếp nhân vật', 'Trang phục & Hoạt ảnh (Animation)'],
    summary:
      'Học sinh tạo một hoạt hình đơn giản trên CodeKitten với nhân vật và lời giới thiệu sở thích, ước mơ của bản thân.',
    durationMinutes: 35,
    imageUrl: '/assets/aistudio/imgi_15_26c2e5ffb01771ed19bd869d83a26d99_95343dca.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm vào nhân vật' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'đổi trang phục vẫy tay chào' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'nói tên và sở thích trong 3 giây' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=gioi-thieu-ban-than',
  },
  {
    id: 'be-ca-ky-thuat-so',
    title: 'Bể Cá Kỹ Thuật Số',
    themeId: 'game-hoat-hinh',
    themeLabel: 'Game & Hoạt hình',
    level: 'Cơ bản',
    grades: [4],
    skills: ['Tọa độ & Chuyển động (X,Y)', 'Lập trình cơ bản', 'Mô phỏng sinh vật biển'],
    summary:
      'Học sinh xây dựng bể cá kỹ thuật số trên CodeKitten với nhiều sinh vật biển như cá hề, sứa và cua tự do bơi lội.',
    durationMinutes: 45,
    imageUrl: '/assets/aistudio/imgi_18_11dd9571779bf5636a281bb0b4b9cc02_d8136c43.png',
    codeBlocks: [
      { category: 'Điều khiển', color: '#F97316', label: 'liên tục di chuyển 4 bước' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'bật lại nếu chạm cạnh bể cá' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'tạo hiệu ứng bong bóng nổi lên' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=be-ca-ky-thuat-so',
  },
  {
    id: 'be-ca-vui-nhon',
    title: 'BỂ CÁ VUI NHỘN - Tin học 4 – Kết nối tri thức',
    themeId: 'game-hoat-hinh',
    themeLabel: 'Game & Hoạt hình',
    level: 'Cơ bản',
    grades: [4],
    skills: ['Thế giới động vật', 'Trang phục & Hoạt ảnh (Animation)', 'Tin học 4 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten bám sát Tin học 4 – Kết nối tri thức với lâu đài san hô sống động.',
    durationMinutes: 45,
    imageUrl: '/assets/aistudio/imgi_19_886a6b3e520ed6d8aba3172282b1ecd6_b28a4f65.png',
    codeBlocks: [
      { category: 'Chuyển động', color: '#3B82F6', label: 'bơi lượn ngẫu nhiên quanh lâu đài' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'trang phục kế tiếp mỗi 0.25 giây' },
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm vào cá thì đổi màu sắc' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=be-ca-vui-nhon',
  },
  {
    id: 'cuoc-phieu-luu-cua-codekitten',
    title: 'CUỘC PHIÊU LƯU CỦA CODEKITTEN - Tin học 4 – Kết nối tri thức',
    themeId: 'game-hoat-hinh',
    themeLabel: 'Game & Hoạt hình',
    level: 'Cơ bản',
    grades: [4],
    skills: ['Biến & Biểu thức dữ liệu', 'Game Arcade', 'Tin học 4 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten kể câu chuyện phiêu lưu của mèo cam và thỏ trắng trong công viên.',
    durationMinutes: 45,
    imageUrl: '/assets/aistudio/imgi_22_eba840d41e03278db065b50bb793305e_c57f397b.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm phím mũi tên di chuyển' },
      { category: 'Biến số', color: '#EF4444', label: 'cộng điểm khi hoàn thành thử thách' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'hiển thị hội thoại tương tác với Thỏ' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=cuoc-phieu-luu-cua-codekitten',
  },
  {
    id: 'dieu-khien-codekitten',
    title: 'Điều Khiển Codekitten',
    themeId: 'game-hoat-hinh',
    themeLabel: 'Game & Hoạt hình',
    level: 'Cơ bản',
    grades: [4],
    skills: ['Tọa độ & Chuyển động (X,Y)', 'Lập trình cơ bản', 'Điều khiển bàn phím'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten điều khiển chú mèo đá bóng qua các vị trí tọa độ trên sân cỏ.',
    durationMinutes: 40,
    imageUrl: '/assets/aistudio/imgi_24_77ddceb5cceab4037572b5865d45257a_c2bcfee8.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm phím trái / phải / lên / xuống' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'thay đổi x hoặc y một lượng 10' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu chạm bóng thì đá bóng về trước' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=dieu-khien-codekitten',
  },
  {
    id: 'teky-bay-luon',
    title: 'TEKY Bay Lượn',
    themeId: 'game-hoat-hinh',
    themeLabel: 'Game & Hoạt hình',
    level: 'Cơ bản',
    grades: [4],
    skills: ['Game Arcade', 'Trang phục & Hoạt ảnh (Animation)', 'Tọa độ (X,Y)'],
    summary:
      'Học sinh tạo hoạt ảnh và game vượt chướng ngại vật trên CodeKitten với nhân vật bay lượn qua những ngọn đồi xanh.',
    durationMinutes: 45,
    imageUrl: '/assets/aistudio/imgi_28_1954d0f9baa26b1be5fb9f96207c8397_8a0db5d5.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm phím khoảng trắng để bay lên' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'thay đổi y một lượng 30 rồi hạ dần' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu chạm tòa nhà thì kết thúc lượt' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=teky-bay-luon',
  },
  {
    id: 'basketball-v3',
    title: 'Basketball_v3',
    themeId: 'game-hoat-hinh',
    themeLabel: 'Game & Hoạt hình',
    level: 'Nâng cao',
    grades: [5],
    skills: ['Vật lý ném rổ parabol', 'Biến điểm & Lực ném', 'Chế độ thi đấu'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten mô phỏng trò chơi ném bóng rổ với góc ném, lực đẩy và bảng tính điểm.',
    durationMinutes: 60,
    imageUrl: '/assets/aistudio/imgi_31_163e427ede3e8d2fe1a25146ca0bd870_cc0413dd.png',
    codeBlocks: [
      { category: 'Biến số', color: '#EF4444', label: 'tính Vx, Vy theo lực giữ phím' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'di chuyển bóng theo quỹ đạo trọng lực' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu bóng lọt vào rổ thì cộng 3 điểm' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=basketball-v3',
  },
  {
    id: 'thiet-ke-nhan-vat-hoat-hinh',
    title: 'Thiết kế nhân vật - Lập trình hoạt hình nhân vật',
    themeId: 'game-hoat-hinh',
    themeLabel: 'Game & Hoạt hình',
    level: 'Cơ bản',
    grades: [1, 2, 3],
    gradeBadgeText: 'CƠ BẢN',
    skills: ['Thiết kế nhân vật', 'Hoạt hình đại dương', 'Lập trình cơ bản'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten tự vẽ, tùy chỉnh trang phục rùa biển và đàn cá bơi lượn dưới rạn san hô.',
    durationMinutes: 40,
    imageUrl: '/assets/aistudio/imgi_53_da1bcb96cf350406e5cd1a0fcd121417_c6f51ece.png',
    codeBlocks: [
      { category: 'Hiển thị', color: '#8B5CF6', label: 'chuyển trang phục bơi nhịp nhàng' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'lướt qua lại giữa rạn san hô' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'xoay hướng khi chạm mép sân khấu' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=thiet-ke-nhan-vat-hoat-hinh',
  },
  {
    id: 'thu-vien-hinh-nen-va-nhan-vat',
    title: 'Thư viện hình nền và nhân vật',
    themeId: 'game-hoat-hinh',
    themeLabel: 'Game & Hoạt hình',
    level: 'Cơ bản',
    grades: [1, 2],
    gradeBadgeText: 'CƠ BẢN',
    skills: ['Thư viện nhân vật & phông nền', 'Sáng tạo bối cảnh', 'Lập trình cơ bản'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten hướng dẫn chọn phông nền, thêm đĩa bay và nhân vật để dựng câu chuyện riêng.',
    durationMinutes: 35,
    imageUrl: '/assets/aistudio/imgi_54_f7464ab1fb574c60d58bc878a73c3b85_b484acdf.png',
    codeBlocks: [
      { category: 'Hiển thị', color: '#8B5CF6', label: 'chọn phông nền "Ngôi nhà đồi xanh"' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'đĩa bay lơ lửng tại x: 140 y: 120' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'mèo Teky chào mừng từ sân cỏ' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=thu-vien-hinh-nen-va-nhan-vat',
  },

  // ==========================================
  // CHỦ ĐỀ 03: TƯ DUY THUẬT TOÁN & LOGIC (19)
  // ==========================================
  {
    id: 'co-ve-da-sac',
    title: 'Cọ vẽ đa sắc',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Trung bình',
    grades: [3],
    skills: ['Bút vẽ & Bảng màu', 'Tọa độ con trỏ (X,Y)', 'Sự kiện chuột'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten tạo phần mềm vẽ tranh đa sắc với bảng chọn màu tương tác.',
    durationMinutes: 45,
    imageUrl: '/assets/aistudio/imgi_11_b53ce86ba08c09522f88cc2925eb6a22_3218addb.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm vào ô màu trên bảng chọn' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'đặt màu bút vẽ theo ô màu đã chọn' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'đi tới con trỏ chuột khi nhấn giữ' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=co-ve-da-sac',
  },
  {
    id: 've-hinh-co-ban',
    title: 'Vẽ hình cơ bản',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Cơ bản',
    grades: [3],
    skills: ['Bút vẽ lập trình', 'Vòng lặp cơ bản', 'Góc xoay 90 độ'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten lập trình bút chì tự động vẽ hình vuông, hình chữ nhật trên sân khấu.',
    durationMinutes: 40,
    imageUrl: '/assets/aistudio/imgi_17_ee121f5d810806e1f0acba0b888c13ec_d83df556.png',
    codeBlocks: [
      { category: 'Hiển thị', color: '#8B5CF6', label: 'đặt bút xuống và chọn nét vẽ' },
      { category: 'Điều khiển', color: '#F97316', label: 'lặp lại 4 lần' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'di chuyển 100 bước rồi xoay phải 90 độ' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=ve-hinh-co-ban',
  },
  {
    id: 'codekitten-ve-hinh-tam-giac',
    title: 'CODEKITTEN VẼ HÌNH TAM GIÁC - Tin học 4 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Cơ bản',
    grades: [4],
    skills: ['Hình học & Góc quay', 'Toán học', 'Tin học 4 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten tính góc xoay 120 độ để bút vẽ tạo nên tam giác đều phát sáng.',
    durationMinutes: 45,
    imageUrl: '/assets/aistudio/imgi_21_556bd1ea43272b6aebd6544bf9fa050b_d65666a5.png',
    codeBlocks: [
      { category: 'Điều khiển', color: '#F97316', label: 'lặp lại 3 lần' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'di chuyển 120 bước' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'xoay phải 120 độ (360 / 3)' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=codekitten-ve-hinh-tam-giac',
  },
  {
    id: 'hoa-van-sac-mau',
    title: 'Hoa văn sắc màu',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Trung bình',
    grades: [4],
    skills: ['Vòng lặp lồng nhau', 'Thay đổi màu bút', 'Hình học đối xứng'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten sử dụng vòng lặp lồng nhau để vẽ hoa văn đa giác nhiều màu rực rỡ.',
    durationMinutes: 50,
    imageUrl: '/assets/aistudio/imgi_26_73ada4c1bd8f8d996392e6d7e1bc378f_315c9a97.png',
    codeBlocks: [
      { category: 'Điều khiển', color: '#F97316', label: 'lặp lại 12 lần' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'vẽ một hình đa giác đều' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'xoay 30 độ và đổi màu bút thêm 15' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=hoa-van-sac-mau',
  },
  {
    id: 'cau-truc-re-nhanh-tin-hoc-5',
    title: 'Cấu trúc rẽ nhánh - Tin học 5 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Trung bình',
    grades: [5],
    skills: ['Cấu trúc rẽ nhánh (Nếu - Thì)', 'Tin học 5 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten giúp mèo cam kiểm tra điều kiện chìa khóa để mở rương kho báu bên thác nước.',
    durationMinutes: 50,
    imageUrl: '/assets/aistudio/imgi_33_2109d91d5def98b937cb011a17ffd55a_a0600d9d.png',
    codeBlocks: [
      { category: 'Điều khiển', color: '#F97316', label: 'nếu Có_Chìa_Khóa = Đúng thì' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'mở Rương_Kho_Báu phát sáng' },
      { category: 'Điều khiển', color: '#F97316', label: 'ngược lại báo "Hãy đi tìm chìa khóa!"' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=cau-truc-re-nhanh-tin-hoc-5',
  },
  {
    id: 'cau-truc-tuan-tu-tin-hoc-5',
    title: 'Cấu trúc tuần tự - Tin học 5 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Trung bình',
    grades: [5],
    skills: ['Cấu trúc tuần tự', 'Tọa độ & Chuyển động (X,Y)', 'Tin học 5 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten sắp xếp thứ tự các bước di chuyển và chào hỏi hợp lý trong công viên.',
    durationMinutes: 45,
    imageUrl: '/assets/aistudio/imgi_34_9e9ae2d88be444587191f59dbd8804c9_568cbe65.png',
    codeBlocks: [
      { category: 'Chuyển động', color: '#3B82F6', label: 'lướt tới cầu gỗ (x: 40, y: -20)' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'nói "Xin chào!" trong 2 giây' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'đi tiếp tới bờ hồ (x: 150, y: -40)' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=cau-truc-tuan-tu-tin-hoc-5',
  },
  {
    id: 'su-dung-bien-tin-hoc-5',
    title: 'Sử dụng biến trong chương trình - Tin học 5 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Trung bình',
    grades: [5],
    skills: ['Biến & Biểu thức dữ liệu', 'Tin học 5 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten thực hành tạo biến Điểm để thu thập ngôi sao vàng trong công viên.',
    durationMinutes: 50,
    imageUrl: '/assets/aistudio/imgi_36_ee360290a352db17305e363612b8d672_2f31d64c.png',
    codeBlocks: [
      { category: 'Biến số', color: '#EF4444', label: 'đặt Số_Ngôi_Sao thành 0 khi bắt đầu' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu chạm Ngôi_Sao thì' },
      { category: 'Biến số', color: '#EF4444', label: 'thay đổi Số_Ngôi_Sao một lượng 1' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=su-dung-bien-tin-hoc-5',
  },
  {
    id: 'thuc-hanh-lenh-lap-tin-hoc-5',
    title: 'Thực hành sử dụng lệnh lặp - Tin học 5 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Trung bình',
    grades: [5],
    skills: ['Hình học & Góc quay', 'Tọa độ & Chuyển động (X,Y)', 'Tin học 5 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten xây dựng khu vườn hình học với tam giác, hình vuông, lục giác và hoa 8 cánh.',
    durationMinutes: 55,
    imageUrl: '/assets/aistudio/imgi_37_c75e222b2bd93ed45a6559e08ece6562_7a3e22c6.png',
    codeBlocks: [
      { category: 'Điều khiển', color: '#F97316', label: 'lặp lại Số_Cạnh lần' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'di chuyển 60 bước' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'xoay phải 360 / Số_Cạnh độ' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=thuc-hanh-lenh-lap-tin-hoc-5',
  },
  {
    id: 'tu-kich-ban-den-chuong-trinh-tin-hoc-5',
    title: 'Từ kịch bản đến chương trình - Tin học 5 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Trung bình',
    grades: [5],
    skills: ['Kịch bản & Lưu đồ thuật toán', 'Tọa độ & Chuyển động (X,Y)', 'Tin học 5 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten chuyển đổi kịch bản game phá gạch sân bóng thành chương trình hoàn chỉnh.',
    durationMinutes: 55,
    imageUrl: '/assets/aistudio/imgi_38_e5fa3ad311851af0b0ddb9d8c2452b06_ec65fd0e.png',
    codeBlocks: [
      { category: 'Chuyển động', color: '#3B82F6', label: 'điều khiển thanh đỡ theo trục x' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu bóng chạm gạch thì bật nảy & cộng điểm' },
      { category: 'Biến số', color: '#EF4444', label: 'kiểm tra biến Mạng_Chơi > 0' },
    ],
    codeKittenUrl:
      'https://codekitten.vn/editor?project=tu-kich-ban-den-chuong-trinh-tin-hoc-5',
  },
  {
    id: 'cac-cau-truc-dieu-khien-tin-hoc-6',
    title: 'Các cấu trúc điều khiển - Tin học 6 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Trung bình',
    grades: [6],
    skills: ['Tuần tự – Rẽ nhánh – Lặp', 'Giải mê cung đá', 'Tin học 6 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten phối hợp 3 cấu trúc điều khiển giúp mèo vượt mê cung đá thu thập sao.',
    durationMinutes: 60,
    imageUrl: '/assets/aistudio/imgi_39_9cc1d808da3491d307d969ef47819aca_e6db1153.png',
    codeBlocks: [
      { category: 'Điều khiển', color: '#F97316', label: 'lặp lại cho đến khi chạm Sao_Vàng' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu đường trước thông thoáng thì đi thẳng' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'ngược lại rẽ theo hướng trống' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=cac-cau-truc-dieu-khien-tin-hoc-6',
  },
  {
    id: 'chuong-trinh-may-tinh-tin-hoc-6',
    title: 'Chương trình máy tính - Tin học 6 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Trung bình',
    grades: [6],
    skills: ['Khái niệm chương trình', 'Tọa độ & Kích thước hình học', 'Tin học 6 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten lập trình robot đo đạc và vẽ sân hình chữ nhật kích thước 120×80 chính xác.',
    durationMinutes: 55,
    imageUrl: '/assets/aistudio/imgi_40_d2f4ab658c293ea85f7268a9f72431b0_7b0bd531.png',
    codeBlocks: [
      { category: 'Biến số', color: '#EF4444', label: 'đặt Chiều_Dài = 120; Chiều_Rộng = 80' },
      { category: 'Điều khiển', color: '#F97316', label: 'lặp lại 2 lần: vẽ cạnh dài rồi cạnh rộng' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'tính Chu_Vi = (Dài + Rộng) * 2' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=chuong-trinh-may-tinh-tin-hoc-6',
  },
  {
    id: 'thuat-toan-tin-hoc-6',
    title: 'Thuật toán - Tin học 6 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Trung bình',
    grades: [6],
    skills: ['Mô tả thuật toán từng bước', 'Lưu đồ giải bài toán', 'Tin học 6 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten biểu diễn thuật toán 5 bước qua cầu tìm kho báu rõ ràng, không nhập nhằng.',
    durationMinutes: 55,
    imageUrl: '/assets/aistudio/imgi_41_adb17699f1a495d86f945d3612d056e3_5ba0ae81.png',
    codeBlocks: [
      { category: 'Chuyển động', color: '#3B82F6', label: 'Bước 1 -> Bước 2 -> Bước 3 qua cầu gỗ' },
      { category: 'Điều khiển', color: '#F97316', label: 'Bước 4: kiểm tra điều kiện rẽ nhánh' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'Bước 5: mở rương kho báu (Kết thúc)' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=thuat-toan-tin-hoc-6',
  },
  {
    id: 'thuat-toan-sap-xep-tin-hoc-7',
    title: 'Thuật toán sắp xếp - Tin học 7 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Trung bình',
    grades: [7],
    skills: ['Hoán đổi phần tử (Swap)', 'Vòng lặp lồng nhau', 'Tin học 7 KNTT'],
    summary:
      'Học sinh mô phỏng thuật toán sắp xếp bằng cách so sánh và đổi chỗ các khối điểm 100, 80, 60, 40, 20 theo thứ tự.',
    durationMinutes: 65,
    imageUrl: '/assets/aistudio/imgi_42_ChatGPT_Image_12_40_47_9_thg_9_2026_7_1788933469601_wh8aqd_32a439de.png',
    codeBlocks: [
      { category: 'Điều khiển', color: '#F97316', label: 'nếu Khối[i] > Khối[j] thì hoán đổi vị trí' },
      { category: 'Biến số', color: '#EF4444', label: 'dùng biến Tạm lưu giá trị khi đổi chỗ' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'cập nhật bảng xếp hạng đã sắp xếp' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=thuat-toan-sap-xep-tin-hoc-7',
  },
  {
    id: 'thuat-toan-tim-kiem-nhi-phan-tin-hoc-7',
    title: 'Thuật toán tìm kiếm nhị phân - Tin học 7 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Nâng cao',
    grades: [7],
    skills: ['Chia để trị (Binary Search)', 'Danh sách đã sắp xếp', 'Tin học 7 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten trực quan hóa 3 bước chia đôi khoảng Low–Mid–High để tìm chính xác số 42.',
    durationMinutes: 70,
    imageUrl: '/assets/aistudio/imgi_43_2a1ff1a6c016c0e2052bda37fb5059ad_f8ac55c9.png',
    codeBlocks: [
      { category: 'Biến số', color: '#EF4444', label: 'Mid = làm tròn xuống ((Low + High) / 2)' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu Giá_Trị[Mid] < 42 thì Low = Mid + 1' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu Giá_Trị[Mid] = 42 thì báo Tìm_Thấy!' },
    ],
    codeKittenUrl:
      'https://codekitten.vn/editor?project=thuat-toan-tim-kiem-nhi-phan-tin-hoc-7',
  },
  {
    id: 'thuat-toan-tim-kiem-tuan-tu-tin-hoc-7',
    title: 'Thuật toán tìm kiếm tuần tự - Tin học 7 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Trung bình',
    grades: [7],
    skills: ['Duyệt mảng (Linear Search)', 'Biến đếm vị trí', 'Tin học 7 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten duyệt lần lượt từng phần tử trong danh sách [12, 25, 8, 41, 30, 17] để tìm số 30 ở vị trí 5.',
    durationMinutes: 60,
    imageUrl: '/assets/aistudio/imgi_44_3d6c6005fb49a98e0d86ce4f343b4ead_55afcca2.png',
    codeBlocks: [
      { category: 'Biến số', color: '#EF4444', label: 'đặt Vị_Trí = 1' },
      { category: 'Điều khiển', color: '#F97316', label: 'lặp lại độ dài của Danh_Sách lần' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu phần tử[Vị_Trí] = 30 thì dừng & báo kết quả' },
    ],
    codeKittenUrl:
      'https://codekitten.vn/editor?project=thuat-toan-tim-kiem-tuan-tu-tin-hoc-7',
  },
  {
    id: 'bieu-dien-du-lieu-tin-hoc-8',
    title: 'Biểu diễn dữ liệu - Tin học 8 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Nâng cao',
    grades: [8],
    skills: ['Cấu trúc Danh sách (List)', 'Bảng Hồ sơ học sinh', 'Tin học 8 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten tổ chức và biểu diễn bảng dữ liệu Hồ sơ học sinh với các cột Tên, Tuổi, Điểm và Trạng thái.',
    durationMinutes: 70,
    imageUrl: '/assets/aistudio/imgi_45_73d873ac92c16d34ed3317edb8b56f2b_c85e5e9b.png',
    codeBlocks: [
      { category: 'Biến số', color: '#EF4444', label: 'thêm bản ghi (Tên, Tuổi, Điểm) vào Hồ_sơ' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu Điểm >= 80 thì Trạng_Thái = "Đạt"' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'hiển thị bảng danh sách lên sân khấu' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=bieu-dien-du-lieu-tin-hoc-8',
  },
  {
    id: 'cau-truc-dieu-khien-tin-hoc-8',
    title: 'Cấu trúc điều khiển - Tin học 8 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Nâng cao',
    grades: [8],
    skills: ['Điều khiển băng chuyền logic', 'Biểu thức điều kiện kép', 'Tin học 8 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten lập trình robot nhà kho phân loại kiện hàng trên băng chuyền theo mã số.',
    durationMinutes: 70,
    imageUrl: '/assets/aistudio/imgi_46_902f1b84aeeb7f82bce893ee424e60b7_218c4663.png',
    codeBlocks: [
      { category: 'Điều khiển', color: '#F97316', label: 'nếu Mã_Kiện = 5 thì đưa vào Xe_Giao_Hàng' },
      { category: 'Biến số', color: '#EF4444', label: 'tăng biến Số_Kiện_Đã_Giao thêm 1' },
      { category: 'Điều khiển', color: '#F97316', label: 'ngược lại giữ kiện hàng trên băng chuyền' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=cau-truc-dieu-khien-tin-hoc-8',
  },
  {
    id: 'tu-thuat-toan-den-chuong-trinh-tin-hoc-8',
    title: 'Từ thuật toán đến chương trình - Tin học 8 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Nâng cao',
    grades: [8],
    skills: ['Chuyển đổi lưu đồ sang code', 'Thuật toán tìm số lớn nhất', 'Tin học 8 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten chuyển thuật toán tìm giá trị lớn nhất trong dãy số [4, 7, 6, 3, 9] thành chương trình.',
    durationMinutes: 70,
    imageUrl: '/assets/aistudio/imgi_47_ChatGPT_Image_12_40_48_9_thg_9_2026_8_1788933432239_o84yyt_de34bc8a.png',
    codeBlocks: [
      { category: 'Biến số', color: '#EF4444', label: 'đặt Max = phần tử thứ 1 của Dãy_Số' },
      { category: 'Điều khiển', color: '#F97316', label: 'duyệt từng số x trong Dãy_Số' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu x > Max thì đặt Max = x' },
    ],
    codeKittenUrl:
      'https://codekitten.vn/editor?project=tu-thuat-toan-den-chuong-trinh-tin-hoc-8',
  },
  {
    id: 'go-loi-tin-hoc-9',
    title: 'Gỡ lỗi - Tin học 8 – Kết nối tri thức',
    themeId: 'thuat-toan-logic',
    themeLabel: 'Thuật toán & Logic',
    level: 'Nâng cao',
    grades: [9],
    skills: ['Kỹ năng Gỡ lỗi (Debugging)', 'Kiểm thử luồng logic', 'Tin học 8–9 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten rèn kỹ năng đọc kiểm tra từng khối lệnh để phát hiện và sửa lỗi sai logic.',
    durationMinutes: 75,
    imageUrl: '/assets/aistudio/imgi_48_f16ef7e5f0adddfdc5d3425b5d0f44e9_180a23b5.png',
    codeBlocks: [
      { category: 'Điều khiển', color: '#F97316', label: 'kiểm tra điều kiện biên vòng lặp' },
      { category: 'Biến số', color: '#EF4444', label: 'theo dõi giá trị biến qua từng bước chạy' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'xác nhận test case đạt 100%' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=go-loi-tin-hoc-9',
  },

  // ==========================================
  // CHỦ ĐỀ 04: TÍCH HỢP AI THÔNG MINH (4)
  // ==========================================
  {
    id: 'teky-giai-toan-ai',
    title: 'TEKY Giải Toán',
    themeId: 'tich-hop-ai',
    themeLabel: 'Tích hợp AI',
    level: 'Trung bình',
    grades: [3],
    skills: ['Cấu trúc rẽ nhánh (Nếu - Thì)', 'Trí tuệ nhân tạo (AI Voice/Vision)'],
    summary:
      'Học sinh tạo trò chơi đố vui toán học trên CodeKitten, trong đó Teky đưa ra câu hỏi và nhận diện đáp án bằng AI.',
    durationMinutes: 50,
    imageUrl: '/assets/aistudio/imgi_16_64841634dd9e7d4d20b2f58601225a4f_49e63c94.png',
    codeBlocks: [
      { category: 'Trí tuệ nhân tạo', color: '#0D9488', label: 'bật nhận diện giọng nói Tiếng Việt' },
      { category: 'Điều khiển', color: '#F97316', label: 'nếu Đáp_Án_Nói = Kết_Quả_Đúng thì' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'Teky khen ngợi và cộng điểm thưởng' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=teky-giai-toan-ai',
  },
  {
    id: 'bai-15-su-dung-bieu-thuc-tin-hoc-5',
    title: 'Bài 15 – Sử dụng biểu thức trong chương trình - Tin học 5 – Kết nối tri thức',
    themeId: 'tich-hop-ai',
    themeLabel: 'Tích hợp AI',
    level: 'Trung bình',
    grades: [5],
    skills: ['Biến & Biểu thức dữ liệu', 'Robot AI tương tác', 'Tin học 5 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten kết hợp mèo Teky và Robot AI đặt câu hỏi biểu thức so sánh > < = trên bảng số.',
    durationMinutes: 55,
    imageUrl: '/assets/aistudio/imgi_30_a75702753675d40833de1d42dba7856d_4a7fe1d4.png',
    codeBlocks: [
      { category: 'Biến số', color: '#EF4444', label: 'tạo ngẫu nhiên Số_A, Số_B từ 1 đến 10' },
      { category: 'Trí tuệ nhân tạo', color: '#0D9488', label: 'Robot AI đọc câu hỏi so sánh' },
      { category: 'Điều khiển', color: '#F97316', label: 'kiểm tra biểu thức Số_A > Số_B' },
    ],
    codeKittenUrl:
      'https://codekitten.vn/editor?project=bai-15-su-dung-bieu-thuc-tin-hoc-5',
  },
  {
    id: 'cau-truc-lap-ai-tin-hoc-5',
    title: 'Cấu trúc lặp - Tin học 5 – Kết nối tri thức',
    themeId: 'tich-hop-ai',
    themeLabel: 'Tích hợp AI',
    level: 'Trung bình',
    grades: [5],
    skills: ['Hình học & Góc quay', 'Trí tuệ nhân tạo (AI Voice/Vision)', 'Tin học 5 KNTT'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten ra lệnh bằng giọng nói/thị giác AI để bút vẽ lặp lại họa tiết ngày Tết.',
    durationMinutes: 55,
    imageUrl: '/assets/aistudio/imgi_32_7e7a6fa639de1081bf2a88e02eed5b1a_e7c953af.png',
    codeBlocks: [
      { category: 'Trí tuệ nhân tạo', color: '#0D9488', label: 'khi nhận diện lệnh vẽ từ AI Voice' },
      { category: 'Điều khiển', color: '#F97316', label: 'lặp lại Số_Lần để vẽ nét hoa văn' },
      { category: 'Chuyển động', color: '#3B82F6', label: 'xoay góc đối xứng và đổi màu nét' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=cau-truc-lap-ai-tin-hoc-5',
  },
  {
    id: 'nhom-khoi-lenh-su-kien',
    title: 'Nhóm khối lệnh Sự kiện',
    themeId: 'tich-hop-ai',
    themeLabel: 'Tích hợp AI',
    level: 'Cơ bản',
    grades: [1, 2, 3],
    gradeBadgeText: 'CƠ BẢN',
    skills: ['Nhóm khối lệnh Sự kiện', 'Phản hồi tương tác thông minh', 'Lập trình cơ bản'],
    summary:
      'Dự án lập trình mẫu trên nền tảng CodeKitten giúp mèo Teky và bạn nhỏ kích hoạt thí nghiệm tương tác qua các sự kiện đầu vào.',
    durationMinutes: 40,
    imageUrl: '/assets/aistudio/imgi_52_84d8cb6b106a1dc99021d3664cc997e3_66cdef6c.png',
    codeBlocks: [
      { category: 'Sự kiện', color: '#EAB308', label: 'khi bấm vào lá cờ xanh hoặc phím Space' },
      { category: 'Trí tuệ nhân tạo', color: '#0D9488', label: 'chờ tín hiệu kích hoạt từ người dùng' },
      { category: 'Hiển thị', color: '#8B5CF6', label: 'chạy hiệu ứng phản ứng hóa học' },
    ],
    codeKittenUrl: 'https://codekitten.vn/editor?project=nhom-khoi-lenh-su-kien',
  },
];
