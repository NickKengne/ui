"use client";

import Image from "next/image";
import CardImage from "./components/card-image";
import { LegacyRef, useEffect, useState } from "react";
import img1 from "@/public/image.jpg";
import img2 from "@/public/Notion_app_logo.png";
import CardVideo from "./components/card-video";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const btn = useRef<HTMLButtonElement>();
  const title = useRef<HTMLTitleElement>();
  const p = useRef<HTMLParagraphElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);



  

  const onHoverCard = () => {
    if(imageRef.current){
      gsap.to(imageRef.current, { opacity: 0, duration: 0.5 });
    }
    if(videoRef.current){
      gsap.to(videoRef.current, { opacity: 1, duration: 0.5 });
    }
    if (p.current) {
      gsap.to(p.current, { opacity: 0, duration: 0.5 });
    }
    if (btn.current) {
      gsap.to(btn.current, { y: -50 });
    }
    if (title.current) {
      gsap.to(title.current, { y: 50 });
    }
    
  }

  useEffect(() => {

    if (isHovered) {
      onHoverCard();
    }
    else{
      if(imageRef.current){
        gsap.to(imageRef.current, { opacity: 1});
      }
      if(videoRef.current){
        gsap.to(videoRef.current, { opacity: 0 });
      }
      if (btn.current) {
        gsap.to(btn.current, { y: 80 });
      }
      if (title.current) {
        gsap.to(title.current, { y: 0 });
      }
      if (p.current) {
        gsap.to(p.current, { opacity: 1, duration: 0.5 });
      }
    }
  },[isHovered]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-[40px] p-24">
      <div
        className="w-[450px] h-[620px] relative bg-white rounded-3xl p-8 cursor-pointer flex flex-col gap-4 overflow-hidden "
        onMouseEnter={() => setIsHovered(!isHovered)}
        onMouseLeave={() => setIsHovered(false)}
      >
     
            <CardImage image={img2.src} className="absolute -left-1" imageRef={imageRef}/>
            <CardVideo videoRef={videoRef}/>
    
        
        <h2 className="text-center font-medium mt-3 text-3xl" ref={title as unknown as LegacyRef<HTMLHeadingElement>}>Collaboration</h2>
        <p className={'text-2xl text-center'} ref={p}>
          Seamlessly work as a team with smart collaboration tools and controls
        </p>

        <button className="bg-violet-600 w-[50%] mx-auto text-white text-xl px-8 py-2 rounded-full" ref={btn as LegacyRef<HTMLButtonElement>}>
          Live Preview
        </button>
      </div>
    </main>
  );
}