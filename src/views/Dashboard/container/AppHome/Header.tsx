import DateSelect from "components/DateSelect";
import Typo from "components/Typo";
import React from "react";

const Header:React.FC = () => (
  <div className="flex items-center">
    <Typo text="Overview" type="heading" className="flex-grow" />
    <DateSelect />
  </div>
);
export default Header;
