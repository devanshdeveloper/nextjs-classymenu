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
  const menus = Array.from({ length: 30 }, (_, index) => ({
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
  ];

  return (
    <div className="fixed top-0 left-0 w-96 h-screen border-r-1 border-gray-200 dark:border-gray-800 flex ">
      <div className="w-1/2">
        <div className="h-16 flex items-center justify-between px-4 font-bold text-inherit">
          <div>Menus</div>
          <FaPlus className="font-thin" />
        </div>
        <Divider />
        <ScrollShadow className="h-[calc(100vh-64px)] no-scrollbar">
          <Listbox
            classNames={{ base: "p-0" }}
            itemClasses={{ base: "py-3 px-4 rounded-none" }}
            items={menus}
            onAction={(key) => alert(key)}
          >
            {(item) => (
              <ListboxItem key={item.text}>
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
      <Divider orientation="vertical" />
      <div className="w-1/2">
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
              <ListboxItem key={item.text}>
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
