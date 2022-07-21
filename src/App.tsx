import { StyledThemeProvider } from "definitions/styled-components";
import "./i18n";
import RoutesComponent from "routes";

function App(): JSX.Element {
  return (
    <StyledThemeProvider>
      <div className="App">
        <RoutesComponent />
      </div>
    </StyledThemeProvider>
  );
}

export default App;
