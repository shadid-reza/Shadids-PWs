import React from "react";

const GeneralInfo = () => {
  return (
    <section id="general-info" className="max-w-6xl mx-auto px-4 py-8">
      <div className="card bg-white shadow-md rounded-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          General Information
        </h3>

        <table className="table-auto w-full text-sm">
          <tbody>
            <tr >
              <td className="font-bold pr-4 py-2 text-right w-1/4">Full Name</td>
              <td className="pl-2 py-2">H M Shadid Reza Chowdhury</td>
            </tr>
            <tr>
              <td className="font-bold pr-4 py-2 text-right">Contact</td>
              <td className="pl-2 py-2">hmshadid25@gmail.com</td>
            </tr>
            <tr>
              <td className="font-bold pr-4 py-2 text-right">Languages</td>
              <td className="pl-2 py-2">Bengali (native), English (fluent)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GeneralInfo;
