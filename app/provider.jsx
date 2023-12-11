"use client";

// import AuthProvider from "@/context/AuthProvider";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { msalInstance } from "@/utils/msal/msalIntance";
// import { MsalProvider } from "@azure/msal-react";
import { MenuProvider } from "@/context/MenuContext";
// import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <MenuProvider>{children}</MenuProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
