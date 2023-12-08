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
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function NavigationBar() {
  const { theme, setTheme } = useTheme();
  return (
    <Navbar isBordered >
      <NavbarBrand>
        <p className="font-bold text-inherit">Current Section</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Download JSON</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} size="md" color="primary" href="#" variant="flat">
            Download PDF
          </Button>
        </NavbarItem>
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
      </NavbarContent>
    </Navbar>
  );
}
{/* <PDFDownloadLink
className="btn me-1 btn-secondary"
document={<MenuPDF text={JSON.stringify(newJSON, null, 2)} />}
fileName="document.pdf"
>
{({ blob, url, loading, error }) => (
  <>
    {loading ? "Loading PDF" : "Download"}
    {error ? "Error" : null}
  </>
)}
</PDFDownloadLink> */}