import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-200 dark:text-gray-200 bg-gradient-to-r from-green-600 to-indigo-500 ">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How to join private Sales NUSAKU?",
    answer: "NUSAKU holders have two choises: (1). Centralized (to ease new comers in crypto), Please fill-in the Google link form. After that you will get a Verification email for FUND Transfer information (PT. Green Gold Arthabuana) and a contact. (2). Decentralized, We surely pleased if every holders get NUSAKU by sending BNB to the company's wallet.",
  },
  {
    question: "How to buy NUSAKU crypto assets?",
    answer: "You can find NUSAKU on PancakeSwap."
  },
  {
    question: "What is Oxygenerator Certificate?",
    answer:
      "The certificate of NUSAKU HOLDER that Adopt the trees, you are recognize as the trees planter, makes your own O2 and absorb your CO2 in breathing. All trees data contained in the certificate such as location, cluster name, farmer's name, type of tree, ect, the same data will be tagged on the tree at the site.",
  },
  {
    question: "How to Claim Oxygenerator Certificate?",
    answer:
      "In order to claim your Oxygenerator Certificate, you must make as many transactions (Sell-Buy) you can per month, NUSAKU administrator will announce who is entitled to get the certificate every 12th day of the month and you have to reply in 3 days, so by 15th day of the month we will sent your name and data to the trees planting site. The current month (the transaction during 12th day of last month to 12th day of current month) accumulation transaction only to qualify for the certificate awarding.",
  },

];
