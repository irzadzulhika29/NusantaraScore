import Sidebar from "./Sidebar";

export default function DashboardLayout({ menuItems, children }) {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#10294D]">
      <div className="flex min-h-screen">
        <Sidebar menuItems={menuItems} />
        <main className="ml-[240px] w-[calc(100%-240px)] px-[28px] pb-[28px] pt-[36px]">
          {children}
        </main>
      </div>
    </div>
  );
}
