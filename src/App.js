import { Route, Switch } from "react-router-dom";

import "./App.css";

import Clock from "./Component/Clock/Clock";
import Welcome from "./Component/Welcome/Welcome";
import Contact from "./Component/Contact/Contact";
import Navigation from "./Component/Navigation/Navigation";
import Error from "./Component/Error/Error";
import Jeopardy from "./Component/Jeopardy/Jeopardy";

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
          <Route path="/Jeopardy" component={Jeopardy} />

          <Route component={Error} />
        </Switch>
      </div>
    </Route>
  );
}

export default App;
