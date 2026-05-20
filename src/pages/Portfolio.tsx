import React from "react";
import MasonryGallery from "../components/MasonryGallery/MasonryGallery";
import { sampleGalleryItems } from "../data/galleryItems";
import "yet-another-react-lightbox/styles.css";

export default function Portfolio() {
  return (
    <div>
      <div className="relative h-64 w-full bg-cover bg-center bg-[url('https://raw.githubusercontent.com/SacredDelights/SacredDelights.github.io/refs/heads/main/src/gallery/6B05B593-278E-4127-A7F8-FE2B8BDDADE7.webp')] flex flex col h-auto bg-fixed mb-[20px]">
        <div className="absolute inset-0 bg-black opacity-50 border-y-2 border-primary"></div>
        <div className="relative z-10 flex h-full items-center justify-start">
          {/* <h1 className="text-white text-3xl font-bold">Request order</h1> */}
          <div className={"text-white p-16 flex flex-col justify-start"}>
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            {/* <div className="bg-black opacity-50"></div> */}
            <h2
              className={
                "text-h2 text-primary mb-8 uppercase font-extralight text-left"
              }
            >
              Portfolio
            </h2>
            <p>These are some latest works</p>
          </div>
        </div>
      </div>
      {/* <div
        className={"bg-portfolio-bkg min-h-[40vw] bg-cover lg:bg-fixed mb-8"}
      >
        <div className={"bg-gradient-to-r from-black50"}>
          <div className={"flex justify-center min-h-[40vw] items-center"}>
            <h1 className={"flex flex-col"}>
              <span
                className={
                  "text-white text-h2-plus text-center font-Ubuntu uppercase font-extralight"
                }
              >
                Portfolio
              </span>
            </h1>
          </div>
        </div>
      </div> */}
      <MasonryGallery items={sampleGalleryItems} />
    </div>
  );
}
