import React from "react";
import styles from "./whatsApp.module.scss";

const whatsappNumber = "14124824888"; // Код страны (1) + номер без пробелов
const defaultMessage =
  "I am contacting you from your website";
const encodedMessage = encodeURIComponent(defaultMessage);

// Используем API-метод send — он точно поддерживает текст
const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Write to us on WhatsApp"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <path d="M16.004 3.2c-7.036 0-12.8 5.764-12.8 12.8 0 2.256.616 4.432 1.784 6.344L3.2 28.8l6.64-1.744A12.704 12.704 0 0 0 16.004 28.8c7.036 0 12.8-5.764 12.8-12.8s-5.764-12.8-12.8-12.8zm0 23.2c-2.072 0-4.12-.552-5.896-1.592l-.424-.248-3.944 1.032 1.064-3.832-.272-.44C6.552 19.12 6 17.072 6 15c0-5.528 4.476-10 10-10s10 4.472 10 10-4.472 10-10 10zm5.52-7.464c-.304-.152-1.8-.888-2.08-.992-.28-.104-.48-.152-.68.152-.2.304-.776.992-.952 1.192-.176.2-.352.224-.656.08-.304-.144-1.28-.472-2.44-1.504-.9-.8-1.504-1.784-1.68-2.088-.176-.304-.02-.472.132-.624.136-.136.304-.352.456-.528.152-.176.2-.304.304-.504.104-.2.056-.384-.008-.528-.064-.144-.68-1.64-.936-2.24-.248-.592-.504-.512-.68-.52-.176-.008-.376-.008-.576-.008s-.528.08-.8.384c-.272.304-1.04 1.016-1.04 2.472 0 1.456 1.064 2.864 1.208 3.064.144.2 2.088 3.192 5.064 4.36.708.304 1.26.488 1.692.624.712.228 1.36.196 1.872.12.572-.084 1.8-.736 2.052-1.448.252-.712.252-1.324.176-1.448-.072-.124-.272-.2-.576-.344z"/>
      </svg>
    </a>
  );
}
