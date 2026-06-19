"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<number>(0);

  return (
    <div className="space-y-xl pb-24">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-md">
        <div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Reports</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Generate, manage, and export analysis reports.</p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-sm bg-primary text-white px-lg py-sm rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all active:scale-95 shadow-sm">
          <Icon name="add" className="text-[18px]" />
          CREATE NEW REPORT
        </button>
      </div>

      {/* Bento Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
        <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl flex flex-col justify-between hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] transition-shadow dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase">Total Reports</span>
          <div className="mt-md flex items-baseline gap-sm">
            <span className="font-headline-lg text-headline-lg text-primary">1,284</span>
            <span className="text-secondary font-label-md text-label-md flex items-center">
              <Icon name="trending_up" className="text-[14px] mr-1" /> 12%
            </span>
          </div>
        </div>
        
        <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl flex flex-col justify-between hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] transition-shadow dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase">Generated This Month</span>
          <div className="mt-md flex items-baseline gap-sm">
            <span className="font-headline-lg text-headline-lg text-primary">142</span>
            <span className="text-on-surface-variant font-label-md text-label-md">vs 118 last month</span>
          </div>
        </div>
        
        <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl flex flex-col justify-between hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] transition-shadow dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase">Processing Accuracy</span>
          <div className="mt-md flex items-baseline gap-sm w-full">
            <span className="font-headline-lg text-headline-lg text-primary">99.2%</span>
            <div className="flex-1 h-1.5 bg-surface-container-high rounded-full overflow-hidden ml-md">
              <div className="h-full bg-secondary" style={{ width: "99.2%" }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl flex flex-col justify-between hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] transition-shadow dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase">Export Count</span>
          <div className="mt-md flex items-baseline justify-between gap-sm">
            <span className="font-headline-lg text-headline-lg text-primary">5.8k</span>
            <Icon name="file_export" className="text-on-surface-variant opacity-30 text-[24px]" />
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border border-[#E5E1D3] p-md rounded-xl flex flex-col lg:flex-row lg:items-center gap-lg dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
        <div className="flex items-center gap-sm">
          <Icon name="filter_list" className="text-on-surface-variant" />
          <span className="font-label-md text-label-md uppercase text-on-surface">Filters:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-1 gap-md w-full">
          <select className="bg-white border border-[#E5E1D3] rounded-lg px-md py-sm font-body-sm text-body-sm focus:ring-1 focus:ring-primary text-on-surface w-full lg:min-w-[140px] dark:bg-[#060b17] dark:border-white/10 dark:text-on-surface">
            <option>Date Range</option>
            <option>Last 24 Hours</option>
            <option>Last 7 Days</option>
            <option>Current Quarter</option>
          </select>
          <select className="bg-white border border-[#E5E1D3] rounded-lg px-md py-sm font-body-sm text-body-sm focus:ring-1 focus:ring-primary text-on-surface w-full lg:min-w-[140px] dark:bg-[#060b17] dark:border-white/10 dark:text-on-surface">
            <option>Region</option>
            <option>North America</option>
            <option>Europe (EU)</option>
            <option>Asia Pacific</option>
            <option>South America</option>
          </select>
          <select className="bg-white border border-[#E5E1D3] rounded-lg px-md py-sm font-body-sm text-body-sm focus:ring-1 focus:ring-primary text-on-surface w-full lg:min-w-[140px] dark:bg-[#060b17] dark:border-white/10 dark:text-on-surface">
            <option>Satellite Source</option>
            <option>Sentinel-2A</option>
            <option>Landsat 9</option>
            <option>TerraRecon-1</option>
          </select>
          <select className="bg-white border border-[#E5E1D3] rounded-lg px-md py-sm font-body-sm text-body-sm focus:ring-1 focus:ring-primary text-on-surface w-full lg:min-w-[140px] dark:bg-[#060b17] dark:border-white/10 dark:text-on-surface">
            <option>Report Type</option>
            <option>Agriculture</option>
            <option>Environmental</option>
            <option>Urban Planning</option>
          </select>
        </div>
        <button className="text-primary font-label-md text-label-md hover:underline self-end lg:self-auto">Clear All</button>
      </div>

      {/* Content Grid: Table + Preview Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
        {/* Report History Table (Left 2 Columns) */}
        <div className="lg:col-span-2 space-y-md min-w-0">
          <div className="bg-white border border-[#E5E1D3] rounded-xl overflow-hidden dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[650px] lg:min-w-0">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant">
                  <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Report Name</th>
                  <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Region</th>
                  <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Date</th>
                  <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
                  <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="font-body-sm text-body-sm text-on-surface">
                <tr 
                  className={`border-b border-outline-variant transition-colors cursor-pointer ${selectedReport === 0 ? 'bg-secondary-container/10' : 'hover:bg-surface-container-low'}`}
                  onClick={() => setSelectedReport(0)}
                >
                  <td className="px-lg py-md font-semibold">Agriculture Assessment Report</td>
                  <td className="px-lg py-md">Central Valley, CA</td>
                  <td className="px-lg py-md text-on-surface-variant">Oct 24, 2023</td>
                  <td className="px-lg py-md">
                    <span className="inline-flex items-center gap-1.5 px-sm py-0.5 rounded-full bg-[#E6F4EA] text-[#137333] text-[11px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#137333]"></span> COMPLETED
                    </span>
                  </td>
                  <td className="px-lg py-md text-right space-x-md">
                    <button className="text-primary hover:text-primary-container"><Icon name="visibility" className="align-middle text-[18px]" /></button>
                    <button className="text-on-surface-variant hover:text-on-surface"><Icon name="download" className="align-middle text-[18px]" /></button>
                  </td>
                </tr>
                <tr 
                  className={`border-b border-outline-variant transition-colors cursor-pointer ${selectedReport === 1 ? 'bg-secondary-container/10' : 'hover:bg-surface-container-low'}`}
                  onClick={() => setSelectedReport(1)}
                >
                  <td className="px-lg py-md font-semibold">Flood Impact Report</td>
                  <td className="px-lg py-md">Brahmaputra Basin</td>
                  <td className="px-lg py-md text-on-surface-variant">Oct 22, 2023</td>
                  <td className="px-lg py-md">
                    <span className="inline-flex items-center gap-1.5 px-sm py-0.5 rounded-full bg-[#E6F4EA] text-[#137333] text-[11px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#137333]"></span> COMPLETED
                    </span>
                  </td>
                  <td className="px-lg py-md text-right space-x-md">
                    <button className="text-primary hover:text-primary-container"><Icon name="visibility" className="align-middle text-[18px]" /></button>
                    <button className="text-on-surface-variant hover:text-on-surface"><Icon name="download" className="align-middle text-[18px]" /></button>
                  </td>
                </tr>
                <tr 
                  className={`border-b border-outline-variant transition-colors cursor-pointer ${selectedReport === 2 ? 'bg-secondary-container/10' : 'hover:bg-surface-container-low'}`}
                  onClick={() => setSelectedReport(2)}
                >
                  <td className="px-lg py-md font-semibold">Forest Health Report</td>
                  <td className="px-lg py-md">Amazon Region B</td>
                  <td className="px-lg py-md text-on-surface-variant">Oct 19, 2023</td>
                  <td className="px-lg py-md">
                    <span className="inline-flex items-center gap-1.5 px-sm py-0.5 rounded-full bg-[#E8F0FE] text-[#1967D2] text-[11px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1967D2] animate-pulse"></span> PROCESSING
                    </span>
                  </td>
                  <td className="px-lg py-md text-right space-x-md">
                    <button className="text-primary hover:text-primary-container"><Icon name="visibility" className="align-middle text-[18px]" /></button>
                    <button className="text-on-surface-variant opacity-30 cursor-not-allowed"><Icon name="download" className="align-middle text-[18px]" /></button>
                  </td>
                </tr>
                <tr 
                  className={`border-b border-outline-variant transition-colors cursor-pointer ${selectedReport === 3 ? 'bg-secondary-container/10' : 'hover:bg-surface-container-low'}`}
                  onClick={() => setSelectedReport(3)}
                >
                  <td className="px-lg py-md font-semibold">Land Use Analysis</td>
                  <td className="px-lg py-md">Metropolitan Berlin</td>
                  <td className="px-lg py-md text-on-surface-variant">Oct 15, 2023</td>
                  <td className="px-lg py-md">
                    <span className="inline-flex items-center gap-1.5 px-sm py-0.5 rounded-full bg-[#E6F4EA] text-[#137333] text-[11px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#137333]"></span> COMPLETED
                    </span>
                  </td>
                  <td className="px-lg py-md text-right space-x-md">
                    <button className="text-primary hover:text-primary-container"><Icon name="visibility" className="align-middle text-[18px]" /></button>
                    <button className="text-on-surface-variant hover:text-on-surface"><Icon name="download" className="align-middle text-[18px]" /></button>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            
            <div className="px-lg py-md bg-surface-container-low flex items-center justify-between border-t border-outline-variant">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Showing 4 of 1,284 results</span>
              <div className="flex gap-sm">
                <button className="p-1 rounded border border-outline-variant hover:bg-white disabled:opacity-30" disabled>
                  <Icon name="chevron_left" />
                </button>
                <button className="p-1 rounded border border-outline-variant hover:bg-white bg-white">
                  <Icon name="chevron_right" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Card (Right Column) */}
        <div className="space-y-md">
          <div className="bg-white border border-[#E5E1D3] rounded-xl overflow-hidden flex flex-col shadow-sm dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
            <div className="relative h-48 bg-surface-container-high group">
              <img 
                className="w-full h-full object-cover" 
                alt="Agriculture Field" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzgsiAnusbTQNJ3Ex76vaE4MN4ZszwCh86HSadg7EmG_4ITHeJ7M5RdLOrsRJamq9MgMQCj_xEFxgkzlnmvnkchIdnFKU0CsTbliqq5Yu-XTuVsTUa1kvOO2FCoOK6ri1UmI2vWfWp1NZ0gVhwkGJpAqTFsy32ui7pJYhZzT3HmlRKZQ4GoQrgs0PnqCXWGH3S4L5jYFJsGKIX7wPRFUsR07OClnlW7fwF4fcBtyOMhCKWBChzjLT8uU6suvLsUpo961SsGuSBECpk" 
              />
              <div className="absolute top-md right-md glass-hud px-sm py-1 rounded border border-white/50 text-[11px] font-bold text-primary flex items-center gap-xs">
                <Icon name="public" className="text-[14px]" /> GIS READY
              </div>
            </div>
            
            <div className="p-lg space-y-lg">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface">Report Summary</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">Agriculture Assessment Report #TR-2023-042. Multi-spectral analysis of vegetation health across 12,000 hectares of prime cropland.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-md">
                <div className="bg-surface-container-low p-sm rounded-lg border border-[#E5E1D3] dark:bg-[#060b17]/60 dark:border-white/10">
                  <span className="font-label-md text-label-md text-on-surface-variant block uppercase">Coverage Area</span>
                  <span className="font-mono-data text-mono-data font-bold">12,452 ha</span>
                </div>
                <div className="bg-surface-container-low p-sm rounded-lg border border-[#E5E1D3] dark:bg-[#060b17]/60 dark:border-white/10">
                  <span className="font-label-md text-label-md text-on-surface-variant block uppercase">Cloud Cover</span>
                  <span className="font-mono-data text-mono-data font-bold">0.42%</span>
                </div>
                <div className="bg-surface-container-low p-sm rounded-lg border border-[#E5E1D3] dark:bg-[#060b17]/60 dark:border-white/10">
                  <span className="font-label-md text-label-md text-on-surface-variant block uppercase">Accuracy</span>
                  <span className="font-mono-data text-mono-data font-bold text-secondary">99.8%</span>
                </div>
                <div className="bg-surface-container-low p-sm rounded-lg border border-[#E5E1D3] dark:bg-[#060b17]/60 dark:border-white/10">
                  <span className="font-label-md text-label-md text-on-surface-variant block uppercase">Quality</span>
                  <span className="font-mono-data text-mono-data font-bold">Tier 1</span>
                </div>
              </div>
              
              <div className="pt-md border-t border-outline-variant space-y-sm">
                <button className="w-full bg-primary text-white py-sm rounded-lg font-label-md text-label-md flex items-center justify-center gap-sm hover:bg-primary-container transition-colors">
                  <Icon name="picture_as_pdf" className="text-[18px]" /> DOWNLOAD PDF
                </button>
                <div className="grid grid-cols-2 gap-sm">
                  <button className="bg-white border border-[#E5E1D3] text-on-surface py-sm rounded-lg font-label-md text-label-md flex items-center justify-center gap-xs hover:bg-surface-container-low transition-colors dark:bg-[#060b17]/60 dark:border-white/10">
                    <Icon name="csv" className="text-[18px]" /> EXPORT CSV
                  </button>
                  <button className="bg-white border border-[#E5E1D3] text-on-surface py-sm rounded-lg font-label-md text-label-md flex items-center justify-center gap-xs hover:bg-surface-container-low transition-colors dark:bg-[#060b17]/60 dark:border-white/10">
                    <Icon name="share" className="text-[18px]" /> SHARE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Helpful Tip/HUD element */}
          <div className="bg-primary-container text-white p-lg rounded-xl flex gap-md items-start">
            <Icon name="lightbulb" filled className="text-white mt-1" />
            <div>
              <p className="font-label-md text-label-md font-bold uppercase text-white">Pro Tip</p>
              <p className="font-body-sm text-body-sm mt-1 opacity-90 text-white">Schedule recurring reports in the Settings panel to receive weekly PDF updates directly in your inbox.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
