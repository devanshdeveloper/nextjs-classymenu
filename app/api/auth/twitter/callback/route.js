import { twitterLite } from "@/utils/twitter-auth";
import { NextResponse } from "next/server";
// import { twitterLite } from "@/utils/twitter-auth";

// export async function GET(req, { params }) {
//   const { oauth_token, oauth_verifier } = req.nextUrl.searchParams;
//   try {
//     console.log(oauth_token);
//     // console.log(oauth_token, oauth_verifier);
//     // const accessTokenResponse = await twitterLite.getAccessToken({
//     //   oauth_verifier,
//     //   oauth_token,
//     // });
//     // const accessToken = accessTokenResponse.oauth_token;
//     // const accessTokenSecret = accessTokenResponse.oauth_token_secret;

//     // You can now use the accessToken and accessTokenSecret to make requests on behalf of the authenticated user
//     NextResponse.json({ message  : "hello" });
//   } catch (error) {
//     console.error(error);
//     NextResponse.status(500).json({ error: "Internal Server Error" });
//   }
// }

export async function POST(req) {
  const { oauth_token, oauth_verifier } = await req.json();
  
  const accessTokenResponse = await twitterLite.getAccessToken({
    oauth_verifier,
    oauth_token,
  });
  return NextResponse.json({ accessTokenResponse });
}
