import React, { useState } from "react";
// import { Button, Form, Input, Select } from "@heroui/react";
import "./Quote.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { MENU_OPTIONS } from "../../constants/select-options";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  menu: string;
  amount: string;
}

const Quote: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    menu: "",
    amount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // @ts-ignore
  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   formData.append("access_key", "0d09c72e-822c-478f-9a25-1c47631d58c8");
  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);
  //   const res = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: json,
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     setFormData({ name: "", email: "", phone: "", message: "", menu: "" });

  //     Swal.fire({
  //       title: "Success!",
  //       text: "Message sent successfully!",
  //       icon: "success",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });

  //     navigate("/");
  //   }
  // };

  // const [choice, setChoice] = useState<string>("apple");

  // const handleChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setChoice(event.target.value);
  // };

  return (
    <>
      <section className="quote">
        <div className="intro">
          <p>Fill out this form.</p>
          <p>Put items and numbers to make your order.</p>
          <p>We will contact you shortly.</p>
        </div>
        <div>
          <form className="border">
            {/* < Form onSubmit={onSubmit}> */}
            <label className="required">Name</label>
            <div className="field-name">
              <input
                className="field required"
                type="text"
                placeholder=""
                name="name"
                onChange={handleChange}
                required
                value={formData.name}
              />
            </div>
            <label className="required">Email</label>
            <input
              type="text"
              placeholder=""
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Phone</label>
            <input
              type="text"
              placeholder=""
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {/* -------- */}
            <div className="flex-col flex lg:flex-row lg:gap-2">
              <div className="field-name flex-auto">
                <label className="">Menu</label>
                <select
                  className="Quote"
                  // required
                  name="menu"
                  aria-label="Menu"
                  // placeholder=""
                  // selectedKeys={formData.menu ? [formData.menu] : []}
                  onChange={(e) =>
                    setFormData({ ...formData, menu: e.target.value })
                  }
                >
                  {MENU_OPTIONS.map((option) => (
                    <option key={option.value} className="text-black border">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field-name">
                <label>Amount</label>
                <input
                  type="number"
                  placeholder=""
                  name="Amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label className="required">Comment or message</label>
            <textarea
              name="message"
              required
              placeholder=""
              onChange={handleAreaChange}
              value={formData.message}
              style={{ height: "6rem", resize: "vertical" }}
            />
            <button
              type="submit"
              className=" px-8 py-3 border rounded my-4 hover:border-primary hover:text-primary transition-all w-[150px]"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
  console.log(formData);
};
export default Quote;
