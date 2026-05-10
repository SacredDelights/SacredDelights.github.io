import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/src/components/ParallaxBanner/types";
import banner from "../gallery/6B05B593-278E-4127-A7F8-FE2B8BDDADE7.webp";
import React from "react";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";

export const AdvancedBannerTop = () => {
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };
  const secondaryText =
    "At Sacred Delights, we believe that dessert is more than just something sweet — it’s a moment, a feeling, a memory in the making. Our story began not in a perfect kitchen, but in a small town far away, with a simple desire: to create something special for someone we passion, growth, and dedication to the art of fine desserts...";
  const background: BannerLayer = {
    image: banner,
    translateY: [0, 40],
    opacity: [1, 0.9],
    scale: [1.3, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [30, 60],
    scale: [1.3, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="hidden  md:block md:mb-8 md:max-w-2xl md:absolute md:bg-black/50 md:p-8 md:text-white md:w-1/3 md:z-10 md:left-[45px]">
        <h2 className="text-4xl font-bold mb-4 text-h2 text-primary uppercase font-extralight">
          About us
        </h2>
        <p className="text-gray-700 leading-relaxed">{""}</p>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    // image:
    //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
    translateY: [0, 5],
    scale: [1.1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="absolute bottom-[-20px] md:w-1/2 w-full right-0 p-16 md:p-8 lg:p-16 bg-black/50 text-white text-p-plus font-extralight leading-10 ">
        <p className="">{secondaryText}</p>
        <div className={"flex justify-center my-6 md:my-12"}>
          <Button
            children={"Learn more"}
            isActive={false}
            onClick={() => {
              goToPage("/br/about");
            }}
          />
        </div>
      </div>
    ),
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };

  return (
    <ParallaxBanner
      // layers={[background, headline, foreground, gradientOverlay]}
      layers={[background, headline, foreground]}
      // layers={[background, headline]}
      // layers={[background]}
      className="full"
    />
  );
};
