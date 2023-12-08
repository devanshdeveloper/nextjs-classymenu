import MenuForm from "@/components/layout/menuform";
import MenuItem from "@/components/layout/menuitem";
import SideBar from "@/components/layout/sidebar";
import NavigationBar from "@/components/layout/Navbar";
import { ScrollShadow } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="">
      <SideBar />
      <div className="absolute top-0 left-96 w-[calc(100vw-384px)]">
        <NavigationBar />
        <div className="flex h-[calc(100vh-65px)]">
            <ScrollShadow
            size={10}
            className="w-[50%] p-5 flex flex-col gap-5 h-[calc(100vh-65px-356px)] no-scrollbar">
              <MenuItem
                name="Barf ke pakode (icy fritters)"
                availability="(Lunch, Dinner)"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum nemo inventore iure asperiores quos ullam magnam quidem doloremque similique?"
                price={"$20"}
                id={"1234"}
              />
              <MenuItem
                name="garma garm ice cream"
                availability="(Lunch, Dinner)"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum nemo inventore iure asperiores quos ullam magnam quidem doloremque similique?"
                price={"$20"}
                id={"1234"}
              />
              <MenuItem
                name="samosa"
                availability="(Lunch, Dinner)"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum nemo inventore iure asperiores quos ullam magnam quidem doloremque similique?"
                price={"$20"}
                id={"1234"}
              />
              <MenuItem
                name="samosa"
                availability="(Lunch, Dinner)"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum nemo inventore iure asperiores quos ullam magnam quidem doloremque similique?"
                price={"$20"}
                id={"1234"}
              />
              <MenuItem
                name="samosa"
                availability="(Lunch, Dinner)"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum nemo inventore iure asperiores quos ullam magnam quidem doloremque similique?"
                price={"$20"}
                id={"1234"}
              />
            </ScrollShadow>
            <MenuForm />
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
    // <div className="flex">
    //   <SideBar />
    //   <SectionBar />
    //   <div className="fixed top-0 left-72 flex flex-col bg-gray-200 dark:bg-gray-700 m-0 h-full w-full  overflow-hidden">
    //     <TopNavigation />
    //     <div className="p-5 flex flex-col gap-5 h-[calc(100vh-64px)]">

    //     </div>
    //     <MenuForm />
    //   </div>
    // </div>
  );
}
