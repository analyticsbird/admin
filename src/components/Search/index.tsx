import React from "react";

import {
  IconButton, InputBase, Paper, styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const PaperStyled = styled(Paper)(() => ({ padding: "2px 4px", boxShadow: "none" }));

const InputBaseStyled = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

const IconButtonStyled = styled(IconButton)(() => ({
  padding: 10,
}));

const Search:React.FC = () => (
  <PaperStyled
    className={`
        w-full
        max-w-lg
        flex 
        items-center
        border 
        border-solid 
        border-gray-300
        mb-5 
        sm:mb-0`}
  >
    <InputBaseStyled
      inputProps={{ "aria-label": "search apps" }}
      placeholder="Search apps"
    />
    <IconButtonStyled aria-label="search">
      <SearchIcon />
    </IconButtonStyled>
  </PaperStyled>
);

export default Search;
