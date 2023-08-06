import { Section } from "./section";
import reaction from "../images/icon-reaction.svg";
import memory from "../images/icon-memory.svg";
import verbal from "../images/icon-verbal.svg";
import visual from "../images/icon-visual.svg";
import { Test } from "./test";
export function WhiteSide() {
  return (
    <div className="sm:w-1/2 w-full font-body flex flex-col items-center justify-center">
      <div className="w-5/6 sm:h-full  py-3 ml-2 flex flex-col justify-evenly sm:gap-0  gap-4">
        <Test></Test>
        <div>
          <h1 className="text-2xl">Summary</h1>
        </div>
        <div className="w-full flex flex-col gap-4">
          <Section
            color={"Primary-Lightred"}
            title={"Reaction"}
            icon={reaction}
            number={80}
          ></Section>
          <Section
            color={"Primary-OrangeyYellow"}
            title={"Memory"}
            icon={memory}
            number={92}
          ></Section>
          <Section
            color={"Primary-Greenteal"}
            title={"Verbal"}
            icon={verbal}
            number={61}
          ></Section>
          <Section
            color={"Primary-Cobaltblue"}
            title={"Visual"}
            icon={visual}
            number={72}
          ></Section>
        </div>
        <div className="w-full">
          <button className="bg-Neutral-Darkgrayblue w-full text-Neutral-White h-12 rounded-3xl hover:opacity-80 transition duration-300 ease-in-out">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
