import React from "react";
import GeneralInfo from "../components/ResumeParts/GeneralInfo";
import Skills from "../components/ResumeParts/Skills";
import Interests from "../components/ResumeParts/Interests";
import PdfDownload from "../components/ResumeParts/PdfDownload";
import Education from "../components/ResumeParts/Education"; 
import Experience from "../components/ResumeParts/Experience"; 
const ResumePage = () => {
  return (

      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between mt-2">
        <h1 className="text-3xl px-2 font-bold">Curriculum Vitae</h1>
        <PdfDownload />
        </div>
        <GeneralInfo />
        <Education />
        <Experience />
        <Skills />
        <Interests />
      </div>

  );
};

export default ResumePage;
