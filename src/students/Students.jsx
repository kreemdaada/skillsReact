import React, { useState } from 'react';
import "../home/Home";


let studentData = [  
    {  
       name: 'arun',
       gender: 'Male',
       physics: 88,
       maths: 87,
       english: 78
    },
    {  
       name: 'rajesh',
       gender: 'Male',
       physics: 96,
       maths: 100,
       english: 95
    },
    {  
       name: 'moorthy',
       gender: 'Male',
       physics: 89,
       maths: 90,
       english: 70
    },
    {  
       name: 'raja',
       gender: 'Male',
       physics: 30,
       maths: 25,
       english: 40
    },
]


function BestStudent(props) {
    const [bestStudent, setBestStudent] = useState(null);

    const findBestStudent = () => {
        let highestAverage = 0;
        let bestStudentName = null;

        for (let i = 0; i < studentData.length; i++) {
            const student = studentData[i];
            const grades = [student.physics, student.maths, student.english];

            // Calculate the average for the current student
            const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

            // Update the best student if the current student has a higher average
            if (average > highestAverage) {
                highestAverage = average;
                bestStudentName = student.name;
            }
        }

        setBestStudent(bestStudentName);
    }

    // Call the findBestStudent function when the component is rendered
    React.useEffect(() => {
        findBestStudent();
    }, []);

    return (
        <div>
            <h2>Best Student:</h2>
            <p>{bestStudent}</p>
            <h3>{bestStudent}</h3>
        </div>
    );
}

export default BestStudent;
