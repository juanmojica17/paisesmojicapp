import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./components/header";
import Notfound from "./components/notfound";

import Countries from "./views/countries"
import Country from "./views/country"
import Seemore from "./views/seemore"
import Weather from "./views/weather";




function App() {
  return (
    <>
    
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
        <Countries/>
        </Route>
        <Route path="/Country" exact>
        <Country/>
        </Route>
        <Route path="/Seemore/:name" exact>
        <Seemore/>
        </Route>
        <Route path="/Weather/:name" exact>
        <Weather/>
        </Route>
        <Route path="*" >
        <Notfound/>
        </Route>
       
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
