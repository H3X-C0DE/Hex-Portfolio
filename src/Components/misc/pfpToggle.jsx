import React, { useState } from "react";
import pfpMain from "../../Assets/Images/vetle.jpg";
import pfpSecondary from "../../Assets/Images/hexy.gif";

const PfpToggle = () => {
  const [image, setImage] = useState(pfpMain);

  function toggleImage() {
    if (image === pfpMain) {
      setImage(pfpSecondary);
    } else {
      setImage(pfpMain);
    }
  }

  return (
    <>
      <img
        id="avatar"
        className="pfp"
        src={image}
        onClick={toggleImage}
        alt="vetle's portrait"
      />
    </>
  );
};

export default PfpToggle;
