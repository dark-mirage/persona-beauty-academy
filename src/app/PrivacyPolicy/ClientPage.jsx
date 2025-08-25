"use client";


import Header     from "@/components/Header/Header";
import Footer     from "@/components/Footer/Footer";
import Policy     from "@/components/PrivatePolicy/Policy";
import { ModalProvider } from "@/components/Modale/ModalContext";

export default function ClientPage() {
  return (
    <ModalProvider>
      <Header />
      <Policy />
      <Footer />
  </ModalProvider>
  );
}
