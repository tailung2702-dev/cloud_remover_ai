import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-md sm:p-lg text-on-surface">
      {/* Centered Floating Card */}
      <main className="w-full max-w-5xl bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left Side: Login Form */}
        <div className="w-full md:w-1/2 p-xl flex flex-col justify-center">
          {/* Header/Logo Area */}
          <div className="mb-xl flex items-center gap-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded">
              <Icon name="satellite_alt" filled className="text-white" />
            </div>
            <div>
              <Link href="/">
                <h1 className="font-headline-md text-headline-md font-bold text-primary">TerraRecon</h1>
              </Link>
              <p className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Enterprise EO Platform</p>
            </div>
          </div>

          <div className="w-full max-w-[384px] mx-auto md:mx-0">
            <div className="mb-xl">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Transform Cloud-Covered Imagery into Actionable Intelligence</h2>
            </div>
            
            <form className="space-y-sm" action="/dashboard">
              {/* Email Field */}
              <div className="space-y-base">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">CORPORATE EMAIL</label>
                <div className="relative">
                  <Icon name="mail" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[18px]" />
                  <input
                    className="w-full h-[40px] pl-10 pr-md bg-surface-container-low border border-outline-variant rounded focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md transition-all outline-none"
                    id="email"
                    name="email"
                    placeholder="analyst@organization.gov"
                    required
                    type="email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-base">
                <div className="flex justify-between items-end">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">SECURITY KEY</label>
                  <a className="font-label-md text-label-md text-primary hover:underline transition-all" href="#">Forgot Password?</a>
                </div>
                <div className="relative">
                  <Icon name="lock" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[18px]" />
                  <input
                    className="w-full h-[40px] pl-10 pr-md bg-surface-container-low border border-outline-variant rounded focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md transition-all outline-none"
                    id="password"
                    name="password"
                    placeholder="••••••••••••"
                    required
                    type="password"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-md">
                <button
                  className="w-full h-[44px] bg-primary hover:bg-primary-container text-white font-label-md text-label-md rounded transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]"
                  type="submit"
                >
                  Access Platform
                  <Icon name="login" className="text-[18px]" />
                </button>
              </div>
            </form>

            {/* Secondary Actions */}
            <div className="mt-xl pt-lg border-t border-surface-variant flex flex-col gap-sm">
              <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
                New organization? <Link className="text-primary font-bold hover:underline" href="/sign-up">Request Platform Access</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Imagery & Marketing Showcase */}
        <div className="hidden md:flex md:w-1/2 relative bg-surface-dim overflow-hidden flex-col justify-center items-center text-center p-xl">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjyOpOqV5AP6Un5glO3blhG_dYeVhx7b_NKi1w9-PcBXO_cHrxwr_ocdJm7Xj7sugtXSPdYPLftnLl209uAroT5Vt5sas0vlL5L5FruTHeSNAfH9VFCjadVEuK_J4PRBMumCgi0kc7NDX4ku1D2-p05oQxcNVtA9BI2NxEhbzuRiCSbbkEjLl-7nlVbLZ2MILLeM2Oi_wnX-3Ueq-zSSwN1XI6VzLGcQlQNfayVybpZrZJjrboFWLG95g19OTAOfuIrewyfw7rW8Ry')",
            }}
          ></div>

          {/* Color Overlay */}
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>

          {/* Clean Marketing Content */}
          <div className="relative z-10 text-white max-w-[384px]">
            <h3 className="font-headline-lg text-headline-lg font-bold mb-md">Enterprise-Grade Geospatial Analytics</h3>
            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed mb-xl">
              Accelerate your remote sensing workflows with TerraRecon's proprietary AI models. Convert obstructed optical data into clear, analysis-ready imagery in seconds.
            </p>
            
            <div className="flex items-center justify-center gap-xs">
              <Icon name="verified_user" filled className="text-secondary-container text-[24px]" />
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-container">Trusted by Global Research Institutes</span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
