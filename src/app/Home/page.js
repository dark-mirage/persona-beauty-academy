"use client";
import { ModalProvider } from "@/components/Modale/ModalContext";
import App from "@/components/AppWrapper/AppWrapper";

/* Чисто клиентский рендер */
export default function HomeClient() {
  return (
    <ModalProvider>
      <App />
    </ModalProvider>
  );
}
