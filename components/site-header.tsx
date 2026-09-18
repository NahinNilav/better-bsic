"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="BSIC home">
          <Image
            src="/bsic-logo.png"
            alt="BSIC"
            width="143"
            height="52"
            className="brand__image"
            priority
            unoptimized
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "desktop-nav__link is-active" : "desktop-nav__link"}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="button button--primary header-cta" href="/pitch">
          Pitch BSIC <ArrowUpRight aria-hidden="true" size={16} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <button ref={menuButton} className="mobile-menu-button" aria-label="Open navigation menu">
              <Menu aria-hidden="true" size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            className="mobile-sheet"
            side="right"
            onCloseAutoFocus={(event) => {
              // Return focus to the trigger without scrolling: the sticky header
              // plus scroll-padding-top otherwise nudges the page away from the
              // anchor a /#section link just landed on.
              event.preventDefault();
              menuButton.current?.focus({ preventScroll: true });
            }}
          >
            <SheetHeader className="mobile-sheet__header">
              <SheetTitle className="mobile-sheet__title">Navigate</SheetTitle>
              <SheetDescription className="mobile-sheet__description">
                Bangladesh Startup Investment Company
              </SheetDescription>
            </SheetHeader>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={pathname.startsWith(item.href) ? "is-active" : undefined}
                    aria-current={pathname.startsWith(item.href) ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <SheetClose asChild>
              <Link className="button button--primary mobile-sheet__cta" href="/pitch">
                Pitch BSIC <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
