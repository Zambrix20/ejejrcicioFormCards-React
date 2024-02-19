import { useState } from "react";
import NewCard from "./Components/Card/index.jsx";

function App() {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [bio, setBio] = useState("");

  const [github, setGitHub] = useState(false);
  const [frontendM, setFrontendM] = useState(false);
  const [linkedIn, setlinkedin] = useState(false);
  const [x, setX] = useState(false);
  const [instagram, setInstagram] = useState(false);

  const [newUser, setNewUser] = useState([]);
  const [buttons, setButtons] = useState([]);

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const nationalityHandler = (e) => {
    setNationality(e.target.value);
  };
  const bioHandler = (e) => {
    setBio(e.target.value);
  };

  /*const gitHubHandler = (e) => {
    setGitHub(e.target.checked);
    if (e.target.checked === true) {
      setButtons([...buttons, "GitHub"]);
    }
  };
  const frontendMHandler = (e) => {
    setFrontendM(e.target.checked);
    if (e.target.checked === true) {
      setButtons([...buttons, "Frontend Mentor"]);
    }
  };
  const linkedInHandler = (e) => {
    setlinkedin(e.target.checked);
    if (e.target.checked === true) {
      setButtons([...buttons, "LinkedIn"]);
    }
  };
  const xHandler = (e) => {
    setX(e.target.checked);
    if (e.target.checked === true) {
      setButtons([...buttons, "X"]);
    }
  };
  const instagramHandler = (e) => {
    setInstagram(e.target.checked);
    if (e.target.checked === true) {
      setButtons([...buttons, "Instagram"]);
    }
  };
  */

  const checkboxHandler = (value) => {
    // si el valor no esta en el array de botones,
    if (!buttons.includes(value)) {
      // agrega el valor al array de botones, el prevButtons es el array de botones actual y el ...prevButtons es para que no se sobreescriba el array de botones con el nuevo valor,
      // ademas de que el valor se agrega al final del array.
      setButtons((prevButtons) => [...prevButtons, value]); // setButtons([...buttons, value]);
    } else {
      // si el valor ya esta en el array de botones, lo remueve del array de botones, el prevButtons es el array de botones actual y el ...prevButtons es para que no se sobreescriba el array de botones con el nuevo valor,
      // ademas de que el valor se agrega al final del array.
      // El filter recorre el array de botones y remueve el valor que ya esta en el array de botones, por eso el button !== value que es para que no se agregue el valor que ya esta en el array de botones.
      setButtons((prevButtons) =>
        prevButtons.filter((button) => button !== value)
      );
    }
  };

  const saveUser = () => {
    const user = {
      name: name,
      nationality: nationality,
      bio: bio,
      buttons: buttons,
    };
    setNewUser([...newUser, user]);
  };

  return (
    <div className=" container mx-4 my-4">
      <div className="flex flex-col">
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
                // onChange={githubHandler}
                onChange={() => checkboxHandler("Github")}
              />
              <label>Github</label>
            </div>
            <div className="flex items-start -center">
              <input
                type="checkbox"
                name=""
                id=""
                value="Frontend Mentor"
                // onChange={frontendMHandler}
                onChange={() => checkboxHandler("Frontend Mentor")}
              />
              <label>Frontend Mentor</label>
            </div>
            <div className="flex items-start -center">
              <input
                type="checkbox"
                name=""
                id=""
                value="LinkedIn"
                // onChange={linkedInHandler}
                onChange={() => checkboxHandler("LinkedIn")}
              />
              <label>LinkedIn</label>
            </div>
            <div className="flex items-start -center">
              <input
                type="checkbox"
                name=""
                id=""
                value="X"
                // onChange={xHandler}
                onChange={() => checkboxHandler("X")}
              />
              <label>X</label>
            </div>
            <div className="flex items-start -center">
              <input
                type="checkbox"
                value="Instagram"
                // onChange={instagramHandler}
                onChange={() => checkboxHandler("Instagram")}
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
      </div>

      <div className="userCardsCompilation text-white my-4 flex flex-wrap">
        {newUser.map((user, index) => {
          // console.log("newUser", newUser);
          console.log(buttons);
          // console.log("user", user);
          // return <NewCard userInfo={user} buttonsInfo={buttons} key={index} />;
          return (
            <NewCard userInfo={user} buttonsInfo={user.buttons} key={index} />
          );
        })}
      </div>
    </div>
  );
}
export default App;
