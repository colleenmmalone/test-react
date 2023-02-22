import React from "react";

const Header = ({ text="Enter some text here", className="" }) => {

    return(
        <h1 className={`text-red ${className} `} >{text}</h1>
    )
}
export default Header;