import Typo from "components/Typo";
import React from "react";

const Header:React.FC = () => (
  <div className="flex items-center">
    <Typo text="Customization" type="heading" className="flex-grow" />
  </div>
);
export default Header;
