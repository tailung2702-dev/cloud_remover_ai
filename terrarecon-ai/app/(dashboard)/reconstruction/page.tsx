"use client";

import { useState, useRef, useEffect } from "react";
import { Icon } from "@/components/ui/Icon";

export default function ReconstructionPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current && e.buttons === 1) { // Only update while dragging
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percent);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percent);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="px-lg py-md border-b border-outline-variant flex justify-between items-end bg-surface">
        <div>
          <div className="flex items-center gap-2 text-on-surface-variant mb-1">
            <span className="font-label-md text-label-md uppercase tracking-widest">Project Alpha-9</span>
            <span className="text-outline-variant">/</span>
            <span className="font-label-md text-label-md uppercase tracking-widest">Amazon Basin</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Reconstruction Analysis</h2>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-outline-variant rounded text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors">
            <Icon name="share" className="text-[18px]" />
            Share Analysis
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded font-label-md text-label-md hover:shadow-lg transition-all active:scale-95">
            <Icon name="add" className="text-[18px]" />
            New Analysis Task
          </button>
        </div>
      </section>

      {/* Main Workspace Grid */}
      <div className="flex-1 p-lg grid grid-cols-12 gap-lg overflow-hidden pb-24">
        {/* Comparison Viewer (Main Canvas) */}
        <div className="col-span-9 flex flex-col gap-lg">
          <div 
            className="relative flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden group select-none min-h-[500px]"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={(e) => handleMouseMove(e)}
          >
            {/* Before/After Labels */}
            <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-outline-variant shadow-sm">
              <span className="font-label-md text-label-md text-on-surface">BEFORE: Cloud-Obscured</span>
            </div>
            <div className="absolute top-4 right-4 z-10 bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20 shadow-sm pointer-events-none">
              <span className="font-label-md text-label-md text-primary">AFTER: AI Reconstructed</span>
            </div>

            {/* Comparison Container */}
            <div className="relative w-full h-full overflow-hidden cursor-col-resize">
              {/* After Image (Bottom) */}
              <div className="absolute inset-0">
                <img 
                  className="w-full h-full object-cover" 
                  alt="AI Reconstructed" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhfLyuYvrmJyLfInfH1tsp4SZji-wu6Qw3bQrAxBs2vCN2SUSHj3v2ixKA99xROTlT0KrNKt4ZMS6ElCasAOo24AXsfL64Kzepz4xQtozk5ODatYvJHNWzo4IG1xW8pGE-hGxRv8BoHfPSUpRAXrdxDnIanK5cddzc3FntqQLVhF-h5cNVZ8aZM36kjPLaHBhNfUHYddUh8Y5qb67q-d14bqNqij_ORw5FJpRElwCqvGSaiGGbafWaXrFrYeM1m9iCvNN-lVFbs7n-" 
                />
              </div>

              {/* Before Image (Top, Clipped) */}
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
                <img 
                  className="absolute top-0 left-0 h-full w-[100vw] max-w-none object-cover pointer-events-none" 
                  style={{ width: containerRef.current?.offsetWidth || '100%' }}
                  alt="Cloud Obscured" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpN2Ze9DO0bg5K6a-yZxx0T2tpHDP4paMoadeDV32k_aNS4kQEhou_ujV63DI7yUjxu_5oXx_XQ7h0ZflFnZwqs33kSwG7LJfN_uSL_cK2oWgRgDSSusQJqlW5Vxu-bK4U6pnkdBCtoLyHGFHElgeknYVTMxk7I8esy_W8DPklKSkQBQyOK298AMJ-aCfdzkWFiBaF0BCyIY0A6HXbQ18SFJSiMs5alziUojFti5eTz7c5DK86Y15l9oNdKYcWjLNaa5vHshqYiW8I" 
                />
              </div>

              {/* Divider Slider */}
              <div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-20 pointer-events-none" style={{ left: `${sliderPosition}%` }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary text-primary pointer-events-auto cursor-ew-resize">
                  <Icon name="unfold_more" className="text-[24px] rotate-90" />
                </div>
              </div>
            </div>

            {/* Floating Map HUD (Glassmorphism) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/70 backdrop-blur-md px-6 py-3 rounded-full border border-white/50 shadow-xl z-30 pointer-events-none">
              <div className="flex items-center gap-2 pr-4 border-r border-outline-variant/30">
                <Icon name="location_on" className="text-primary" />
                <span className="font-mono-data text-mono-data">3.4653° S, 62.2159° W</span>
              </div>
              <div className="flex items-center gap-2 pr-4 border-r border-outline-variant/30">
                <Icon name="calendar_today" className="text-secondary" />
                <span className="font-mono-data text-mono-data">Acquired: 2024-10-12</span>
              </div>
              <div className="flex items-center gap-4 pointer-events-auto">
                <button className="p-1 hover:text-primary transition-colors"><Icon name="zoom_in" /></button>
                <button className="p-1 hover:text-primary transition-colors"><Icon name="zoom_out" /></button>
                <button className="p-1 hover:text-primary transition-colors"><Icon name="layers" /></button>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="bg-surface border border-outline-variant rounded-xl p-4 flex justify-between items-center">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded font-label-md text-label-md hover:bg-primary-container transition-all active:scale-95 shadow-sm">
                <Icon name="download" className="text-[20px]" />
                Download Reconstructed TIFF
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-surface border border-outline-variant rounded text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors">
                <Icon name="image" className="text-[20px]" />
                Export PNG
              </button>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-white rounded font-label-md text-label-md hover:opacity-90 transition-all">
              <Icon name="analytics" className="text-[20px]" />
              Generate Quality Report
            </button>
          </div>
        </div>

        {/* Metrics Sidebar (Bento Style) */}
        <div className="col-span-3 flex flex-col gap-lg overflow-y-auto">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-xs">Reconstruction Metrics</h3>
          
          {/* Metric Card 1 */}
          <div className="bg-white border border-[#E5E1D3] rounded-xl p-md flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="font-label-md text-label-md text-on-surface-variant">Reconstruction Accuracy</span>
              <Icon name="verified" filled className="text-primary opacity-50" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-headline-lg text-on-surface">98.5%</span>
              <span className="text-on-secondary-container bg-secondary-container px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                <Icon name="trending_up" className="text-[12px]" />
                +0.2%
              </span>
            </div>
            <div className="w-full bg-surface-container h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-primary h-full" style={{ width: "98.5%" }}></div>
            </div>
          </div>

          {/* Metric Card 2 */}
          <div className="bg-white border border-[#E5E1D3] rounded-xl p-md flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="font-label-md text-label-md text-on-surface-variant">Quality Score (SSIM)</span>
              <Icon name="high_quality" filled className="text-secondary opacity-50" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-headline-lg text-on-surface">0.94</span>
              <span className="text-on-surface-variant font-mono-data text-[11px]">/ 1.00</span>
            </div>
            {/* Sparkline */}
            <div className="h-12 w-full mt-2 relative">
              <svg className="w-full h-full" viewBox="0 0 100 30">
                <path d="M0,25 L10,22 L20,24 L30,18 L40,20 L50,15 L60,17 L70,12 L80,14 L90,8 L100,10" fill="none" stroke="#006a6a" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
              </svg>
            </div>
          </div>

          {/* Metric Card 3 */}
          <div className="bg-white border border-[#E5E1D3] rounded-xl p-md flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="font-label-md text-label-md text-on-surface-variant">Recovered Area</span>
              <Icon name="map" filled className="text-tertiary opacity-50" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-headline-lg text-on-surface">124</span>
              <span className="text-on-surface-variant font-mono-data text-[14px]">km²</span>
            </div>
            <p className="text-[11px] text-on-surface-variant mt-1">Calculated from 1,420 tiles reconstructed via GAN-v4.</p>
          </div>

          {/* Technical Specs Panel */}
          <div className="mt-4">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-md">Technical Parameters</h3>
            <div className="bg-surface-container-low rounded-xl p-md flex flex-col gap-3">
              <div className="flex justify-between items-center py-1 border-b border-outline-variant/30">
                <span className="text-body-sm text-on-surface-variant">Resolution</span>
                <span className="font-mono-data text-mono-data">0.5m/px</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-outline-variant/30">
                <span className="text-body-sm text-on-surface-variant">Model Version</span>
                <span className="font-mono-data text-mono-data">Recon-v4.2-E</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-outline-variant/30">
                <span className="text-body-sm text-on-surface-variant">Spectral Bands</span>
                <span className="font-mono-data text-mono-data">RGB + NIR</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-body-sm text-on-surface-variant">Process Time</span>
                <span className="font-mono-data text-mono-data">42.8s</span>
              </div>
            </div>
          </div>

          {/* Status Activity */}
          <div className="mt-4">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-md">Audit Log</h3>
            <div className="flex flex-col gap-4 pl-2 border-l-2 border-surface-container-high ml-1">
              <div className="relative">
                <div className="absolute -left-[13px] top-1 w-2 h-2 rounded-full bg-primary"></div>
                <p className="text-body-sm font-medium">Reconstruction Complete</p>
                <p className="text-[10px] text-on-surface-variant">14:02 UTC - System AI</p>
              </div>
              <div className="relative opacity-60">
                <div className="absolute -left-[13px] top-1 w-2 h-2 rounded-full bg-outline"></div>
                <p className="text-body-sm">Atmospheric Correction</p>
                <p className="text-[10px] text-on-surface-variant">13:58 UTC - Core-v2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
