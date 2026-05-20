import { ContactForm } from "../components/Order";

export default function GetAQuote() {
  return (
    <div>
      <div
        className={
          "bg-[url(https://raw.githubusercontent.com/SacredDelights/SacredDelights.github.io/refs/heads/main/src/gallery/B579DE0B-A47A-4F5E-8CFC-18188C74C0E8.webp)] min-h-[40vw] bg-cover lg:bg-fixed border-b-prime"
        }
      >
        <div className={"bg-gradient-to-r from-black50"}>
          <div className={"flex justify-center min-h-[40vw] items-center"}>
            <h1 className={"flex flex-col"}>
              <span
                className={
                  "text-white text-h2-plus text-center font-Ubuntu uppercase font-extralight"
                }
              >
                Request Order
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="relative bg-order text-white p-2 sm:p-16 border-b-2 border-primary">
        <div className="absolute bg-black/80 inset-0"></div>
        {/* <Quote /> */}
        <ContactForm />
      </div>
    </div>
  );
}
