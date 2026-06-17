import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-md sm:p-lg text-on-surface">
      {/* Centered Floating Card */}
      <main className="w-full max-w-5xl bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left Side: Sign Up Form */}
        <div className="w-full md:w-1/2 p-xl flex flex-col justify-center">
          {/* Header/Logo Area */}
          <div className="mb-xl flex items-center gap-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded">
              <Icon name="public" filled className="text-white" />
            </div>
            <div>
              <Link href="/">
                <h1 className="font-headline-md text-headline-md font-bold text-primary">TerraRecon</h1>
              </Link>
              <p className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Enterprise EO Platform</p>
            </div>
          </div>

          <div className="w-full max-w-[384px] mx-auto md:mx-0">
            <div className="mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2 leading-tight">Reveal Hidden Insights from Every Satellite Image</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Join the next generation of Earth observation. Create your account to start processing high-resolution satellite imagery today.</p>
            </div>
            
            {/* Form Container */}
            <form action="/dashboard" className="space-y-md">
              <div className="grid grid-cols-1 gap-md">
                {/* Full Name */}
                <div className="flex flex-col gap-base">
                  <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="full_name">Full Name</label>
                  <div className="bg-surface-container-low border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-200 rounded flex items-center px-sm py-xs h-[40px]">
                    <Icon name="person" className="text-outline-variant text-[20px] mr-sm" />
                    <input className="bg-transparent border-none focus:ring-0 w-full font-body-md text-on-surface p-0 placeholder:text-outline-variant outline-none" id="full_name" placeholder="Dr. Elena Vance" type="text" required />
                  </div>
                </div>

                {/* Organization */}
                <div className="flex flex-col gap-base">
                  <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="organization">Organization</label>
                  <div className="bg-surface-container-low border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-200 rounded flex items-center px-sm py-xs h-[40px]">
                    <Icon name="business" className="text-outline-variant text-[20px] mr-sm" />
                    <input className="bg-transparent border-none focus:ring-0 w-full font-body-md text-on-surface p-0 placeholder:text-outline-variant outline-none" id="organization" placeholder="Global Climate Research Inst." type="text" required />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-base">
                  <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="email">Email Address</label>
                  <div className="bg-surface-container-low border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-200 rounded flex items-center px-sm py-xs h-[40px]">
                    <Icon name="alternate_email" className="text-outline-variant text-[20px] mr-sm" />
                    <input className="bg-transparent border-none focus:ring-0 w-full font-body-md text-on-surface p-0 placeholder:text-outline-variant outline-none" id="email" placeholder="elena.vance@georesearch.org" type="email" required />
                  </div>
                </div>

                {/* Password Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                  <div className="flex flex-col gap-base">
                    <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="password">Password</label>
                    <div className="bg-surface-container-low border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-200 rounded flex items-center px-sm py-xs h-[40px]">
                      <Icon name="lock" className="text-outline-variant text-[20px] mr-sm" />
                      <input className="bg-transparent border-none focus:ring-0 w-full font-body-md text-on-surface p-0 placeholder:text-outline-variant outline-none" id="password" placeholder="••••••••" type="password" required />
                    </div>
                  </div>
                  <div className="flex flex-col gap-base">
                    <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="confirm_password">Confirm Password</label>
                    <div className="bg-surface-container-low border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-200 rounded flex items-center px-sm py-xs h-[40px]">
                      <Icon name="verified_user" className="text-outline-variant text-[20px] mr-sm" />
                      <input className="bg-transparent border-none focus:ring-0 w-full font-body-md text-on-surface p-0 placeholder:text-outline-variant outline-none" id="confirm_password" placeholder="••••••••" type="password" required />
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-sm mt-md">
                <input className="mt-1 rounded-sm border-outline-variant text-primary focus:ring-primary h-4 w-4" id="terms" type="checkbox" required />
                <label className="font-body-sm text-[11px] text-on-surface-variant leading-tight" htmlFor="terms">
                  I agree to the <a className="text-primary font-semibold hover:underline" href="#">Terms of Service</a> and <a className="text-primary font-semibold hover:underline" href="#">Privacy Policy</a>.
                </label>
              </div>

              {/* Action Button */}
              <div className="pt-sm">
                <button type="submit" className="w-full h-[44px] bg-primary hover:bg-primary-container text-white py-sm rounded font-label-md text-label-md transition-all duration-200 active:scale-[0.98] shadow-sm">
                  Create Account
                </button>
              </div>

              {/* Secondary Action */}
              <div className="text-center pt-xs">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Already have an account? 
                  <Link className="text-primary font-bold hover:underline ml-xs" href="/login">Sign In</Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Imagery & Marketing Showcase */}
        <div className="hidden md:flex md:w-1/2 relative bg-surface-dim overflow-hidden flex-col justify-center items-center text-center p-xl">
          {/* Background Satellite Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_6Ynrbl9so7XLDnI2of0ShzlzIKQjch7L3zH2oT1YUrxQVT3FdamKIQMgyvo5vaPCCLwTcjgFFMaDkMfL8V2FLIP8I2ZR7UopaAXz-YISl9klIELpr6nACeZ9Zr61ovORs1phec-ulwHoC_LAsyp7CKtzbEEPcIWMbazEi8WJXFCMZGmz69qn6haIp3YMjbNpfkeQLPNmnudD29ULGhaxFxxA7r3mo5dG8g8hv0M3qPZNq_cZYrPpO8sG8MzupZXLkxrQl8oZDvvg')",
            }}
          ></div>

          {/* Color Overlay */}
          <div className="absolute inset-0 bg-tertiary-container/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-tertiary-container/90 to-transparent"></div>

          {/* Clean Marketing Content */}
          <div className="relative z-10 text-white max-w-[384px]">
            <h3 className="font-headline-lg text-headline-lg font-bold mb-md">Unlock High-Resolution Visibility</h3>
            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed mb-xl">
              Join the next generation of Earth observation. Monitor vast agricultural regions, track environmental changes, and analyze urban development with unprecedented clarity.
            </p>
            
            <div className="flex flex-col gap-sm items-center">
              <div className="flex items-center gap-xs">
                <Icon name="check_circle" filled className="text-secondary-container text-[18px]" />
                <span className="font-label-md text-label-md text-white">99.4% Sigma-5 Accuracy</span>
              </div>
              <div className="flex items-center gap-xs">
                <Icon name="check_circle" filled className="text-secondary-container text-[18px]" />
                <span className="font-label-md text-label-md text-white">Sovereign Cloud Infrastructure</span>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
