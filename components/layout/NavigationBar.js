"use client";

import { Switch } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
// import { PDFDownloadLink } from "@react-pdf/renderer";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";
// import MenuPDF from "../MenuPDF";
// import useIsClient from "@/hooks/useIsClient";
import { useAuth, useMenu } from "@/context";
import { downloadJSON } from "@/utils";

export default function NavigationBar() {
  const { theme, setTheme } = useTheme();
  // const { isClient } = useIsClient();
  const { logout, user } = useAuth();
  const { menuData } = useMenu();

  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">Current Section</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            isSelected={theme === "light"}
            onValueChange={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
            size="md"
            color="primary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <FaSun className={className} />
              ) : (
                <FaMoon className={className} />
              )
            }
          ></Switch>
        </NavbarItem>
        {user && (
          <>
            <NavbarItem className="hidden lg:flex">
              <Button variant="flat" onPress={() => downloadJSON(menuData)}>
                Download JSON
              </Button>
            </NavbarItem>
            {/* {isClient && (
            <NavbarItem>
                <PDFDownloadLink
                  document={<MenuPDF text={JSON.stringify({}, null, 2)} />}
                  fileName="document.pdf"
                >
                  {({ blob, url, loading, error }) => (
                    <>
                      {loading ? "Loading PDF" : "Download"}
                      {error ? "Error" : null}
                    </>
                  )}
                </PDFDownloadLink>
            </NavbarItem>
              )} */}
            <NavbarItem>
              <Button variant="flat" color="danger" onPress={logout}>
                Logout
              </Button>
            </NavbarItem>
          </>
        )}
        {/* {!user && (

        )} */}
      </NavbarContent>
    </Navbar>
  );
}
