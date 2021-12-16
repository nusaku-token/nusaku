import Image from "next/image";
import Container from "./container";

import heroImg from "../public/img/hero.png";
import klhkImg from "../public/img/brands/KLHK.png";
import kemenkopImg from "../public/img/brands/kemenkop.png";
import koprabuhImg from "../public/img/brands/koprabuh.png";
import kemendesImg from "../public/img/brands/kemendes.png";
import kemenpanImg from "../public/img/brands/kemenpan.png";

export default
 function Hero() {
  return (
    <>
      <Container className="flex flex-wrap bg-image">
        <div className="flex items-center w-full lg:w-2/3">
          <div className="max-w-2xl mb-8">
            <h1 className="text-8xl font-bold justify-center leading-snug tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-green-700">
              NUSAKU
            </h1>
            <p className="py-5 font-bold leading-snug tracking-tight text-justify lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-700">
              Clean the air, Green the world.<br />
              Plant the trees, Find the Gold.<br />
              Against the climate change.<br />
              <span className="py-5 font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-green-400">Oxygenerator</span> is climate champion.<br />
            </p>

            <div className="flex flex-wrap items-start space-x-3 space-y-3 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="http://presale.nusaku.net/?ref=0xF3865534aD5ec996724666d2C734642aEe8218e2"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-gradient-to-r from-blue-200 to-green-500 rounded-md transition duration-500 ease-in-out hover:bg-green-400 transform hover:-translate-y-1 hover:scale-105">
                Buy on Presale III
              </a>
              <a
                href="https://nusaku.net/wp-content/uploads/2021/12/whitepaper-nusaku.pdf"
                target="_blank"
                rel="noopener"
                className="flex items-center py-4 text-gray-500 dark:text-gray-400 px-8  text-lg font-medium text-center rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <svg
                  role="img"
                  width="50"
                  height="50"
                  className="w-10 h-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>White Paper</title>
                  <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
                   <path fill-rule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" clip-rule="evenodd" />
                 </svg>
                <span> WhitePaper</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/3">
          <div className="animate-pulse wiggle 1s ease-in-out infinite">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className=" font-bold text-center leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-green-500">
          support by
          </div>

          <div className="flex flex-wrap gap-5 mt-10 justify-center">

            <div className="text-gray-400 dark:text-gray-400">
              <KLHKLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <KemenkopLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <KoprabuhLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <KemendesLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <KemenpanLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function KLHKLogo() {
  return (
    <Image
    src={klhkImg}
    width="250"
    height="250"
    class="animate-pulse"
  />
  );
}

function KemenkopLogo() {
  return (
    <Image
    src={kemenkopImg}
    width="250"
    height="250"
    class="animate-pulse"
  />
  );
}

function KoprabuhLogo() {
  return (
    <Image
    src={koprabuhImg}
    width="250"
    height="250"
    class="animate-pulse"
  />
  );
}

function KemendesLogo() {
  return (
    <Image
    src={kemendesImg}
    width="250"
    height="250"
    class="animate-pulse"
  />
  );
}
function KemenpanLogo() {
  return (
    <Image
    src={kemenpanImg}
    width="250"
    height="250"
    class="animate-pulse"
  />
  );
}


