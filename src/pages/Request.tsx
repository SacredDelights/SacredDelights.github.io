import Banner from "../components/Banner";
import { TextContainer } from "../components/Container/Container";
import { ContactForm } from "../components/Order/Order";

export default function Request() {
  return (
    <div className="border-y-[.5px] border-primary">
      <Banner />
      <div className="relative bg-order text-white p-2 sm:p-16">
        <div className="absolute bg-black/90 inset-0"></div>
        <ContactForm />
      </div>
    </div>
  );
}
