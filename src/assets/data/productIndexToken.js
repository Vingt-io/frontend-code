import bsk from '@/assets/images/illustrations/bsk.png';
import plt from '@/assets/images/illustrations/plt.png';
import sit from '@/assets/images/illustrations/sit.png';
import bnb from '@/assets/images/allocation_icon/BNB.png';
import usdc from '@/assets/images/allocation_icon/USDC.png';
import sol from '@/assets/images/allocation_icon/SOL.png';
import dai from '@/assets/images/allocation_icon/DAI.png';
import eth from '@/assets/images/allocation_icon/ETH.png';
import inj from '@/assets/images/allocation_icon/INJ.png';
import avax from '@/assets/images/allocation_icon/AVAX.png';
import usdt from '@/assets/images/allocation_icon/USDT.png';
import ada from '@/assets/images/allocation_icon/ADA.png';
import xrp from '@/assets/images/allocation_icon/XRP.png';
import matic from '@/assets/images/allocation_icon/MATIC.png';
import dot from '@/assets/images/allocation_icon/DOT.png';
import btc from '@/assets/images/allocation_icon/BTC.png';
export const product_indextoken = [
    {
        image: bsk,
        link: 'https://app.vingt.io/token/BSK',
        description: "Basket Index Token",
        details: "Basket Index Token (BSK) offers a diversified portfolio of top cryptocurrencies with neutral weighting for balanced market exposure.",
        network: "BNB",
        symbol: "BSK",
        allocation: [btc, eth, bnb, usdt],
        buyLink: 'https://app.vingt.io/',

    },
    {
        image: plt,
        link: 'https://app.vingt.io/token/PLT',
        description: "Platform Index Token",
        details: "Platform Index Token follows the performance of leading platform tokens in the digital asset space, using a capitalization-weighted approach.",
        network: "BNB",
        symbol: "PLT",
        allocation: [bnb, eth, usdc, ada, matic, xrp, dot, avax, sol, inj],
        buyLink: 'https://app.vingt.io/',

    },
    {
        image: sit,
        link: 'https://vingt-io.gitbook.io/vingt.io/ecosystem-protocols/visp/index-tokens/sit-stable-index-token',
        description: "Stable Index Token",
        details: "SIT (Stable Index Token) diversifies risk by combining top stablecoins, offering stability with reduced exposure to any single stablecoin's volatility.",
        network: "BNB",
        symbol: "SIT",
        allocation: [ usdc, dai, usdt],
        buyLink: 'https://app.vingt.io/',
    }
];
