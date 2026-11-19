import React from 'react';

interface SunburstBackdropProps {
  tone?: 'hero' | 'footer';
}

export const SunburstBackdrop: React.FC<SunburstBackdropProps> = ({ tone = 'hero' }) => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {/* Base Downey Green + Canary tint layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: tone === 'hero' ? '#FFF8D6' : '#FFF7CE',
        }}
      />

      {/* Centered oversized sunburst rotating 360° continuously */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/assets/aistudio/fc1035b5-5543-41d2-8e0c-7b8fb0ea4e08_a716ad49.png"
          alt=""
          referrerPolicy="no-referrer"
          className="animate-sunburst h-[190vmax] w-[190vmax] max-w-none shrink-0 object-cover opacity-95"
        />
      </div>

      {/* Soft Downey Green radial framing at outer edges to anchor contrast & palette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            tone === 'hero'
              ? 'radial-gradient(circle at 72% 48%, rgba(255,243,77,0.10) 0%, rgba(96,195,172,0.22) 72%, rgba(96,195,172,0.34) 100%)'
              : 'radial-gradient(circle at 26% 42%, rgba(255,243,77,0.12) 0%, rgba(96,195,172,0.28) 70%, rgba(96,195,172,0.42) 100%)',
        }}
      />
    </div>
  );
};
