'use client'
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const logo = {
        url: "https://www.shadcnblocks.com",
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
        alt: "logo",
        title: "Jj Blog App",
    };

    const menu = [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        { title: "Contact", url: "/contact" },
        { title: "Branch", url: "/contact/branch" },
        { title: "Dashboard", url: "/dashboard" },
    ];

    const auth = {
        login: { title: "Login", url: "/login" },
        signup: { title: "Sign up", url: "/register" },
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href={logo.url} className="flex items-center space-x-2 group">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-8 w-8 transition-transform group-hover:scale-110"
                            />
                            <span className="text-xl font-bold text-gray-900">{logo.title}</span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            {menu.map((item) => (
                                <Link
                                    key={item.url}
                                    href={item.url}
                                    className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>

                        {/* Auth Buttons - Desktop */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link
                                href={auth.login.url}
                                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                            >
                                {auth.login.title}
                            </Link>
                            <Link
                                href={auth.signup.url}
                                className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium shadow-sm hover:shadow-md"
                            >
                                {auth.signup.title}
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6 text-gray-900" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-900" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 border-t border-gray-200' : 'max-h-0'
                        }`}
                >
                    <div className="px-4 py-4 space-y-1 bg-white">
                        {menu.map((item) => (
                            <Link
                                key={item.url}
                                href={item.url}
                                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                        <div className="pt-3 mt-3 border-t border-gray-200 space-y-2">
                            <Link
                                href={auth.login.url}
                                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                {auth.login.title}
                            </Link>
                            <Link
                                href={auth.signup.url}
                                className="block px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                {auth.signup.title}
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;