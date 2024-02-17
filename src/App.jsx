import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [bio, setBio] = useState("");
  const [gitHub, setGitHub] = useState(false);
  const [frontendM, setFrontendM] = useState(false);
  const [linkedIn, setLinkedIn] = useState(false);
  const [x, setX] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [newUser, setNewUser] = useState([]);

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const nationalityHandler = (e) => {
    setNationality(e.target.value);
  };
  const bioHandler = (e) => {
    setBio(e.target.value);
  };

  const gitHubHandler = (e) => {
    setGitHub(e.target.checked);
  };
  const frontendMHandler = (e) => {
    setFrontendM(e.target.checked);
  };
  const linkedInHandler = (e) => {
    setLinkedIn(e.target.checked);
  };
  const xHandler = (e) => {
    setX(e.target.checked);
  };
  const instagramHandler = (e) => {
    setInstagram(e.target.checked);
  };

  const saveUser = (e) => {
    const newUserInput = {
      name,
      nationality,
      bio,
      gitHub,
      frontendM,
      linkedIn,
      x,
      instagram,
    };
    setNewUser([...newUser, newUserInput]);
  };

  return (
    <div>
      <h4>"Llena tus datos"</h4>
      <div className="formContainer ">
        <form action="" className="flex flex-col gap-3">
          <input
            className="border border-gray-500 rounded-md p-2"
            placeholder="Nombre"
            type="text"
            onChange={nameHandler}
          />
          <input
            className="border border-gray-500 rounded-md p-2"
            placeholder="Nacionalidad"
            type="text"
            onChange={nationalityHandler}
          />
          <input
            className="border border-gray-500 rounded-md p-2"
            placeholder="Descripción"
            type="text"
            onChange={bioHandler}
          />

          <div className="flex items-start content-center">
            <input
              type="checkbox"
              name=""
              id=""
              value="github"
              onChange={gitHubHandler}
            />
            <label>Github</label>
          </div>
          <div className="flex items-start -center">
            <input
              type="checkbox"
              name=""
              id=""
              value="Frontend Mentor"
              onChange={frontendMHandler}
            />
            <label>Frontend Mentor</label>
          </div>
          <div className="flex items-start -center">
            <input
              type="checkbox"
              name=""
              id=""
              value="LinkedIn"
              onChange={linkedInHandler}
            />
            <label>LinkedIn</label>
          </div>
          <div className="flex items-start -center">
            <input
              type="checkbox"
              name=""
              id=""
              value="X"
              onChange={xHandler}
            />
            <label>X</label>
          </div>
          <div className="flex items-start -center">
            <input
              type="checkbox"
              name=""
              id=""
              value="Instagram"
              onChange={instagramHandler}
            />
            <label>Instagram</label>
          </div>
        </form>
        <button
          className="button border border-gray-500 rounded-md p-1"
          type="button"
          onClick={saveUser}
        >
          Submit
        </button>
      </div>

      <div className="userCardsCompilation text-white">
        <div className="card border border-gray-500 rounded-md bg-[#1f1f1f]">
          <h3 className="">{name}</h3>
          <h4 className="text-[#c5f82a]">{nationality}</h4>
          <p>{bio}</p>
          <div className="flex flex-col items-center">
            <button className="border rounded-md bg-[#333333] px-6 py-2">Github</button>
            <button className="border rounded-md bg-[#333333] px-6 py-2">Frontend Mentor</button>
            <button className="border rounded-md bg-[#333333] px-6 py-2">LinkedInd</button>
            <button className="border rounded-md bg-[#333333] px-6 py-2">X</button>
            <button className="border rounded-md bg-[#333333] px-6 py-2">Instagram</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
