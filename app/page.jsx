"use client";

import MenuForm from "@/components/layout/menuform";
import MenuItem from "@/components/layout/menuitem";
import SideBar from "@/components/layout/sidebar";
import NavigationBar from "@/components/layout/NavigationBar";
import { ScrollShadow } from "@nextui-org/react";
import { PDFViewer } from "@react-pdf/renderer";
import MenuPDF from "@/components/MenuPDF";
import useIsClient from "@/hooks/useIsClient";
import { convertJsonToArray } from "@/utils/json-utils";
import { useMenu } from "@/context";

export default function Home() {
  const { isClient } = useIsClient();
  const { menuData } = useMenu();

  const convertedArray = convertJsonToArray(menuData);

  return (
    <div className="">
      <SideBar />
      <div className="absolute top-0 left-96 w-[calc(100vw-384px)]">
        <NavigationBar />
        <div className="flex h-[calc(100vh-65px)]">
          <div className="w-[60%]">
            <ScrollShadow
              size={10}
              className="p-5 flex flex-col gap-5 h-[calc(100vh-65px-356px)] no-scrollbar"
            >
              {convertedArray.length === 0 ? (
                <div className="h-full w-full flex items-center justify-center text-lg">No Items to show...</div>
              ) : (
                convertedArray.map((menuItem, i) => (
                  <MenuItem key={i} {...menuItem} />
                ))
              )}
            </ScrollShadow>
            <MenuForm />
          </div>
          <div className="w-[40%] h-full">
            {isClient && (
              <PDFViewer className="w-full h-full">
                <MenuPDF text={JSON.stringify(menuData, null, 2)} />
              </PDFViewer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
