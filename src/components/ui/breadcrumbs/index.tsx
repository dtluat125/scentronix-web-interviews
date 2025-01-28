"use client";
import { useBreadcrumb } from "@/hooks/use-breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Breadcrumbs, BreadcrumbsProps, styled } from "@mui/material";
import Link from "next/link";

const StyledBreadcrumbs = styled(Breadcrumbs)<BreadcrumbsProps>(() => {
  return {};
});

export default function AppBreadcrumbs() {
  const breadcrumbs = useBreadcrumb();

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon className="text-primary" />}
      className="uppercase text-xs !font-bold "
    >
      {/* Render the Home link */}
      <Link href="/">Home</Link>

      {/* Map through breadcrumbs */}
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return isLast ? (
          // Last breadcrumb is just a Typography, not a link
          <span key={crumb.path}>{crumb.label}</span>
        ) : (
          <Link key={crumb.path} href={crumb.path} className="">
            {crumb.label}
          </Link>
        );
      })}
    </StyledBreadcrumbs>
  );
}
