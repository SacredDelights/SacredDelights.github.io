import "yet-another-react-lightbox/styles.css";

export default function AboutUs() {
  return (
    <div>
      <div
        className={"bg-portfolio-bkg min-h-[40vw] bg-cover lg:bg-fixed mb-8"}
      >
        <div className={"bg-gradient-to-r from-black50"}>
          <div className={"flex justify-center min-h-[40vw] items-center"}>
            <h1 className={"flex flex-col"}>
              <span
                className={
                  "text-white text-h2-plus text-center font-Ubuntu uppercase font-extralight"
                }
              >
                About Us
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <p>
          At Sacred Delights, we believe that dessert is more than just
          something sweet — it’s a moment, a feeling, a memory in the making.
          Our story began not in a perfect kitchen, but in a small town far
          away, with a simple desire: to create something special for someone we
          love. What started as a single imperfect cake became a journey of
          passion, growth, and dedication to the art of fine desserts. Today,
          Sacred Delights is a reflection of that journey. Every creation is
          thoughtfully crafted, not mass-produced. We focus on the details that
          truly matter — from the balance of flavors to the elegance of
          presentation. We use carefully selected ingredients, including premium
          Belgian chocolate, to ensure each dessert feels as exceptional as the
          moment it’s made for. But what truly defines us is intention. Our
          desserts are made for more than celebrations. They are made for quiet
          dinners, meaningful conversations, and the simple desire to turn an
          ordinary day into something beautiful. Because luxury doesn’t mean
          complicated. It means care. It means attention to detail. It means
          something made just for you. Welcome to Sacred Delights — where every
          dessert tells a story.
        </p>
      </div>
    </div>
  );
}
