import { useSidebar } from "@/components/ui/sidebar";

export default function AppLogo() {
  const { open, isMobile } = useSidebar();

  return (
    <div className="flex items-center gap-2 p-2">
      <img src="/assets/logo.svg" width={32} />
      <h1 className="text-xl font-bold" hidden={!isMobile && !open}>
        StockSaver
      </h1>
    </div>
  );
}
