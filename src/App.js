import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Spaces from "./pages/Spaces";
import MySpace from "./pages/MySpace";
import SpaceDetails from "./pages/SpaceDetails";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Spaces} />
        {/* The frontend route / displays a list of spaces*/}
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/myspace" component={MySpace} />
        <Route path="/spaces/:id" component={SpaceDetails} />
      </Switch>
    </div>
  );
}

export default App;
