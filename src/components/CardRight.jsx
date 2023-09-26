import React from "react";

export default function CardLeft({ ast, text }) {
  return (
    <div
      className="bg-white rounded-xl p-5 flex items-center shadow-md bubble-effect"
      style={{ width: "600px" }}
    >
      <div>{text}</div>
      <div className="flex">
        <div
          className="p-2 flex-1 mr-3"
          style={{
            background:
              "linear-gradient(to bottom right, #BB6ACB 10%,  #7B66D4 40%, #7E43E0 50% )",
            backgroundSize: "100%",
          }}
        >
          <p className="text-white items-center flex justify-center"> {ast}</p>
        </div>
      </div>
    </div>
  );
}
