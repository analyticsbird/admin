/* eslint-disable import/prefer-default-export */
import ENVIRONMENT from "constants/environment";

const { BASE_URL } = ENVIRONMENT;

export const URLS = {

  // authentication
  LOGIN: `${BASE_URL}/auth/login`,
  REGISTER: `${BASE_URL}/auth/register`,

  // app
  USER_APP: `${BASE_URL}/app`,

};

export default URLS;
