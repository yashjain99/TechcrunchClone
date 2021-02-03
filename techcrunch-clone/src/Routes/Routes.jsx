import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { News } from '../Pages/News/Components/News';

export const Routes = ()=> {
    return(
        <Switch>
            <Route path = "/" exact component={News} />
        </Switch>
    )
}