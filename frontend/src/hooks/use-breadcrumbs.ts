import { usePathname } from "next/navigation";

export function useBreadcrumb() {
  const pathname = usePathname();

  if (!pathname) return [];

  // Split the pathname into segments and remove empty strings
  const segments = pathname.split("/").filter(Boolean);

  // Create breadcrumb items with names and paths
  const breadcrumbItems = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    // Convert segment to a readable label (e.g., "my-page" -> "My Page")
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
    return { label, path };
  });

  return breadcrumbItems;
}
