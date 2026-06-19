"use client";

import { useState, useRef, useEffect } from "react";
import { Icon } from "@/components/ui/Icon";

export default function CloudDetectionPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [showToast, setShowToast] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    // Show a brief success toast after 1 second
    const timer1 = setTimeout(() => setShowToast(true), 1000);
    const timer2 = setTimeout(() => setShowToast(false), 5000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

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
    <div className="space-y-xl pb-24">
      {/* Header Section */}
      <div className="mb-lg flex flex-col sm:flex-row justify-between items-start sm:items-end gap-md">
        <div>
          <nav className="flex items-center gap-2 text-on-surface-variant mb-2">
            <span className="font-label-md text-label-md uppercase tracking-widest">Project 882-Alpha</span>
            <Icon name="chevron_right" className="text-[14px]" />
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary">Detection Mask V4</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Cloud Detection Analysis</h2>
          <p className="text-on-surface-variant font-body-md mt-1">Satellite: Sentinel-2B | Acquisition: 2024-05-12 14:22:01 UTC | Region: Amazon Basin, Brazil</p>
        </div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-md py-2 border border-outline-variant rounded hover:bg-surface-container transition-colors flex items-center justify-center gap-2 text-on-surface font-label-md">
            <Icon name="download" className="text-[18px]" />
            Export Mask
          </button>
          <button className="flex-1 sm:flex-none px-md py-2 bg-primary text-white rounded hover:shadow-lg transition-all flex items-center justify-center gap-2 font-label-md">
            <Icon name="share" className="text-[18px]" />
            Share Report
          </button>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-12 gap-lg">
        {/* Main Comparison Viewer */}
        <div className="col-span-12 lg:col-span-8 space-y-lg">
          <div 
            className="bg-white border border-[#E5E1D3] rounded-xl overflow-hidden relative group select-none h-[380px] sm:h-[520px]" 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={(e) => handleMouseMove(e)}
          >
            <div className="absolute inset-0 flex">
              {/* Left Side: Original */}
              <div className="h-full relative overflow-hidden" style={{ width: `${sliderPosition}%` }}>
                <img 
                  className="absolute top-0 left-0 h-full max-w-none object-cover" 
                  style={{ width: containerWidth ? `${containerWidth}px` : '100%', maxWidth: 'none' }}
                  alt="Original RGB" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL4Lo1RuSiRjnJhkUuzRKmj2jpEaN5B8zH4KCoRtffcl__O03AajQiHmcS-mQZNQmQRFS1ce_Sws634lj82x-HKxkhFLiy34recWh68yBsXItm8lBykzGBvo8AXD2kZd-SwSu06EzguKDJB12HEZe9Nj4DwiLTBpyAAXF_THZJThICi-jiqrJ6w7j19aI_lUGa949iDZ-fbLd5VFBa99RK4K4_iHav1P_Eg9qsS-PX2icWu-CXgobDhzZsctxzJqCIg1pj7hbNhSYJ" 
                />
                <div className="absolute top-4 left-4 glass-hud px-3 py-1 rounded text-[11px] font-bold text-primary-container z-20">ORIGINAL RGB</div>
              </div>
              
              {/* Right Side: Cloud Mask */}
              <div className="h-full relative overflow-hidden flex-1 border-l border-white/20">
                <img 
                  className="absolute top-0 right-0 h-full max-w-none object-cover" 
                  style={{ width: containerWidth ? `${containerWidth}px` : '100%', right: '0px', maxWidth: 'none' }}
                  alt="Albedo Mask" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0HxWLanzhLrVIBi7tbaovJBr0FcEwAKE4T_w3gm4aOW1DTHRjkU3mBLTTZSVTHUzHr1gdvPW5VoQjIQIi9LmebVwr9thFl0jwnsjeH7dK_SWX0pSf6ljcm-6bMFuIP1mHilSW22XCWpdUidJfpUWDZAYPOk_QhpW8EguSb-ECZmUsyi-b7yU5rH0lQh8wGa-UOZMJ1obPfp5ujDjEz4U5tLRUvFEShhzwosBkKw8u6D34_OWMn-AEtbGAy6QiU9u09Jmu5cGU01Yb" 
                />
                <div className="absolute top-4 right-4 glass-hud px-3 py-1 rounded text-[11px] font-bold text-secondary-container z-20">ALBEDO MASK</div>
              </div>
            </div>

            {/* HUD Controls */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 glass-hud px-4 py-2 rounded-2xl sm:rounded-full flex flex-col sm:flex-row items-center gap-2 sm:gap-6 z-30 w-[90%] sm:w-auto pointer-events-none">
              <div className="flex items-center justify-center gap-4 sm:border-r border-outline-variant/30 sm:pr-4 w-full sm:w-auto pb-1 sm:pb-0 border-b sm:border-b-0 border-outline-variant/20 pointer-events-auto">
                <button className="hover:bg-primary/10 p-1 rounded transition-colors"><Icon name="zoom_in" className="text-primary" /></button>
                <button className="hover:bg-primary/10 p-1 rounded transition-colors"><Icon name="zoom_out" className="text-primary" /></button>
                <button className="hover:bg-primary/10 p-1 rounded transition-colors"><Icon name="layers" className="text-primary" /></button>
              </div>
              <div className="flex items-center justify-center gap-3 w-full sm:w-auto pointer-events-auto">
                <span className="font-label-md text-label-md text-on-surface-variant">Mask Opacity</span>
                <input className="w-24 h-1 bg-primary-container rounded-full appearance-none accent-primary" type="range" defaultValue={85} />
                <span className="font-mono-data text-mono-data text-primary">85%</span>
              </div>
            </div>

            {/* Comparison Handle */}
            <div className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-10" style={{ left: `${sliderPosition}%` }}></div>
            <div 
              className="absolute top-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-11 -translate-y-1/2 -translate-x-1/2 cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <Icon name="unfold_more_double" className="text-primary text-[18px] rotate-90" />
            </div>
          </div>

          {/* Timeline of Detection Events */}
          <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-md">Inference Pipeline Events</h3>
            <div className="relative space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant/30">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-4 h-4 bg-primary-container rounded-full border-4 border-white"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-label-md text-label-md font-bold">Inference Engine Complete</p>
                    <p className="text-body-sm text-on-surface-variant">Convolutional Neural Network (CNN) pass finalized with 128 feature layers.</p>
                  </div>
                  <span className="font-mono-data text-mono-data text-outline-variant">14:23:45 UTC</span>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-4 h-4 bg-secondary-container rounded-full border-4 border-white"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-label-md text-label-md font-bold">Cirrus Filtering Active</p>
                    <p className="text-body-sm text-on-surface-variant">Detected high-altitude ice crystals; applying secondary thermal spectral correction.</p>
                  </div>
                  <span className="font-mono-data text-mono-data text-outline-variant">14:23:12 UTC</span>
                </div>
              </div>
              
              <div className="relative pl-8 opacity-60">
                <div className="absolute left-0 top-1 w-4 h-4 bg-outline-variant rounded-full border-4 border-white"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-label-md text-label-md font-bold">Image Orthorectification</p>
                    <p className="text-body-sm text-on-surface-variant">Geometry correction applied based on DEM (Digital Elevation Model).</p>
                  </div>
                  <span className="font-mono-data text-mono-data text-outline-variant">14:22:58 UTC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Data Stats */}
        <div className="col-span-12 lg:col-span-4 space-y-lg">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-md">
            <div className="bg-white border border-[#E5E1D3] p-md rounded-xl">
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">Cloud Coverage</p>
              <h4 className="font-headline-lg text-headline-lg text-primary">32.4%</h4>
              <div className="mt-3 w-full bg-surface-container h-1 rounded-full overflow-hidden">
                <div className="bg-primary h-full" style={{ width: "32.4%" }}></div>
              </div>
            </div>
            
            <div className="bg-white border border-[#E5E1D3] p-md rounded-xl">
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">Visible Area</p>
              <h4 className="font-headline-lg text-headline-lg text-secondary">67.6%</h4>
              <div className="mt-3 w-full bg-surface-container h-1 rounded-full overflow-hidden">
                <div className="bg-secondary h-full" style={{ width: "67.6%" }}></div>
              </div>
            </div>
            
            <div className="bg-white border border-[#E5E1D3] p-md rounded-xl">
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">Cloud Pixels</p>
              <h4 className="font-headline-lg text-headline-lg text-on-surface">4.2M</h4>
              <p className="font-mono-data text-[10px] text-outline-variant mt-2">Σ (p {'>'} 0.85 threshold)</p>
            </div>
            
            <div className="bg-white border border-[#E5E1D3] p-md rounded-xl">
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">Confidence</p>
              <h4 className="font-headline-lg text-headline-lg text-tertiary">99.8%</h4>
              <p className="font-mono-data text-[10px] text-outline-variant mt-2">σ = 0.002 accuracy</p>
            </div>
          </div>

          {/* Atmospheric Profile */}
          <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl">
            <div className="flex justify-between items-center mb-md">
              <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Spectral Profile</h3>
              <Icon name="insights" className="text-primary text-[20px]" />
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-body-sm text-body-sm">Short-wave Infrared</span>
                  <span className="font-mono-data text-mono-data">High Reflection</span>
                </div>
                <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full" style={{ width: "78%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-body-sm text-body-sm">Near-Infrared (NIR)</span>
                  <span className="font-mono-data text-mono-data">Medium Scat.</span>
                </div>
                <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="bg-primary-container h-full" style={{ width: "45%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-body-sm text-body-sm">Vapor Absorption</span>
                  <span className="font-mono-data text-mono-data">Intense</span>
                </div>
                <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="bg-error h-full" style={{ width: "92%" }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-lg pt-lg border-t border-surface-variant">
              <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
                "Algorithm detected significant high-altitude cirrus formations in the northwestern quadrant. Masking adjusted for glint suppression over water bodies."
              </p>
            </div>
          </div>

          {/* Map Context */}
          <div className="bg-white border border-[#E5E1D3] p-base rounded-xl overflow-hidden relative">
            <div className="h-48 bg-surface-container relative">
              <img 
                className="w-full h-full object-cover grayscale contrast-75 opacity-80" 
                alt="Amazon Basin" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvgKDyKEJqGk22qhw98__AyGbKg4Bi2uLqkaW4W_Ta7-t-nsmcAQwbfmqPygNPzx3Rznbrc59MZpFvXDo4L9K3dzpG92TEwA8Pf--HlOgr2_SyrO3k4vNeHu-Ky0nLHbD-rD3PY2mOTcmLUqvM1U-x6UeL-fIc4RqfpRp1w1JZUDy5EAbf372QFiOV1Mc0VLAdunSKMHsL85JU0zHzRQoWVDg84VfYLI8-a-cGuB9KWQ2BvxD9coXw33z_S1EfY1D8UTCXgLYvJ9jX" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <Icon name="location_on" filled className="text-white text-[18px]" />
                <span className="text-white font-label-md text-label-md">03°06'S 60°01'W</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Feedback (Toast) */}
      <div 
        className={`fixed bottom-8 right-8 glass-hud px-6 py-4 rounded-xl shadow-xl flex items-center gap-4 transition-transform duration-500 z-50 ${showToast ? 'translate-y-0' : 'translate-y-24 opacity-0 pointer-events-none'}`}
      >
        <Icon name="check_circle" filled className="text-secondary" />
        <div>
          <p className="font-label-md text-label-md">Mask Processed Successfully</p>
          <p className="text-body-sm text-on-surface-variant">Data ready for reconstruction pipeline.</p>
        </div>
      </div>
    </div>
  );
}
