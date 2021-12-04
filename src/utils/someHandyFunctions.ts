const layoutVisibilityCheck = (pathname:string): boolean => {
  let showLayout = true;
  if (pathname && (pathname === "/" || pathname.includes("/auth") || pathname === "/404")) {
    showLayout = false;
  }
  return showLayout;
};

export default layoutVisibilityCheck;
