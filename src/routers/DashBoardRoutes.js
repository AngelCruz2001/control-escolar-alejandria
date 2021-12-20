import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Main } from '../components/general/Main'
import { Navbar } from '../components/general/navbar/Navbar'
import { RequestHistory } from '../components/requests/RequestHistory'

export const DashBoardRoutes = () => {
    
    return (
        <>
            <Switch>
                <Route exact path='/navbar' component={Navbar}/>
                <Route  path='/' component={Main}/>
                <Route exact path="/solicitud_de_documento/historial"
                component={RequestHistory} 
              />
                <Redirect to='/'/>
            </Switch>
        </>
    )
}