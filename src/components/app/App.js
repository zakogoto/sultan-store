import AppMenu from "../appMenu/AppMenu";
import AppHeader from "../appHeader/AppHeader";
import AppPromo from "../appPromo/AppPromo";
import AppEvent from "../appEvent/AppEvent";

function App() {
  return (
    <div className="App">
      <AppMenu />
      <AppHeader/>
      <AppPromo/>
      <AppEvent/>
    </div>
  );
}

export default App;
