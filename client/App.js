import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from './components/Header';
import { WalletForm } from './components/WalletForm';



export const App = () =>{

    return(
        <div>
            <Header/>
            <WalletForm/>
        </div>
    )
}