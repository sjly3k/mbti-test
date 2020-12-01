import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../routes/Home";
import Question from "../routes/Question";
import Result from "../routes/Result";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/question"} exact={true} component={Question}/>
                <Route path={"/result/:result"} exact={true} component={Result}/>
                <Redirect from={"*"} to={"/"} />
            </Switch>
        </BrowserRouter>
    );
};
export default AppRouter;