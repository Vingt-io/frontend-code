import bsk from '@/assets/images/illustrations/bsk.png';
import plt from '@/assets/images/illustrations/plt.png';
import ETH2 from '@/assets/images/icons/ETHlev/ETH2X.png';

export const productsData = [
    {
        title: 'ETH2x Leveraged Index ',
        image: ETH2,
        buyLink: 'https://app.vingt.io/',
        link: 'https://app.vingt.io/leverage/ETH2x',
        points: [
        'ETH 2x Leverage Index (ETH2x) offers amplified exposure to ETH through a 2.0x leverage ratio, featuring automated rebalancing and liquidation protection.',
        ],
        price: '56.46756',
        symbol: 'ETH',
        market_cap: '-',
    },
    {
        title: 'Basket Index Token ',
        image: bsk,
        buyLink: 'https://app.vingt.io/',
        link: 'https://app.vingt.io/token/BSK',
        points: [
            'Basket Index Token (BSK) on BNB chain offers a diversified portfolio of top cryptocurrencies with neutral weighting for balanced market exposure.',
        ],
        price: '35.940137',
        symbol: 'BSK',
        market_cap: '-',
    },
    {
        title: 'Platform Index Token ',
        image: plt,
        buyLink: 'https://app.vingt.io/',
        link: 'https://app.vingt.io/token/PLT',
        points: [
            'PLT (Platform Index Token) follows the performance of leading platform tokens in the digital asset space, using a capitalization-weighted approach.',
        ],
        price: '51.784625',
        symbol: 'PLT',
        market_cap: '-',
    },
]