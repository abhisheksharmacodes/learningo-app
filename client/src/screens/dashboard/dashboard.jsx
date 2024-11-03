import { React, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

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
            <div id="header">
                Header
            </div>
            <div id="news">
                Content
            </div>
        </div>
    </div>
}

export default Dashboard