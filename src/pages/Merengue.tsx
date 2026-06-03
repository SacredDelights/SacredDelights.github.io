import { TextContainer } from "../components/Container/Container";
import menu from "../images/menu-merengue.webp";
export default function Merengue() {
  return (
    <div className="relative border-y-[.5px] border-primary h-64 w-full bg-cover bg-bottom justify-center bg-[url('https://raw.githubusercontent.com/SacredDelights/SacredDelights.github.io/refs/heads/main/src/gallery/54FCEEB5-472A-43B6-94FA-C9E19FA6A23B.webp')] flex flex col h-auto bg-fixed">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex h-full items-center justify-start">
        <div className={"text-white p-16"}>
          <h1
            className={
              "text-h2 text-primary mb-8 uppercase font-extralight text-left"
            }
          >
            Merengue Rolls
          </h1>
          <p className="p-16 x-larger">These are some words about it</p>
          <div className={"menu flex justify-center max-w-[1124px]"}>
            {/* <a href="/"> */}
            <img
              className={"max-w-[90%]"}
              src={menu}
              alt="Sacred Delights"
              width={"100%"}
            />
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
