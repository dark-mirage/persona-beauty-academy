"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useModal } from "@/components/Modale/ModalContext";
import styles from "./modale.module.scss";
import priviewImage from "@/assets/img/close.png";
import emailjs from "@emailjs/browser";

// === Валидация ===
function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name";
  else if (!/^[a-zA-Z\s-]{2,32}$/.test(values.name.trim())) errors.name = "Invalid name";

  if (!values.phone.trim()) errors.phone = "Enter your phone";
  else if (!/^\+?[0-9\s-]{8,18}$/.test(values.phone.trim())) errors.phone = "Invalid phone number";

  if (!values.email.trim()) errors.email = "Enter your email";
  else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(values.email.trim())) errors.email = "Invalid email";

  if (!values.message.trim()) errors.message = "Enter your message";
  else if (values.message.length < 4) errors.message = "Message is too short";

  return errors;
}

export default function Modale() {
  const { isOpen, setIsOpen } = useModal();

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const userID              = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  const serviceID           = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const SUPPORT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_SUPPORT_TEMPLATE_ID;
  const USER_TEMPLATE_ID    = process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID;

  // Инициализация EmailJS
  useEffect(() => {
    if (userID) {
      emailjs.init(userID);
    } else {
      console.warn("Missing NEXT_PUBLIC_EMAILJS_USER_ID");
    }
  }, [userID]);

  // Автозаполнение message при открытии
  useEffect(() => {
    if (isOpen) {
      const courseTitle = localStorage.getItem("courseTitle");
      setValues((prev) => ({
        ...prev,
        message: courseTitle
          ? `I'm interested in talking about ${courseTitle}`
          : "",
      }));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    setErrors(validate({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate(values);
    setTouched({ name: true, phone: true, email: true, message: true });
    setErrors(v);

    if (Object.keys(v).length > 0 || !accepted) return;

    setSubmitting(true);
    try {
      // 1. Отправка админам
      if (!SUPPORT_TEMPLATE_ID) throw new Error("Missing SUPPORT_TEMPLATE_ID");
      await emailjs.send(
        serviceID,
        SUPPORT_TEMPLATE_ID,
        {
          from_name:  values.name,
          from_phone: values.phone,
          from_email: values.email,
          message:    values.message,
        },
        userID
      );

      // 2. Welcome-письмо пользователю
      if (!USER_TEMPLATE_ID) throw new Error("Missing USER_TEMPLATE_ID");
      await emailjs.send(
        serviceID,
        USER_TEMPLATE_ID,
        {
          name:  values.name,
          email: values.email,
        },
        userID
      );

      // Сброс формы
      setIsOpen(false);
      setValues({ name: "", phone: "", email: "", message: "" });
      setTouched({});
      setAccepted(false);
      localStorage.removeItem("courseTitle");
    } catch (err) {
      console.error("EmailJS error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.modale} onClick={() => setIsOpen(false)}>
      <div className={styles.modale_wrapp} onClick={(e) => e.stopPropagation()}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={submitting}
          />
          <div className={styles.errorMsg}>{touched.name && errors.name}</div>

          <input
            name="phone"
            placeholder="Phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={submitting}
          />
          <div className={styles.errorMsg}>{touched.phone && errors.phone}</div>

          <input
            name="email"
            placeholder="Email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={submitting}
          />
          <div className={styles.errorMsg}>{touched.email && errors.email}</div>

          <textarea
            name="message"
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
            disabled={submitting}
          />
          <div className={styles.errorMsg}>{touched.message && errors.message}</div>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted((v) => !v)}
              disabled={submitting}
              required
            />
            <span>
              I accept the{" "}
              <Link
                href="/PrivacyPolicy"
                target="_blank"
                className={styles.privacyLink}
                onClick={(e) => e.stopPropagation()}
              >
                privacy policy
              </Link>
            </span>
          </label>

          <button
            type="submit"
            disabled={
              !accepted ||
              submitting ||
              Object.keys(validate(values)).length > 0
            }
          >
            {submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div className={styles.button} onClick={() => setIsOpen(false)}>
        <Image src={priviewImage} alt="Close" width={24} height={24} />
      </div>
    </div>
  );
}
