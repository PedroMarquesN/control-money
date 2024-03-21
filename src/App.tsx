import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/themes/default.ts";
import {GlobalStyle} from "./styles/global.ts";
import {Transactions} from "./pages/Transactions";
import {TransactionsProvider} from "./contexts/TransactionsContext.tsx";


function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
          <TransactionsProvider>
              <Transactions/>
              <GlobalStyle/>
          </TransactionsProvider>
      </ThemeProvider>

  )
}

export default App
