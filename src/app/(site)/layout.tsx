import Header from "@/components/layout/Header";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <Header />
      {children}
    </div>
  );
}
