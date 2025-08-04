import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";


function CoursesCard({ src, TopicContent }) {
  return (
    <>
      <div className="col-span-1  border-gray-200 shadow-xl border-[1.5px] rounded-lg">
        <div className="flex flex-row  w-full items-center">
          <img src={src} alt="background image" className="h-1/2  w-1/2" />
          <p className="text-[25px] text-slate-400 font-semibold">
            {TopicContent}
          </p>
        </div>
        <div className="ps-14 pt-8">
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} className="bg-[#a9dcd8]"/>
          </Tooltip>
        </div>
      </div>
    </>
  );
}

export default CoursesCard;
