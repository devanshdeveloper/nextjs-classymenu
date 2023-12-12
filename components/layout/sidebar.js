"use client";
import { SiBento } from "react-icons/si";
import { Divider, Listbox, ListboxItem, ScrollShadow } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";
import { FaBowlRice } from "react-icons/fa6";
import { LuSoup } from "react-icons/lu";
import { PiShrimp } from "react-icons/pi";
import { TbSalad } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
const SideBar = () => {
  const menus = Array.from({ length: 5 }, (_, index) => ({
    text: `Menu ${index + 1}`,
    icon: <FaBowlRice key={index} size={22} />,
  }));

  const sections = [
    { text: "Soup", isActive: true, emoji: "🍲", icon: <LuSoup /> },
    { text: "Starters", emoji: "🍤", icon: <PiShrimp /> },
    { text: "Rice", emoji: "🍚", icon: <FaBowlRice /> },
    { text: "Pasta", emoji: "🍝", icon: <CiBowlNoodles /> },
    { text: "Salads", emoji: "🥗", icon: <TbSalad /> },
    { text: "Appetizers", emoji: "🍱", icon: <SiBento /> },
    { text: "Add Section", emoji: "🍱", icon: <FaPlus /> },
  ];

  return (
    <div className="fixed top-0 left-0 w-[312px] h-screen border-r-1 border-gray-200 dark:border-gray-800 flex ">
      <div className="w-[72px]">
        <div className="h-16 flex items-center justify-center font-bold">
          <div className="flex items-center justify-center relative group w-full">
            {/* height on selected h-10 */}
            <div className="h-2 group-hover:h-[20px] w-2 bg-foreground-800 rounded-xl absolute -left-1 transition-all duration-200"></div>
            <div className="flex items-center justify-center w-12 h-12 bg-foreground-50 hover:bg-primary hover:rounded-xl rounded-3xl transition-all duration-200">
              <FaBowlRice />
            </div>
            <div className="absolute group-hover:left-16 invisible group-hover:visible z-50 bg-foreground-50  py-1 px-2 rounded-lg">
              Menu
            </div>
          </div>
        </div>
        <Divider />
        <div className="h-[calc(100vh-64px)] no-scrollbar flex flex-col gap-2 pt-2">
          {/* <ScrollShadow className="h-[calc(100vh-64px)] no-scrollbar flex flex-col gap-2 pt-2"> */}
          {menus.map((menu) => (
            <div className="flex items-center justify-center relative group">
              {/* height on selected h-10 */}
              <div className="h-2 group-hover:h-[20px] w-2 bg-foreground-800 rounded-xl absolute -left-1 transition-all duration-200"></div>
              <div className="flex items-center justify-center w-12 h-12 bg-foreground-50 hover:bg-primary hover:rounded-xl rounded-3xl transition-all duration-200">
                {menu.icon}
              </div>
              <span className="absolute group-hover:left-16 invisible group-hover:visible whitespace-nowrap overflow-hidden text-clip z-50 bg-foreground-50 py-1 px-2 rounded-lg">
                {menu.text}
              </span>
            </div>
          ))}
          <Divider />
          <div className="flex items-center justify-center relative group">
            {/* height on selected h-10 */}
            <div className="h-2 group-hover:h-[20px] w-2 bg-foreground-800 rounded-xl absolute -left-1 transition-all duration-200"></div>
            <div className="flex items-center justify-center w-12 h-12 bg-foreground-50 hover:bg-primary hover:rounded-xl rounded-3xl transition-all duration-200">
              <FaPlus size={22} />
            </div>
            <div className="absolute group-hover:left-16 invisible group-hover:visible z-50 bg-foreground-50 whitespace-nowrap overflow-hidden text-clip py-1 px-2 rounded-lg">
              Add Menu
            </div>
          </div>
        </div>
        <div className="h-16"></div>
        {/* </ScrollShadow> */}
      </div>
      <Divider orientation="vertical" />
      <div className="w-[240px]">
        <div className="h-16 flex items-center justify-between px-4 font-bold text-inherit">
          <div>Sections</div>
        </div>
        <Divider />
        <ScrollShadow className="h-[calc(100vh-64px)] no-scrollbar">
          <Listbox
            items={sections}
            aria-label="Dynamic Actions"
            classNames={{ base: "p-0" }}
            itemClasses={{ base: "py-3 px-4 rounded-none" }}
            onAction={(key) => alert(key)}
          >
            {(item) => (
              <ListboxItem key={item.text} textValue={item.text}>
                <div className="flex items-center gap-2 text-lg">
                  {item.emoji && !item.icon && <span>{item.emoji}</span>}
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.text}</span>
                </div>
              </ListboxItem>
            )}
          </Listbox>
          <div className="h-16"></div>
        </ScrollShadow>
      </div>
    </div>
  );
};

export default SideBar;
