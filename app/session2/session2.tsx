import Image from "next/image"

const Session2 = () => {
    return (
        <div className="sesson2 flex justify-around max-w-screen-xl mx-auto gap-24 px-11">
            <div className="sesson2-content flex flex-col flex-1 gap-4 my-auto">
                <p className="sesson2-content text-white uppercase text-5xl font-bold w-4/5">Trading with 100x supported</p>
                <p className="sesson2-sub-content text-white text-base w-4/5">With synthetic system, we support many kinds
                    of asset on Functors from cryptocurrencies to forex & commodities.</p>
            </div>
            <div className="sesson2-img grid grid-cols-2 flex-1 gap-3">
                <div className="ss2-img1 flex items-end">
                    <Image
                        src="/assets/img/sesson2-1.png"
                        alt="sesson2-1"
                        className="pt-4"
                        layout="responsive"
                        width={16}
                        height={9}
                    />
                </div>
                <div className="ss2-img2 flex items-end">
                    <Image
                        src="/assets/img/sesson2-2.png"
                        alt="sesson2-2"
                        layout="responsive"
                        width={16}
                        height={9}
                    />
                </div>
                <div className="ss2-img3">
                    <Image
                        src="/assets/img/sesson2-3.png"
                        alt="sesson2-3"
                        layout="responsive"
                        width={16}
                        height={9}
                    />
                </div>
                <div className="ss2-img4">
                    <Image
                        src="/assets/img/sesson2-4.png"
                        alt="sesson2-4"
                        layout="responsive"
                        width={16}
                        height={9}
                    />
                </div>
            </div>
        </div>
    )
}
export default Session2