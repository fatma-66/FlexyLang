import { SearchOutlined } from "@ant-design/icons";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Button, Tooltip } from "antd";

function CoursesCard({ src, TopicContent }) {
  return (
    <>
      <div className="col-span-1  border-gray-200 shadow-xl group py-12  border-[1.5px] border-b-2 border-t-2 hover:cursor-pointer  border-b-black rounded-lg bg-[#f3f3f3]  hover:bg-[#191a23] delay-75 transition-all hover:outline-2 ">
        <div className="flex flex-row  w-full items-center">
          <img src={src} alt="background image" className="h-1/2  w-1/2" />
          <p className="text-[25px] text-slate-400 font-semibold">
            {TopicContent}
          </p>
        </div>
        <div className="ps-14 pt-8 flex flex-row items-center gap-2">
          <Button
            type="primary"
            shape="circle"
            icon={<ArrowUpRightIcon className="w-5 text-white " />}
            className="group-hover:bg-[#a9dcd8] bg-[#191a23]  "
          />
          <p className="text-[14px] font-semibold group-hover:text-[#a9dcd8] ">
            learn more
          </p>
        </div>
      </div>
    </>
  );
}

export default CoursesCard;
