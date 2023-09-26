import React, { useState } from "react";
import img from "../assets/Logo.svg";
import { BsChevronRight } from "react-icons/bs";
export default function Apresentacao() {
  const ps = ["Isso", "Aquilo", "Algo", "Tralala"];
  const [index, setIndex] = useState(0);

  const alterarTexto = () => {
    setIndex((prevIndex) => (prevIndex + 1) % ps.length);
  };

  return (
    <div className="p-12 flex flex-col gap-y-24">
      <div className="flex justify-center">
        <p className="underline text-black font-bold text-4xl">Seu nome</p>
      </div>
      <div className="flex justify-center ">
        <div>
          <img src={img} style={{ height: "250px" }} />
        </div>
      </div>
      <div className="flex justify-center flex-col">
        <div></div>
        <p className="underline text-black font-bold text-4xl pb-2">
          Sobre mim
        </p>
        <div className="flex flex-col gap-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac dui
            sit amet odio ornare porttitor vitae sodales nisi. Cras at metus
            dui. Aliquam viverra gravida consectetur. Vivamus in erat non justo
            feugiat interdum id eu nisi. Quisque in rutrum nulla. Aliquam non
            mauris id magna cursus placerat non feugiat lectus. Etiam posuere
            eleifend dolor, vel accumsan enim accumsan et.
          </p>
          <p>
            Aenean condimentum nulla semper neque imperdiet auctor. Integer
            hendrerit eros ante, vitae feugiat velit scelerisque non.
            Suspendisse placerat placerat arcu quis convallis. Sed vitae orci id
            erat faucibus dapibus. Etiam consectetur est vitae pellentesque
            iaculis. Ut in luctus mi. Quisque nec varius justo. Nullam sed
            luctus ex. Nullam enim sapien, blandit nec facilisis non, convallis
            in orci. Nunc metus velit, consectetur eu ullamcorper et, malesuada
            a lectus. Etiam pulvinar nisl at libero venenatis sollicitudin.
          </p>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col justify-center gap-y-8">
          <p className="underline text-black font-bold text-4xl">
            O que gosto de fazer?
          </p>
          <div className="text-black list-disc text-xl pb-12 flex justify-center gap-x-4">
            <p className="pb-2">{ps[index]}</p>
            <div className="flex justify-center items-center">
              <button
                className="p-2  justify-center items-center  rounded-lg cursor-pointer"
                onClick={alterarTexto}
                style={{
                  background:
                    "linear-gradient(to bottom right, #BB6ACB 10%,  #7B66D4 40%, #7E43E0 50% )",
                }}
              >
                <BsChevronRight className="flex justify-center items-center text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
