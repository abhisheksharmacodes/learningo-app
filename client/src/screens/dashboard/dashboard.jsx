import { React, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import logo from '../../assets/images/logo1.png'
import arrow from '../../assets/images/arrow.svg'
import coin from '../../assets/images/coin.svg'
import search from '../../assets/images/search.svg'

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


    return <div id="auth_screen" className="screen" style={{ height: '100%' }}>
        <div id="dash_container" className="flex">
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
                    <img src={coin} alt="coin" style={{ height: '35px', marginRight: '10px' }} />
                    0
                </div>
            </header>
            <div className="normal_flex" id="content">
                <section id="topics" className="flex">
                    <span className="title">Topics</span>
                    <div className="search_text" style={{display:'flex',width:'100%'}}>
                        <input type="text" placeholder="Enter a topic and practice"/>
                        <img src={search} alt="search" class="search"/>
                    </div>
                </section>
                <section id="practice" className="flex"></section>
            </div>
        </div>
    </div>
}

export default Dashboard