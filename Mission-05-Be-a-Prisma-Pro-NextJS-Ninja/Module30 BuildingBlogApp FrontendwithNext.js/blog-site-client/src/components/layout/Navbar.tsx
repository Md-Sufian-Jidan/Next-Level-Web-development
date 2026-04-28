"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Branch", href: "/contact/branch" },
    { name: "Blogs", href: "/blogs" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="font-playfair text-2xl font-bold tracking-tight"
                >
                    MyBrand
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8 font-merriweather text-sm font-medium">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="relative transition-colors hover:text-gray-600"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden rounded-md p-2 hover:bg-gray-100"
                    aria-label="Toggle Menu"
                >
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t bg-white">
                    <ul className="flex flex-col gap-4 px-6 py-6 font-merriweather text-base">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="block w-full rounded-md px-2 py-2 transition hover:bg-gray-100"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;