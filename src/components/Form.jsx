import { useState } from "react";
import logoLight from "../icons/logoLight.svg";

//✓
export default function Form() {
  const [step, setStep] = useState(0);
  const titles = [
    "Image Library",
    "Lesion Screen",
    "AI Analysis Summary",
    "Image Email Export",
    "Feedback",
    "End",
  ];
  return (
    <div className="flex flex-col justify-between h-screen p-8">
      <div className="flex flex-col">
        <div className="p-12 flex justify-center relative">
          <img alt="logo" src={logoLight} className="absolute left-10" />
          <h1 className="">{titles[step]}</h1>
        </div>
        <div className="flex self-center relative gap-20">
          <div className="absolute border border-primary-purple w-full top-5"></div>
          <div
            className={`${
              step === 0
                ? `bg-primary-purple text-white border-primary-purple`
                : step > 0
                ? `bg-green-600 text-white border-green-600`
                : `bg-white border-primary-purple`
            } z-10 font-bold grid place-items-center w-10 h-10 rounded-full border-2 `}
          >
            {step > 0 ? "✓" : "1"}
          </div>
          <div
            className={`${
              step === 1
                ? `bg-primary-purple text-white border-primary-purple`
                : step > 1
                ? `bg-green-600 text-white border-green-600`
                : `bg-white border-primary-purple`
            } z-10 font-bold grid place-items-center w-10 h-10 rounded-full border-2 `}
          >
            {step > 1 ? "✓" : "2"}
          </div>
          <div
            className={`${
              step === 2
                ? `bg-primary-purple text-white border-primary-purple`
                : step > 2
                ? `bg-green-600 text-white border-green-600`
                : `bg-white border-primary-purple`
            } z-10 font-bold grid place-items-center w-10 h-10 rounded-full border-2 `}
          >
            {step > 2 ? "✓" : "3"}
          </div>
          <div
            className={`${
              step === 3
                ? `bg-primary-purple text-white border-primary-purple`
                : step > 3
                ? `bg-green-600 text-white border-green-600`
                : `bg-white border-primary-purple`
            } z-10 font-bold grid place-items-center w-10 h-10 rounded-full border-2 `}
          >
            {step > 3 ? "✓" : "4"}
          </div>
          <div
            className={`${
              step === 4
                ? `bg-primary-purple text-white border-primary-purple`
                : step > 4
                ? `bg-green-600 text-white border-green-600`
                : `bg-white border-primary-purple`
            } z-10 font-bold grid place-items-center w-10 h-10 rounded-full border-2 `}
          >
            {step > 4 ? "✓" : "5"}
          </div>
        </div>
      </div>

      {step === 5 && (
        <h1 className="self-center">Thank you for submitting the form</h1>
      )}

      <div className="self-center bottom-4 flex w-11/12 justify-between">
        <button
          className={`bg-green-600 py-2 px-6 rounded-xl text-white`}
          onClick={() => setStep(Math.max(step - 1, 0))}
        >
          Back
        </button>
        <div className="flex gap-5">
          <button className={`bg-red-600 py-2 px-6 rounded-xl text-white`}>
            End session
          </button>
          <button
            onClick={() => setStep(Math.min(step + 1, 5))}
            className={` bg-primary-purple py-2 px-6 rounded-xl text-white`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
