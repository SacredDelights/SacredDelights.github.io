import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { MENU_OPTIONS } from "../../constants/select-options";
import "./Order.css";

// 1. Define TypeScript interfaces for data structures
interface SelectOption {
  value: string;
  label: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  selectedOption: string;
  quantity: number;
  comments: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export const ContactForm: React.FC = () => {
  // 2. Manage state and dynamic JSON options
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    selectedOption: "",
    quantity: 1,
    comments: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // 3. Simulate fetching dynamic select options from a JSON source
  // const [options, setOptions] = useState<SelectOption[]>([]);
  // useEffect(() => {
  //   const mockJsonData: SelectOption[] = [
  //     { value: "support", label: "Technical Support" },
  //     { value: "sales", label: "Sales Inquiry" },
  //     { value: "feedback", label: "General Feedback" },
  //   ];
  //   setOptions(mockJsonData);
  // }, []);

  // 4. Input tracking handler
  const phoneRegex = /^\d{10}$/;
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // 5. Basic email and presence check validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 6. Form submission dispatch
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted safely:", formData);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="relative max-w-md mx-auto my-8 p-6 border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-[20px] text-primary mb-6">
        <p>Select cake, quantity and submit form to make your order.</p>
        <p> We will contact you shortly.</p>
      </h2>

      {isSubmitted ? (
        <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
          <p className="font-medium">Success!</p>
          <p className="text-sm">
            Thank you, your form has been submitted successfully.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Name Field */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.name}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone Field */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555)000-0000"
            />
            {errors.phone && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.phone}
              </span>
            )}
          </div>

          {/* Inquiry Dropdown (JSON State) */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Inquiry Type:</label>
            <select
              name="selectedOption"
              value={formData.selectedOption}
              onChange={handleChange}
            >
              <option value="">-- Please choose in menu --</option>
              {/* {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))} */}
              {MENU_OPTIONS.map((option) => (
                <option key={option.value} className="text-black border">
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Number Field */}
          <div style={{ marginBottom: "1rem" }}>
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              min="1"
              max="100"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          {/* Text Area */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label>Comments / Message:</label>
            <textarea
              name="comments"
              rows={4}
              value={formData.comments}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-[20px] leading-[30px] px-8 py-3 border rounded my-4 hover:border-primary hover:text-primary transition-all min-w-[155px]"
          >
            Submit Form
          </button>
        </form>
      )}
    </div>
  );
};
