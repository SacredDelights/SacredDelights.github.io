import React from "react";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "../components/AdvancedBanner";
import BackgroundVideo from "../components/BackgroundVideo";
import Star from "../components/Star";
import WebpageSection from "../components/WebpageSection";
import Slider from "../components/Slider";

export default function MainPage() {
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <div className={"all"}>
      <div className={"main"}>
        <BackgroundVideo />

        <div className="flex justify-end flex-col md:flex-row">
          <div
            className={
              "flex justify-center flex-col-reverse md:flex-row md:w-[50%]"
            }
          >
            <div
              className={
                // "min-h-1/2 aspect-square mb-8 text-p-plus font-extralight leading-10 p-8 md:p=16 flex-1 flex flex-col justify-center bg-gray-light"
                " min-h-1/2 text-p-plus font-extralight leading-10 p-8 lg:p-16 lg:pt-24 pt-24 flex-1 flex flex-col justify-center bg-gray-light md:w-[50%]"
              }
            >
              <h2
                className={
                  "text-h2 text-primary mb-8 uppercase font-extralight"
                }
              >
                Story
              </h2>
              <p>
                March 21, 2019. The day before my daughter’s birthday. She was
                turning 10. Like any mom, I wanted to do something special. At
                that time, we were living in a small town in the far north of
                ...
              </p>
              <div className={"my-6 md:my-12"}>
                <Button
                  children={"Learn more"}
                  isActive={false}
                  onClick={() => {
                    goToPage("/story");
                  }}
                />
              </div>
            </div>
          </div>
          <div className="bg-cover bg-splash bg-no-repeat min-h-[700px] md:w-[50%]">
            {/* Custom BG */}
          </div>
        </div>

        {/* <div className="flex justify-end">
          <div className="custombg bg-custombg bg-right bg-cover bg-fixed bg-no-repeat bg-size-[auto_500px] min-h-[500px] w-[50%]">
            Custom BG
          </div>
        </div> */}
        <div className="md:hidden p-8 z-10 left-[45px] bg-secondary border-primary border-t-2">
          <h2 className=" text-4xl text-h2 text-primary uppercase font-extralight">
            About us
          </h2>
          <p className="text-gray-700 leading-relaxed">{""}</p>
        </div>
        <ParallaxProvider>
          <AdvancedBannerTop />
        </ParallaxProvider>

        <div className="">
          <div className="">
            <h2
              className={
                "border-primery border-t-2 text-h2 text-primary p-8 uppercase font-extralight bg-secondary"
              }
            >
              Portfolio
            </h2>
          </div>
        </div>

        <div className="">
          <div className=" bg-abstract2 bg-fixed ">
            <div className="flex flex-col lg:flex-row-reverse justify-between">
              <section className="relative isolate overflow-hidden lg:w-[50%] min-h-1/2">
                <div className="w-[1024px] h-[600px] ">
                  <Slider />
                </div>
              </section>
              <div
                className={"my-6 lg:my-12 flex justify-center lg:block lg:ml-8"}
              >
                <Button
                  children={"Learn more"}
                  isActive={false}
                  onClick={() => {
                    goToPage("/portfolio");
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="bg-secondary">
            <h2
              className={
                "text-h2 bg-secondary text-primary p-8 uppercase font-extralight border-primery border-t-2"
              }
            >
              Customer Reviews
            </h2>
            <div className="flex flex-col md:flex-row max-w-[1024px] justify-center bg-secondary">
              <section className="relative overflow-hidden p-6 md:py-12 lg:px-8 bg-cocoa">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <div className="flex">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-white sm:text-2xl/9">
                      <p className="font-extralight">
                        “Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo expedita voluptas culpa sapiente alias
                        molestiae. Numquam corrupti in laborum sed rerum et
                        corporis.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-10">
                      <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                        <div className="font-extralight text-white">
                          Tanya A. - Odessa Fl.
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
              <section className="relative overflow-hidden p-6 md:py-12 lg:px-8 bg-cocoa">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <div className="flex">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-white sm:text-2xl/9">
                      <p className="font-extralight">
                        “Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo expedita voluptas culpa sapiente alias
                        molestiae. Numquam corrupti in laborum sed rerum et
                        corporis.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-10">
                      <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                        <div className="font-extralight text-white">
                          Tanya A. - Odessa Fl.
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
              <section className="relative overflow-hidden p-6 md:py-12 lg:px-8 bg-cocoa">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <div className="flex">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-white sm:text-2xl/9">
                      <p className="font-extralight">
                        “Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nemo expedita voluptas culpa sapiente alias
                        molestiae. Numquam corrupti in laborum sed rerum et
                        corporis.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-10">
                      <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                        <div className="font-extralight text-white">
                          Tanya A. - Odessa Fl.
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>

      <div className="relative h-64 w-full bg-cover bg-center bg-order flex flex col h-auto">
        <div className="absolute inset-0 bg-black opacity-80 border-y-2 border-primary"></div>
        <div className="relative z-10 flex h-full items-center justify-start">
          {/* <h1 className="text-white text-3xl font-bold">Request order</h1> */}
          <div
            className={
              "text-white border-t-2 border-primary p-16 flex flex-col justify-start"
            }
          >
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            {/* <div className="bg-black opacity-50"></div> */}
            <h2
              className={
                "text-h2 text-primary mb-8 uppercase font-extralight text-left"
              }
            >
              Request order
            </h2>
            <p>
              You can choose any cake from our list or order what you want ...
            </p>
            <div className={"my-6 md:my-12"}>
              <Button
                children={"Order"}
                isActive={false}
                onClick={() => {
                  goToPage("/quote");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
