/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { AxiosResponse } from "axios";
import URLS from "constants/apiUrls";
import api from "utils/api";

const { get } = api;
const { RATING_REPORT, FEEDBACK } = URLS;

export const ratingReport = (appId: string):Promise<AxiosResponse> => get(`${RATING_REPORT}?app_id=${appId}`);

export const getFeedback = (appId: string): Promise<AxiosResponse> => get(`${FEEDBACK}?app_id=${appId}`);
