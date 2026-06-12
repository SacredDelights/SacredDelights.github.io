import React from "react";
import { siteConfig } from "../config/site.config";
import { useLocation } from "react-router-dom";
import { TextContainer } from "./Container/Container";

interface BannerProps {
  headerTitle?: string;
  headerDescription?: string;
  secondaryText?: string;
  imageUrl?: string;
  positionClass?: "tl" | "l" | "bl" | "t" | "c" | "b" | "tr" | "r" | "br";
}

const Banner: React.FC<BannerProps> = ({
  headerTitle = "",
  headerDescription = "",
  secondaryText = "",
  imageUrl = "",
  positionClass = "c",
}) => {
  const imgPosition = {
    tl: "bg-top-left",
    l: "bg-left",
    bl: "bg-bottom-left",
    t: "bg-top",
    c: "bg-center",
    b: "bg-bottom",
    tr: "bg-top-right",
    r: "bg-right",
    br: "bg-bottom-right",
  };
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
    <section className="relative">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={`${imgPosition[positionClass]} relative min-h-[40vw] bg-cover lg:bg-fixed text-primary`}
      >
        {/* possible to one of following two line  */}
        <div className={"bg-gradient-to-r from-black"}>
          {/* <div className={"absolute bg-black/50 inset-0"}> */}
          <TextContainer variant="wide">
            <div className={"flex min-h-[40vw] items-center"}>
              <div className={"flex flex-col gap-4 md:gap-8"}>
                <h1 className={"text-h2 font-Ubuntu uppercase font-extralight"}>
                  {headerTitle}
                </h1>
                <p className="text-white text-[20px]">{headerDescription}</p>
              </div>
            </div>
          </TextContainer>
        </div>
      </div>
    </section>
  );
};

export default Banner;
