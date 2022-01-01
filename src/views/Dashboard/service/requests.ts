/* eslint-disable import/prefer-default-export */
import { AxiosResponse } from "axios";
import URLS from "constants/apiUrls";
import api from "utils/api";

const { get } = api;
const { RATING_REPORT } = URLS;

// eslint-disable-next-line max-len
export const ratingReport = (appId: string):Promise<AxiosResponse> => get(`${RATING_REPORT}?app_id=${appId}`);
