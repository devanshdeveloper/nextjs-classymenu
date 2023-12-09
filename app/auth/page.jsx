"use client";

import NavigationBar from "@/components/layout/NavigationBar";
import { Button } from "@nextui-org/react";
import { FaFacebook, FaGoogle, FaMicrosoft, FaTwitter } from "react-icons/fa";

import { useAuth } from "@/context";
import { redirectUserToTwitterAuth } from "@/utils/twitter-auth";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import { isBrower } from "@/utils";

export default function Home() {
  const {
    signInWithGoogle,
    signInWithMicrosoft,
    signInAsGuest,
    handleFacebookLogin,
    loader,
    setLoader,
  } = useAuth();
  const googleButtonRef = useRef();

  // useEffect(() => {
  //   if (loader.isGSIClientLoaded && google) {
  //     google.accounts.id.renderButton(googleButtonRef.current, {
  //       theme: "outline",
  //       size: "large",
  //     });
  //   }
  // }, [loader.isGSIClientLoaded]);

  return (
    <div>
      <NavigationBar />
      <div className="flex items-center justify-center min-h-[calc(100vh-65px)] ">
        <div className="flex flex-col gap-10 items-center w-[min(600px,85vw)] py-10 border-1 border-gray-300 dark:border-gray-700  rounded-lg ">
          <div className="text-2xl text-bold">Log in with</div>
          <div className="flex gap-10">
            {/* <div
              ref={googleButtonRef}
             className="hidden"
            ></div> */}
            {[
              {
                icon: <FaMicrosoft />,
                color: "primary",
                onPress: signInWithMicrosoft,
              },
              {
                icon: <FaGoogle />,
                color: "primary",
                onPress: signInWithGoogle,
              },
              {
                icon: <FaTwitter />,
                color: "primary",
                onPress: redirectUserToTwitterAuth,
              },
              {
                icon: <FaFacebook />,
                color: "primary",
                onPress: handleFacebookLogin,
              },
            ].map(({ icon, color, onPress }, i) => (
              <Button
                key={i}
                onPress={onPress}
                color={color}
                size="lg"
                isIconOnly
                variant="flat"
              >
                {icon}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>

    // <>
    //   <div className="flex flex-col gap-5 items-center justify-center min-h-screen">
    //     <button
    //       onClick={signInWithGoogle}
    //       className="bg-white border-2  flex gap-3 items-center px-3 py-2 rounded-md "
    //     >
    //       <Image src="/google.svg" width={24} height={24} alt="google" />
    //       Continue With Google
    //     </button>
    //     <button
    //       onClick={signInWithMicrosoft}
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
    //     >
    //       Sign in with Microsoft
    //     </button>
    //     <button onClick={handleFacebookLogin} className="btn btn-primary">
    //       Login with facebook
    //     </button>
    //     <button onClick={redirectUserToTwitterAuth} className="btn btn-primary">
    //       Login with twitter
    //     </button>
    //     <div
    //       id="appleid-signin"
    //       data-color="black"
    //       data-border="true"
    //       data-type="sign in"
    //     ></div>
    //     <button
    //       onClick={signInAsGuest}
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
    //     >
    //       Log In as guest
    //     </button>
    //   </div>
    // </>
  );
}
