export interface Currency {
    code: string;
    rate: string;
    icon: string;
}

export const currencies: Currency[] = [
    { code: 'AUD', rate: '9,929.95', icon: '/images/flags/aud.svg' },
    { code: 'BND', rate: '11,230.87', icon: '/images/flags/bnd.png' },
    { code: 'CAD', rate: '11,347.18', icon: '/images/flags/cad.png' },
    { code: 'CHF', rate: '17,145.85', icon: '/images/flags/chf.png' },
    { code: 'CNY', rate: '2,116.14', icon: '/images/flags/cny.png' },
    { code: 'DKK', rate: '2,219.65', icon: '/images/flags/dkk.png' },
    { code: 'EUR', rate: '16,551.97', icon: '/images/flags/eur.png' },
    { code: 'BYN', rate: '7,321.64', icon: '/images/flags/bel.png' },
    { code: 'RUB', rate: '3,486.02', icon: '/images/flags/rus.png' },
];