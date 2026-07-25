import Sidebar from "./Sidebar";

export default function DashboardLayout({ menuItems, children, routes, userName, userRole }) {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#10294D]" style={{ zoom: 1.25 }}>
      <div className="flex min-h-screen">
        <Sidebar menuItems={menuItems} routes={routes} userName={userName} userRole={userRole} />
        <main className="ml-[240px] w-[calc(100%-240px)] px-[28px] pb-[28px] pt-[36px]">
          {children}
        </main>
      </div>
    </div>
  );
}
