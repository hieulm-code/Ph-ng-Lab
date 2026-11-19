import React, { useEffect, useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { SunburstBackdrop } from './SunburstBackdrop';

interface LeadFooterSectionProps {
  preselectedGrade?: number;
}

interface LeadSuccessPayload {
  registrationCode: string;
  parentName: string;
  grade: number;
  trialUsername: string;
  message: string;
}

export const LeadFooterSection: React.FC<LeadFooterSectionProps> = ({
  preselectedGrade,
}) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState<string>(preselectedGrade ? String(preselectedGrade) : '4');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<LeadSuccessPayload | null>(null);

  useEffect(() => {
    if (preselectedGrade && preselectedGrade >= 1 && preselectedGrade <= 9) {
      setGrade(String(preselectedGrade));
    }
  }, [preselectedGrade]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentName,
          phone,
          grade: Number(grade),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrorMsg(data.error || 'Không thể gửi đăng ký. Vui lòng kiểm tra lại thông tin.');
        return;
      }

      setSuccessData(data);
    } catch {
      setErrorMsg('Kết nối mạng tạm gián đoạn. Vui lòng thử lại sau ít giây.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer id="dang-ky" className="relative overflow-hidden text-[#0C2B27]">
      {/* Rotating Sunburst Background matching Section 1 */}
      <SunburstBackdrop tone="footer" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Persuasive Headline + Floating Cutout Illustration */}
          <div className="lg:col-span-6">
            <p className="inline-flex w-fit rounded-md bg-[#60C3AC] px-3 py-1 text-xs font-bold tracking-wider text-[#0C2B27] uppercase whitespace-nowrap">
              Đăng ký Tài khoản CodeKitten Miễn phí
            </p>
            <h2
              className="mt-3 font-display font-extrabold tracking-tight text-[#0C2B27] text-balance"
              style={{ fontSize: 'clamp(1.65rem, 2.8vw, 2.35rem)', lineHeight: 1.18 }}
            >
              ĐỂ CON TRỞ THÀNH NHÀ SÁNG TẠO CÔNG NGHỆ, KHÔNG CHỈ LÀ NGƯỜI TIÊU THỤ!
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed font-medium text-[#163D38] text-pretty">
              Bắt đầu hành trình lập trình đầu tiên với các dự án thực tế. Phụ huynh nhận
              ngay tài khoản CodeKitten cùng lộ trình 48 bài học kéo thả đúng khối lớp.
            </p>

            {/* Transparent Cutout Character Illustration with continuous floating animation */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <img
                src="/assets/aistudio/2091a77d-3d6d-4924-93b8-933cea64206c_976a3a21.png"
                alt="Nhân vật CodeKitten và học sinh cùng lắp ghép khối lệnh sáng tạo"
                referrerPolicy="no-referrer"
                className="animate-character-float h-auto max-h-[250px] w-auto object-contain drop-shadow-[0_16px_22px_rgba(12,43,39,0.16)]"
              />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 rounded-2xl border border-[#60C3AC]/60 bg-[#FFFFFF]/90 p-5 backdrop-blur-xs sm:grid-cols-3 text-sm">
              <div className="flex flex-col justify-between">
                <div className="font-display text-[13px] font-extrabold tracking-tight text-[#0C2B27] whitespace-nowrap">
                  Miễn phí 100%
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-[#2D5952] text-pretty">
                  Mở khóa bộ dự án mẫu CodeKitten theo đúng khối lớp của con
                </p>
              </div>
              <div className="flex flex-col justify-between">
                <div className="font-display text-[13px] font-extrabold tracking-tight text-[#0C2B27] whitespace-nowrap">
                  Học với giáo viên 1-1
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-[#2D5952] text-pretty">
                  Giáo viên TEKY hướng dẫn và đánh giá tư duy logic trực tiếp
                </p>
              </div>
              <div className="flex flex-col justify-between">
                <div className="font-display text-[13px] font-extrabold tracking-tight text-[#0C2B27] whitespace-nowrap">
                  Sản phẩm thật
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-[#2D5952] text-pretty">
                  Con tự tay hoàn thiện tựa game đầu tiên ngay buổi học đầu
                </p>
              </div>
            </div>
          </div>

          {/* Right Lead Capture Form on Crisp White Surface */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border-2 border-[#0C2B27] bg-[#FFFFFF] p-6 text-[#0C2B27] shadow-[0_8px_0_#60C3AC] sm:p-8">
              {successData ? (
                <div className="py-4">
                  <div className="flex items-center gap-3 text-[#156A5C]">
                    <CheckCircle2 className="h-7 w-7 shrink-0" aria-hidden="true" />
                    <h3 className="font-display text-xl font-extrabold text-[#0C2B27]">
                      {successData.message}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm text-[#2D5952]">
                    Cảm ơn phụ huynh <strong>{successData.parentName}</strong>. Tài khoản thực
                    hành dành cho học sinh <strong>Khối {successData.grade}</strong> đã được
                    khởi tạo:
                  </p>

                  <div className="mt-5 rounded-xl border border-[#60C3AC] bg-[#F2FBF9] p-4 text-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#2D5952]">Mã đăng ký:</span>
                      <span className="font-mono font-bold text-[#0C2B27] tabular-nums">
                        {successData.registrationCode}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#2D5952]">Tài khoản CodeKitten:</span>
                      <span className="font-mono font-bold text-[#156A5C]">
                        {successData.trialUsername}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSuccessData(null);
                      setParentName('');
                      setPhone('');
                    }}
                    className="mt-6 w-full min-h-[44px] rounded-xl border border-[#60C3AC] bg-[#60C3AC]/20 px-4 py-2.5 text-xs font-bold text-[#0C2B27] hover:bg-[#FFF34D] cursor-pointer"
                  >
                    Đăng ký thêm cho bé khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label
                      htmlFor="parent-name"
                      className="block text-xs font-bold text-[#0C2B27] mb-1.5"
                    >
                      Họ và tên Phụ huynh <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      id="parent-name"
                      name="parentName"
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="VD: Nguyễn Minh Anh"
                      className="min-h-[46px] w-full rounded-xl border border-[#BFE3DB] bg-[#F8FCFB] px-4 py-2.5 text-sm text-[#0C2B27] placeholder:text-[#6B8E88] focus:border-[#60C3AC] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="parent-phone"
                      className="block text-xs font-bold text-[#0C2B27] mb-1.5"
                    >
                      Số điện thoại (Zalo) <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      id="parent-phone"
                      name="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="VD: 0912 345 678"
                      className="min-h-[46px] w-full rounded-xl border border-[#BFE3DB] bg-[#F8FCFB] px-4 py-2.5 text-sm text-[#0C2B27] placeholder:text-[#6B8E88] focus:border-[#60C3AC] focus:bg-white focus:outline-none tabular-nums"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="student-grade"
                      className="block text-xs font-bold text-[#0C2B27] mb-1.5"
                    >
                      Con đang học Khối Lớp <span className="text-[#DC2626]">*</span>
                    </label>
                    <select
                      id="student-grade"
                      name="grade"
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="min-h-[46px] w-full rounded-xl border border-[#BFE3DB] bg-[#F8FCFB] px-4 py-2.5 text-sm font-semibold text-[#0C2B27] focus:border-[#60C3AC] focus:bg-white focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((g) => (
                        <option key={g} value={String(g)}>
                          Khối {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  {errorMsg ? (
                    <div
                      role="alert"
                      className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-3.5 py-2.5 text-xs font-semibold text-[#991B1B]"
                    >
                      {errorMsg}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 border-[#0C2B27] bg-[#60C3AC] px-5 py-3 text-sm font-extrabold text-[#0C2B27] shadow-[0_4px_0_#0C2B27] transition-all duration-150 hover:bg-[#FFF34D] active:translate-y-[2px] active:shadow-[0_2px_0_#0C2B27] disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C2B27] cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        <span>Đang khởi tạo tài khoản...</span>
                      </>
                    ) : (
                      <span>Đăng ký nhận tài khoản Thực hành miễn phí</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quiet Copyright Bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#0C2B27]/15 pt-6 text-xs font-semibold text-[#163D38] lg:flex-row lg:items-center">
          <p className="whitespace-nowrap">© 2026 Phòng Lập trình - AI · CodeKitten Lab.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#top" className="hover:text-[#0C2B27] hover:underline whitespace-nowrap">
              Đầu trang
            </a>
            <a href="#gioi-thieu-lam-game" className="hover:text-[#0C2B27] hover:underline whitespace-nowrap">
              Làm game 15 phút
            </a>
            <a href="#tu-duy-cot-loi" className="hover:text-[#0C2B27] hover:underline whitespace-nowrap">
              5 Tư duy cốt lõi
            </a>
            <a href="#bo-loc-du-an" className="hover:text-[#0C2B27] hover:underline whitespace-nowrap">
              Lộ trình Khối 1–9
            </a>
            <a href="#thu-vien-du-an" className="hover:text-[#0C2B27] hover:underline whitespace-nowrap">
              Kho 48 dự án
            </a>
            <a href="#thuc-hanh-doi-thuc" className="hover:text-[#0C2B27] hover:underline whitespace-nowrap">
              Thực hành đời thực
            </a>
            <a href="#faq-codekitten" className="hover:text-[#0C2B27] hover:underline whitespace-nowrap">
              Hỏi đáp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
