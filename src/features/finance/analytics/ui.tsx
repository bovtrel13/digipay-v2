import { useState } from 'react';
import { Card } from '@/shared/card/ui'; // Предполагаем, что Card в shared слое
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { AnalyticsData } from './model';

const COLORS = ['#EBEEFF', '#D7DDFE', '#BBC6FB', '#92A3F6', '#778AED', '#566CD9'];

const renderCustomLegend = (props: any) => {
    const { payload } = props;

    return (
        <div className="flex flex-wrap justify-center gap-3 mt-4">
            {payload.map((entry: any, index: number) => (
                <div key={`item-${index}`} className="flex items-center space-x-2">
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-xs text-gray-500">{entry.value}</span>
                </div>
            ))}
        </div>
    );
};

interface AnalyticsProps {
    data: AnalyticsData[];
}

export const Analytics: React.FC<AnalyticsProps> = ({ data }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Card className="relative lg:max-w-80 pb-8">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-lg font-semibold text-black">Analytics</h2>
                    <p className="text-sm text-gray-400">View and evaluate your financial goals</p>
                </div>
            </div>

            <div className="flex justify-center">
                <PieChart width={250} height={250}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        labelLine={false}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend content={renderCustomLegend} />
                </PieChart>
            </div>
        </Card>
    );
};