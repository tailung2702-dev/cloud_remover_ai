import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function LandingPage() {
  return (
    <div className="text-on-surface">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 h-16 flex justify-between items-center px-lg z-50 bg-surface/80 backdrop-blur-md border-b border-surface-variant/20">
        <div className="flex items-center gap-2">
          <span className="font-headline-md text-headline-md font-bold text-primary">TerraRecon</span>
        </div>
        <div className="hidden md:flex items-center gap-xl">
          <a className="font-label-md text-label-md text-primary font-bold" href="#">Solutions</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Technology</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Enterprise</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Pricing</a>
        </div>
        <div className="flex items-center gap-md">
          <Link href="/login" className="px-md py-xs font-label-md text-label-md text-on-surface-variant border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
            Sign In
          </Link>
          <Link href="/dashboard" className="px-md py-xs font-label-md text-label-md bg-primary text-on-primary rounded-lg hover:opacity-90 transition-opacity">
            Start Analysis
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnOcqj-6EinG4rEpJciiWUazsOncFX8o_Ef2ZeBmfv0AxGPkbClsoH0Ro65H5CTllJb5GQENZJS6shbl7gmvOGhoRlBH6meHoDsdigH1ORcNWmgK_jIpyS0y0yG7uroDHRKkGw70p3nA7RK28lSJGozJeM42CIHx2NpK6ftGY_ffxpfC5X4CS3a7TuGnsU7yOcphht9HlVRcqFTySi0PdTwlw9MDW0gNGSjd25M3REeyLKxr6Rm8VmmaGWjM5tswFqhhSQavlu95uq')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/40 to-transparent"></div>
        </div>
        <div className="max-w-container-max mx-auto px-lg relative z-10 grid grid-cols-1 md:grid-cols-2 gap-xl w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-md">
              <span className="inline-block py-1 px-3 bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-wider rounded-full">
                v4.2 Enterprise Release
              </span>
              <Icon name="verified" className="text-primary text-[18px]" />
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface mb-md leading-tight">
              Advanced Cloud Detection &amp; Image Reconstruction
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl leading-relaxed">
              Enterprise-grade geospatial analytics powered by Generative AI. Transform occluded satellite imagery into clear, actionable scientific data for environmental monitoring and asset management.
            </p>
            <div className="flex flex-col sm:flex-row gap-md">
              <Link href="/dashboard" className="px-xl py-md bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                Start Analysis <Icon name="arrow_forward" />
              </Link>
              <button className="px-xl py-md bg-surface-container-lowest border border-outline-variant text-on-surface rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface transition-all">
                <Icon name="play_circle" /> View Demo
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-end items-center">
            <div className="glass-hud p-base rounded-xl shadow-xl w-full max-w-[448px] overflow-hidden">
              <div className="relative h-64 w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMR9djF-H_MUnf9CbNh32KmCv8nFjdlyTTgbWNj_ZL_TLP-nlDhnR07SxEcReYLGc1dp78am944MXIN8c_ds028OhUb6gcDQx9uPbPtUhz-CCbDL96Ql2_GNfkOcwxVLRIFWFHf96qBv6z3sWHhE6yRmXw4kVj4GbrrHrgEcRNz19KDfaYyalwi6nYyxg74GiIPmxg7U4TiTj3mtc8ZdngtImRYmmxsLWcqhv-0THbQZcmm734omzcL1LkCa2940cnn6GWjI9hHtuZ')",
                  }}
                ></div>
                <div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-md z-10"></div>
                <div className="absolute bottom-md left-md bg-black/50 backdrop-blur-md px-sm py-base rounded text-white text-[10px] font-mono-data">
                  RAW_INPUT.TIF
                </div>
                <div className="absolute bottom-md right-md bg-primary/80 backdrop-blur-md px-sm py-base rounded text-white text-[10px] font-mono-data">
                  PROCESSED_AOI.RECON
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-xl max-w-3xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg mb-base">Precision Geospatial Capabilities</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our suite of AI-driven tools enables researchers to bypass atmospheric interference and derive true value from multi-spectral imagery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md group">
            {/* Feature 1 */}
            <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl flex flex-col gap-md transition-all duration-200 ease-in-out hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] hover:-translate-y-[2px]">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="filter_drama" className="text-[28px]" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-xs">Cloud Detection</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Identify and mask sub-pixel cloud cover with 99.8% precision across diverse terrain types.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-primary-container/5 border border-primary/20 p-lg rounded-xl flex flex-col gap-md transition-all duration-200 ease-in-out hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] hover:-translate-y-[2px]">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white">
                <Icon name="compare" className="text-[28px]" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-xs text-primary">Image Reconstruction</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Generative Infilling technology replaces cloud-occluded pixels using historical data and temporal matching.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl flex flex-col gap-md transition-all duration-200 ease-in-out hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] hover:-translate-y-[2px]">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="query_stats" className="text-[28px]" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-xs">Geospatial Analytics</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Derive high-level insights from raw spectral signatures for urban planning and resource allocation.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl flex flex-col gap-md transition-all duration-200 ease-in-out hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] hover:-translate-y-[2px]">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="eco" className="text-[28px]" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-xs">Environmental Monitoring</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Track deforestation, melting ice caps, and biodiversity shifts with automated alert systems.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl flex flex-col gap-md transition-all duration-200 ease-in-out hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] hover:-translate-y-[2px]">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="agriculture" className="text-[28px]" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-xs">Agriculture Insights</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Precise crop health monitoring and yield prediction using NDVI and moisture-level modeling.</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border border-[#E5E1D3] p-lg rounded-xl flex flex-col gap-md transition-all duration-200 ease-in-out hover:shadow-[0px_4px_12px_rgba(26,90,215,0.05)] hover:-translate-y-[2px]">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="emergency_home" className="text-[28px]" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-xs">Disaster Assessment</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Rapid impact analysis for flooding, fire, and seismic events to support first responders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-xl bg-surface">
        <div className="max-w-container-max mx-auto px-lg">
          <h2 className="font-headline-lg text-headline-lg mb-xl text-center">Scientific Data Pipeline</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-md">
            {/* Connective Line */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-outline-variant -z-10"></div>
            
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center font-headline-md text-primary mb-md shadow-sm">01</div>
              <h4 className="font-label-md text-label-md mb-base uppercase tracking-wider text-primary">Upload</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant px-md">Ingest raw multispectral .TIF or satellite API streams.</p>
            </div>

            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-outline-variant flex items-center justify-center font-headline-md text-on-surface-variant mb-md shadow-sm">02</div>
              <h4 className="font-label-md text-label-md mb-base uppercase tracking-wider">Detect</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant px-md">Automated segmentation of atmospheric occlusions.</p>
            </div>

            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-outline-variant flex items-center justify-center font-headline-md text-on-surface-variant mb-md shadow-sm">03</div>
              <h4 className="font-label-md text-label-md mb-base uppercase tracking-wider">Reconstruct</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant px-md">Generative AI fills masked areas with high fidelity.</p>
            </div>

            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-outline-variant flex items-center justify-center font-headline-md text-on-surface-variant mb-md shadow-sm">04</div>
              <h4 className="font-label-md text-label-md mb-base uppercase tracking-wider">Analyze</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant px-md">Extract feature data and temporal trend metrics.</p>
            </div>

            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-outline-variant flex items-center justify-center font-headline-md text-on-surface-variant mb-md shadow-sm">05</div>
              <h4 className="font-label-md text-label-md mb-base uppercase tracking-wider">Report</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant px-md">Export PDF, CSV, or direct GeoJSON integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases (Asymmetric Layout) */}
      <section className="py-xl bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="relative">
              <div className="aspect-square bg-white rounded-xl shadow-lg p-base border border-outline-variant overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Agricultural heat map"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2GHOeMKl3UVHdxesU2X0Z_lawKcuaGbmMvMXnnfHonXpBXPzVwe63cTuSuNcu5b-eSUNa44HxtwYbnCwaKTUKoe6z7CyzbFB-43SQxrA0xdTUF5DuTNmcguVXJezFv-LDWD9Syca9GzerPmenb7ad8iv5dRAZwrq-obYF28gxoH8qFvvyg_tUI7TCNrvJvIlObEV9O_JtOTduxQil5viYKqBRhqnbl729QFdJOD1ivmqDUgGVa-LIAb1xbmXw7eORV7kL7q8IfX5g"
                />
              </div>
              <div className="absolute -bottom-md -right-md glass-hud p-md rounded-lg shadow-xl max-w-[240px]">
                <div className="flex items-center gap-2 mb-base">
                  <span className="w-[6px] h-[6px] bg-primary rounded-full"></span>
                  <span className="font-label-md text-label-md text-primary">Live Monitoring</span>
                </div>
                <p className="font-body-sm text-body-sm">NDVI Index detected 15% drop in Sector 4B moisture.</p>
              </div>
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-md leading-tight">Empowering Industry-Specific Intelligence</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-lg leading-relaxed">
                TerraRecon AI isn't just about clear pictures; it's about the data underneath. We support critical decision-making across global industries.
              </p>
              <ul className="space-y-md">
                <li className="flex items-start gap-md">
                  <Icon name="check_circle" className="text-primary" />
                  <div>
                    <span className="font-label-md text-label-md text-on-surface block mb-base">Sustainable Agriculture</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Optimize fertilizer use and irrigation by mapping precise soil health metrics through cloud cover.</span>
                  </div>
                </li>
                <li className="flex items-start gap-md">
                  <Icon name="check_circle" className="text-primary" />
                  <div>
                    <span className="font-label-md text-label-md text-on-surface block mb-base">Logistics &amp; Infrastructure</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Monitor remote asset integrity and supply chain routes in regions with frequent weather interference.</span>
                  </div>
                </li>
                <li className="flex items-start gap-md">
                  <Icon name="check_circle" className="text-primary" />
                  <div>
                    <span className="font-label-md text-label-md text-on-surface block mb-base">Climate Research</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Uninterrupted observation of polar ice and tropical forest density for accurate temporal modeling.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map CTA Section */}
      <section className="py-xl">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="bg-primary-container rounded-xl p-xl relative overflow-hidden text-center">
            {/* Background Map Texture */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: "url('https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg')" }}
            ></div>
            <h2 className="font-headline-xl text-headline-xl text-on-primary-container mb-md">Ready to see through the noise?</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-xl opacity-90 max-w-2xl mx-auto">
              Join 500+ government agencies and enterprise partners using TerraRecon to gain a clear perspective of our changing planet.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-md relative z-10">
              <Link href="/sign-up" className="px-xl py-md bg-white text-primary font-bold rounded-lg hover:bg-surface transition-colors shadow-md">
                Create Free Account
              </Link>
              <button className="px-xl py-md border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-surface-variant mt-xl">
        <div className="max-w-container-max mx-auto py-xl px-lg">
          <div className="flex flex-col md:flex-row justify-between items-start gap-xl mb-xl">
            <div className="max-w-[320px]">
              <span className="font-headline-md text-headline-md font-bold text-primary block mb-md">TerraRecon AI</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Pioneering the next generation of Earth Observation through physics-informed generative AI and multi-spectral analysis.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-xl">
              <div className="flex flex-col gap-sm">
                <span className="font-label-md text-label-md text-on-surface">Platform</span>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Cloud Detection</a>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Reconstruction</a>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">API Documentation</a>
              </div>
              <div className="flex flex-col gap-sm">
                <span className="font-label-md text-label-md text-on-surface">Resources</span>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Case Studies</a>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Research Papers</a>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Help Center</a>
              </div>
              <div className="flex flex-col gap-sm">
                <span className="font-label-md text-label-md text-on-surface">Company</span>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
                <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a>
              </div>
            </div>
          </div>
          <div className="pt-lg border-t border-surface-variant flex flex-col md:flex-row justify-between items-center gap-md">
            <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 TerraRecon AI. Scientific Earth Observation Systems.</p>
            <div className="flex gap-lg">
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
