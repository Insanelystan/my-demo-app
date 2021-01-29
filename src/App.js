import { Route, Switch } from "react-router-dom";

import "./App.css";

import Clock from "./Component/Clock/Clock";
import Welcome from "./Component/Welcome/Welcome";
import Contact from "./Component/Contact/Contact";
import Navigation from "./Component/Navigation/Navigation";

function App() {
  return (
    <Route>
      <div className="App">
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={(...props) => <Welcome name="Israel" />}
          />

          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route path="/Welcome/:name" component={Welcome} />
          <Route>
            <div>Error 404: Page Not Found</div>
          </Route>
        </Switch>
      </div>
    </Route>
  );
}

export default App;
