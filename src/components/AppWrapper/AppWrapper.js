"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import Loader       from "@/components/Loader/Loader";
import Header       from "@/components/Header/Header";
import Preview      from "@/components/Preview/Preview";
import Founder      from "@/components/Founder/Founder";
import Stages       from "@/components/Stages/Stages";
import Experience   from "@/components/Experience/Experience";
import Callback     from "@/components/Callback/Callback";
import Classes      from "@/components/Classes/Classes";
import Courses      from "@/components/Courses/Courses";
import CosmetologyProgram from '@/components/Cosmetology/CosmetologyProgram'
import Footer       from "@/components/Footer/Footer";
import Layout       from "@/components/Layout/Layout";
import CookieBanner from "@/components/CookieBanner/CookieBanner";

const LazyModale = lazy(() => import("@/components/Modale/Modale"));

export default function Page() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let raf1;
    let raf2;

    
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setReady(true));
      });


    return () => {
      if (raf1)  cancelAnimationFrame(raf1);
      if (raf2)  cancelAnimationFrame(raf2);
    };
  }, []);

  return (
    <ParallaxProvider>
      {!ready && <Loader loading />}

      {ready && (
        <>
          <Header />
          <Preview />

          <Layout>
            <Founder />
            <Stages />
            <Experience />
            <Callback />
            <Classes />
            <Courses />
            <CosmetologyProgram/>
            <CookieBanner/>
          </Layout>

          <Footer />

          <Suspense fallback={null}>
            <LazyModale />
          </Suspense>
        </>
      )}
    </ParallaxProvider>
  );
}
