"use client";

import ProgressLayout from "@/components/layout/progresslayout";
import { useAuth } from "@/context";
import { fetchTwitterUserDetails } from "@/utils/twitter-auth";
import { useEffect } from "react";

const TwiiterPage = ({ searchParams }) => {
  const { handleTwitterLogin } = useAuth();

  useEffect(() => {
    async function asyncHandler() {
      if (searchParams.oauth_token && searchParams.oauth_verifier) {
        console.log(searchParams);
        const userDetails = await fetchTwitterUserDetails(searchParams);
        handleTwitterLogin(userDetails);
      }
    }
    asyncHandler();
  }, []);

  // ?oauth_token=NU50GAAAAAABrWgnAAABjDzFJ-k&oauth_verifier=Blho8Pe4LTPLMgU76tMzDZZ25MR2brZJ
  return <ProgressLayout text="Redirecting to app..." />;
};

export default TwiiterPage;
