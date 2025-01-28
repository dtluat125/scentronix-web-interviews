"use client";

import Container from "@/components/layout/Container";
import { routes } from "@/constants/routes";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const links = [
  { label: "shop", path: routes.shop },
  { label: "recipes", path: routes.recipes },
  { label: "learn", path: routes.learn },
  { label: "baking school", path: routes.bakingSchool },
  { label: "impact", path: routes.impact },
];

const subLinks = [
  { label: "categories", path: "/categories" },
  { label: "all products", path: "/all-products" },
  { label: "new products", path: "/new-products" },
  { label: "sale", path: "/sale" },
  { label: "gift cards", path: "/gift-cards" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 w-full border-b border-slate-200 bg-white">
      <Container className="flex flex-col">
        <div className="flex justify-between px-5 pt-3">
          <div className="block relative md:w-[110px] w-[90px] md:h-[70px]">
            <Link href="/" className="relative w-[100px] h-[100px] block">
              <Image
                src="/images/logo.webp"
                alt="LOGO"
                width={100}
                height={100}
                className="absolute z-[1000]"
              />
            </Link>
          </div>
          <div className="flex-1 flex justify-start items-center">
            <div className="ml-20 uppercase">
              <ul className="px-10 flex justify-between shrink text-sm gap-[60px]">
                {links.map((link) => {
                  const isActive = pathname.includes(link.path);
                  return (
                    <li key={`${link.label}-${link.path}`}>
                      <Link
                        className={twMerge(
                          "hover:text-primary",
                          isActive ? "text-primary font-semibold" : ""
                        )}
                        href={link.path}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <IconButton
              sx={{
                width: "40px",
                height: "40px",
                color: "black",
              }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              sx={{
                width: "40px",
                height: "40px",
                color: "black",
              }}
            >
              <Person2OutlinedIcon />
            </IconButton>
            <IconButton
              sx={{
                width: "40px",
                height: "40px",
                color: "black",
              }}
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </Container>
      <div className="flex-1 flex justify-start items-center bg-[#F8F5C3]">
        <Container className="flex">
          <div className="pl-[194px] uppercase flex-1">
            <ul className="px-10 flex shrink text-xs ">
              {subLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={`${link.label}-${link.path}`} className="px-4 py-3">
                    <Link
                      className={twMerge(
                        "hover:text-primary",
                        isActive ? "text-primary font-semibold" : ""
                      )}
                      href={link.path}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>
    </header>
  );
}
