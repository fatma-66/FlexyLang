import React from "react";
import orangeGif from "../../assets/GIF/orange.gif";
import progressgif from "../../assets/GIF/progress2.gif";
import MainTitle from "../Atoms/MainTitle";
import translateicon from "../../assets/images/icontranslate.svg";
import translatoricon from "../../assets/images/icontranslator.svg";
import Pronunciationicon from "../../assets/images/punctuationicon.svg";
import generatoricon from "../../assets/images/generator.svg";
import flashicon from "../../assets/images/flash.svg";
import categoryBg from "../../assets/images/numberbg.png";

import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
function CategoriesContent() {
  return (
    <>
      <div className="py-16 mt-20">
        <div className="mx-20">
          <MainTitle
            icon={<SquaresPlusIcon className="w-20 me-8 text-orange-400" />}
            title="Categories"
            classes="w-1/7 object-contain"
          />
        </div>
        <div className="flex flex-row mx-10 ">
          <div className="grid xl:grid-cols-2 grid-cols-1 pt-10 gap-10 ">
            <div className="col-span-1 flex flex-col gap-8">
              <Link to="/" className=" ">
                <div className=" dictionary flex flex-row gap-3 items-center bg-[#FFFAEF] ps-4 pe-32 py-3 rounded-[14px] ">
                  <img src={translateicon} alt="" className="w-1/4" />
                  <p className="text-[20px] font-semibold">Dictionries</p>
                </div>
              </Link>
              <Link to="">
                <div className=" translator flex flex-row gap-3 items-center bg-[#FFF0F8] ps-4 pe-32 py-3 rounded-[14px]">
                  <img src={translatoricon} alt="" className="w-1/4" />
                  <p className="text-[20px] font-semibold">Translator</p>
                </div>
              </Link>
              <Link to="/">
                <div className=" translator flex flex-row gap-3 items-center bg-[#F7F3FF] ps-4 pe-32 py-3 rounded-[14px]">
                  <img src={generatoricon} alt="" className="w-1/4" />
                  <p className="text-[20px] font-semibold whitespace-nowrap">
                    Sentence Generator
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-span-1 flex flex-col gap-8">
              <Link to="">
                <div className=" dictionary flex flex-row gap-3 items-center bg-[#EEFBF5] ps-4 pe-32 py-3 rounded-[14px]">
                  <img src={Pronunciationicon} alt="" className="w-1/4" />
                  <p className="text-[20px] font-semibold whitespace-nowrap">
                    Pronunciation Checker
                  </p>
                </div>
              </Link>

              <Link to="/">
                <div className=" translator flex flex-row gap-3 items-center bg-[#F1FBFF] ps-4 pe-32 py-3 rounded-[14px]">
                  <img src={flashicon} alt="" className="w-1/4" />
                  <p className="text-[20px] font-semibold whitespace-nowrap">
                    Flashcard Builder
                  </p>
                </div>
              </Link>
              <Link to='/'>
                <div className=" translator flex flex-row gap-3 items-center bg-[#FFF0F8] ps-4 pe-32 py-3 rounded-[14px]">
                  <img src={translatoricon} alt="" className="w-1/4" />
                  <p className="text-[20px] font-semibold">Translator</p>
                </div>
              </Link>
            </div>
          </div>
          <img src={orangeGif} alt="" className="ms-auto w-1/3" />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default CategoriesContent;
