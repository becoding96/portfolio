"use client";

import React, { useState, useRef } from "react";
import styles from "./Contact.module.scss";
import ContainerTitle from "@/components/ContainerTitle/ContainerTitle";
import emailjs from "@emailjs/browser";
import Input from "@/components/UI/Input";
import Textarea from "@/components/UI/Textarea";
import Submit from "@/components/UI/Submit";
import useHandleScroll from "@/hooks/useHandleScroll";

function Contact({
  contactRef,
}: {
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const multiplier: number = 2.5;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight * multiplier) {
      setShowForm(true);
    }
  };

  useHandleScroll(handleScroll);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef && formRef.current) {
      const userEmailInput = formRef.current.elements.namedItem(
        "user_email"
      ) as HTMLInputElement;

      if (!emailRegex.test(userEmailInput.value)) {
        alert("유효한 이메일 주소를 입력해주세요.");
        return;
      }

      const messageTextarea = formRef.current.elements.namedItem(
        "message"
      ) as HTMLTextAreaElement;

      if (messageTextarea.value.length < 10) {
        alert("메시지는 10글자 이상이어야 합니다.");
        return;
      }

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAIL_JS_API_KEY!
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
        multiplier={multiplier - 0.3}
        direction="slide-in-left"
      />
      <form
        id={styles.form}
        className={showForm ? styles.visible : styles.hidden}
        ref={formRef}
        onSubmit={handleSubmit}
      >
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
