import { useState, useEffect, useRef } from 'react';
import { Card } from '@/shared/card/ui';
import { DebitCardProps } from './model';

export const DebitCard: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <Card className="relative">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-black">Debit Card</h2>
                <div
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                    </svg>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg px-6 pt-6">
                <div className="flex space-x-2 mb-13">
                    <div className="w-8 h-8 bg-blue-300 opacity-50 rounded-full"></div>
                    <div className="w-8 h-8 bg-blue-200 opacity-50 rounded-full -ml-4"></div>
                </div>

                <p
                    className={`font-normal flex tracking-wider ${window.innerWidth < 768 ? 'text-lg' : ''}`}
                    style={{ fontFamily: 'SF Pro Display, sans-serif', letterSpacing: '4%', fontSize: '20px', color: '#fefefe' }}
                >
                    3455 4562 7710 3507
                </p>

                <div className="bg-black flex justify-between items-center mt-3 -mx-6 h-15 rounded-b-lg px-6">
                    <div className="flex flex-col gap-0">
                        <p
                            className="font-normal"
                            style={{ fontFamily: 'SF Pro Display, sans-serif', letterSpacing: '4%', fontSize: '14px' }}
                        >
                            02/30
                        </p>
                        <p
                            className="text-sm"
                            style={{ fontFamily: 'SF Pro Display, sans-serif', letterSpacing: '4%' }}
                        >
                            JOHN CARTER
                        </p>
                    </div>
                    <img
                        src="images/Chip.svg"
                        alt="Card Chip"
                        className="w-10 h-7"
                    />
                </div>
            </div>

            <div className="mt-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-black">Debit Card payment limit</p>
                    <p className="text-sm text-black mt-1">
                        $500 / <span className="text-gray-400">1500</span>
                    </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-5 mt-2">
                    <div
                        className="bg-gradient-to-l from-blue-800 to-blue-400 h-5 rounded-full"
                        style={{ width: '33.33%' }}
                    />
                </div>
            </div>

            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="absolute top-10 right-4 bg-white text-black shadow-lg rounded-lg py-2 w-32 z-10"
                >
                    <div
                        className="block px-4 py-2 text-sm text-black hover:text-stone-600 cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Обновить
                    </div>
                </div>
            )}
        </Card>
    );
};