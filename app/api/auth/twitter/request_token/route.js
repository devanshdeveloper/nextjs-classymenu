import { twitterLite } from "@/utils/twitter-auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log("got request");
  try {
    const results = await twitterLite.getRequestToken(
      "https://localhost:3000/twitter/redirect"
    );
    // oauth_callback_confirmed
    // oauth_token
    // oauth_token_secret
    const redirectURL =
      "https://api.twitter.com/oauth/authenticate?oauth_token=" +
      results.oauth_token;
    return NextResponse.json({ redirectURL });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "something went wrong" });
    // console.error(error);
    // NextResponse.status(500).json({ error: "Internal Server Error" });
  }
}
