"use client";
import { Divider, Listbox, ListboxItem, ScrollShadow } from "@nextui-org/react";
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
        <div className="h-16 flex items-center ml-4 font-bold text-inherit">
          Menus
        </div>
        <Divider className="mb-4" />
        <ScrollShadow className="h-[calc(100vh-64px)] no-scrollbar">
          <Listbox
            itemClasses={{ base: "py-3 px-4" }}
            items={menus}
            aria-label="Dynamic Actions"
            onAction={(key) => alert(key)}
          >
            {(item) => (
              <ListboxItem
                key={item.text}
                // color={item.key === "delete" ? "danger" : "default"}
                // className={item.key === "delete" ? "text-danger" : ""}
              >
                {item.text}
              </ListboxItem>
            )}
          </Listbox>
          <div className="h-16"></div>
        </ScrollShadow>
        {/* <div>
          {menus.map((menu, i) => (
            <div key={i}>{menu.text}</div>
            ))}
          </div> */}
      </div>
      <Divider orientation="vertical" />
      <div className="w-1/2">
        <div className="h-16 flex items-center font-bold text-inherit ml-4">
          Sections
        </div>
        <Divider className="mb-4" />
        <ScrollShadow className="h-[calc(100vh-64px)] no-scrollbar">
          <Listbox
            items={sections}
            aria-label="Dynamic Actions"
            itemClasses={{ base: "py-3 px-4" }}
            onAction={(key) => alert(key)}
          >
            {(item) => (
              <ListboxItem
                key={item.text}
                // color={item.key === "delete" ? "danger" : "default"}
                // className={item.key === "delete" ? "text-danger" : ""}
              >
                {item.text}
              </ListboxItem>
            )}
          </Listbox>
          <div className="h-16"></div>
        </ScrollShadow>
        {/* <div>
          {menus.map((menu, i) => (
            <div key={i}>{menu.text}</div>
            ))}
          </div> */}
      </div>
    </div>
    // <div className="fixed top-0 left-0 h-screen w-24 flex items-center flex-col bg-white dark:bg-gray-900 overflow-y-scroll no-scrollbar">
    //   {menus.map((menu, i) => (
    //     <div key={i} className="flex flex-col items-center gap-1">
    //       <div className="rounded-full bg-background h-12 w-12 flex items-center justify-center">{menu.icon}</div>
    //       <div className="text-xs py-2">{menu.text}</div>
    //     </div>
    //   ))}
    // </div>
    // <div className="fixed top-0 left-0 h-screen w-16 flex items-center gap-5 pt-5 flex-col bg-white dark:bg-gray-900 shadow-lg overflow-y-scroll overflow-x-auto no-scrollbar">
    //   {menus.map((menu, i) => (
    //     <div
    //       key={i}
    //       className="relative flex items-center justify-center h-12 w-12 p-3 bg-gray-200 hover:bg-green-600 dark:bg-gray-800 text-green-500 hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group"
    //     >
    //       <div>{menu.icon}</div>
    //       <span className="absolute w-auto z-50 p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs transition-all duration-100 scale-0 origin-left group-hover:scale-100">
    //         {menu.text}
    //       </span>
    //     </div>
    //   ))}
    // </div>
  );
};

export default SideBar;
