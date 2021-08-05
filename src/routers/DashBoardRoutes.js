import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Main } from '../components/general/Main'
import { Navbar } from '../components/general/navbar/Navbar'

export const DashBoardRoutes = ({ history }) => {
    console.log("Main")
    return (
        <>
            <Switch>
                <Route exact path='/navbar' component={Navbar}/>
                <Route path='/' component={Main}/>
                <Redirect to='/'/>

            </Switch>
        </>
    )
}