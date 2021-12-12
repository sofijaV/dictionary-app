import React from "react";
import "./Photos.css";
export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <img
              key={index}
              src={photo.src.tiny}
              alt="see what you have looked up"
              className="img-fluid"
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
