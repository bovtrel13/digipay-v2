import { Card } from '@/shared/card/ui';
import { QuickMenuItem } from './model';

interface QuickMenuProps {
    items: QuickMenuItem[];
}

export const QuickMenu: React.FC<QuickMenuProps> = ({ items }) => {
    return (
        <Card className="bg-white">
            <h2 className="text-lg -mt-3 font-semibold text-black">Quick Menu</h2>
            <p className="text-sm text-gray-400 mb-4">Quick Transfer or Receive to your friends</p>
            <div className="w-full py-2 -mt-2 mb-4 font-semibold text-center cursor-pointer text-gray-400 border border-dashed border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                Add people to transfer
            </div>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="text-sm font-medium text-black">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.account}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </Card>
    );
};