import React from "react";
import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-gradient-to-r from-green-500 to-blue-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">You want to participate to buy nusaku in private sale</h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Contact our marketing on privatesale@nusaku.id or fill the Private sale form...
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://forms.gle/GTgx8azMddnaJHcCA"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-white transition duration-150 ease-in-out rounded-md bg-gradient-to-r from-yellow-400 to-red-500 px-7 lg:px-10 lg:py-5 "
          >
            Join Private Sale Here
          </a>
        </div>
      </div>
    </Container>
  );
}
