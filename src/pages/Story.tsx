import React from "react";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import story_img from "../images/story.png";
import WebpageSection from "../components/WebpageSection";

export default function Story() {
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {/* <div className="relative h-64 w-full bg-cover bg-center justify-center bg-[url('https://raw.githubusercontent.com/SacredDelights/SacredDelights.github.io/refs/heads/main/src/images/story.png')] flex flex col h-auto bg-fixed"> */}
      <div className="">
        <WebpageSection />
      </div>

      {/* <div className="relative h-64 w-full bg-cover bg-bottom justify-center bg-[url('https://raw.githubusercontent.com/SacredDelights/SacredDelights.github.io/refs/heads/main/src/gallery/D87B068A-0C45-468F-9318-E6700E635FCC.webp')] flex flex col h-auto bg-fixed">
        <div className="absolute inset-0 bg-black opacity-50 border-y-2 border-primary"></div>
        <div className="relative z-10 flex h-full items-center justify-start">
          <div className={"text-white p-16"}>
            <h1
              className={
                "text-h2 text-primary mb-8 uppercase font-extralight text-left"
              }
            >
              Story
            </h1>
            <p className="p-16 x-larger">These are some words about it</p>
            <div className="">
              <p>
                March 21, 2019. The day before my daughter’s birthday. She was
                turning 10. Like any mom, I wanted to do something special. At
                that time, we were living in a small town in the far north of
                Russia — you know, where it’s freezing almost all year, the
                northern lights glow in the sky, and sometimes even bears wander
                out of the forest into the streets. Not exactly a place with
                endless options to impress a child! As someone who loves
                creating a little magic in the kitchen, I decided to bake a
                cake. But the magic didn’t happen... This happened instead...
              </p>
              <img
                className={"max-w-[90%]"}
                src={story_img}
                alt="Sacred Delights"
                width={"100%"}
              />
              <div
                className={"bg-story min-h-1/2 bg-cover flex-1"}
                style={{ aspectRatio: "1/1" }}
              ></div>
              <p>
                {" "}
                That was a turning point. The kind of moment when you open the
                fridge and tears come to your eyes — not from pride or joy, but
                from the feeling that you could have done better... and didn’t.
                Then came courses. And more courses. Practice after practice at
                home. Thankfully, I had friends who were more than happy to
                taste everything! Then came the first orders. And then... I got
                tired. Maybe even a little burned out. Then life changed — I
                moved to the United States. And as many know, life in a new
                country doesn’t always fall into place quickly or smoothly. But
                love for beauty and a bit of magic doesn’t just disappear. Over
                the years in the U.S., I kept baking — bringing my cakes to
                birthdays, celebrations, and gatherings for friends, colleagues,
                and people around me. And maybe it was the feedback... The
                reactions... The way people felt when they tasted my desserts...
                That became the final note. And I thought — why not try?
              </p>
            </div>
            <div className={"menu flex justify-center max-w-[1124px]"}></div>
          </div>
        </div>
      </div> */}
    </>
  );
}
