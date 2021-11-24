import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const testimonials = [
  {
    image: userOneImg,
    name: "Dr. Ir. Transtoto Handadhari, M.Sc",
    as: "Forestry and Environmental Economist Expert",
    content: `The NUSAKU crypto currency provides hope for the realization of the sustainability of Forest Resources
    and the environment, as well as the welfare of forest farmers and the wider community as well as
    sustainable national development.
    <br />
    Loving the environment starts with planting a tree, preserving it is noble.`,
  },
  {
    image: userThreeImg,
    name: "Dr. Ir. Ruandha Agung Sugardiman, M.Sc",
    as: "Director General of Forestry Planning and Environmental Management, KLHK.",
    content: `Indonesia has made a significant contribution to the reduction of global GHG emissions with a massive
    movement for forest and land rehabilitation and restoration of peat and mangroves.
    <br />
    NUSAKU's efforts are very relevant to this program, combining cryptocurrency technology with tree
    planting project towards forest development.`,
  },
  {
    image: userTwoImg,
    name: "Yohanis Cianes Walean",
    as: "CEO NUSAKU",
    content: `Why hesitate to pay for environmental care? If an environmental disaster can destroy everything?
    <br />
    In NUSAKU, Oxygenerators pay for the environment while making money.`,
  },
];

export default function Testimonials() {
  return (
    <Container>
      <div className="container justify-around px-4 mx-auto my-2">
        <div className="flex flex-wrap items-stretch w-full h-full justify-beetween">
          {testimonials.map((testimoni, index) => {
            return <TestimoniCard key={index} testimoni={testimoni} />;
          })}
        </div>
      </div>
    </Container>
  );
}

function TestimoniCard({ testimoni }) {
  return (
    <div className="justify-around w-full h-full px-1 py-3 my-3  lg:my-4 lg:px-4 lg:w-1/3">
      <article className="rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-2 leading-tight md:p-4">
          <Avatar image={testimoni.image} />
        </div>
        <div className="mx-8">
          <p className="text-xl font-bold text-gray-700">{testimoni.name}</p>
          <br />
          <p className="text-xl font-normal text-gray-400">{testimoni.as}</p>
          <br />
          <p className="font-normal leading-relaxed text-justify text-gray-500" dangerouslySetInnerHTML={{ __html: testimoni.content }} />
        </div>
        <div className="flex items-center justify-between p-2 leading-none md:p-4"></div>
      </article>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 ">
      <div className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-full">
        <Image src={props.image} alt="Avatar" layout="responsive" placeholder="blur" />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-green-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-green-900 dark:bg-green-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
