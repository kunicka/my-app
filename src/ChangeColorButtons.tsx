import React from "react";

interface IsetHightlightcolor {
  setHightlightcolor: React.Dispatch<React.SetStateAction<string>>;
}

export const ChangeColorButtons: React.FC<IsetHightlightcolor> = ({
  setHightlightcolor,
}) => {
  return (
    <>
      <button
        onClick={(e) => {
          setHightlightcolor("Blue");
        }}
      >
        Blue
      </button>
      <button
        onClick={(e) => {
          setHightlightcolor("Red");
        }}
      >
        Red
      </button>
    </>
  );
};
