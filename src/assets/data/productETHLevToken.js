import iETH from '@/assets/images/icons/ETHlev/iETH1x.png';
import ETH2 from '@/assets/images/icons/ETHlev/ETH2X.png';
import ETH3 from '@/assets/images/icons/ETHlev/ETH3x.png';

export const product_ETHleveragetoken = [
    {
        image: ETH2,
        link: 'https://app.vingt.io/leverage/ETH2x',
        buyLink: 'https://app.vingt.io/',
        description: "ETH 2x Leverage Index",
        details: "ETH 2x Leverage Index (ETH2x) offers amplified exposure to ETH with a 2.0x leverage ratio, featuring automated rebalancing and liquidation protection for token holders.",
        network: "ARBI",
        symbol: "ETH2x",
        ratio: "1.73-2.3"
    },
    {
        image: ETH3,
        link: 'https://app.vingt.io/leverage/ETH3x',
        buyLink: 'https://app.vingt.io/',
        description: "ETH 3x Leverage Index",
        details: "ETH 3x Leverage Index (ETH3x) provides amplified ETH exposure with a 3.0x leverage ratio, automated rebalancing, liquidation protection, and ongoing leverage benefits.",
        network: "ARBI",
        symbol: "ETH3x",
        ratio: "2.60-3.45"
    },
    {
        image: iETH,
        link: 'https://app.vingt.io/leverage/iETH1x',
        buyLink: 'https://app.vingt.io/',
        description: "Inverse ETH -1x Leverage Index",
        details: "Inverse ETH -1x Leverage IndexiETH1x enables amplified inverse exposure to ETH with a -1.0x leverage ratio, providing automated rebalancing, liquidation protection, and ongoing leverage benefits for token holders.",
        network: "ARBI",
        symbol: "iETH1x",
        ratio: "1.73-2.3"
    }
];
