"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../ui/Icon";
import { useSidebar } from "./SidebarContext";

const navItems = [
  { label: "Dashboard", icon: "dashboard", href: "/dashboard" },
  { label: "Upload", icon: "cloud_upload", href: "/upload" },
  { label: "Cloud Detection", icon: "cloud", href: "/cloud-detection" },
  { label: "Reconstruction", icon: "layers", href: "/reconstruction" },
  { label: "Analytics", icon: "analytics", href: "/analytics" },
  { label: "Reports", icon: "assessment", href: "/reports" },
  { label: "Settings", icon: "settings", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isOpen, close } = useSidebar();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40 lg:hidden"
          onClick={close}
        />
      )}

      <aside className={`fixed left-0 top-0 h-screen w-sidebar-width bg-surface-container-low border-r border-outline-variant flex flex-col py-xl transition-transform duration-200 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 dark:bg-[#060b17]/80 dark:backdrop-blur-md dark:border-[#1e293b]`}>
        <div className="px-lg mb-xl flex items-start justify-between">
          <div>
            <h1 className="font-headline-md text-headline-md font-bold text-primary">TerraRecon AI</h1>
            <p className="font-label-md text-label-md text-on-surface-variant opacity-70 uppercase tracking-wider mt-1">Geospatial Intelligence</p>
          </div>
          <button 
            onClick={close} 
            className="lg:hidden p-xs hover:bg-surface-container-high rounded text-on-surface-variant cursor-pointer transition-colors"
            aria-label="Close Sidebar"
          >
            <Icon name="close" />
          </button>
        </div>

        <nav className="flex-grow space-y-base overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/dashboard' || pathname === item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={`flex items-center gap-md px-lg py-sm transition-colors ${
                  isActive
                    ? "border-l-4 border-primary bg-secondary-container/30 text-primary font-semibold"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                <Icon name={item.icon} filled={isActive} />
                <span className="font-body-md text-body-md">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-lg pt-xl border-t border-outline-variant mt-auto">
          <div className="flex items-center gap-md">
            <img
              className="w-10 h-10 rounded-full border border-outline-variant object-cover"
              alt="Dr. Elena Vance"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo42tGxZo5y2CsbwyXPhwIbRA7cr9Ecy-iYGb42e7yfDVWnZte4NxDY2zUrXlTMLXAiL5cCXsJ1wHRXNGbRsVGRGMtS6ui2kbPbK_vjN51Q3j-54bZS6qR-7lmhEDNyRaopBgyVqPqqObloE5DYYSfh-3zLv4n5kKzxKBw3OGJB0sW05Eh2Va3iJ1HfMstxHxFatS4wmON2Kpk9QMfv6-IfPZzFFTfSQmIpSOMLD-DlJQVifBYjs4Mn8SBzuTlfLo6733mI9XugF73"
            />
            <div>
              <p className="font-label-md text-label-md font-bold">Dr. Elena Vance</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Lead Researcher</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
