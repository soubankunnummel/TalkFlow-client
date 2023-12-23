// useCookieToken.js
import { useCookies } from "react-cookie";

const useCookieToken = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);

  const getToken = () => cookies.jwt;
  const setToken = (token) => setCookie('jwt', token, { path: '/' })
  const removeToken = () => removeCookie('jwt', { path: '/' })

  return { getToken, setToken, removeToken };
};

export default useCookieToken;
