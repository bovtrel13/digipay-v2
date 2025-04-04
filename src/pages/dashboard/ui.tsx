// src/pages/dashboard/ui/Dashboard.tsx
import { Balance } from '@/entities/balance';
import { balanceData } from '@/entities/balance/model';
import { Income } from 'features/finance/income';
import { Expenses } from 'features/finance/expenses';
import { DebitCard } from 'features/account/debit-card';
import { RecentTransactions } from 'features/account/recent-transactions';
import { transactions } from '@/features/account/recent-transactions/model';
import { Analytics } from 'features/finance/analytics';
import { analyticsData } from '@/features/finance/analytics/model';
import { QuickMenu } from 'features/actions/quick-menu';
import { quickMenuItems } from '@/features/actions/quick-menu/model';
import { Header } from '@/widgets/header';

export const Dashboard: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />

            <div className="p-4 sm:p-6 mx-auto max-w-7xl mt-0 relative z-10 md:-mt-20 lg:-mt-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4 sm:gap-6">
                    {/* Первая колонка: Income, Expenses, Recent Transactions */}
                    <div className="lg:col-span-4 space-y-4 sm:space-y-6">
                        <div className="shadow-xl rounded-lg bg-white min-h-[120px]">
                            <Income />
                        </div>
                        <div className="shadow-xl rounded-lg bg-black min-h-[120px]">
                            <Expenses />
                        </div>
                        <div className="shadow-xl rounded-lg bg-white lg:w-150 min-h-[360px] ">
                            <RecentTransactions transactions={transactions} />
                        </div>
                    </div>

                    {/* Вторая колонка: Total Balance, Analytics */}
                    <div className="lg:col-span-3 space-y-4 sm:space-y-6">
                        <div className="shadow-xl rounded-lg bg-white min-h-[360px]">
                            <Balance data={balanceData} />
                        </div>
                        <div className="shadow-xl rounded-lg bg-white lg:max-w-80 relative lg:left-30 min-h-[360px]">
                            <Analytics data={analyticsData} />
                        </div>
                    </div>

                    {/* Третья колонка: Debit Card, Quick Menu */}
                    <div className="lg:col-span-3 space-y-4 sm:space-y-6">
                        <div className="shadow-xl rounded-lg bg-white min-h-[200px]">
                            <DebitCard />
                        </div>
                        <div className="shadow-xl rounded-lg bg-white min-h-[320px] relative lg:left-20 lg:max-w-68">
                            <QuickMenu items={quickMenuItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};