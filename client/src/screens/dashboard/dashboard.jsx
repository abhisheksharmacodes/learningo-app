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

    const Accordion = ({ title, content }) => {
        const [isActive, setIsActive] = useState(false);
        return (
            <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <span>{title}</span>
                    <img className="arrow" src={arrow} style={{ transform: `rotate(${isActive ? '180deg' : '0deg'})` }} alt="arrow" />
                </div>
                {isActive && <div className="accordion-content">{content}</div>}
            </div>
        );
    };

    const accordionData = [
        {
            title: "Computer Science",
            content: <nav><ul><li>Programming Fundamentals</li><li>Data Structures and Algorithms</li><li>Database Systems</li><li>Computer Networks</li><li>Operating Systems</li><li>Software Engineering</li><li>Artificial Intelligence</li><li>Machine Learning</li><li>Web Development</li><li>Cybersecurity</li></ul></nav>
        },
        {
            title: "Agriculture",
            content: <nav><ul><li>Soil Science</li><li>Crop Production</li><li>Plant Physiology</li><li>Animal Husbandry</li><li>Agricultural Economics</li><li>Agricultural Engineering</li><li>Agronomy</li><li>Horticulture</li><li>Plant Pathology</li><li>Entomology</li></ul></nav>
        },
        {
            title: "Electrical Engineering",
            content: <nav><ul><li>Circuit Theory</li><li>Electromagnetic Fields</li><li>Control Systems</li><li>Power Systems</li><li>Digital Electronics</li><li>Analog Electronics</li><li>Microprocessors</li><li>Power Electronics</li><li>Signal Processing</li><li>Electrical Machines</li></ul></nav>
        },
        {
            title: "Mechanical Engineering",
            content: <nav><ul><li>Engineering Mechanics</li><li>Thermodynamics</li><li>Fluid Mechanics</li><li>Machine Design</li><li>Manufacturing Processes</li><li>Thermal Engineering</li><li>Dynamics of Machines</li><li>Mechatronics</li><li>Automobile Engineering</li><li>Industrial Engineering</li></ul></nav>
        },
        {
            title: "Civil Engineering",
            content: <nav><ul><li>Structural Analysis</li><li>Soil Mechanics</li><li>Concrete Technology</li><li>Geotechnical Engineering</li><li>Transportation Engineering</li><li>Water Resources Engineering</li><li>Environmental Engineering</li><li>Surveying</li><li>Construction
                Management</li><li>Structural Design</li></ul></nav>
        },
        {
            title: "Chemical Engineering",
            content: <nav><ul><li>Mass Transfer Operations</li><li>Heat Transfer Operations</li><li>Chemical Reaction Engineering</li><li>Process Control</li><li>Fluid Mechanics</li><li>Thermodynamics</li><li>Transport Phenomena</li><li>Process Design and Simulation</li><li>Materials Science and Engineering</li><li>Biochemical Engineering</li></ul></nav>
        },
        {
            title: "Biotechnology",
            content: <nav><ul><li>Molecular Biology</li><li>Genetics</li><li>Biochemistry</li><li>Cell Biology</li><li>Microbial Biotechnology</li><li>Plant Biotechnology</li><li>Animal Biotechnology</li><li>Bioinformatics</li><li>Bioprocess Engineering</li><li>Immunology</li></ul></nav>
        },
        {
            title: "Mathematics",
            content: <nav><ul><li>Calculus</li><li>Linear Algebra</li><li>Differential Equations</li><li>Discrete Mathematics</li><li>Probability and Statistics</li><li>Number Theory</li><li>Topology</li><li>Real Analysis</li><li>Complex Analysis</li><li>Numerical Analysis</li></ul></nav>
        },
        {
            title: "Physics",
            content: <nav><ul><li>Mechanics</li><li>Electromagnetism</li><li>Optics</li><li>Quantum Mechanics</li><li>Thermodynamics</li><li>Solid State Physics</li><li>Nuclear Physics</li><li>Atomic Physics</li><li>Classical Mechanics</li><li>Relativity</li></ul></nav>
        },
        {
            title: "Economics",
            content: <nav><ul><li>Microeconomics</li><li>Macroeconomics</li><li>Econometrics</li><li>International Economics</li><li>Development Economics</li><li>Financial Economics</li><li>Public Economics</li><li>Behavioral Economics</li><li>Environmental Economics</li><li>Health Economics</li></ul></nav>
        }
    ];

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
                    <div className="search_text" style={{ display: 'flex', width: '100%' }}>
                        <input type="text" maxLength={70} placeholder="Enter a topic and practice" />
                        <img src={search} alt="search" class="search" />
                    </div>
                    <div className="normal_flex" id="categories">
                        {accordionData.map(({ title, content }) => (
                            <Accordion title={title} content={content} />
                        ))}
                    </div>
                </section>
                <section id="practice" className="flex">
                    <span className="title">Practice</span>
                    <h1>Which of the following is the smallest unit of matter?</h1>
                    <div id="options" className="flex">
                        <div className="option normal">Atom</div>
                        <div className="option wrong_option">Proton</div>
                        <div className="option right_option">Quark</div>
                        <div className="option normal">Electron</div>
                    </div>
                    <div id="navigate">
                        <div>
                            <img className="arrow" src={arrow} style={{ transform: 'rotate(90deg)' }} alt="arrow" />
                             Previous
                        </div>
                        <div>
                            Next
                            <img className="arrow" src={arrow} style={{ transform: 'rotate(-90deg)' }} alt="arrow" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
}

export default Dashboard