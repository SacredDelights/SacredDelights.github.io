import logo_footer from "../../images/logo-dark.webp";
import Button from "../Button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };
  return (
    <div className={" bg-gray"}>
      <footer className="footer">
        <div className={"logo flex justify-center"}>
          <a href="/">
            <img
              className={"w-36"}
              src={logo_footer}
              alt="Atrium Studio Logo"
              width={"100%"}
            />
          </a>
        </div>
        <div className="social flex justify-center items-center">
          <p className={"flex gap-2"}>
            <a
              href="tel:+15038804665"
              target="_blank"
              rel="noopener noreferrer"
              className={"hover:fill-gray"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </a>
            <a
              href="mailto:info@atriumstaging.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="32"
                height="32"
                fill="white"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/atriumstaging/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/atriumstaging/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
              </svg>
            </a>
            <a
              href="https://www.pinterest.com/atriumstaging"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                viewBox="0 0 448 512"
              >
                <path d="M384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h72.6l-2.2-.8c-5.4-48.1-3.1-57.5 15.7-134.7c3.9-16 8.5-35 13.9-57.9c0 0-7.3-14.8-7.3-36.5c0-70.7 75.5-78 75.5-25c0 13.5-5.4 31.1-11.2 49.8c-3.3 10.6-6.6 21.5-9.1 32c-5.7 24.5 12.3 44.4 36.4 44.4c43.7 0 77.2-46 77.2-112.4c0-58.8-42.3-99.9-102.6-99.9C153 139 112 191.4 112 245.6c0 21.1 8.2 43.7 18.3 56c2 2.4 2.3 4.5 1.7 7c-1.1 4.7-3.1 12.9-4.7 19.2c-1 4-1.8 7.3-2.1 8.6c-1.1 4.5-3.5 5.5-8.2 3.3c-30.6-14.3-49.8-59.1-49.8-95.1C67.2 167.1 123.4 96 229.4 96c85.2 0 151.4 60.7 151.4 141.8c0 84.6-53.3 152.7-127.4 152.7c-24.9 0-48.3-12.9-56.3-28.2c0 0-12.3 46.9-15.3 58.4c-5 19.3-17.6 42.9-27.4 59.3H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z"></path>
              </svg>
            </a>
          </p>
        </div>
        <div className="quote text-center flex justify-center items-center">
          <Button
            children={"Get a quote"}
            isActive={false}
            onClick={() => {
              goToPage("/get-a-quote");
            }}
          />
        </div>
        <div className="copyright text-center flex justify-center items-center">
          <div>
            <h4>
              <p>&copy; {currentYear} Atrium Design, LLC</p>
            </h4>
            <h4> All rights reserved</h4>
          </div>
        </div>
      </footer>
    </div>
  );
}
