import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 ml-sidebar-width flex flex-col relative">
        <TopBar />
        <main className="flex-1 mt-16 overflow-y-auto bg-background p-xl custom-scrollbar">
          <div className="max-w-container-max mx-auto h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
