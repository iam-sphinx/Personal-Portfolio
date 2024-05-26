"use client";
import Handles from "@/components/Handles";
import { contactInfo, socialLinks } from "@/config/list--config";
import React, { ChangeEvent, FormEvent, useState } from "react";
type FormData = {
  name: string;
  email: string;
  message: string;
};
const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
    name: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // To Do Data storage in future
  };

  return (
    <div className="min-h-screen">
      <h1 className="title-2">Let&apos;s Connect</h1>

      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex-1">
          <Handles title="My Social Handles:" links={socialLinks} />
          <Handles title="Personal Contact:" links={contactInfo} />
        </div>

        <div className="flex-1 mt-24 sm:mt-0">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="h-12 bg-gray-1 rounded-full px-6 outline-none text-ellipsis"
            />

            <label htmlFor="email">Your e-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              className="h-12 bg-gray-1 rounded-full px-6 outline-none text-ellipsis"
            />

            <label htmlFor="name">Short message</label>
            <textarea
              rows={5}
              id="message"
              name="message"
              onChange={handleChange}
              className="bg-gray-1 rounded-md p-6 resize-none outline-none"
            />

            <button
              type="submit"
              className="mr-auto px-3 py-1 rounded-full bg-white text-black text-base mt-4 font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
