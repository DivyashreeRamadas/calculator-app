import React from "react";
import "./Button.css";

function Button({content, type, onButtonClick}){

    return (
        <div className={`button-elements ${content === 0 ? "zero" : "" } ${type || "" }`} onClick={onButtonClick(content)}>
            {content}
        </div>
    )
}

export default Button;