import { EmojiHappyIcon, CursorClickIcon } from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const classnames = {
  title:
    "py-5 font-bold leading-snug tracking-tight text-transparent text-base lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500",
};

const benefitOne = {
  desc: (
    <p className="text-justify">
      <span className="text-green-500 text">
        <b>NUSAKU</b>
      </span>{" "}
      implements a circular economic system where taxes use for trees planting project, that will give return in the form of a carbon credit
      claim. Investors, traders, farmers and government directly or indirectly benefit from{" "}
      <span className="text-green-500 text">
        <b>NUSAKU</b>
      </span>{" "}
      trading system.
    </p>
  ),
  image: benefitOneImg,
  bullets: [
    {
      title: <p1 className={classnames.title}>Oxygenerator</p1>,
      desc: <p className="text-justify">Holder who claim for trees adoption certificate by doing transaction per month.</p>,
      icon: <EmojiHappyIcon />,
    },
    {
      title: <p1 className={classnames.title}>Farmers</p1>,
      desc: <p className="text-justify">Profesional in trees planting, provider of land, seedling, fertilizer.</p>,
      icon: <EmojiHappyIcon />,
    },
    {
      title: <p1 className={classnames.title}>Net Zero Emision</p1>,
      desc: <p className="text-justify">Help Government program to Net Zero Emission.</p>,
      icon: <CursorClickIcon />,
    },
    {
      title: <p1 className={classnames.title}>Carbon Credit</p1>,
      desc: <p className="text-justify">The benefit for farmers and NUSAKU price stability.</p>,
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  desc: (
    <h1 className="py-5 font-bold leading-snug tracking-tight text-center text-transparent lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
      Four Factor For Fighting Climate Change
      <br />
      (4F2C)
    </h1>
  ),
  image: benefitTwoImg,
  bullets: [
    {
      title: <p1 className={classnames.title}>Carbon Sink</p1>,
      desc: (
        <p className="text-justify">
          Is a K-Tree planting that adapts to land conditions, soil fertility, contours, soil acidity rainfall, fast growing tree species
          suitable for planting in high densities, in order to produce volume of biomass the largest with the highest calorie yield in the
          shortest time. the wood harvest is made of wood chips. Wood chips, which is needed by the world pellet and pyrolysis industry.
          <br />
          Along with the increase in the production of KOPRABUH together members and bussines partner enter the downstream industry which
          can absorb the entire timber production of each plantation for the purpose of producing renewable energy and providing competitive
          economic value for KOPRABUH members.
        </p>
      ),
      icon: <EmojiHappyIcon />,
    },
    {
      title: <p1 className={classnames.title}>ECO Energy</p1>,
      desc: (
        <p className="text-justify">
          It is a downstream industry from carbon sink, to make renewable energy starting from Bio-Mass, wood pellets to pyrolysis oil.
          which is purified into diesel oil, gasoline and kerosine.
          <br />
          The purification process produce heat, Bio-Gas, Bio-Fuel and Bio-Char. Bio-Fuel enters the market, Bio-Char is planted on
          plantations as a carbon sink and Bio-Fertilizer, while Heat and Bio-Gas are used by the ECO Industry
        </p>
      ),
      icon: <EmojiHappyIcon />,
    },
    {
      title: <p1 className={classnames.title}>ECO Industry</p1>,
      desc: <p className="text-justify">An Industrial area that excels in the availability of land and cheap renewable energy.</p>,
      icon: <CursorClickIcon />,
    },
    {
      title: <p1 className={classnames.title}>ECO City</p1>,
      desc: <p className="text-justify">An enviromentally friendly area where 4F2C integrated economic actors live and work.</p>,
      icon: <CursorClickIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
