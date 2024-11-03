import { React, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import logo from '../../assets/images/logo1.png'
import arrow from '../../assets/images/arrow.svg'
import coin from '../../assets/images/coin.svg'

import axios from 'axios'

import '../../App.css'
import './dashboard.css'

const Dashboard = () => {
    let navigate = useNavigate()
    let checkStatus = () => {
        if (!localStorage.getItem('id'))
            navigate('/login')
    }

    useEffect(() => {
        checkStatus()
    }, [])


    return <div id="auth_screen" className="screen normal_screen" style={{ height: '100%' }}>
        <div id="container1" style={{ width: '100%', marginLeft: '0' }}>
            <header className="flex header">
                <img className="logo" src={logo} alt="logo" />
                <nav>
                    <ul>
                        <li>
                            English (UK)
                            <img className="arrow" src={arrow} alt="" />
                        </li>
                        <li>
                            Beginner
                            <img className="arrow" src={arrow} alt="" />
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Log out
                        </li>
                    </ul>
                </nav>
                <div className="normal_flex">
                    <img src={coin} alt="coin" style={{height:'35px',marginRight:'10px'}}/>
                    57
                </div>
            </header>
            <div id="content">
                
            </div>
        </div>
    </div>
}

export default Dashboard