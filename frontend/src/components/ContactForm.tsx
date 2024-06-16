"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { translator } from "@/lib/translator";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  name: z.string({
    required_error: "Hey, I think you forgot to add your name.",
  }),
  email: z
    .string({
      required_error: "Could you pop in your email address for me?",
    })
    .email({
      message:
        "Oops! It looks like there's a typo in your email address. Can you double-check it for me?",
    }),
  message: z
    .string({
      required_error: "Don't forget to include your message!",
    })
    .min(100, {
      message:
        "Your message is a bit short. Could you add a bit more detail so I can better assist you? Aim for at least 100 words. Thanks!",
    }),
});

type formSchemaType = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (values: formSchemaType) => {
    const { email, name, message } = values;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/contact`;
    const response = await fetch(url, { method: "POST", body: formData });

    if (response.ok) {
      toast({
        title: "Message Received!",
        description:
          "Thank you for reaching out! I've received your message and will get back to you shortly.",
      });
    } else {
      toast({
        title: "Submission Error",
        description:
          "Oops! Something went wrong and your message wasn't sent. Please try again.",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="h-12 bg-gray-1 rounded-full px-6 outline-none text-ellipsis border-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your E-mail</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="h-12 bg-gray-1 rounded-full px-6 outline-none text-ellipsis border-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short message</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  {...field}
                  className="bg-gray-1 rounded-md  resize-none outline-none border-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant={"secondary"}
          className="rounded-full mt-4 w-fit block"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
