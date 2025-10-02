import React from "react";
import MyCV from "../../assets/pdf/Shadid_Reza_CV.pdf";
import pdfIcon from "../../assets/photos/pdf_icon.svg";

const PdfDownload = () => {
  return (
    <div className="flex justify-end mt-2">
      <a
        href={MyCV}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        <img src={pdfIcon} alt="Download PDF" className="h-12 cursor-pointer" />
        
        {/* Tooltip */}
        <span className="absolute right-1/2 translate-x-1/2 bottom-full mb-2 
                         hidden group-hover:block
                         bg-gray-800 text-white text-xs rounded px-2 py-1 
                         whitespace-nowrap shadow-md">
          View in PDF
        </span>
      </a>
    </div>
  );
};


export default PdfDownload;
