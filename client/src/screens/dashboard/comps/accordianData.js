import React from "react";

const categories = [
    {
        name: "Computer Science", content: [
            "Programming Fundamentals",
            "Data Structures and Algorithms",
            "Database Systems",
            "Computer Networks",
            "Operating Systems",
            "Software Engineering",
            "Artificial Intelligence",
            "Machine Learning",
            "Web Development",
            "Cybersecurity"
        ]
    },
    {
        name: "Agriculture", content: [
            "Soil Science",
            "Crop Production",
            "Plant Physiology",
            "Animal Husbandry",
            "Agricultural Economics",
            "Agricultural Engineering",
            "Agronomy",
            "Horticulture",
            "Plant Pathology",
            "Entomology"
        ]
    },
    {
        name: "Electrical Engineering", content: [
            "Circuit Theory",
            "Electromagnetic Fields",
            "Control Systems",
            "Power Systems",
            "Digital Electronics",
            "Analog Electronics",
            "Microprocessors",
            "Power Electronics",
            "Signal Processing",
            "Electrical Machines"
        ]
    },
    {
        name: "Mechanical Engineering", content: [
            "Engineering Mechanics",
            "Thermodynamics",
            "Fluid Mechanics",
            "Machine Design",
            "Manufacturing Processes",
            "Thermal Engineering",
            "Dynamics of Machines",
            "Mechatronics",
            "Automobile Engineering",
            "Industrial Engineering"
        ]
    },
    {
        name: "Civil Engineering", content: [
            "Structural Analysis",
            "Soil Mechanics",
            "Concrete Technology",
            "Geotechnical Engineering",
            "Transportation Engineering",
            "Water Resources Engineering",
            "Environmental Engineering",
            "Surveying",
            "Construction Management",
            "Structural Design"
        ]
    },
    {
        name: "Chemical Engineering", content: [
            "Mass Transfer Operations",
            "Heat Transfer Operations",
            "Chemical Reaction Engineering",
            "Process Control",
            "Fluid Mechanics",
            "Thermodynamics",
            "Transport Phenomena",
            "Process Design and Simulation",
            "Materials Science and Engineering",
            "Biochemical Engineering"
        ]
    },
    {
        name: "Biotechnology", content: [
            "Molecular Biology",
            "Genetics",
            "Biochemistry",
            "Cell Biology",
            "Microbial Biotechnology",
            "Plant Biotechnology",
            "Animal Biotechnology",
            "Bioinformatics",
            "Bioprocess Engineering",
            "Immunology"
        ]
    },
    {
        name: "Mathematics", content: [
            "Calculus",
            "Linear Algebra",
            "Differential Equations",
            "Discrete Mathematics",
            "Probability and Statistics",
            "Number Theory",
            "Topology",
            "Real Analysis",
            "Complex Analysis",
            "Numerical Analysis"
        ]
    },
    {
        name: "Physics", content: [
            "Mechanics",
            "Electromagnetism",
            "Optics",
            "Quantum Mechanics",
            "Thermodynamics",
            "Solid State Physics",
            "Nuclear Physics",
            "Atomic Physics",
            "Classical Mechanics",
            "Relativity"
        ]
    },
    {
        name: "Economics", content: [
            "Microeconomics",
            "Macroeconomics",
            "Econometrics",
            "International Economics",
            "Development Economics",
            "Financial Economics",
            "Public Economics",
            "Behavioral Economics",
            "Environmental Economics",
            "Health Economics"
        ]
    }
]

let accordionData = []

// // console.log(categories[0].content)

for (let i = 0; i < categories.length; i++) {
    let content = <></>
    for (let j = 0; j < categories[i].length; j++) {
        content += <nav><ul><li>{categories[i].content}</li></ul></nav>
    }
    accordionData.push(
        {
            title: categories[i].name,
            content: content
        }
    )
}