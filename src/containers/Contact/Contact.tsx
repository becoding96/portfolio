"use client";

import React, { useRef } from "react";
import styles from "./Contact.module.scss";
import ContainerTitle from "@/components/ContainerTitle/ContainerTitle";
import emailjs from "@emailjs/browser";
import Input from "@/components/UI/Input";
import Textarea from "@/components/UI/Textarea";
import Submit from "@/components/UI/Submit";
import Footer from "@/components/Footer/Footer";

function Contact({
  contactRef,
}: {
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef && formRef.current) {
      emailjs
        .sendForm(
          "service_mmiue6p",
          "template_ng062vj",
          formRef.current,
          "nxGcPR0jK2qbwVt6l"
        )
        .then(
          (result) => {
            console.log(result);

            alert("이메일이 전송되었습니다.");

            if (formRef.current) {
              formRef.current.reset();
            }
          },
          (error) => {
            console.error(error);

            alert("이메일이 전송이 실패되었습니다.");
          }
        );
    }
  };

  return (
    <div id={styles.container} ref={contactRef}>
      <ContainerTitle
        title="CONTACT"
        multiplier={2.5}
        direction="slide-in-left"
      />
      <form id={styles.form} ref={formRef} onSubmit={handleSubmit}>
        <p>Your Email Address</p>
        <Input name="user_email" type="text" height="25px" />
        <p>Message</p>
        <Textarea name="message" />
        <Submit />
      </form>
    </div>
  );
}

export default Contact;
