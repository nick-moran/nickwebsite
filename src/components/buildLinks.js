import React from "react";
import { Link } from "gatsby";

export default (props) => {
    const style={
        transition: "0.2s",
    };
    return <Link to={props.url}>
        <div className={`hover:text-${props.color1} md:hover:text-${props.color2}`} style={style}>
            {props.text}
        </div>
    </Link>   
}