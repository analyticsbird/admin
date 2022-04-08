import React from "react";
import ThemeWrapper from "components/ThemeWrapper";
import Routing from "routes";
import store from "store";
import { Provider } from "react-redux";

import "styles/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App:React.FC = () => (
  <>
    <Provider store={store}>
      <ThemeWrapper>
        <Routing />
      </ThemeWrapper>
    </Provider>
  </>

);

export default App;
