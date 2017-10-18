import {getCookie, eraseCookie, createCookie} from '../services/cookie-provider';
import fetchIntercept from 'fetch-intercept';

export default function TokenInterceptor(){
    const unregister = fetchIntercept.register({
        request: function (url, config) {
            // Modify the url or config here
            var tk = getCookie("tk");
            if (tk) {
                if (url.indexOf("api") > 0 && url.indexOf("/auth") === -1) {
                    if (config) {
                        config.headers = {
                            ...config.headers,
                            Authorization : "iam " + tk
                        }
                    } else{
                        config = {
                            headers:{
                                Authorization: "iam " + tk
                            }
                        }
                    }
                }
            }
            return [url, config];
        },
    
        response: function (response) {
            // Modify the reponse object
            if (response.status === 401 && response.statusText == "Auth token is either missing or is invalid.") {
                eraseCookie("tk");
                
                let redirectPath = window.location.href.slice(window.location.href.indexOf('/#/') + 2) || '/dashboard';

                createCookie("redirectPath", redirectPath, 1);
                try {
                    window.stop();
                }
                catch (e) {
                    document.execCommand("Stop");
                }
            }
            return response;
        },
    });
}