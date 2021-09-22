import React from "react";
import "styles/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ThemeWrapper from "components/ThemeWrapper";
import Routing from "routes";

const App:React.FC = () => (
  <ThemeWrapper>
    <Routing />
  </ThemeWrapper>
);

export default App;
