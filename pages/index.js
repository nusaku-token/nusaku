import React from "react";
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Chart from "../components/chart";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

function BeriNamaSectionIni() {
  return (
    <div class="container my-12 mx-auto px-1 md:px-12 justify-around">
      <div class="flex flex-wrap -mx-1 lg:-mx-4 justify-around">
        <div class="my-3 py-3 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3 justify-around">
          <article class="text-base lg:text-lg overflow-hidden rounded-lg shadow-lg">
            <div class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="py-5 font-bold leading-snug tracking-tight text-transparent lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
                Introduce
              </h1>
            </div>
            <div className="mx-8">
              <p className="text-justify">
                The proliferation of digital assets, generating capital gains of thousands of percent in recent years is the reason why
                cryptocurency are the main choice of investors, and{" "}
                <span className="text-green-500 ">
                  <b>NUSAKU</b>
                </span>{" "}
                is the point where environmental and tecnologies issues meet.
              </p>
              <br />
              <p className="text-justify">
                To make this happen,{" "}
                <span className="text-green-500 ">
                  <b>NUSAKU</b>
                </span>{" "}
                colaborate with{" "}
                <span className="text-green-600 ">
                  <b>KOPRABUH</b>
                </span>{" "}
                as an old player in the environmental world who has placed his name on the Guinness World Record for trees cultivation in
                2016.
              </p>
              <br />
              <p className="text-justify">
                Supported by{" "}
                <span className="text-green-600 ">
                  <b>KOPRABUH</b>
                </span>
                ,{" "}
                <span className="text-green-500 ">
                  <b>NUSAKU</b>
                </span>{" "}
                under <b>PT. Green Gold Arthabuana</b> is ready to green the world.
              </p>
            </div>
            <div class="flex items-center justify-between leading-none p-2 md:p-4"></div>
          </article>
        </div>

        <div class="my-3 py-3 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3 justify-around">
          <article class="text-base lg:text-lg overflow-hidden rounded-lg shadow-lg">
            <div class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="py-5 font-bold leading-snug tracking-tight text-transparent lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
                Vision
              </h1>
            </div>
            <div className="mx-8">
              <p className="text-justify">Enherits the forest as sustainable livelihood for future generations.</p>
              <br />
              <p className="text-justify">
                Indonesia as prosperous placed for the needs of its people. Forest are balanced with live for present and future
                generations.
              </p>
            </div>
            <div class="flex items-center justify-between leading-none p-2 md:p-4"></div>
          </article>
        </div>

        <div class="my-3 py-3 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/3 justify-around">
          <article class="text-base lg:text-lg overflow-hidden rounded-lg shadow-lg">
            <div class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="py-5 font-bold leading-snug tracking-tight text-transparent lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
                Mission
              </h1>
            </div>
            <div className="mx-8">
              <p className="text-justify">
                <span className="text-green-500 ">
                  <b>NUSAKU</b>
                </span>{" "}
                promoted the value of trees in a natural base on digitalization, helping to expands forest and preservation and sustainable
                use.
              </p>
              <br />
              <p className="text-justify">
                Natural resource for the benefit of human and nature. especially produce O2, clean water and absorb CO2 from the atmosphere,
                in an effort to mitigate extreme climate change by enpowering farmers land in Indonesia, so that it can help mitigate
                poverty.
              </p>
              <br />
              <p className="text-justify">
                <span className="text-green-500 ">
                  <b>NUSAKU</b>
                </span>{" "}
                is the catalyst for all world citizen to plants trees on KOPRABUH land. To redeem personal and institutional carbon
                emmision, a charity for enviroment while making money by saving{" "}
                <span className="text-green-500 ">
                  <b>NUSAKU</b>
                </span>{" "}
                as crypto asset or trading{" "}
                <span className="text-green-500 ">
                  <b>NUSAKU</b>
                </span>{" "}
                as cryptocurrency.
              </p>
            </div>
            <div class="flex items-center justify-between leading-none p-2 md:p-4"></div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>NUSAKU - Oxygenerator</title>
        <meta name="description" content="Im Oxygenerator." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      {/* SPACE */}

      <SectionTitle>
        {/*  <h1 className="justify-center text-4xl font-bold leading-snug tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-700">
              NUSAKU
  </h1> */}
        <BeriNamaSectionIni id="nusaku" />
      </SectionTitle>
      <Chart />

      {/* SPACE */}

      <Benefits imgPos="left" data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* SPACE */}

      <SectionTitle>
        <h1 className="py-5 font-bold leading-snug tracking-tight text-transparent lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
          NUSAKU Video's
        </h1>
        <br />
      </SectionTitle>
      <Video />

      {/* SPACE */}

      <SectionTitle>
        <h1 className="py-5 font-bold leading-snug tracking-tight text-transparent lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
          What they said about environment
        </h1>
      </SectionTitle>
      <Testimonials />

      {/* SPACE */}

      <SectionTitle>
        <h1 className="py-5 font-bold leading-snug tracking-tight text-transparent lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
          Frequently Asked Questions
        </h1>
      </SectionTitle>
      <Faq />

      {/* SPACE */}

      <Footer />
    </>
  );
}
