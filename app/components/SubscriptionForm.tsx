"use client";

import { useState, FormEvent } from "react";
import { cn } from "../lib/utils";
import Button from "./Button";

type SubscriptionFormProps = {
  className?: string;
};

export default function SubscriptionForm({ className }: SubscriptionFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Add your subscription API call here
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Subscribed:", email);
      setEmail("");
      // You can add a success message here
    } catch (error) {
      console.error("Subscription error:", error);
      // You can add an error message here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "bg-[#292a32] flex gap-[20px] items-start overflow-clip px-[40px] py-[58px] relative rounded-[14px] shrink-0",
        className
      )}
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        disabled={isSubmitting}
        className="border border-solid border-white flex items-start overflow-clip px-[35px] py-[21px] relative rounded-[14px] shrink-0 w-[285px] font-normal leading-[normal] text-[18px] text-white placeholder:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#292a32] disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <Button
        type="submit"
        variant="tertiary"
        className="px-[35px] py-[19px] rounded-[14px] shrink-0"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Subscribing..." : "Subscribe to news"}
      </Button>
    </form>
  );
}
