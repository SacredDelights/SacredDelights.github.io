import React from "react";
import { siteConfig } from "../config/site.config";
import { useLocation } from "react-router-dom";

interface WebpageSectionProps {
  headerTitle?: string;
  headerDescription?: string;
  secondaryText?: string;
  imageUrl?: string;
}

const WebpageSection: React.FC<WebpageSectionProps> = ({
  headerTitle = "",
  headerDescription = "",
  secondaryText = "",
  imageUrl = "",
}) => {
  const location = useLocation();
  const pageContent =
    siteConfig.pagesContent[
      location.pathname as keyof typeof siteConfig.pagesContent
    ];
  headerTitle = pageContent.headerTitle;
  headerDescription = pageContent.headerDescription;
  secondaryText = pageContent.secondaryText;
  imageUrl = pageContent.imageUrl;

  return (
    <section className="relative border-y-[0.5px] border-primary">
      <div className="xl:mb-8 xl:absolute bg-secondary xl:bg-black/70 p-8 text-white xl:w-1/3 z-10 xl:left-[8%] xl:top-[45px]">
        <h1 className="text-4xl font-bold mb-4 text-h2 text-primary uppercase font-extralight max-w-[95%] m-auto">
          {headerTitle}
        </h1>
        <p className="text-gray-700 leading-10 text-p-plus max-w-[95%] m-auto">
          {headerDescription}
        </p>
      </div>

      {/* Image and Inset Text Container */}
      <div className="">
        <div className="w-full overflow-hidden shadow-xl w-full aspect-[4/3]">
          <img
            src={imageUrl}
            alt="Section background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Secondary Content Block (Blue Box) */}
        <div className="bottom-0 lg:absolute xl:right-[8%] xl:bottom-[45px] xl:w-[46%] p-8 bg-secondary lg:bg-black/70 text-white text-p-plus font-extralight leading-10 ">
          <p className="max-w-[95%] m-auto">{secondaryText}</p>
        </div>
      </div>
    </section>
  );
};

export default WebpageSection;
