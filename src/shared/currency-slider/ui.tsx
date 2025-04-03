import { useState, useEffect, useRef } from 'react';
import { Currency } from './model';

interface CurrencySliderProps {
    currencies: Currency[];
}

export const CurrencySlider: React.FC<CurrencySliderProps> = ({ currencies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const duplicatedCurrencies = [...currencies, ...currencies, ...currencies];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex + 1;

                if (newIndex >= duplicatedCurrencies.length - currencies.length) {
                    setTimeout(() => {
                        if (sliderRef.current) {
                            sliderRef.current.scrollTo({
                                left: 0,
                                behavior: 'auto',
                            });
                        }
                        setCurrentIndex(0);
                    }, 0);
                    return newIndex;
                }

                return newIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [duplicatedCurrencies.length, currencies.length]);

    useEffect(() => {
        if (sliderRef.current) {
            const firstChild = sliderRef.current.children[0] as HTMLElement;
            const itemWidth = firstChild?.offsetWidth || 0;
            sliderRef.current.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth',
            });
        }
    }, [currentIndex]);

    return (
        <div className="relative w-4/5 max-w-screen-xl mx-auto">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-0 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-0 pointer-events-none" />

            <div
                ref={sliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
            >
                {duplicatedCurrencies.map((currency, index) => (
                    <div
                        key={`${currency.code}-${index}`}
                        className="flex items-center space-x-3 px-4 snap-center min-w-[175px]"
                    >
                        <img
                            src={currency.icon}
                            alt={`${currency.code} flag`}
                            className="w-5 h-5 rounded-full"
                        />
                        <span className="text-sm text-gray-400">{currency.code}</span>
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-xs text-gray-400">Kurs money</div>
                            <span className="text-xs text-white">{currency.rate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};