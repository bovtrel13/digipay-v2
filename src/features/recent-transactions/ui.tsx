import { useState, useEffect, useRef } from 'react';
import { Card } from '@/shared/card/ui';
import { Transaction } from './model';

interface RecentTransactionsProps {
    transactions: Transaction[];
}

export const RecentTransactions: React.FC<RecentTransactionsProps> = ({ transactions }) => {
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
        <Card className="relative max-w-150 md:h-[360px] rounded-lg shadow-md p-4 lg:pb-87 ">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-black">Recent Transactions</h2>
                <a
                    href="#"
                    className="text-sm text-blue-500 hover:underline"
                    style={{ color: 'blue' }}
                >
                    See all transactions
                </a>
            </div>

            <ul className="space-y-5">
                {transactions.map((transaction, index) => (
                    <li key={index} className="flex items-center space-x-4">
                        <div className="p-2 rounded-full bg-gray-100 flex items-center justify-center">
                            <img
                                src={transaction.icon}
                                alt={`${transaction.name} icon`}
                                className="w-5 h-5"
                            />
                        </div>
                        <div className="flex-1 flex items-center">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-black">{transaction.name}</p>
                                <p className="text-xs text-gray-500">{transaction.category}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                <span
                    className={`text-xs px-3 py-1 rounded-sm w-20 text-center ${
                        transaction.type === 'Freelance'
                            ? 'bg-[#00E8171A] text-[#069F15]'
                            : 'bg-[#E88B001A] text-[#9F5906]'
                    }`}
                >
                  {transaction.type}
                </span>
                                <p
                                    className={`text-sm font-medium w-24 text-right ${
                                        transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'
                                    }`}
                                >
                                    {transaction.amount}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="absolute top-10 right-4 bg-white text-black shadow-lg rounded-lg py-2 w-32 z-10"
                >
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-1 right-1 bg-gray-200 text-black rounded-full p-1 hover:bg-gray-300 focus:outline-none"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
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