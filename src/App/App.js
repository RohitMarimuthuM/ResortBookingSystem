import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";
import Book from "../Pages/Book";
import Payment from "../Pages/Payment"
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/book" component={Book}/>
        <Route exact path="/payment" component={Payment}/>
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
