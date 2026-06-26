import Banner from "../components/Banner";
import { TextContainer } from "../components/Container/Container";
import menu from "../images/menu_meringue_roll.webp";
export default function MeringueRoll() {
  return (
    <div className={"border-y-[.5px] border-primary"}>
      <Banner positionClass="c" />
      <div className="relative bg-icons py-8">
        <div className="absolute bg-black/80 inset-0"></div>
        <TextContainer variant="wide">
          <div className={"menu relative flex justify-center"}>
            <img
              className={""}
              src={menu}
              alt="Sacred Delights"
              width={"100%"}
            />
          </div>
        </TextContainer>
      </div>
    </div>
  );
}
