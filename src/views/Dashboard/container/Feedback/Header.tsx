import DateSelect from "components/DateSelect";
import Typo from "components/Typo";
import React from "react";

const Header:React.FC = () => (
  <div className="flex items-center">
    <Typo text="Feedback" type="heading" className="flex-grow" />
    <DateSelect />
  </div>
);
export default Header;
