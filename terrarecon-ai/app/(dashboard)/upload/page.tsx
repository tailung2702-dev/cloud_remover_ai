import { Icon } from "@/components/ui/Icon";

export default function UploadPage() {
  return (
    <div className="space-y-xl pb-24">
      {/* Page Header */}
      <div className="mb-xl">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Ingest New Dataset</h2>
        <p className="text-on-surface-variant">Upload satellite imagery for high-precision atmospheric correction and cloud detection processing.</p>
      </div>

      <div className="grid grid-cols-12 gap-lg">
        {/* Left Column: Upload Zone */}
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-white border border-[#E5E1D3] rounded-xl p-lg h-full flex flex-col dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
            <div className="flex items-center justify-between mb-lg">
              <h3 className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">File Repository</h3>
              <span className="text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded">Supported: GeoTIFF, TIFF, JP2</span>
            </div>
            
            <div 
              className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-lowest shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] group hover:border-primary transition-colors cursor-pointer p-md sm:p-xl text-center dark:bg-[#060b17]/40 dark:border-white/20 dark:hover:border-primary/70"
            >
              <div className="w-20 h-20 rounded-full bg-primary-container/5 flex items-center justify-center mb-md group-hover:scale-110 transition-transform duration-300">
                <Icon name="upload_file" className="text-primary text-[48px]" />
              </div>
              <h4 className="font-headline-md text-on-surface mb-2">Drag & Drop Imagery</h4>
              <p className="text-on-surface-variant max-w-[384px] mb-lg">Select high-resolution TIFF files from your local drive. Metadata will be extracted automatically where available.</p>
              <button className="bg-white border border-outline-variant px-lg py-2.5 rounded-lg font-label-md text-on-surface hover:bg-surface-container transition-colors">
                Browse Files
              </button>
            </div>

            {/* Upload Progress (Mocked as visible for UI recreation) */}
            <div className="mt-xl p-md bg-surface-container-low rounded-lg border border-surface-variant dark:bg-[#060b17]/60 dark:border-white/10">
              <div className="flex justify-between items-center mb-2 gap-sm">
                <div className="flex items-center gap-3 min-w-0">
                  <Icon name="image" className="text-primary shrink-0" />
                  <span className="font-label-md text-on-surface truncate" title="LC08_L1TP_148043_20231024_02_T1.tif">LC08_L1TP_148043_20231024_02_T1.tif</span>
                </div>
                <span className="font-mono-data text-primary shrink-0">74%</span>
              </div>
              <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[74%] rounded-full"></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[11px] text-on-surface-variant">412 MB of 556 MB uploaded</span>
                <span className="text-[11px] text-on-surface-variant italic">Estimated time: 14s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Metadata Form */}
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-white border border-[#E5E1D3] rounded-xl p-lg dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
            <h3 className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mb-lg">Mission Metadata</h3>
            <form className="space-y-md">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Satellite Source</label>
                <select className="w-full h-10 bg-surface-container-lowest border border-outline-variant rounded px-3 text-body-md focus:ring-1 focus:ring-primary focus:border-primary dark:bg-[#060b17] dark:border-white/10">
                  <option>Sentinel-2 (ESA)</option>
                  <option>Landsat-8 (USGS)</option>
                  <option>LISS-4 (ISRO)</option>
                  <option>WorldView-3 (Maxar)</option>
                  <option>PlanetScope (Planet)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Acquisition Date</label>
                  <input className="w-full h-10 bg-surface-container-lowest border border-outline-variant rounded px-3 text-body-md focus:ring-1 focus:ring-primary focus:border-primary dark:bg-[#060b17] dark:border-white/10" type="date" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Processing Level</label>
                  <select className="w-full h-10 bg-surface-container-lowest border border-outline-variant rounded px-3 text-body-md focus:ring-1 focus:ring-primary focus:border-primary dark:bg-[#060b17] dark:border-white/10">
                    <option>Level 1C (TOA)</option>
                    <option>Level 2A (BOA)</option>
                    <option>Raw (L0)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Location (Coordinates/Region)</label>
                <div className="relative">
                  <Icon name="location_on" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" />
                  <input className="w-full h-10 bg-surface-container-lowest border border-outline-variant rounded pl-10 pr-3 text-body-md focus:ring-1 focus:ring-primary focus:border-primary" placeholder="e.g. 40.7128° N, 74.0060° W" type="text" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Description</label>
                <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded p-3 text-body-md focus:ring-1 focus:ring-primary focus:border-primary resize-none" placeholder="Briefly describe the purpose of this ingestion (e.g., Vegetation Monitoring, Deforestation Analysis)..." rows={4}></textarea>
              </div>

              <div className="pt-md">
                <button className="w-full bg-primary text-white py-4 rounded font-label-md text-[14px] hover:bg-primary-container shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2" type="button">
                  <Icon name="analytics" filled className="text-white" />
                  Analyze Image & Initiate Pipeline
                </button>
                <p className="text-center text-[11px] text-on-surface-variant mt-3 px-4">
                  By initiating the pipeline, you agree to our <a className="underline" href="#">Scientific Data Processing Terms</a>.
                </p>
              </div>
            </form>
          </div>

          {/* Mini Preview Card */}
          <div className="bg-white border border-[#E5E1D3] rounded-xl p-md mt-lg flex items-start gap-md dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
            <div className="w-20 h-20 rounded bg-surface-container overflow-hidden shrink-0 border border-outline-variant">
              <img 
                className="w-full h-full object-cover" 
                alt="A high-resolution satellite imagery thumbnail showing a coastal region with turquoise water, white sand beaches, and dense green tropical foliage. The image has a crisp, scientific look with natural color balance and professional aerial perspective. Cohesive with TerraRecon's scientific academic aesthetic." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY8xKCPW2DBmJRcuQfOROqBTvLUFmnLO0PsDvXNjdIOCeaMbtViIrtqGN3g-SM5QrQtndN_p4WbC5u_3pjs7Qo9YBBaf7NKq7kTMr3L3-xdno7u5TygTUSOrIuafXJem6n9gHvStrMTONXWwY2sdT1OJruvLi-N-U-j0ztkU_1s-Xgxb3IIlNlAOyDIOo0x2L5Hbm0oFScyvaqTccHeW6Bo1Eqt04PegFptIddfl03un8eqvLvHmQujOwwefPR8tQHppoyywH7ieuu" 
              />
            </div>
            <div>
              <p className="font-label-md text-on-surface mb-1">Ingestion Preview</p>
              <p className="text-[11px] text-on-surface-variant mb-2">Automated coordinate mapping detected for Amazon Basin sector 42B.</p>
              <div className="flex gap-2">
                <span className="text-[9px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-bold uppercase">Valid GeoTIFF</span>
                <span className="text-[9px] bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-full font-bold uppercase">SRTM-30M</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Analytics Bottom Section */}
      <div className="mt-xl grid grid-cols-1 md:grid-cols-3 gap-lg">
        <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
          <p className="font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Cloud Quota</p>
          <div className="flex items-baseline gap-2">
            <span className="font-headline-lg text-on-surface">14.2</span>
            <span className="text-on-surface-variant font-mono-data">TB / 20TB</span>
          </div>
          <div className="mt-3 w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
            <div className="bg-secondary h-full w-[71%]"></div>
          </div>
        </div>

        <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
          <p className="font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Active Ingestions</p>
          <div className="flex items-baseline gap-2">
            <span className="font-headline-lg text-primary">03</span>
            <span className="text-on-surface-variant">Parallel Threads</span>
          </div>
          <div className="mt-3 flex gap-1">
            <div className="h-1 flex-1 bg-primary rounded-full"></div>
            <div className="h-1 flex-1 bg-primary rounded-full"></div>
            <div className="h-1 flex-1 bg-primary rounded-full animate-pulse"></div>
            <div className="h-1 flex-1 bg-surface-container-highest rounded-full"></div>
          </div>
        </div>

        <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl dark:bg-[#0a1122]/60 dark:border-white/10 dark:backdrop-blur-md">
          <p className="font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">API Health</p>
          <div className="flex items-baseline gap-2">
            <span className="font-headline-lg text-on-secondary-container">99.9%</span>
            <span className="text-on-surface-variant">Uptime</span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[11px] text-on-secondary-container">
            <span className="w-2 h-2 rounded-full bg-on-secondary-container"></span>
            Service Operational: US-EAST-1
          </div>
        </div>
      </div>
    </div>
  );
}
