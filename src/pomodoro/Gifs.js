import React from "react";

function Gifs({ label }) {

    if (!label) return <></>;

    const imgSrc = label === "Focusing" ? "./images/typing-laptop.gif" : "./images/cat-chill.gif"


    return (
        <img src={imgSrc} alt="cool"></img>
    )
}


export default Gifs;