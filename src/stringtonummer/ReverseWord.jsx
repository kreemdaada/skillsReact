import React, { useState } from 'react';

const ReverseWord = () => {
  const [inputString, setInputString] = useState('');
  const [resultString, setResultString] = useState('');

  const reverseWords = () => {
    const words = inputString.trim().split(/\s+/);
    const reversedWords = words.reverse();
    const reversedString = reversedWords.join(' ');
    setResultString(reversedString);
  };

  return (
    <div>
      <label>
        Input String:
        <input
          type="text"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
      </label>
      <button onClick={reverseWords}>Reverse Words</button>
      <p>Result: {resultString}</p>
    </div>
  );
};

export default ReverseWord;
