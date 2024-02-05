import React from 'react';

//
const RemoveDuplicatesComponent = ({ inputArray }) => {
    const removeDuplicates = (array) => {
        const seen = new Set();
        return array.filter((item) => {
            if (!seen.has(item)) {
                seen.add(item);
                return true;
            }
            return false;
        });
    };

    const resultArray = removeDuplicates(inputArray);

    return (
        <div>
            <h2>Original Array:</h2>
            <ul>
                {inputArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>Array Ohne Duplikate:</h2>
            <ul>
                {resultArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

const inputArray = [1, 2, 3, 1, 4, 2, 5, 6, 3, 7];

const App = () => {
    return <RemoveDuplicatesComponent inputArray={inputArray} />;
};


export default App;
