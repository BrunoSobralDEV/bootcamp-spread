import React from "react";
import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/github-provider";

const Providers = () => {
  // const [darkMode, setDarkMode]   = useState(false);

  // const theme = createTheme({
  //   palette: {
  //     mode: darkMode ? 'dark' : 'light',
  //   },
  // });
  
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
