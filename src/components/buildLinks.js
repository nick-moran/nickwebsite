import React from "react";
import { Link } from "gatsby";

export default (props) => (
    <Link to={props.url}>
        <div className={`hover:text-${props.color1} md:hover:text-${props.color2}`}>
            {props.text}
        </div>
    </Link>   
)