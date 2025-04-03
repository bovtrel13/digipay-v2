import { useState, useEffect, useRef } from 'react';
import { Card } from '@/shared/card/ui';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { BalanceData } from './model';

interface BalanceProps {
    data: BalanceData[];
}

export const Balance: React.FC<BalanceProps> = ({ data }) => {
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

    const handleCopyLink = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl).then(() => {
            alert('Ссылка скопирована в буфер обмена!');
        }).catch((err) => {
            console.error('Ошибка при копировании ссылки: ', err);
        });
    };

    return (
        <Card className="relative">
            <div className="flex justify-between items-center">
                <h2
                    className="text-black text-xl"
                    style={{ fontWeight: '550', letterSpacing: '.5px' }}
                >
                    Total Balance
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
            <div className="flex items-center justify-between space-x-2">
                <p className="text-sm text-gray-500">$328.28 Today, 11 Oct</p>
                <button
                    onClick={handleCopyLink}
                    className="bg-blue-500 text-white px-2 py-1 hover:bg-blue-600 focus:outline-none"
                    style={{ backgroundColor: 'blue', borderRadius: '25px' }}
                >
                    <svg
                        width="15"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.66881 2.27614L1.93109 8.01387L0.988281 7.07107L6.72601 1.33333H1.66883V0H9.00214V7.33333H7.66881V2.27614Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
            <div className="mt-4 flex justify-center">
                <LineChart width={300} height={190} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="balance" stroke="#3B82F6" dot={false} />
                </LineChart>
            </div>

            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="absolute top-10 right-4 bg-white text-black shadow-lg rounded-lg py-2 w-32 z-10"
                >
                    <div
                        className="px-4 py-2 text-sm text-black hover:text-stone-600 cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Обновить
                    </div>
                </div>
            )}
        </Card>
    );
};