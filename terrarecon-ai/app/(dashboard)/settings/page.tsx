import { Icon } from "@/components/ui/Icon";

export default function SettingsPage() {
  return (
    <div className="space-y-xl pb-24">
      {/* Page Header */}
      <header className="mb-xl">
        <h1 className="font-headline-xl text-headline-xl text-primary mb-xs">Settings</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Manage account, preferences, and platform settings.</p>
      </header>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        {/* Profile & Security Column */}
        <div className="lg:col-span-8 space-y-xl">
          {/* 1. Profile Settings */}
          <section className="bg-white border border-[#E5E1D3] rounded-lg overflow-hidden transition-all duration-200 dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
            <div className="px-xl py-lg border-b border-outline-variant bg-surface dark:bg-[#060b17]/80 dark:border-[#1e293b]">
              <h2 className="font-headline-md text-headline-md flex items-center gap-sm">
                <Icon name="person" className="text-primary" />
                Profile Settings
              </h2>
            </div>
            <div className="p-md sm:p-xl grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant">Full Name</label>
                <input className="w-full bg-surface-container-low border border-outline-variant rounded py-xs px-sm text-body-md focus:ring-1 focus:ring-primary focus:border-primary dark:bg-[#060b17] dark:border-white/10" type="text" defaultValue="Elena Vance" />
              </div>
              <div className="space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant">Email</label>
                <input className="w-full bg-surface-container-low border border-outline-variant rounded py-xs px-sm text-body-md focus:ring-1 focus:ring-primary focus:border-primary dark:bg-[#060b17] dark:border-white/10" type="email" defaultValue="e.vance@terrarecon.ai" />
              </div>
              <div className="space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant">Organization</label>
                <input className="w-full bg-surface-container-low border border-outline-variant rounded py-xs px-sm text-body-md focus:ring-1 focus:ring-primary focus:border-primary dark:bg-[#060b17] dark:border-white/10" type="text" defaultValue="Geospatial Institute of Excellence" />
              </div>
              <div className="space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant">Role</label>
                <select className="w-full bg-surface-container-low border border-outline-variant rounded py-xs px-sm text-body-md focus:ring-1 focus:ring-primary focus:border-primary dark:bg-[#060b17] dark:border-white/10">
                  <option>Lead Researcher</option>
                  <option>Senior Analyst</option>
                  <option>Data Engineer</option>
                  <option>Administrator</option>
                </select>
              </div>
            </div>
            <div className="px-md py-sm sm:px-xl sm:py-md bg-surface flex justify-end gap-md dark:bg-[#060b17]/80">
              <button className="px-lg py-xs border border-outline-variant rounded text-body-md font-medium hover:bg-surface-container-high transition-colors">Cancel</button>
              <button className="px-lg py-xs bg-primary text-white rounded text-body-md font-medium hover:opacity-90 transition-all shadow-sm">Save Changes</button>
            </div>
          </section>

          {/* 3. Analysis Preferences */}
          <section className="bg-white border border-[#E5E1D3] rounded-lg overflow-hidden dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
            <div className="px-xl py-lg border-b border-outline-variant bg-surface dark:bg-[#060b17]/80 dark:border-[#1e293b]">
              <h2 className="font-headline-md text-headline-md flex items-center gap-sm">
                <Icon name="science" className="text-primary" />
                Analysis Preferences
              </h2>
            </div>
            <div className="p-md sm:p-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                <div className="space-y-md">
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Default Output Format</label>
                    <div className="flex flex-wrap gap-xs">
                      <button className="px-sm py-base border-2 border-primary bg-primary-container/10 text-primary rounded text-label-md font-bold">GeoJSON</button>
                      <button className="px-sm py-base border border-outline-variant text-on-surface-variant rounded text-label-md hover:bg-surface-container-low transition-colors">KML</button>
                      <button className="px-sm py-base border border-outline-variant text-on-surface-variant rounded text-label-md hover:bg-surface-container-low transition-colors">SHP</button>
                      <button className="px-sm py-base border border-outline-variant text-on-surface-variant rounded text-label-md hover:bg-surface-container-low transition-colors">GeoTIFF</button>
                    </div>
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Processing Priority</label>
                    <select className="w-full bg-surface-container-low border border-outline-variant rounded py-xs px-sm text-body-md focus:ring-1 focus:ring-primary focus:border-primary dark:bg-[#060b17] dark:border-white/10">
                      <option>Balanced (Standard)</option>
                      <option>High (Expedited Compute)</option>
                      <option>Low (Cost Optimized)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-md">
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Image Quality (DPI)</label>
                    <input className="w-full accent-primary" max="600" min="150" step="50" type="range" defaultValue="300" />
                    <div className="flex justify-between text-[10px] text-on-surface-variant uppercase font-bold">
                      <span>150 (Fast)</span>
                      <span>300 (HD)</span>
                      <span>600 (Ultra)</span>
                    </div>
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">Report Format</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                      <div className="flex items-center gap-sm p-sm border border-outline rounded bg-surface cursor-pointer hover:border-primary transition-colors">
                        <Icon name="picture_as_pdf" className="text-primary text-[20px]" />
                        <span className="text-body-sm font-medium">Standard PDF</span>
                      </div>
                      <div className="flex items-center gap-sm p-sm border border-outline-variant rounded bg-surface-container-low cursor-pointer hover:border-primary transition-colors">
                        <Icon name="html" className="text-[20px]" />
                        <span className="text-body-sm font-medium">Interactive HTML</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Security */}
          <section className="bg-white border border-[#E5E1D3] rounded-lg overflow-hidden dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
            <div className="px-xl py-lg border-b border-outline-variant bg-surface dark:bg-[#060b17]/80 dark:border-[#1e293b]">
              <h2 className="font-headline-md text-headline-md flex items-center gap-sm">
                <Icon name="shield" className="text-primary" />
                Security
              </h2>
            </div>
            <div className="p-md sm:p-xl space-y-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                <div className="space-y-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant">Current Password</label>
                  <input className="w-full bg-surface-container-low border border-outline-variant rounded py-xs px-sm text-body-md dark:bg-[#060b17] dark:border-white/10" type="password" />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant">New Password</label>
                  <input className="w-full bg-surface-container-low border border-outline-variant rounded py-xs px-sm text-body-md dark:bg-[#060b17] dark:border-white/10" type="password" />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant">Confirm Password</label>
                  <input className="w-full bg-surface-container-low border border-outline-variant rounded py-xs px-sm text-body-md dark:bg-[#060b17] dark:border-white/10" type="password" />
                </div>
              </div>
              <div className="flex justify-start">
                <button className="px-lg py-xs bg-primary text-white rounded text-body-md font-medium hover:opacity-90 transition-all">Update Password</button>
              </div>
            </div>
          </section>
        </div>

        {/* Notifications & Account Column */}
        <div className="lg:col-span-4 space-y-xl">
          {/* 2. Notification Preferences */}
          <section className="bg-white border border-[#E5E1D3] rounded-lg overflow-hidden dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
            <div className="px-xl py-lg border-b border-outline-variant bg-surface dark:bg-[#060b17]/80 dark:border-[#1e293b]">
              <h2 className="font-headline-md text-headline-md flex items-center gap-sm">
                <Icon name="notifications_active" className="text-primary" />
                Notifications
              </h2>
            </div>
            <div className="p-md sm:p-xl space-y-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body-md font-semibold">Email Notifications</p>
                  <p className="text-body-sm text-on-surface-variant">Summary of all activity</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body-md font-semibold">Processing Alerts</p>
                  <p className="text-body-sm text-on-surface-variant">When analysis completes</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body-md font-semibold">Weekly Reports</p>
                  <p className="text-body-sm text-on-surface-variant">Automated insights digest</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body-md font-semibold">Platform Updates</p>
                  <p className="text-body-sm text-on-surface-variant">New features and improvements</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </section>

          {/* 5. Account Management */}
          <section className="bg-white border border-[#E5E1D3] rounded-lg overflow-hidden dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
            <div className="px-xl py-lg border-b border-outline-variant bg-surface dark:bg-[#060b17]/80 dark:border-[#1e293b]">
              <h2 className="font-headline-md text-headline-md flex items-center gap-sm text-error">
                <Icon name="manage_accounts" className="text-error" />
                Danger Zone
              </h2>
            </div>
            <div className="p-md sm:p-xl space-y-md">
              <button className="w-full flex items-center justify-between px-lg py-sm border border-outline-variant rounded hover:bg-surface-container-low transition-colors group">
                <div className="flex items-center gap-md">
                  <Icon name="file_download" className="text-on-surface-variant group-hover:text-primary transition-colors" />
                  <span className="text-body-md font-medium">Export All Personal Data</span>
                </div>
                <Icon name="chevron_right" className="text-on-surface-variant text-[14px]" />
              </button>
              <button className="w-full flex items-center justify-between px-lg py-sm border border-error/20 bg-error/5 rounded hover:bg-error/10 transition-colors group">
                <div className="flex items-center gap-md">
                  <Icon name="logout" className="text-error" />
                  <span className="text-body-md font-medium text-error">Sign Out of All Devices</span>
                </div>
                <Icon name="chevron_right" className="text-error text-[14px]" />
              </button>
              <div className="pt-md">
                <p className="text-[11px] text-on-surface-variant opacity-60 leading-relaxed">
                  Managing your TerraRecon account ensures data sovereignty. Data exports take up to 24 hours to generate.
                </p>
              </div>
            </div>
          </section>

          {/* Scientific Visual Cue (Atmospheric Depth) */}
          <div className="relative h-48 rounded-lg overflow-hidden border border-[#E5E1D3] dark:border-white/10">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              title="A stylized scientific visualization of atmospheric layers and satellite scan lines, subtle blue and ivory gradients, high precision cartographic aesthetic, clean academic scientific mood." 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5hWnuSAzhbb9clnfVOjwSHFJLb0tyltl5al1hVpRdtnxieL-ENuN4sALX1-29_YQc5-qHSeF4OssNfcH_Fe7C0l1vFK578smKvHl8q5L1DJj78lZTlbZxrmbqfI74KiGf6lDGg4JJGqUzWLuTWKyFXDq4-dtwzZOM-zwG1PfAvkr971qZE7SpiGY5Ff9XST1BhVICegisaGHtvcFsMtFQtmUYPJbgWwWGBjIDm_bk6yEMIe6HRb2VP9SkIDQIqAOl8POUOpNyOQ7_')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            <div className="absolute bottom-sm left-sm right-sm bg-white/80 backdrop-blur-md p-sm rounded border border-outline-variant dark:bg-[#060b17]/80 dark:border-white/10">
              <p className="font-mono-data text-mono-data text-primary uppercase font-bold">Cloud Cluster Alpha-9</p>
              <p className="text-[10px] text-on-surface-variant">Connected: Satellite Sentinel-2B</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-xl pt-lg border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="flex flex-col sm:flex-row items-center gap-md sm:gap-xl">
          <div className="text-center sm:text-left">
            <p className="text-label-md font-bold text-on-surface-variant uppercase">Current Plan</p>
            <p className="text-body-md font-semibold text-primary">Enterprise Pro Suite</p>
          </div>
          <div className="hidden sm:block h-8 w-[1px] bg-outline-variant"></div>
          <div className="text-center sm:text-left">
            <p className="text-label-md font-bold text-on-surface-variant uppercase">Storage Used</p>
            <p className="text-body-md font-semibold text-on-surface">1.2 TB / 5 TB</p>
          </div>
        </div>
        <p className="text-body-sm text-on-surface-variant">© 2024 TerraRecon AI • Scientific Protocol v4.2.1</p>
      </footer>
    </div>
  );
}
