import Image from "next/image"

const Session1 = () => {
    return (
        <div className="sesson1 flex justify-around ">
            <div className="sesson1-content flex flex-col max-w-screen-lg w-full items-center">
                <p className="sesson1-big-content uppercase text-5xl font-bold text-purple-200 mt-16">Fast,
                    Secure, User-Friendly DeFi</p>
                <p className="sesson1-sub-content text-white max-w-xl text-center text-base mt-6">Effortlessly access
                    perpetual and spot markets. Leverage our BLP Pools to boost your capital and achieve sustainable,
                    long-term growth</p>
                <div className="sesson1-img px-6 py-6 bg-black rounded-3xl mt-16">
                    <Image
                     src="/assets/img/sesson1-img.png"
                     alt="sesson1-img"
                     layout="responsive"
                     width={16}
                     height={9}
                     />
                </div>
            </div>
        </div>
    )
}
export default Session1