import { useState } from "react";
import NewButton from "../Button/index.jsx";

function NewCard({ userInfo, buttonsInfo }) {
    // console.log("User info", userInfo);
    const { name, nationality, bio } = userInfo;
    // const { buttons } = buttonsInfo;
    // console.log('name', name);

    return (
        <div className="card border border-gray-500 rounded-md bg-[#1f1f1f] flex flex-col w-80 px-4 py-8 mr-4 mb-4">
            <div className="userInfo flex flex-col items-center">
                <img className="rounded-full" src="https://picsum.photos/200" alt="" />
                <h3 className="">{name}</h3>
                <h4 className="text-[#c5f82a]">{nationality}</h4>
                <p className=" py-4">{bio}</p>
            </div>
            <div className="flex flex-col gap-3">
                <NewButton buttonsToCreate={buttonsInfo} />
            </div>
        </div>
    );
}

export default NewCard;
