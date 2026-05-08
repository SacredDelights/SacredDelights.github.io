import React from "react";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Story() {
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <div className={"flex justify-center min-h-[150vw] bg-cover mb-8"}>
        <div className={"flex justify-center flex-col md:flex-row"}>
          <div
            className={"bg-candles min-h-1/2 bg-cover flex-1"}
            // style={{ aspectRatio: "1/1" }}
          ></div>
          <div
            className={
              "p-8 md:p-16 flex-1 flex flex-col justify-center bg-gray-light"
            }
          >
            <h2
              className={"text-h2 text-primary mb-8 uppercase font-Montserrat"}
            >
              Home Staging
            </h2>
            <p>
              Our home staging service is designed to transform spaces into
              beautiful and inviting showcases that will capture the hearts of
              potential buyers.
            </p>
            <div className={"my-6 md:my-12"}>
              <Button
                children={"Learn more"}
                isActive={false}
                onClick={() => {
                  goToPage("/services/home-staging");
                }}
              />
            </div>
          </div>
        </div>

        <div className={"max-w-[1024px]"}>
          <div className={"flex justify-center min-h-[40vw] items-center"}>
            <h1 className={"flex flex-col"}>
              <span
                className={
                  "text-white text-h2-plus text-center font-Ubuntu uppercase font-extralight"
                }
              >
                Story
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex-col flex md:flex-row justify-center">
        <div className="max-w-[1024px] p-8">
          {/* <h2
            className={
              "text-h2 text-primary text-center mb-8 uppercase font-Playfair"
            }
          >
            Story
          </h2> */}

          <p
            className={
              "mb-8 text-p-plus text-center font-extralight leading-10"
            }
          >
            March 21, 2019. The day before my daughter’s birthday. She was
            turning 10. Like any mom, I wanted to do something special. At that
            time, we were living in a small town in the far north of Russia —
            you know, where it’s freezing almost all year, the northern lights
            glow in the sky, and sometimes even bears wander out of the forest
            into the streets. Not exactly a place with endless options to
            impress a child! As someone who loves creating a little magic in the
            kitchen, I decided to bake a cake. But the magic didn’t happen… This
            happened instead…{" "}
          </p>
          <div
            className={"bg-story min-h-1/2 bg-cover flex-1"}
            style={{ aspectRatio: "1/1" }}
          ></div>
          <p
            className={
              "mb-8 text-p-plus text-center font-extralight leading-10"
            }
          >
            That was a turning point. The kind of moment when you open the
            fridge and tears come to your eyes — not from pride or joy, but from
            the feeling that you could have done better… and didn’t. Then came
            courses. And more courses. Practice after practice at home.
            Thankfully, I had friends who were more than happy to taste
            everything! Then came the first orders. And then… I got tired. Maybe
            even a little burned out. Then life changed — I moved to the United
            States. And as many know, life in a new country doesn’t always fall
            into place quickly or smoothly. But love for beauty and a bit of
            magic doesn’t just disappear. Over the years in the U.S., I kept
            baking — bringing my cakes to birthdays, celebrations, and
            gatherings for friends, colleagues, and people around me. And maybe
            it was the feedback… The reactions… The way people felt when they
            tasted my desserts… That became the final note. And I thought — why
            not try?
          </p>
        </div>
      </div>
    </div>
  );
}
