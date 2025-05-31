"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex wrap gap-2">
      <Link
        href={"/"}
        className={classNames("text-blue-500", {
          "bg-orange-500": pathname === "/",
        })}
      >
        Home
      </Link>
      <Link
        href={"/about"}
        className={classNames("text-blue-500", {
          "bg-orange-500": pathname === "/about",
        })}
      >
        About
      </Link>
      <Link
        href={"/products/1"}
        className={classNames("text-blue-500", {
          "bg-orange-500": pathname === "/products/1",
        })}
      >
        Product 1
      </Link>
    </nav>
  );
}
