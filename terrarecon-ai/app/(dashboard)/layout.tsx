import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { SidebarProvider } from "@/components/layout/SidebarContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 ml-0 lg:ml-sidebar-width flex flex-col relative transition-all duration-200">
          <TopBar />
          <main className="flex-1 mt-16 overflow-y-auto bg-background p-md lg:p-xl custom-scrollbar">
            <div className="max-w-container-max mx-auto h-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
