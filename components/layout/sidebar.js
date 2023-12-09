"use client";
import { Chip } from "@nextui-org/react";
import { Divider, Listbox, ListboxItem, ScrollShadow } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";
import { FaBowlRice } from "react-icons/fa6";

const SideBar = () => {
  const menus = Array.from({ length: 30 }, (_, index) => ({
    text: `Menu ${index + 1}`,
    icon: <FaBowlRice key={index} size={22} />,
  }));

  const sections = [
    { text: "Soup", isActive: true },
    { text: "Starters" },
    { text: "Rice" },
    { text: "Pasta" },
    { text: "Salads" },
    { text: "Appetizers" },
    { text: "Main Course" },
    { text: "Desserts" },
    { text: "Beverages" },
    { text: "Seafood" },
    { text: "Vegetarian" },
    { text: "Chicken" },
    { text: "Beef" },
    { text: "Pork" },
    { text: "Lamb" },
    { text: "Pizza" },
    { text: "Burgers" },
    { text: "Sandwiches" },
    { text: "Wraps" },
    { text: "Sushi" },
    { text: "Curries" },
    { text: "Tacos" },
    { text: "Burritos" },
    { text: "Quesadillas" },
    { text: "Nachos" },
    { text: "Breakfast" },
    { text: "Brunch" },
    { text: "Dinner Specials" },
    { text: "Kids Menu" },
    { text: "Healthy Options" },
    { text: "Dips and Sauces" },
    { text: "Side Dishes" },
    { text: "Add Section" },
  ];

  return (
    <div className="fixed top-0 left-0 w-96 h-screen border-r-1 border-gray-200 dark:border-gray-800 flex ">
      <div className="w-1/2">
        <div className="h-16 flex items-center justify-between px-4 font-bold text-inherit">
          <div>Menus</div>
          {/* <Chip color="primary"> */}
            <FaPlus className="font-thin" />
          {/* </Chip> */}
        </div>
        <Divider className="mb-4" />
        <ScrollShadow className="h-[calc(100vh-64px)] no-scrollbar">
          <Listbox
            itemClasses={{ base: "py-3 px-4" }}
            items={menus}
            aria-label="Dynamic Actions"
            onAction={(key) => alert(key)}
          >
            {(item) => <ListboxItem key={item.text}>{item.text}</ListboxItem>}
          </Listbox>
          <div className="h-16"></div>
        </ScrollShadow>
      </div>
      <Divider orientation="vertical" />
      <div className="w-1/2">
      <div className="h-16 flex items-center justify-between px-4 font-bold text-inherit">
          <div>Sections</div>
          {/* <Chip color="primary"> */}
            <FaPlus className="font-thin" />
          {/* </Chip> */}
        </div>
        <Divider className="mb-4" />
        <ScrollShadow className="h-[calc(100vh-64px)] no-scrollbar">
          <Listbox
            items={sections}
            aria-label="Dynamic Actions"
            itemClasses={{ base: "py-3 px-4" }}
            onAction={(key) => alert(key)}
          >
            {(item) => <ListboxItem key={item.text}>{item.text}</ListboxItem>}
          </Listbox>
          <div className="h-16"></div>
        </ScrollShadow>
      </div>
    </div>
  );
};

export default SideBar;
