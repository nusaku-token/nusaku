import React from "react";
import { Doughnut } from "react-chartjs-2";
import Container from "./container";

const data = {
  labels: [
    "PT. Green Gold Arthabuana",
    "Super Investor",
    "Market Pancakeswap",
    "Exchanger",
    "Team NUSAKU",
    "Advisor",
    "Marketing Promotion",
    "Airdrop",
  ],
  datasets: [
    {
      backgroundColor: ["#FF6384", "#36A2EB", "#FFBC97", "#FFE300", "#E02401", "#2F86A6", "#2FDD92", "#94B3FD"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFBC97", "#FFE300", "#E02401", "#2F86A6", "#2FDD92", "#94B3FD"],
      data: [30, 20, 20, 15, 5, 5, 4, 1],
    },
  ],
};

export default function Chart() {
  return (
    <Container className="mx-auto">
      <DoughnutGroup />
      <RoadmapGroup />
    </Container>
  );
}

function DoughnutGroup() {
  return (
    <div className="justify-center">
      <h1 className="py-5 font-bold leading-snug tracking-tight text-center text-transparent lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
        Token Allocation
      </h1>

      <div class="container my-2 mx-auto px-4 md:px-12 justify-around">
        <div class="flex flex-wrap -mx-1 lg:-mx- justify-around">
          <div class="my-3 py-3 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 justify-around">
            <div className="max-w-md">
              <Doughnut width={50} height={50} data={data} />
            </div>
            <div className="max-w-md"></div>
          </div>
          <div class="my-3 py-3 px-1 w-full h-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 justify-center">
            <div class="flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div
                    class="
                  shadow
                  overflow-hidden
                  sm:rounded-lg
                "
                  >
                    <table class="min-w-full">
                      <thead class="bg-transparent">
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            NUSAKU
                          </th>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            Symbol
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            NUSAKU
                          </th>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            Decimal
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            9
                          </th>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            Total Supply
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            77.777.777
                          </th>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            Tax Fee
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            10%
                          </th>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            Max Transaction
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            3.888
                          </th>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            PT. Green Gold Arthabuana
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            30% from total supply NUSAKU
                          </th>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            Super Investor
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            20% from total supply NUSAKU
                          </th>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            Market PancakeSwap
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            20% from total supply NUSAKU (2.5% gradually)
                          </th>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            Exchanger
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            15% from total supply NUSAKU
                          </th>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            Team NUSAKU
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            5% from total supply NUSAKU
                          </th>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            Advisor
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            5% from total supply NUSAKU
                          </th>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            Marketing Promotion
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            4% from total supply NUSAKU
                          </th>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            Airdrop
                          </th>
                          <th
                            scope="col"
                            class="
                          px-6
                          py-3
                          text-left text-xs
                          font-small
                          text-gray-500
                          uppercase
                          tracking-wider
                        "
                          >
                            1% from total supply NUSAKU
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoadmapGroup() {
  return (
    <>
      <h1 className="py-5 font-bold leading-snug tracking-tight text-center text-transparent lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
        Roadmap
      </h1>

      <div class="py-3 max-w-4xl sm:mx-auto w-full px-2 sm:px-0">
        <div class="relative text-gray-700 antialiased text-sm font-semibold">
          <div class="hidden sm:block w-1 bg-green-300 absolute h-full left-1/2 transform translate-x-1/2"></div>

          <div class="mt-6 sm:mt-0 sm:mb-12">
            <div class="flex flex-col sm:flex-row items-center">
              <div class="flex justify-start w-full mx-auto items-center">
                <div class="w-full sm:w-1/2 sm:pr-12">
                  <div class="p-4 bg-yellow-100 rounded shadow">
                    - ICO (Initial Coin Offering) Locking for 1 year
                    <br />
                    - Airdrop session I
                    <br />
                    - Launch NUSAKU on BEP20 Network
                    <br />
                    - Listing on CMC and Coin Gecko
                    <br />
                    - Logo on Trust Wallet and SafePall
                    <br />- Listing on the 4 biggest Exchange
                  </div>
                </div>
                <div class="w-full sm:w-1/2 sm:pr-8 text-center justify-center">
                  <p className="py-5 font-bold leading-snug tracking-tight text-transparent lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
                    Phase I
                  </p>
                </div>
              </div>
              <div class="rounded-full bg-green-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="mt-6 sm:mt-0 sm:mb-12">
            <div class="flex flex-col sm:flex-row items-center">
              <div class="flex justify-end w-full mx-auto items-center">
                <div class="w-full sm:w-1/2 sm:pr-8 text-center">
                  <p className="py-5 font-bold leading-snug tracking-tight text-transparent lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
                    Phase II
                  </p>
                </div>
                <div class="w-full sm:w-1/2 sm:pl-8">
                  <div class="p-4 bg-red-100 rounded shadow">
                    - Mandaraka Green Zone
                    <br />
                    - Titiek Puspa Academic Zone
                    <br />
                    - Jokowi Green Zone
                    <br />
                    - Airdrop session II
                    <br />
                    - Guiness World Record ( GWR ) at West Kalimantan
                    <br />
                    - seminar on carbon trading & crypto asset for doctoral promotion in Scopus
                    <br />
                    - Gold Mining (offline project)
                    <br />- Nikel Mining (offline project)
                  </div>
                </div>
              </div>
              <div class="rounded-full bg-green-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="mt-6 sm:mt-0 sm:mb-12">
            <div class="flex flex-col sm:flex-row items-center">
              <div class="flex justify-start w-full mx-auto items-center">
                <div class="w-full sm:w-1/2 sm:pr-8">
                  <div class="p-4 bg-blue-100 rounded shadow">
                    - Airdrop Session III
                    <br />
                    - Launch NUSAKU Wallet
                    <br />- Make own exchanger with BAPPEBTI License
                  </div>
                </div>
                <div class="w-full sm:w-1/2 sm:pr-8 text-center">
                  <p className="py-5 font-bold leading-snug tracking-tight text-transparent lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
                    Phase III
                  </p>
                </div>
              </div>
              <div class="rounded-full bg-green-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div class="mt-6 sm:mt-0 sm:mb-12">
            <div class="flex flex-col sm:flex-row items-center">
              <div class="flex justify-end w-full mx-auto items-center">
                <div class="w-full sm:w-1/2 sm:pr-8 text-center">
                  <p className="py-5 font-bold leading-snug tracking-tight text-transparent lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
                    Phase IV
                  </p>
                </div>
                <div class="w-full sm:w-1/2 sm:pl-8">
                  <div class="p-4 bg-green-100 rounded shadow">
                    - NUSAKU UNFCCC (United Nations Framework Convention on Climate Change) Expose
                    <br />
                    - Tour with ICAPP (International Conference of Asian Politic)
                    <br />
                    - World universities Environment Road Show
                    <br />
                    - Airdrop Session IV
                    <br />
                    - Indonesia Crypto Expo Event, by NUSAKU
                    <br />
                    - Participate in Dubai Crypto Expo
                    <br />
                    - NUSAKU Asia tour
                    <br />
                    - NUSAKU Europe tour
                    <br />
                    - NUSAKU America tour
                    <br />
                    - NUSAKU Africa tour
                    <br />
                    - Tour with UN-Habitat
                    <br />- Tour with UNEP (United Nation Environment Program)
                  </div>
                </div>
              </div>
              <div class="rounded-full bg-green-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="mt-6 sm:mt-0 sm:mb-12">
            <div class="flex flex-col sm:flex-row items-center">
              <div class="flex justify-start w-full mx-auto items-center">
                <div class="w-full sm:w-1/2 sm:pr-8">
                  <div class="p-4 bg-purple-100 rounded shadow">
                    - Airdrop Session V
                    <br />
                    - Make a Blockchain for NUSAKU project
                    <br />
                    - Promote Carbon Credit at Universities
                    <br />
                    - Build COIN TOWER as cryptocurrency developer center
                    <br />- Maya Island Development Project With KOPRABUH 4F2C(Four Factor For Fighting Climate Change) Carbon sink, ECO
                    Energy, Eco Industry and ECO City.
                  </div>
                </div>
                <div class="w-full sm:w-1/2 sm:pr-8 text-center">
                  <p className="py-5 font-bold leading-snug tracking-tight text-transparent lg:text-4xl lg:leading-tight xl:text-1xl xl:leading-tight bg-clip-text bg-gradient-to-r from-blue-300 to-green-500">
                    Phase V
                  </p>
                </div>
              </div>
              <div class="rounded-full bg-green-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
