import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Trending from "./Pages/Trending/Trending";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";

function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <div className="app">
        
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
           
          </Switch>
        </Container>
      </div>
 
    </BrowserRouter>
  );
}

export default App;
