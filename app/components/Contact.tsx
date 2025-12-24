"use client";

import { useState } from "react";
import { cn } from "@/app/lib/utils";
import ContactIllustration from "@/app/assets/illustrations/contact.svg";
import Button from "./Button";
import InputRadio from "./InputRadio";
import InputText from "./InputText";

type ContactProps = {
  className?: string;
};

export default function Contact({ className }: ContactProps) {
  const [formType, setFormType] = useState<"say-hi" | "get-quote">("say-hi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic can be added here
    console.log("Form submitted:", { formType, ...formData });
  };

  return (
    <div
      className={cn(
        "flex items-center pl-[100px] pr-[467px] py-0 relative w-full max-w-[1440px] mx-auto",
        className
      )}
      data-name="Contact block"
    >
      <div
        className="bg-[#f3f3f3] flex items-start pb-[78px] pt-[60px] px-[100px] relative rounded-[45px] shrink-0 w-[1240px] overflow-hidden"
        data-name="Block with illustration"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[40px] items-start relative shrink-0 z-10"
          data-name="Form"
        >
          {/* Radio Buttons */}
          <div
            className="flex gap-[36px] items-start leading-0 relative shrink-0"
            data-name="Radio buttons"
          >
            <InputRadio
              name="formType"
              value="say-hi"
              checked={formType === "say-hi"}
              onChange={(e) => setFormType(e.target.value as "say-hi")}
              label="Say Hi"
              dataName="Say hi"
            />
            <InputRadio
              name="formType"
              value="get-quote"
              checked={formType === "get-quote"}
              onChange={(e) => setFormType(e.target.value as "get-quote")}
              label="Get a Quote"
              dataName="Get a quote"
            />
          </div>

          {/* Form Fields */}
          <div
            className="flex flex-col gap-[20px] pt-px items-start relative shrink-0"
            data-name="Fields"
          >
            <InputText
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={handleInputChange}
              label="Name"
              placeholder="Name"
            />
            <InputText
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleInputChange}
              label="Email*"
              placeholder="Email"
              required
            />
            <InputText
              id="message"
              name="message"
              type="textarea"
              value={formData.message}
              onChange={handleInputChange}
              label="Message*"
              placeholder="Message"
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            className="w-[556px] justify-center"
            data-name="Button"
          >
            Send Message
          </Button>
        </form>

        {/* Illustration -367px-42px 0+62.5px */}
        <div
          className="h-[648px] absolute right-[-325px] top-[62.5px] shrink-0 w-[691.57px]"
          data-name="Illustration"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <ContactIllustration
              className="block max-w-none h-[648px] w-[691.57px]"
              width={692}
              height={649}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
