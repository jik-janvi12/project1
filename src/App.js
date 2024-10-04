import './App.css';
import  Home  from "./componets/Home";
import  Services  from "./componets/Services";
import  Portfolio from "./componets/Portfolio";
import  Contact from "./componets/Contact";
import  Footer from "./componets/Footer";
import  Header from "./componets/Header";
import  About from "./componets/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return(
    <>
    <Router>
        <Header />
          <Switch>
                  <Route exact path="/">
                  <Home /> 
                  </Route>

                  <Route exact path="/about">
                  <About /> 
                  </Route>

                  <Route exact path="/services">
                  <Services /> 
                  </Route>

                  <Route exact path="/portfolio">
                  <Portfolio /> 
                  </Route>

                  <Route exact path="/contact">
                  <Contact /> 
                  </Route>
          </Switch>
        <Footer />
    </Router>
    </>
  );
}
export default App;
///https://rapidapi.com/cricketapilive/api/cricbuzz-cricket/playground/apiendpoint_44101a36-25f5-4516-8e97-e82065c5d658
////https://jsonviewer.stack.hu/#http://
