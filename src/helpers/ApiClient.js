import axios from 'axios';
const CryptoJS = require("crypto-js");

function getDefaultOptions() {
  let token = generateToken();
  return {headers: {Token: token}};
}

function validateResponse(res) {
  res.then(() => {},
    (error) => {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.href = '/';
      }
    },
  );
}
function generateToken (){
    let header = {
      "alg": "HS256",
      "typ": "JWT"
    };
    let secret = "HYb98KLp751He73qA1ZvS";

    let UTCstring = Math.floor(((new Date()).getTime() + (1 * 60 * 1000)) / 1000);
    let data = {
      "exp": UTCstring
    };
    let stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    let encodedHeader = CryptoJS.enc.Base64.stringify(stringifiedHeader);
    let stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
    let encodedData = CryptoJS.enc.Base64.stringify(stringifiedData);

    let signature = encodedHeader + "." + encodedData;
    signature = CryptoJS.HmacSHA256(signature, secret);
    signature = CryptoJS.enc.Base64.stringify(signature);

    let jwtToken = encodedHeader+'.'+encodedData+'.'+signature;
    return jwtToken;
} 
const ApiClient = {
  apiGet(path) {
    const res = axios.get(path, getDefaultOptions());
    validateResponse(res);
    return res;
  },
  apiPost(path, payload, options) {
    const optionsWithDefaults = { ...getDefaultOptions(), ...options };
    const res = axios.post(path, payload, optionsWithDefaults);
    validateResponse(res);
    return res;
  },
  apiPut(path, payload, options) {
    const optionsWithDefaults = { ...getDefaultOptions(), ...options };
    const res = axios.put(path, payload, optionsWithDefaults);
    validateResponse(res);
    return res;
  },
  apiDelete(path, payload, options) {
    const optionsWithDefaults = { ...getDefaultOptions(), ...options, data: payload };
    const res = axios.delete(path, optionsWithDefaults);
    validateResponse(res);
    return res;
  },
  getRequiredKeyCookieValue(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  },
};

export default ApiClient;
