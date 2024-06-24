import React from "react";

const Event = () => {
  const handleClick = (e) => {
    console.log(e);
    console.log("XESQUEDELE");
  };

  return (
    <div>
      <div>
        <button onClick={() => console.log("Botão Clicado!")}>
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Event;
