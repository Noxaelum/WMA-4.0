import Link from "next/link";
import Image from "next/image";
import { SidebarTrigger } from "../atoms/ui/sidebar";
import WMASidebar from "../atoms/wma-sidebar";
import NavbarLinks from "../molecules/navbar-links";

const menu_items = [
  {
    title: "Blogs",
    url: "/blogs",
  },
  {
    title: "About Us",
    url: "/about-us",
  },
  {
    title: "Services",
    url: "/services",
  },
];

export type NavbarProps = {
  data: {
    title: string;
    url: string;
  }[];
};

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 z-50 flex w-screen items-center justify-between bg-white p-2 sm:px-8 sm:py-4 lg:max-h-20 xl:px-20">
        <Link href="/">
          <Image
            src="/wma-logo.png"
            width={1000}
            height={1000}
            className="max-h-10 w-auto md:max-h-12"
            alt="WMA logo"
          />
        </Link>
        <NavbarLinks items={menu_items} />
        <SidebarTrigger />
      </nav>
      <WMASidebar items={menu_items} />
    </>
  );
}
