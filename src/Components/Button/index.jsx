import { useState } from "react";

function NewButton(props) {
    const buttonsArray = props.buttonsToCreate
    console.log(buttonsArray)

    return (
        <>
            {buttonsArray.map((buttonName, index) => {
                return (
                    <button key={index} className="rounded-md bg-[#333333] px-6 py-2">{buttonName}</button>
                )

            })}
        </>
    )
}


export default NewButton