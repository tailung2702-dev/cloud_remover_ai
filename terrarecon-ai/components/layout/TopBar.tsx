import { Icon } from "../ui/Icon";

export function TopBar() {
  return (
    <header className="fixed top-0 right-0 left-sidebar-width h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex items-center justify-between px-xl z-40">
      <div className="flex items-center flex-grow max-w-xl">
        <div className="relative w-full">
          <Icon name="search" className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input
            className="w-full bg-surface-container-low border-none rounded-lg pl-xl py-xs text-body-sm focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder="Search parameters, logs, or users..."
            type="text"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-md">
        <button className="p-xs hover:bg-surface-container-low rounded-full transition-transform scale-95 active:opacity-80">
          <Icon name="notifications" className="text-on-surface-variant" />
        </button>
        <button className="p-xs hover:bg-surface-container-low rounded-full transition-transform scale-95 active:opacity-80">
          <Icon name="help" className="text-on-surface-variant" />
        </button>
        <div className="h-6 w-[1px] bg-outline-variant mx-xs"></div>
        <button className="flex items-center gap-sm px-sm py-1 rounded-full border border-outline-variant hover:bg-surface-container-low transition-all">
          <Icon name="cloud_done" className="text-primary text-sm" />
          <span className="font-label-md text-label-md text-on-surface-variant">Sync Active</span>
        </button>
      </div>
    </header>
  );
}
