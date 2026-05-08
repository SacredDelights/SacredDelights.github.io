import React from "react";
import Quote from "../components/Quote/Quote";

export default function GetAQuote() {
  return (
    <div>
      <div className={"bg-quote-bkg min-h-[40vw] bg-cover lg:bg-fixed mb-8"}>
        <div className={"bg-gradient-to-r from-black50"}>
          <div className={"flex justify-center min-h-[40vw] items-center"}>
            <h1 className={"flex flex-col"}>
              <span
                className={
                  "text-white text-h2-plus text-center font-Ubuntu uppercase font-extralight"
                }
              >
                Get a quote
              </span>
            </h1>
          </div>
        </div>
      </div>
      <Quote />
    </div>
  );
}
