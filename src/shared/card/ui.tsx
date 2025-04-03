interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`p-6  rounded-xl shadow-md ${className}`}>
            {children}
        </div>
    );
};