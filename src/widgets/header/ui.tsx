import { useState, useEffect, useRef } from 'react';
import { CurrencySlider } from '@/shared/currency-slider';
import { currencies } from '@/shared/currency-slider/model';

export const Header: React.FC = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const profileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                profileMenuRef.current &&
                !profileMenuRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).closest('[data-profile-button]')
            ) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header
            className={`bg-black text-white bg-opacity-80 fixed top-0 left-0.4 2xl:left-4 p-4 h-20 md:h-70 -mx-4 relative z-0 backdrop-blur-sm transition-all duration-300 ${
                isMenuOpen ? 'w-screen h-120' : 'w-screen md:w-screen w-[44px]'
            }`}
        >
            <div className="flex flex-col gap-3 justify-between items-center max-w-screen-xl mx-auto mb-30">
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                <nav
                    className={`md:flex md:ml-30 gap-5 space-x-5 text-center justify-center items-center ${
                        isMenuOpen ? 'block' : 'hidden'
                    } md:block`}
                    style={{ fontFamily: 'SF Pro, sans-serif' }}
                >
                    <a href="#" className="block text-white hover:text-gray-300 py-2">
                        Dashboard
                    </a>
                    <a href="#" className="block text-white hover:text-gray-300 py-2">
                        Analytics
                    </a>
                    <div className="relative group flex items-center justify-center">
                        <a
                            href="#"
                            className="block text-white hover:text-gray-300 flex items-center py-2"
                        >
                            Products
                            <svg
                                className="w-4 h-4 ml-1 md:rotate-0 rotate-[-90deg] transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                        <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg w-32 -mt-15 md:-left-5 md:top-25 left-[75%] top-full z-10">
                            <a
                                style={{ color: 'black' }}
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 hover:rounded"
                            >
                                Product 1
                            </a>
                            <a
                                style={{ color: 'black' }}
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 hover:rounded"
                            >
                                Product 2
                            </a>
                        </div>
                    </div>
                    <div className="relative group flex items-center justify-center">
                        <a
                            href="#"
                            className="block text-white hover:text-gray-300 flex items-center py-2"
                        >
                            Order
                            <svg
                                className="w-4 h-4 ml-1 md:rotate-0 rotate-[-90deg] transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                        <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg w-32 -mt-15 md:-left-5 md:top-25 left-[75%] top-full z-10">
                            <a
                                style={{ color: 'black' }}
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 hover:rounded"
                            >
                                Order 1
                            </a>
                            <a
                                style={{ color: 'black' }}
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 hover:rounded"
                            >
                                Order 2
                            </a>
                        </div>
                    </div>
                    <div className="relative group flex items-center justify-center">
                        <a
                            href="#"
                            className="block text-white hover:text-gray-300 flex items-center py-2"
                        >
                            Report
                            <svg
                                className="w-4 h-4 ml-1 md:rotate-0 rotate-[-90deg] transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                        <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg w-32 -mt-15 md:-left-5 md:top-25 left-[75%] top-full z-10">
                            <a
                                style={{ color: 'black' }}
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 hover:rounded"
                            >
                                Report 1
                            </a>
                            <a
                                style={{ color: 'black' }}
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 hover:rounded"
                            >
                                Report 2
                            </a>
                        </div>
                    </div>
                    <a href="#" className="block text-white hover:text-gray-300 py-2">
                        Store info
                    </a>
                    <a href="#" className="block text-white hover:text-gray-300 py-2">
                        Help
                    </a>

                    <div className="relative">
                        <button
                            data-profile-button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center space-x-2 bg-stone-900 p-2 rounded"
                        >
                            <img
                                src="/images/avatars/Avatar.svg"
                                alt="Eva Bond"
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="text-left">
                                <p className="text-sm font-medium">Eva Bond</p>
                                <p className="text-xs text-gray-400">eva.bond@gmail.com</p>
                            </div>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isProfileOpen && (
                            <div
                                ref={profileMenuRef}
                                className="absolute right-3.5 mt-2 w-48 bg-white text-black rounded shadow-lg z-10"
                            >
                                <a
                                    style={{ color: 'black' }}
                                    href="#"
                                    className="block px-4 py-0.5 hover:bg-gray-100 hover:rounded"
                                >
                                    Settings
                                </a>
                                <a
                                    style={{ color: 'black' }}
                                    href="#"
                                    className="block px-4 py-0.5 hover:bg-gray-100 hover:rounded"
                                >
                                    Logout
                                </a>
                            </div>
                        )}
                    </div>
                </nav>

                <div className="hidden md:block -ml-10">
                    <CurrencySlider currencies={currencies} />
                </div>
            </div>
        </header>
    );
};