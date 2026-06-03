import { TextContainer } from "../components/Container/Container";
import { ContactForm } from "../components/Order/Order";

export default function Request() {
  return (
    <div className="border-y-[.5px] border-primary">
      <div
        className={
          "relative bg-[url(https://raw.githubusercontent.com/SacredDelights/SacredDelights.github.io/refs/heads/main/src/gallery/B579DE0B-A47A-4F5E-8CFC-18188C74C0E8.webp)] min-h-[40vw] bg-cover lg:bg-fixed"
        }
      >
        {/* possible to one of following two line  */}
        <div className={"bg-gradient-to-r from-black"}>
          {/* <div className={"absolute bg-black/50 inset-0"}> */}
          <TextContainer variant="wide">
            <div className={"flex min-h-[40vw] items-center"}>
              <h1 className={"flex flex-col"}>
                <span
                  className={
                    "text-primary text-h2 text-center font-Ubuntu uppercase font-extralight"
                  }
                >
                  Request Order
                </span>
              </h1>
            </div>
          </TextContainer>
        </div>
      </div>
      <div className="relative bg-order text-white p-2 sm:p-16">
        <div className="absolute bg-black/90 inset-0"></div>
        <ContactForm />
      </div>
    </div>
  );
}
