import mascot from "../icons/mascot.svg";
import logo from "../icons/logo.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function Login() {
  const [NHI, setNHI] = useState("");
  const [initials, setInitials] = useState("");

  const history = useHistory();

  const disabled = NHI === "" || initials === "";
  return (
    <div className="flex h-screen ">
      <div className="bg-primary-bg px-20 py-10 flex flex-col items-baseline justify-between max-w-lg">
        <img alt="logo" src={logo} className="flex-none" />
        <h1 className="text-white">See more, Diagnose Better!</h1>
        <img alt="mascot" src={mascot} />
        <p className="text-white">© 2021 Apex</p>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center">
          <h2>Welcome to Apex!</h2>
          <p className="text-gray-500">
            Enter patient details to start session.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <label>NHI</label>
          <input
            onChange={(e) => setNHI(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          <label>Initials</label>
          <input
            onChange={(e) => setInitials(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            disabled={disabled}
            onClick={() => history.push("/form")}
            className={`self-start ${
              disabled ? `bg-gray-500` : `bg-primary-purple`
            } py-2 px-6 rounded-xl text-white`}
          >
            Start session
          </button>
        </div>
      </div>
    </div>
  );
}
