import Image from 'next/image';
import Session1 from './session1/sesson1';
import Session2 from './session2/session2';
import Session3 from './session3/session3';
import Session4 from './session4/session4';

export default function Home() {
  return (
    <div>
      <div id="header" className="flex justify-around items-center h-28 bg-transparent">
        <div className="flex justify-between items-center max-w-screen-xl w-full h-16 border-2 border-purple-600 rounded-full px-8 fixed bg-black-200 backdrop-blur-xl">
          {/* Logo */}
          <div className="header-logo flex">
            <Image
              src="/assets/img/logo-functors.png"
              alt="logo-icon"
              width={44}
              height={44}
              className="logo-icon w-11 h-11"
            />
            <div className="logo-content flex flex-col my-auto">
              <p className="font-bold text-base uppercase text-white">Functors</p>
              <div className="sup-content flex items-center gap-0.5 h-2.5">
                <p className="sup-left-content text-white text-[8px]">Built on</p>
                <div className="bg-white px-1 py-0.5 rounded-full">
                  <Image
                    src="/assets/img/monad-img.png"
                    alt="monad-img"
                    width={24}
                    height={4}
                    className="w-6 h-1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="nav flex justify-around items-center gap-8 text-white">
            <p className="nav-products font-bold text-base">Products</p>
            <p className="nav-synthetic font-bold text-base">Synthetic</p>
            <p className="nav-gamification font-bold text-base">Gamification</p>
            <div className="nav-launch-app px-6 py-1 bg-purple-500 rounded-full">
              <p className="font-bold text-base">Launch app</p>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div id="content" className="flex flex-col gap-48">
        <Image
          src="/assets/img/bg-purple.png"
          alt="bg-content"
          layout="responsive"
          width={16}
          height={9}
          className="fixed top-0 left-0 z-[-10]"
        />
        {/* session 1 */}
        <Session1 />
        <Session2 />
        <Session3 />
        <Session4 />
      </div>
    </div>
  );
};