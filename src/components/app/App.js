import AppMenu from "../appMenu/AppMenu";
import AppHeader from "../appHeader/AppHeader";
import AppPromo from "../appPromo/AppPromo";
import AppEvent from "../appEvent/AppEvent";
import AppCategories from "../appCategories/AppCategories";
import AppSlider from "../appSlider/AppSlider";
import BestItems from "../bestItems/BestItems";
import AppMap from "../appMap/AppMap";
import AppFooter from "../appFooter/AppFooter";

function App() {
  return (
    <div className="App">
      <AppMenu />
      <AppHeader/>
      <AppPromo/>
      <AppEvent/>
      <AppCategories/>
      <AppSlider/>
      <BestItems/>
      <AppMap/>
      <AppFooter/>
    </div>
  );
}

export default App;
