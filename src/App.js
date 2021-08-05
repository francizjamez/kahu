import Login from "./components/Login";
import Form from "./components/Form";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/form" component={Form} />
      <Route path="/" component={Login} />
    </Switch>
  );
}

export default App;
