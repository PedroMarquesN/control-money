import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/themes/default.ts";
import {GlobalStyle} from "./styles/global.ts";
import {Transactions} from "./pages/Transactions";


function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
          <Transactions/>
          <GlobalStyle/>
      </ThemeProvider>

  )
}

export default App
