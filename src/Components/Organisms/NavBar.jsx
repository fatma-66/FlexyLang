import { useState } from "react";
import {
  AppstoreOutlined,
  SettingOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import logo from "..//../assets/images/logo1.jpg";
import Logo from "../Atoms/Logo";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const items = [
    {
      label: "Home",
      key: "home",
      /* icon: <FlagOutlined />, */
      className: "text-[17px]  font-semibold",
      onClick: () => {
        navigate("/");
      },
    },

    {
      label: "Courses",
      key: "SubMenu",
      className: "text-[17px] font-semibold text-green-600",
      /*  icon: <SettingOutlined />, */
      children: [
        {
          type: "group",
          label: "English",
          children: [
            { label: "Option 1", key: "setting:1" },
            { label: "Option 2", key: "setting:2" },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            { label: "Option 3", key: "setting:3" },
            { label: "Option 4", key: "setting:4" },
          ],
        },
      ],
    },

    {
      label: "Progress",
      key: "progress",
      /* icon: <FlagOutlined />, */
      className: "text-[17px] text-green-600 font-semibold",
    },

    {
      label: "Practice	",
      key: "practice",
      /* icon: <FlagOutlined />, */
      className: "text-[17px] text-green-600 font-semibold",
    },

    {
      label: "About Us",
      key: "about us",
      /* icon: <FlagOutlined />, */
      className: "text-[17px] text-green-600 font-semibold",
    },
    {
      key: "alipay",
      className: "text-[17px] text-orange-500 ",

      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Languages
        </a>
      ),
    },
  ];

  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <div className="">
        <div className=" home-bg md:h-[1400px]  absolute top-0 left-0 w-full z-[-1] " />
        <div className="flex flex-row  items-center gap-5  ">
          <Logo />
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="bg-transparent"
          />
        </div>
      </div>
    </>
  );
}

export default NavBar;
