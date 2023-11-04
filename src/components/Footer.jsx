import React from "react";

const date = new Date();
const dateTime = date.getFullYear();

function Footer(){
    return(
        <footer>
            <p>Copyright ⓒ {dateTime}</p>
        </footer>
    );
};

export default Footer;