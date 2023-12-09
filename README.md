1This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Note : facebook auth does not work on http, use https

### Adding the Environment Variables
To configure the necessary environment variables for your project, follow the steps below:

I have added images in guide/ folder, make sure to see that along.

#### Create a Local Environment File
Create a file named .env.local in the root of your project. You can use the provided example file .env.local.example as a template.



#### Google API Key Configuration

a. Create a Google Cloud Project
Go to Google Cloud Console.
Create a new project.
Navigate to the "Credentials" tab in the project dashboard.

b. Get Client IDs
Open the Credentials page.

Set the authorized JavaScript origins:
http://localhost
http://localhost:3000
https://localhost
https://localhost:3000


Set the authorized redirect URIs:
http://localhost:3000/redirect
http://localhost
https://localhost:3000/redirect
https://localhost

Add both origins (with and without the port) in the Google Cloud Console.

Ensure your development environment uses the route http://localhost:3000 (not 127.0.0.1).


For more detailed instructions, refer to Google Identity Services Documentation.

#### MSAL (Microsoft Authentication Library) Configuration
a. Azure Portal Setup
Visit Azure Portal.
Make sure you are in Entra ID, not Azure Active Directory.
Path to Entra ID

Navigate to "App registrations."
Entra ID

Click on "New registration."

b. Add Redirect URLs
In the registration process, add the following redirect URLs:
http://localhost:3000/redirect
For detailed visual instructions, refer to the provided images in the repository.

After completing these steps, your environment should be properly configured for both Google API and MSAL authentication. Make sure to secure your .env.local file and keep it confidential.


### facebook auth

Note : facebook auth does not work on http, use https

After all the requirement are available, we need to register as a Facebook Developer Apps. To register, we need to log in using your existing Facebook account at https://developers.facebook.com/apps/ . If you haven't logged in to Facebook, you will be asked to enter your email or mobile number and password.

After that, you will redirect to https://developers.facebook.com and click “Get Started” if the first you register at Facebook Developer Apps.

You will be taken to the registration dashboard , and click “Continue”

Fill container of Primary Email with your email other than the Facebook account email that has been registered

You will get an email code from Facebook. Fill that container with the code you got earlier.

Choose as “Developer” and the press button “Complete and Registration”

We will be redirected to Facebook for the Developer dashboard

Press button “Create App” for create app in Facebook Developer.

Choose “Build Connected Experiences” and the press button “Continue”

Fill the App Display Name with what you want to name this app and your email that was previously registered. In this tutorial we use the name “React_Login”. After that, press the button “Create App”.

After checking the captcha dialog and click submit button, we will be redirected to the Facebook Application Dashboard.

Open setting from the sidebar -> basic setting -> scroll down -> Add Platform -> Add site url -> save


for dev env
https://localhost:3000/


### twitter

they have good docs
https://developer.twitter.com/en/docs/apps/overview


enable auth here
![twitter project page](guide\enabletwitterauth.png)


auth settings

App permissions

- enable this
Read and write and Direct message
Read Tweets and profile information, read and post Direct messages

- enable this
Request email from users
To request email from users, you are required to provide URLs to your App’s privacy policy and terms of service.


Type of App : 
Web App, Automated App or Bot
Confidential client

![twiiter auth settings](guide\twitterauthsettings.png)

callback url
https://localhost:3000/twitter/redirect


 

### Start your project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
