import React, { useState } from "react";

const CategoryIcons = {
   "Desarrollo Web": (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         fill="currentColor"
         className="w-6 h-6 text-[var(--sec)] opacity-70"
      >
         <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
      </svg>
   ),
   "Bases de Datos": (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         fill="currentColor"
         className="w-6 h-6 text-[var(--sec)] opacity-70"
      >
         <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 7C21 5.3126 19.6581 4.05416 18.1041 3.27715C16.4902 2.47023 14.3307 2 12 2C9.66928 2 7.50977 2.47023 5.89593 3.27715C4.34191 4.05416 3 5.3126 3 7V17C3 18.6874 4.34191 19.9458 5.89593 20.7229C7.50977 21.5298 9.66928 22 12 22C14.3307 22 16.4902 21.5298 18.1041 20.7229C19.6581 19.9458 21 18.6874 21 17V7ZM5.12992 14.1529C5.40214 13.6724 6.01238 13.5035 6.49291 13.7757C7.77337 14.5011 9.738 15 12.0001 15C14.2621 15 16.2267 14.5011 17.5072 13.7757C17.9877 13.5035 18.598 13.6724 18.8702 14.1529C19.1424 14.6334 18.9736 15.2436 18.493 15.5159C16.8417 16.4514 14.5168 17 12.0001 17C9.48328 17 7.15841 16.4514 5.50709 15.5159C5.02656 15.2436 4.85769 14.6334 5.12992 14.1529ZM6.49283 8.77571C6.0123 8.50349 5.40207 8.67235 5.12984 9.15289C4.85762 9.63342 5.02648 10.2437 5.50702 10.5159C7.15833 11.4514 9.48321 12 12 12C14.5168 12 16.8416 11.4514 18.4929 10.5159C18.9735 10.2437 19.1423 9.63342 18.8701 9.15289C18.5979 8.67235 17.9877 8.50349 17.5071 8.77571C16.2267 9.50111 14.262 10 12 10C9.73792 10 7.77329 9.50111 6.49283 8.77571Z"
         />
      </svg>
   ),
};

const SkillsList = () => {
   const [openItem, setOpenItem] = useState<string | null>(null);

   const skills = {
      "Desarrollo Web": [
         "Single Page Applications (SPAs)",
         "Uso de Tailwind CSS para estilos",
         "Uso de Node JS",
         "Uso de React JS",
         "Uso de React Native",
         "Uso de Framework ASP.Net",
         "TS, JS y HTML/CSS",
      ],
      "Bases de Datos": [
         "SQL Server",
         "MySQL",
         "PostgreSQL",
         "MongoDB",
         "Firebase",
      ],
   };

   const toggleItem = (item: string) => {
      setOpenItem(openItem === item ? null : item);
   };

   return (
      <div className="text-left pt-3 md:pt-9">
         <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
            ¿Qué sé hacer?
         </h3>
         <ul className="space-y-4 mt-4 text-lg">
            {Object.entries(skills).map(([category, items]) => (
               <li key={category} className="w-full">
                  <div
                     onClick={() => toggleItem(category)}
                     className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
                  >
                     <div className="flex items-center gap-3 p-4">
                        {CategoryIcons[category]}
                        <div className="flex items-center gap-2 flex-grow justify-between">
                           <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                              <span className="block truncate text-[var(--white)] text-lg">
                                 {category}
                              </span>
                           </div>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                                 openItem === category ? "rotate-180" : ""
                              }`}
                           >
                              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                           </svg>
                        </div>
                     </div>

                     <div
                        className={`transition-all duration-300 px-4 ${
                           openItem === category
                              ? "max-h-[500px] pb-4 opacity-100"
                              : "max-h-0 opacity-0"
                        }`}
                     >
                        <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                           {items.map((item, index) => (
                              <div key={index} className="flex items-center">
                                 <span className="pl-1">•</span>
                                 <li className="pl-3">{item}</li>
                              </div>
                           ))}
                        </ul>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default SkillsList;
