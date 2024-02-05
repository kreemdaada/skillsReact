import React from 'react';

const NumObjList = ({ numbers }) => {
  if (!numbers) {
    return <div>No numbers provided.</div>;
  }

  const resultObjects = numbers.map((number) => ({
    [String(number)]: String.fromCharCode(number),
  }));

  return (
    <div>
      <h2>Resulting Objects:</h2>
      <ul>
        {resultObjects.map((obj, index) => (
          <li key={index}>{JSON.stringify(obj)}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumObjList;