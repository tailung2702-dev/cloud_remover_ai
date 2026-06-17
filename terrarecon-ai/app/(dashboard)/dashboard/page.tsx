import { Icon } from "@/components/ui/Icon";

export default function DashboardPage() {
  return (
    <div className="space-y-xl pb-24">
      {/* Page Header */}
      <div className="flex flex-col gap-base">
        <h2 className="font-headline-xl text-headline-xl text-on-surface">Dashboard</h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl">Monitor cloud detection, image reconstruction, and platform activity in real-time across your satellite data pipeline.</p>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
        <div className="bg-surface-container-lowest border border-outline-variant p-lg flex flex-col gap-xs transition-shadow hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] rounded-xl">
          <p className="font-label-md text-label-md text-outline uppercase tracking-wider">Images Processed</p>
          <div className="flex items-baseline gap-xs">
            <span className="font-headline-lg text-headline-lg text-primary">12,458</span>
            <span className="font-label-md text-secondary flex items-center">
              <Icon name="trending_up" className="text-[14px]" /> 12%
            </span>
          </div>
          <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden mt-sm">
            <div className="bg-primary h-full w-3/4"></div>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant p-lg flex flex-col gap-xs transition-shadow hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] rounded-xl">
          <p className="font-label-md text-label-md text-outline uppercase tracking-wider">Cloud Coverage (Avg)</p>
          <div className="flex items-baseline gap-xs">
            <span className="font-headline-lg text-headline-lg text-primary">38%</span>
            <span className="font-label-md text-error flex items-center">
              <Icon name="trending_up" className="text-[14px]" /> 4%
            </span>
          </div>
          <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden mt-sm">
            <div className="bg-tertiary-container h-full w-[38%]"></div>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant p-lg flex flex-col gap-xs transition-shadow hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] rounded-xl">
          <p className="font-label-md text-label-md text-outline uppercase tracking-wider">Reconstruction Accuracy</p>
          <div className="flex items-baseline gap-xs">
            <span className="font-headline-lg text-headline-lg text-primary">94.6%</span>
            <span className="font-label-md text-secondary flex items-center">
              <Icon name="check_circle" className="text-[14px]" /> stable
            </span>
          </div>
          <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden mt-sm">
            <div className="bg-primary-container h-full w-[94.6%]"></div>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant p-lg flex flex-col gap-xs transition-shadow hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] rounded-xl">
          <p className="font-label-md text-label-md text-outline uppercase tracking-wider">Avg Processing Time</p>
          <div className="flex items-baseline gap-xs">
            <span className="font-headline-lg text-headline-lg text-primary">14 sec</span>
            <span className="font-label-md text-secondary flex items-center">
              <Icon name="trending_down" className="text-[14px]" /> 2s
            </span>
          </div>
          <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden mt-sm">
            <div className="bg-secondary h-full w-1/4"></div>
          </div>
        </div>
      </div>

      {/* NEW: Global Analysis Coverage Map */}
      <div className="bg-surface-container-lowest border border-outline-variant relative overflow-hidden h-[500px] rounded-xl">
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#dbe1ff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
        ></div>

        {/* Map UI Overlay */}
        <div className="absolute inset-0 p-lg flex flex-col pointer-events-none">
          <div className="flex justify-between items-start">
            <div className="pointer-events-auto">
              <h3 className="font-headline-md text-headline-md text-on-surface">Global Analysis Coverage</h3>
              <p className="text-body-sm text-outline">Real-time geospatial processing distribution</p>
            </div>
            {/* Region Stats Panel */}
            <div className="bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant p-md rounded shadow-sm w-56 pointer-events-auto">
              <p className="font-label-md text-outline uppercase mb-sm tracking-tighter">Active Region Stats</p>
              <div className="space-y-sm">
                <div className="flex justify-between items-center">
                  <span className="text-body-sm">South Asia</span>
                  <span className="font-mono-data text-primary">42.4%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-body-sm">Amazon Basin</span>
                  <span className="font-mono-data text-primary">28.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-body-sm">SE Asia</span>
                  <span className="font-mono-data text-primary">15.5%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto flex justify-between items-end">
            {/* Coordinate Display */}
            <div className="bg-on-surface/80 text-surface-container-lowest px-sm py-xs rounded font-mono-data text-[11px] pointer-events-auto">
              LAT: 23.512° N | LON: 80.331° E | ELEV: 421m
            </div>
            {/* Map Controls */}
            <div className="flex flex-col gap-xs pointer-events-auto">
              <button className="w-8 h-8 bg-surface-container-lowest border border-outline-variant flex items-center justify-center hover:bg-surface-container-high rounded">
                <Icon name="add" className="text-[20px]" />
              </button>
              <button className="w-8 h-8 bg-surface-container-lowest border border-outline-variant flex items-center justify-center hover:bg-surface-container-high rounded">
                <Icon name="remove" className="text-[20px]" />
              </button>
              <button className="w-8 h-8 bg-surface-container-lowest border border-outline-variant flex items-center justify-center hover:bg-surface-container-high mt-sm rounded">
                <Icon name="my_location" className="text-[20px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Realistic Mock Map Elements */}
        <div className="absolute top-1/2 left-1/3 w-24 h-16 bg-primary/10 border border-primary/30 rounded-lg animate-pulse flex items-center justify-center">
          <span className="text-[10px] text-primary font-bold">AREA-042</span>
        </div>
        <div className="absolute top-1/4 right-1/4 w-32 h-24 bg-secondary/10 border border-secondary/30 rounded-full flex items-center justify-center">
          <span className="text-[10px] text-secondary font-bold">SURVEY_R4</span>
        </div>

        {/* Location Markers */}
        <div className="absolute top-[45%] left-[62%] group cursor-pointer pointer-events-auto">
          <Icon name="location_on" filled className="text-primary text-[32px]" />
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-xs hidden group-hover:block bg-on-surface text-surface px-sm py-xs rounded text-[11px] whitespace-nowrap">Madhya Pradesh Survey</div>
        </div>
        <div className="absolute top-[60%] left-[25%] group cursor-pointer pointer-events-auto">
          <Icon name="location_on" filled className="text-error text-[24px]" />
        </div>
      </div>

      {/* Main Section: Activity and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        {/* Left: Projects and Activity */}
        <div className="lg:col-span-8 space-y-lg">
          {/* Projects Table */}
          <div className="bg-surface-container-lowest border border-outline-variant overflow-hidden rounded-xl">
            <div className="p-lg border-b border-outline-variant flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md text-on-surface">Recent Projects</h3>
              <button className="text-primary font-label-md flex items-center gap-xs hover:underline">
                View All <Icon name="arrow_forward" className="text-[14px]" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-body-md border-collapse">
                <thead>
                  <tr className="bg-surface-container-low text-outline text-label-md uppercase tracking-wider">
                    <th className="px-lg py-sm font-semibold whitespace-nowrap">Project Name</th>
                    <th className="px-lg py-sm font-semibold whitespace-nowrap">Region</th>
                    <th className="px-lg py-sm font-semibold whitespace-nowrap">Date</th>
                    <th className="px-lg py-sm font-semibold whitespace-nowrap">Status</th>
                    <th className="px-lg py-sm font-semibold text-right whitespace-nowrap">Accuracy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr className="data-table-row transition-colors">
                    <td className="px-lg py-md font-medium">Madhya Pradesh Agri Survey</td>
                    <td className="px-lg py-md text-outline">India</td>
                    <td className="px-lg py-md text-outline">Oct 24, 2023</td>
                    <td className="px-lg py-md"><span className="px-sm py-xs bg-secondary-fixed text-on-secondary-fixed-variant text-[11px] font-bold rounded">COMPLETED</span></td>
                    <td className="px-lg py-md text-right font-mono-data">96.4%</td>
                  </tr>
                  <tr className="data-table-row transition-colors">
                    <td className="px-lg py-md font-medium">Forest Monitoring Region-4</td>
                    <td className="px-lg py-md text-outline">Amazon Basin</td>
                    <td className="px-lg py-md text-outline">Oct 25, 2023</td>
                    <td className="px-lg py-md"><span className="px-sm py-xs bg-primary-fixed text-on-primary-fixed-variant text-[11px] font-bold rounded">PROCESSING</span></td>
                    <td className="px-lg py-md text-right font-mono-data">--</td>
                  </tr>
                  <tr className="data-table-row transition-colors">
                    <td className="px-lg py-md font-medium">Flood Assessment Dataset</td>
                    <td className="px-lg py-md text-outline">SE Asia</td>
                    <td className="px-lg py-md text-outline">Oct 26, 2023</td>
                    <td className="px-lg py-md"><span className="px-sm py-xs bg-secondary-fixed text-on-secondary-fixed-variant text-[11px] font-bold rounded">COMPLETED</span></td>
                    <td className="px-lg py-md text-right font-mono-data">92.1%</td>
                  </tr>
                  <tr className="data-table-row transition-colors">
                    <td className="px-lg py-md font-medium">Urban Growth Analysis</td>
                    <td className="px-lg py-md text-outline">Dubai, UAE</td>
                    <td className="px-lg py-md text-outline">Oct 26, 2023</td>
                    <td className="px-lg py-md"><span className="px-sm py-xs bg-surface-container-highest text-outline text-[11px] font-bold rounded">PENDING</span></td>
                    <td className="px-lg py-md text-right font-mono-data">--</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Analysis Trends */}
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl">
            <div className="flex justify-between items-center mb-lg">
              <h3 className="font-headline-md text-headline-md text-on-surface">Data Analysis Trends</h3>
              <div className="flex gap-sm">
                <button className="bg-surface-container text-label-md px-sm py-base rounded-lg border border-outline-variant hover:bg-surface-container-high">Images Processed</button>
                <button className="text-label-md px-sm py-base text-outline hover:text-on-surface">Accuracy</button>
                <button className="text-label-md px-sm py-base text-outline hover:text-on-surface">Cloud Cov.</button>
              </div>
            </div>
            
            {/* Mock Visualization */}
            <div className="relative h-[240px] w-full flex items-end justify-between gap-base pt-lg">
              <div className="absolute inset-0 grid grid-rows-4 pointer-events-none">
                <div className="border-t border-outline-variant/30 w-full h-full"></div>
                <div className="border-t border-outline-variant/30 w-full h-full"></div>
                <div className="border-t border-outline-variant/30 w-full h-full"></div>
                <div className="border-t border-outline-variant/30 w-full h-full"></div>
              </div>
              <div className="w-12 bg-primary/20 hover:bg-primary transition-all rounded-t-sm" style={{ height: '40%' }}></div>
              <div className="w-12 bg-primary/20 hover:bg-primary transition-all rounded-t-sm" style={{ height: '65%' }}></div>
              <div className="w-12 bg-primary/20 hover:bg-primary transition-all rounded-t-sm" style={{ height: '55%' }}></div>
              <div className="w-12 bg-primary/20 hover:bg-primary transition-all rounded-t-sm" style={{ height: '85%' }}></div>
              <div className="w-12 bg-primary/20 hover:bg-primary transition-all rounded-t-sm" style={{ height: '70%' }}></div>
              <div className="w-12 bg-primary/20 hover:bg-primary transition-all rounded-t-sm" style={{ height: '95%' }}></div>
              <div className="w-12 bg-primary/20 hover:bg-primary transition-all rounded-t-sm" style={{ height: '75%' }}></div>
              <div className="w-12 bg-primary/20 hover:bg-primary transition-all rounded-t-sm" style={{ height: '60%' }}></div>
              <div className="w-12 bg-primary/20 hover:bg-primary transition-all rounded-t-sm" style={{ height: '80%' }}></div>
              <div className="w-12 bg-primary/20 hover:bg-primary transition-all rounded-t-sm" style={{ height: '65%' }}></div>
            </div>
            <div className="flex justify-between mt-sm text-outline font-label-md px-xs">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span>
            </div>
          </div>
        </div>

        {/* Right Column: Activity and Distribution */}
        <div className="lg:col-span-4 space-y-xl">
          {/* Analysis Distribution */}
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">Analysis Distribution</h3>
            <div className="relative w-48 h-48 mx-auto mb-lg flex items-center justify-center">
              {/* SVG Doughnut Mock */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#e9e8e4" strokeWidth="12"></circle>
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#0043ae" strokeDasharray="251" strokeDashoffset="100" strokeWidth="12"></circle>
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#236893" strokeDasharray="251" strokeDashoffset="200" strokeWidth="12"></circle>
              </svg>
              <div className="absolute text-center">
                <p className="font-headline-lg text-headline-md text-on-surface">62%</p>
                <p className="text-[10px] text-outline uppercase font-bold">Visibility</p>
              </div>
            </div>
            <div className="space-y-sm">
              <div className="flex items-center gap-sm">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-body-sm flex-1">Clear Sky</span>
                <span className="font-mono-data text-body-sm font-bold">62%</span>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-3 h-3 rounded-full bg-tertiary-container"></div>
                <span className="text-body-sm flex-1">Cloud Cover</span>
                <span className="font-mono-data text-body-sm font-bold">38%</span>
              </div>
            </div>
          </div>

          {/* Recent Activity Timeline */}
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl">
            <div className="flex items-center justify-between mb-lg">
              <h3 className="font-headline-md text-headline-md text-on-surface">Recent Activity</h3>
              <span className="text-label-md text-primary font-bold">LIVE</span>
            </div>
            <div className="space-y-lg relative">
              {/* Activity Items */}
              <div className="flex gap-md">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <div className="w-px h-full bg-outline-variant mt-xs"></div>
                </div>
                <div className="pb-sm">
                  <p className="font-body-md font-semibold">Madhya Pradesh Survey</p>
                  <p className="font-body-sm text-outline">Image reconstruction completed successfully.</p>
                  <p className="font-label-md text-[11px] text-outline mt-xs">14 mins ago</p>
                </div>
              </div>

              <div className="flex gap-md">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-px h-full bg-outline-variant mt-xs"></div>
                </div>
                <div className="pb-sm">
                  <p className="font-body-md font-semibold">Forest Monitoring R-4</p>
                  <p className="font-body-sm text-outline">Processing cloud mask removal (68%)...</p>
                  <p className="font-label-md text-[11px] text-outline mt-xs">Active</p>
                </div>
              </div>

              <div className="flex gap-md">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <div className="w-px h-full bg-outline-variant mt-xs"></div>
                </div>
                <div className="pb-sm">
                  <p className="font-body-md font-semibold">Flood Assessment</p>
                  <p className="font-body-sm text-outline">Dataset finalized and report generated.</p>
                  <p className="font-label-md text-[11px] text-outline mt-xs">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* System Status HUD */}
          <div className="glass-hud p-lg rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-sm">
              <Icon name="memory" filled className="text-secondary" />
              <div>
                <p className="font-label-md text-outline uppercase tracking-wider">Engine Status</p>
                <p className="font-body-md font-bold text-on-surface">98% Optimization</p>
              </div>
            </div>
            <div className="h-8 w-px bg-outline-variant"></div>
            <div className="text-right">
              <p className="font-label-md text-outline uppercase tracking-wider">Latency</p>
              <p className="font-body-md font-bold text-on-surface">42ms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contextual FAB */}
      <button className="fixed bottom-xl right-xl w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-50">
        <Icon name="add" className="text-[28px]" />
      </button>
    </div>
  );
}
