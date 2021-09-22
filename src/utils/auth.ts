/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
export const authHeaders = (headers:any):any => {
  const token = localStorage.getItem("token");
  if (token && token !== "undefined") {
    // eslint-disable-next-line no-param-reassign
    headers.Authorization = `${token}`;
  }
  return headers;
};

export const authError = (msg:string):any => {
  if (msg === "Request failed with status code 401") {
    window.location.href = "/auth/login";
  }
};

export const logout = ():any => {
  localStorage.clear();
  setTimeout(() => {
    window.location.href = "/auth/login";
  }, 2000);
};

export const checkHasPermission = (userRoles: string[], routeRoles: string[]):boolean => {
  let allow = false;
  if (routeRoles.length > 0) {
    userRoles.map((role) => {
      if (routeRoles.includes(role)) allow = true;
      return role;
    });
  } else { allow = true; }
  return allow;
};
