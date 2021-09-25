import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Details from "./pages/Details";

function App() {
  return (
    <div>
      <Router>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/details/:id/:name" component={Details} />
      </Router>
    </div>
  );
}

export default App;
