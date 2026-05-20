import React from "react";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };
  const location = useLocation();
  const pageContent =
    siteConfig.pagesContent[
      location.pathname as keyof typeof siteConfig.pagesContent
    ];
  console.log("PG", pageContent);
  headerTitle = pageContent.headerTitle;
  headerDescription = pageContent.headerDescription;
  secondaryText = pageContent.secondaryText;
  imageUrl = pageContent.imageUrl;
  console.log(imageUrl);

  return (
    <section className="relative">
      <div className="xl:mb-8 xl:absolute bg-black/70 p-8 text-white xl:w-1/3 z-10 xl:left-[45px] xl:top-[45px]">
        <h1 className="text-4xl font-bold mb-4 text-h2 text-primary uppercase font-extralight">
          {headerTitle}
        </h1>
        <p className="text-gray-700 leading-10 text-p-plus">
          {headerDescription}
        </p>
      </div>

      {/* Image and Inset Text Container */}
      <div className="relative">
        {/* <div className="bg-black/50 absolute"> */}
        <div className="w-full overflow-hidden rounded-lg shadow-xl w-full aspect-[4/3]">
          <img
            src={imageUrl}
            alt="Section background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* </div> */}

        {/* Secondary Content Block (Blue Box) */}
        <div className="bottom-0 lg:absolute xl:right-8 xl:bottom-[45px] xl:w-1/2 bg-blue-100 p-8 bg-black/70 text-white text-p-plus font-extralight leading-10 ">
          <p className="">{secondaryText}</p>
          {/* <div className={"my-6 md:my-12"}>
            <Button
              children={"Learn more"}
              isActive={false}
              onClick={() => {
                goToPage("/about");
              }}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WebpageSection;
