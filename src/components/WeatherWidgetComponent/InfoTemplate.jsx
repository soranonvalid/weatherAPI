import React from "react";

const InfoTemplate = ({
  icon = "cancel",
  value = 0,
  measurement = "m",
  label = "label",
}) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <i style={{ fontSize: "50px" }} className="material-symbols-outlined">
          {icon}
        </i>
        <p>
          {value} {measurement}
        </p>
        <h1>{label}</h1>
      </div>
    </div>
  );
};

export default InfoTemplate;
