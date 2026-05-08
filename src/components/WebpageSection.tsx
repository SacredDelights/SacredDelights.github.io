import React from "react";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";

interface WebpageSectionProps {
  headerTitle?: string;
  headerDescription?: string;
  secondaryText?: string;
  imageUrl?: string;
}
//  "../gallery/6B05B593-278E-4127-A7F8-FE2B8BDDADE7.webp",

const WebpageSection: React.FC<WebpageSectionProps> = ({
  headerTitle = "About Sacred Delights",
  headerDescription = "",
  secondaryText = "At Sacred Delights, we believe that dessert is more than just something sweet — it’s a moment, a feeling, a memory in the making. Our story began not in a perfect kitchen, but in a small town far away, with a simple desire: to create something special for someone we passion, growth, and dedication to the art of fine desserts...",
  imageUrl = "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXN8ZW58MHx8MHx8fDA%3D",
}) => {
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <section className="relative w-full">
      {/* Header Block */}
      <div className="mb-8 max-w-2xl absolute bg-black/50 p-8 text-white w-1/3 z-10 left-[45px]">
        <h1 className="text-4xl font-bold mb-4 text-h2 text-primary uppercase font-extralight">
          {headerTitle}
        </h1>
        <p className="text-gray-700 leading-relaxed">{headerDescription}</p>
      </div>

      {/* Image and Inset Text Container */}
      <div className="relative">
        <div className="bg-prime w-full overflow-hidden rounded-lg shadow-xl w-full aspect-[4/3]">
          {/* <img
            src={imageUrl}
            alt="Section background"
            className="w-full h-full object-cover"
          /> */}
        </div>

        {/* Secondary Content Block (Blue Box) */}
        <div className="absolute bottom-[-20px] right-8 bottom-0 w-1/2 bg-blue-100 p-8 bg-secondary text-white text-p-plus font-extralight leading-10 ">
          <p className="">{secondaryText}</p>
          <div className={"my-6 md:my-12"}>
            <Button
              children={"Learn more"}
              isActive={false}
              onClick={() => {
                goToPage("/about");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebpageSection;
