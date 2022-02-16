import { Route, Switch } from "react-router-dom"
import Form from "../pages/Form"
import User from "../pages/User"


export const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/"><Form/></Route>
            <Route exact path={`/user/`} ><User/></Route>
        </Switch>
    )
}