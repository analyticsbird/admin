/* eslint-disable import/prefer-default-export */
import { AxiosResponse } from "axios";
import URLS from "constants/apiUrls";
import api from "utils/api";

import { ProjectData } from "./types";

const { post } = api;
const { USER_APP } = URLS;

export const createProject = (data: ProjectData):Promise<AxiosResponse> => post(USER_APP, data);
