import React from 'react'

export default function Header_Name(props) {
    return (
        <span id="name">
        {" "}
        <a
          href="/"
          style={{
            "text-decoration": "none",
            color: "antiquewhite",
            cursor: "pointer"
          }}
        >
          {props.name}
        </a>
      </span>
    )
}