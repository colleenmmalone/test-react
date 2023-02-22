import React from "react";

const Header = ({ text="Enter some text here", className="text-red" }) => {

    return(
        <h1 className={className} >{text}</h1>
    )
}
export default Header;