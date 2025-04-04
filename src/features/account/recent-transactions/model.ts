export interface Transaction {
    name: string;
    category: string;
    type: string;
    amount: string;
    icon: string;
}

export const transactions: Transaction[] = [
    { name: 'Dribbble Subscription', category: 'Dribbble Pro Business Subscription', type: 'Freelance', amount: '-$200.00', icon: '/images/icons/dribble.svg' },
    { name: 'Spotify Subscription', category: 'Spotify Family Subscription', type: 'Family', amount: '-$200.00', icon: '/images/icons/spotify.svg' },
    { name: 'Netflix Subscription', category: 'Netflix Subscription', type: 'Family', amount: '-$200.00', icon: '/images/icons/netflix.svg' },
    { name: 'Freelance with NajwaTeam', category: 'Freelance UI Design Mobile App', type: 'Freelance', amount: '+$1,200.00', icon: '/images/icons/freelance.svg' },
    { name: 'Freelance with SabuanTeam', category: 'Freelance UI Design Websites', type: 'Freelance', amount: '+$1,500.00', icon: '/images/icons/freelance.svg' },
];