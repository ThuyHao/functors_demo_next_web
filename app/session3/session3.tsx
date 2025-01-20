import Image from "next/image"

const Session3 = () => {
    return (
        <div className="sesson3 flex flex-col justify-around max-w-screen-xl w-full mx-auto gap-16 px-11">
            <div className="sesson3-content">
                <p className="sesson3-title text-base text-lime-300 text-center">One-click Trading</p>
                <p className="sesson3-big-content text-white uppercase text-5xl font-bold text-center mt-0.5">Start trading
                    in just few steps</p>
            </div>
            <div className="sesson3-grid-content grid grid-cols-2 gap-3">
                <div className="grid-content1 relative h-56 border-2 border-purple-600 rounded-xl overflow-hidden drop-shadow-lg">
                    <div className="absolute overflow-hidden rounded-lg w-[828px] top-[-30px] -z-10">
                        <Image
                            src="/assets/img/sesson3-1.png"
                            alt="sesson3-1"
                            layout="responsive"
                            width={16}
                            height={9}
                            className="filter brightness-[0.75] opacity-75"
                        />
                    </div>
                    <div className=" relative grid-text-content px-6 py-8">
                        <p className="grid-big-content text-white uppercase text-3xl font-bold">Non-custodial</p>
                        <p className="grid-sub-content text-white text-base mt-2">Full costody of your funds. No need to deposit
                            or sign up.</p>
                    </div>
                </div>

                <div className="grid-content2 relative h-56 border-2 border-purple-600 rounded-xl overflow-hidden drop-shadow-lg">
                    <div className="absolute overflow-hidden rounded-lg w-[670px] top-[-60px] -z-10">
                        <Image
                            src="/assets/img/sesson3-2.png"
                            alt="sesson3-1"
                            layout="responsive"
                            width={16}
                            height={9}
                            className="filter brightness-[0.75] opacity-75"
                        />
                    </div>
                    <div className="grid-text-content px-6 py-8">
                        <p className="grid-big-content text-white uppercase text-3xl font-bold">Transparent and Public</p>
                        <p className="grid-sub-content text-white text-base mt-2">100% on-chain data on blockchain including
                            trades, fee, profit...</p>
                    </div>
                </div>

                <div className="grid-content3 relative h-56 border-2 border-purple-600 rounded-xl overflow-hidden drop-shadow-lg">
                    <div className="absolute overflow-hidden rounded-lg w-[875px] top-[-70px] -z-10">
                        <Image
                            src="/assets/img/sesson3-3.png"
                            alt="sesson3-1"
                            layout="responsive"
                            width={16}
                            height={9}
                            className="filter brightness-[0.75] opacity-75"
                        />
                    </div>
                    <div className="grid-text-content px-6 py-8">
                        <p className="grid-big-content text-white uppercase text-3xl font-bold">Decentralized Oracle Prices
                        </p>
                        <p className="grid-sub-content text-white text-base mt-2">Median spot prices fetched from Chainlink
                            Oracle system. No scam wicks.</p>
                    </div>
                </div>

                <div className="grid-content4 relative h-56 border-2 border-purple-600 rounded-xl overflow-hidden drop-shadow-lg">
                    <div className="absolute overflow-hidden rounded-lg w-[850px] top-[-55px] -z-10">
                        <Image
                            src="/assets/img/sesson3-4.png"
                            alt="sesson3-1"
                            layout="responsive"
                            width={16}
                            height={9}
                            className="filter brightness-[0.75] opacity-75"
                        />
                    </div>
                    <div className="grid-text-content px-6 py-8">
                        <p className="grid-big-content text-white uppercase text-3xl font-bold">Synthetic leverage</p>
                        <p className="grid-sub-content text-white text-base mt-2">Support wide ranges of assets from
                            cryptocurrencies to forex.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Session3