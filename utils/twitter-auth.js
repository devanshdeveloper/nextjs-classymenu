import TwitterLite from "twitter-lite";
import { isBrower } from "./";

export const twitterConfig = {
  consumer_key: process.env.NEXT_PUBLIC_TWITTER_API_KEY,
  consumer_secret: process.env.NEXT_PUBLIC_TWITTER_API_SECRET,
  access_token_key: process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN_SECRET,

  callback_url: "http://localhost:3000/api/auth/twitter/callback",
};
export const twitterLite = new TwitterLite({
  consumer_key: twitterConfig.consumer_key,
  consumer_secret: twitterConfig.consumer_secret,
  access_token_key: twitterConfig.access_token_key,
  access_token_secret: twitterConfig.access_token_secret,
});

export async function redirectUserToTwitterAuth() {
  const requestTokenResponse = await fetch("/api/auth/twitter/request_token");
  if (isBrower())
    window.location.href = (await requestTokenResponse.json()).redirectURL;
}

export async function fetchTwitterUserDetails({ oauth_token, oauth_verifier }) {
  const twitterUserDetails = await fetch(`/api/auth/twitter/callback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ oauth_token, oauth_verifier }),
  });
  return await twitterUserDetails.json();
}
