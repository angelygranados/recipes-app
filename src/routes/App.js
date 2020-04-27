import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../containers/HomePage";
import AboutPage from "../containers/AboutPage";
import Header from "../components/common/Header";
import PageNotFound from "../containers/PageNotFound";
import RecipesPage from "../containers/RecipesPage";
import ManageRecipePage from "../containers/ManageRecipePage"; // eslint-disable-line import/no-named-as-default
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/recipes" component={RecipesPage} />
        <Route path="/recipe/:slug" component={ManageRecipePage} />
        <Route path="/recipe" component={ManageRecipePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
