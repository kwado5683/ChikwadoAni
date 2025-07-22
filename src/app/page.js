"use client"
import React, {useState, useEffect} from "react";
import {motion,useScroll} from "framer-motion";



import FloatingNav from "@/components/FloatingNav";
import AboutSection from "@/components/About";
import SkillsSection from "@/components/Skills";
import ProjectsSection from "@/components/Projects";
import ContactSection from "@/components/Contact";





export default function Home () {
  return(
    <>
      <h1>Home</h1>
      <FloatingNav />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      

    </>
  )
}