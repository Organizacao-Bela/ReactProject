import React from "react";
import CardLeft from "../components/CardLeft";
import CardRight from "../components/CardRight";
import Chart from "../components/ChartComponent";
import ChartComponent from "../components/ChartComponent";

export default function PaginaInicial() {
  return (
    <div className="p-12">
      <div className="flex flex-col gap-y-3 pb-12">
        <div className="flex justify-start ">
          <CardLeft
            ast="SAST"
            text="
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
        <div className="flex justify-end ">
          <CardRight
            ast="SCA"
            text="
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
        <div className="flex justify-start ">
          <CardLeft
            ast="DAST"
            text="
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
        <div className="flex justify-end  ">
          <CardRight
            ast="IAC"
            text="
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </div>
      <div>
        <ChartComponent />
      </div>
    </div>
  );
}
