import { useState, useEffect, useRef } from 'react';
import { Card } from '@/shared/card/ui';
import { IncomeProps } from "./model";

export const Income: React.FC = () => {
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
        <Card className="relative mb-5 py-8">
            <div className="flex justify-between items-center mb-3">
                <h2
                    className="text-black text-xl"
                    style={{ fontWeight: '550', letterSpacing: '.5px' }}
                >
                    Income
                </h2>
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

            <p
                className="text-4xl mb-3 text-black"
                style={{ fontWeight: '500', letterSpacing: '1px' }}
            >
                $36,254
            </p>
            <p
                className="text-sm text-green-500"
                style={{ fontWeight: '500', letterSpacing: '.5px' }}
            >
                + $ 238.28 than last month
            </p>

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