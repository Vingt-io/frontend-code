import Image from 'next/image';
import { productsData } from "@/assets/data/productsData";
import { product_indextoken } from "@/assets/data/productIndexToken";
import { product_BTCleveragetoken } from "@/assets/data/productBTCLevToken";
import { product_ETHleveragetoken } from "@/assets/data/productETHLevToken";
import Link from 'next/link';

const topSectionPaddingTop = process.env.TOP_SEC_PADDING_TOP || '180px';
const sectionPaddingTop = process.env.SEC_PADDING_TOP || '80px';

const Products = () => {
    return (
        <div className={`overflow-hidden relative  `}> 
            <div className="container mx-auto px-4" id="WhitePaperSection">
                <div className='flex flex-col items-center text-center mb-10'>
                    {/* <h1 className="text-4xl font-bold">Vingt.io Products</h1> */}
                    <h1 className="section-title">Vingt.io Products</h1>
                    <p className="mt-4 text-lg max-w-2xl">
                        VISP by Vingt.io offers 100% collateralized on-chain Indexes and over-collateralized leveraged positions for ETH and BTC.
                        To buy/sell VISP products 
                        <a href="https://app.vingt.io/" target="_blank" className="text-blue-500 hover:text-white transition-colors"> click here</a>.
                    </p>
                </div>
                
                {/* <h2 className="text-3xl font-semibold text-center mb-6">VISP Featured Products</h2> */}
                <h2 className="section-title">VISP Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {productsData.map((product, index) => (
                        <div key={index} className="flex flex-col justify-between p-2 lg:p-6 bg-[#13111a] rounded-lg shadow-lg">
                            <div className='flex justify-between items-center'>
                            <Link href={product.link} target="_blank" className="flex items-center gap-2">
                                {product.image && <Image src={product.image} alt="icon" className="w-6 h-6 lg:w-auto lg:h-10 transition-transform duration-300 hover:scale-110" />}
                                <h3 className="text-sm lg:text-lg font-semibold hover:text-blue-500">{product.title}</h3>
                            </Link>
                            <Link href={product.buyLink} target="_blank" className="relative text-sm font-medium text-[#e0e0e0] after:block after:content-[''] after:absolute after:left-0 after:bottom-[-2] after:h-[4px] after:bg-primaryblue after:animate-underline"
                            // className="text-blue-500 hover:text-white transition-colors"
                            >Buy/Sell</Link>
                            </div>
                            <ul className="text-xs lg:text-base mt-4 pl-2 lg:pl-5">
                                {product.points.map((point, pointIndex) => (
                                    <li key={pointIndex}>{point}</li>
                                ))}
                            </ul>
                            <div className="mt-4 grid grid-cols-3 text-center gap-4 ">
                                <div>
                                    <p className="font-semibold text-xs lg:text-base">Price</p>
                                    <p className='text-sm lg:text-base'>{product.price}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-xs lg:text-base">Symbol</p>
                                    <p className='text-sm lg:text-base'>{product.symbol}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-xs lg:text-base">Market Cap</p>
                                    <p className='text-sm lg:text-base'>{product.market_cap}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* <h2 className="text-3xl font-semibold text-center mt-12">VISP Index Tokens</h2> */}
                <h2 className="section-title mt-12">VISP Index Tokens</h2>
                <div className="overflow-x-auto mt-6">
                    <table className="w-full ">
                        <thead>
                            <tr className="bg-primaryblue border-b border-[#e0e0e0] text-xs md:text-base ">
                                <th className="md:p-3">Product Description</th>
                                <th className="md:p-3">Price</th>
                                <th className="md:p-3">Symbol</th>
                                <th className="md:p-3">Market Cap</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product_indextoken.map((product, index) => (
                                <tr key={index} className="text-center text-xs md:text-base bg-[#13111a]">
                                    <td className="flex items-center md:gap-4 md:p-2">
                                        <Image src={product.image} alt="Product Image" className="w-8 h-6 md:w-auto md:h-10" />
                                        <Link href={product.link} target="_blank" className=" text-blue-500 hover:text-white transition-colors">{product.description}</Link>
                                    </td>
                                    <td className="py-2 md:p-3">{product.price}</td>
                                    <td className="py-2  md:p-3">{product.symbol}</td>
                                    <td className="py-2 md:p-3">{product.market_cap}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* <h2 className="text-3xl font-semibold text-center mt-12">VISP Leverage Tokens</h2> */}
                <h2 className="section-title mt-12">VISP Leverage Tokens</h2>
                {[product_BTCleveragetoken, product_ETHleveragetoken].map((tokenList, index) => (
                    <div key={index} className="overflow-x-auto mt-6">
                        <h3 className="text-2xl font-semibold text-center text-[#666] mt-4">{index === 0 ? 'Bitcoin – BTC products' : 'Ether – ETH products'}</h3>
                        <table className="w-full  mt-4">
                            <thead>
                                <tr className="text-xs md:text-base bg-primaryblue border-b border-[#e0e0e0]">
                                    <th className="p-3 ">Product Description</th>
                                    <th className="p-3 ">Price</th>
                                    <th className="p-3 ">Symbol</th>
                                    <th className="p-3 ">Market Cap</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tokenList.map((product, index) => (
                                    <tr key={index} className="text-center text-xs md:text-base bg-[#13111a]">
                                        <td className="md:p-3  flex items-center md:gap-4">
                                            <Image src={product.image} alt="Product Image" className="w-8 h-6 md:w-auto md:h-10" />
                                            <Link href={product.link} target="_blank" className="text-blue-500 hover:text-white transition-colors">{product.description}</Link>
                                        </td>
                                        <td className="py-2 md:p-3 ">{product.price}</td>
                                        <td className="py-2 md:p-3 ">{product.symbol}</td>
                                        <td className="py-2 md:p-3 ">{product.market_cap}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
