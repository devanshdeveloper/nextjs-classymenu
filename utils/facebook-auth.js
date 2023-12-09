export function initFacebookSdk(params) {
    return new Promise((resolve, reject) => {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
          cookie: true,
          xfbml: true,
          version: "v16.0",
        });
        resolve();
      };
    });
  }
  
  export const getFacebookLoginStatus = () => {
    return new Promise((resolve, reject) => {
      window.FB.getLoginStatus((response) => {
        resolve(response);
      });
    });
  };
  
  export const facebookLogin = () => {
    return new Promise((resolve, reject) => {
      window.FB.login((response) => {
        resolve(response);
      });
    });
  };
  export const facebookLogout = () => {
    return new Promise((resolve, reject) => {
      window.FB.logout((response) => {
        resolve(response);
      });
    });
  };
  
  export function fetchFacebookUserDetails(res) {
    return new Promise((resolve, reject) => {
      window.FB.api("/me", resolve);
    });
  }
  