import { useState } from "react";
import data from "./Data";
import "./Style.css";
// Single Select Accordion
export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <>
      <div className="flex flex-col gap-3 items-center mt-10">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="transition-all duration-200 ease-in-out bg-gray-600 w-1/2 h-fit p-2.5 rounded-lg ">
              <div
                className="flex flex-col gap-2.5  justify-center h-full"
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <div className="flex items-center gap-2.5 pl-2">
                  <h3 className="text-white font-semibold text-xl">
                    {dataItem.title}
                  </h3>
                  <span>
                    <svg
                      className={`w-3.5 h-3.5 fill-white transition-transform duration-300 ${
                        selected === dataItem.id ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out pl-2.5 ${
                    selected === dataItem.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-white">{dataItem.content}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div> Data Not Found</div>
        )}
      </div>
    </>
  );
}
