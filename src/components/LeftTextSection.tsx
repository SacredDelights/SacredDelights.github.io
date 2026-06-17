import React from "react";
import { siteConfig } from "../config/site.config";
import { useLocation } from "react-router-dom";

interface LeftTextSectionProps {
  headerTitle?: string;
  headerDescription?: string;
  secondaryText?: string;
  imageUrl?: string;
}

const LeftTextSection: React.FC<LeftTextSectionProps> = ({
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
    <>
      <section className={"flex justify-center flex-col-reverse md:flex-row"}>
        <div className={"p-8 flex-1 flex flex-col justify-center"}>
          <h1 className={"text-h2 text-primary mb-8 uppercase font-extralight"}>
            {headerTitle}
          </h1>
          <p>{headerDescription}</p>
          <p className="pt-4">{secondaryText}</p>
        </div>
        <div className={"bg-cover flex-1 p-0 md:p-8"}>
          <img
            src={imageUrl}
            alt="Section background"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default LeftTextSection;
