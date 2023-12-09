"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { fetchGoogleUserDetails } from "@/utils/google-auth";
import { useMsal } from "@azure/msal-react";
import { useGoogleLogin } from "@react-oauth/google";
import { usePathname, useRouter } from "next/navigation";
import { loginRequest } from "../utils/msal/msalAuthConfig";
import { createContext, useEffect, useState } from "react";
import Alert from "@/components/ui/Alert";
import {
  facebookLogin,
  facebookLogout,
  fetchFacebookUserDetails,
  getFacebookLoginStatus,
  initFacebookSdk,
} from "@/utils/facebook-auth";
import Script from "next/script";
import ProgressLayout from "@/components/layout/progresslayout";
import { useDisclosure } from "@nextui-org/react";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  /* state */
  const [user, setUser] = useLocalStorage("user", null);
  const [loader, setLoader] = useState({
    // isLoading: true,
    isLoading: false,
    isFacebookSDKLoaded: false,
    isGSIClientLoaded: true,
    text: "Please wait...",
    showSpinner: true,
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [alert, setAlert] = useState({ text: "" });

  /* hooks */
  const { instance } = useMsal();
  const router = useRouter();
  const pathName = usePathname();

  /* on app load and user change */
  // useEffect(() => {
  //   if (pathName === "/auth") {
  //     if (user) {
  //       router.push("/");
  //     }
  //   } else {
  //     if (!user) {
  //       if (pathName === "/") router.push("/auth");
  //     }
  //   }
  // }, [user, router, pathName]);

  /* google auth handlers */

  async function handleGoogleResponse(credentialResponse) {
    const googleUser = await fetchGoogleUserDetails(
      credentialResponse.access_token
    );
    console.log(googleUser);
    setUser({
      provider: "google",
      id: credentialResponse.access_token,
      email: googleUser.data.email,
    });
    setLoader({ ...loader, isLoading: false, text: "" });
  }

  const googleLogin = useGoogleLogin({
    async onSuccess(credentialResponse) {
      console.log(credentialResponse);
      const googleUser = await fetchGoogleUserDetails(
        credentialResponse.access_token
      );
      setUser({
        provider: "google",
        id: credentialResponse.access_token,
        email: googleUser.data.email,
      });
      setLoader({ ...loader, isLoading: false, text: "" });
    },
    onError(error) {
      setLoader({ ...loader, isLoading: false, text: "" });
    },
  });

  async function signInWithGoogle() {
    setLoader({
      isLoading: true,
      text: "You're almost there! Take a moment to log in to your Google account in the new window.",
    });
    googleLogin();
  }

  /* microsoft auth handlers */

  const signInWithMicrosoft = async () => {
    setLoader({
      ...loader,
      isLoading: true,
      text: "First things first! Use the new window to log in with your Microsoft account before we proceed.",
    });
    try {
      await instance.initialize();
      const res = await instance.loginPopup({
        ...loginRequest,
        redirectUri: "/redirect",
      });
      setLoader({ ...loader, isLoading: false });
      setUser({
        provider: "msal",
        email: res.account.idTokenClaims.preferred_username,
        id: res.account.idTokenClaims.oid,
      });
    } catch (error) {
      setLoader({ ...loader, isLoading: false });
      if (error.errorCode === "user_cancelled") return;
      onOpen();
      setAlert({ text: "Error signing in with microsoft account" });
      setTimeout(() => setAlert({ text: "" }), 5000);
      return;
    }
  };

  /* facebook auth handlers */

  async function handleFacebookResponse(response) {
    if (response.status === "connected") {
      const userDetails = await fetchFacebookUserDetails();
      setLoader({
        ...loader,
        isFacebookSDKLoaded: true,
      });
      setUser({
        provider: "facebook",
        email: userDetails.email || userDetails.name,
        id: response.authResponse.userID,
      });
    } else
      setLoader({
        ...loader,
        isFacebookSDKLoaded: true,
      });
  }

  async function handleFacebookSDKLoad() {
    await initFacebookSdk();
    handleFacebookResponse(await getFacebookLoginStatus());
  }

  async function handleFacebookLogin() {
    await handleFacebookResponse(await facebookLogin());
  }

  /* twitter handlers */

  function handleTwitterLogin(response) {
    setUser({
      provider: "twitter",
      id: response.accessTokenResponse.user_id,
      email: response.accessTokenResponse.screen_name,
    });
    router.push("/");
  }

  /* logout auth handlers */

  async function logout() {
    if (!user) return;
    if (user.provider === "msal") await instance.logoutPopup();
    if (user.provider === "facebook") await facebookLogout();
    setUser(null);
    router.push("/");
  }

  return (
    <>
      <Script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js"
        onLoad={handleFacebookSDKLoad}
      />
      {/* <Script
        src="https://accounts.google.com/gsi/client"
        onLoad={() => {
          console.log(google);
          google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            ux_mode: "popup",
            callback: handleGoogleResponse,
          });
          // google.accounts.id.prompt();
          setLoader({ ...loader, isGSIClientLoaded: true });
        }}
        async
      /> */}
      <AuthContext.Provider
        value={{
          user,
          loader,
          setLoader,
          signInWithGoogle,
          signInWithMicrosoft,
          handleFacebookLogin,
          handleFacebookResponse,
          handleFacebookSDKLoad,
          handleTwitterLogin,
          logout,
        }}
      >
        <Alert isOpen={isOpen} onOpenChange={onOpenChange} text={alert.text} />
        {/* {children} */}
        {loader.isLoading ||
        !loader.isFacebookSDKLoaded ||
        !loader.isGSIClientLoaded ? (
          <ProgressLayout {...loader} />
        ) : (
          children
        )}
      </AuthContext.Provider>
    </>
  );
}
