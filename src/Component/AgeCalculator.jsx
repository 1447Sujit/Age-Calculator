import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
      age--;
    }
    setAge(age);
  };

  function reset() {
    setBirthdate("");
    setAge(0);
  }

  return (
    <div className="ageContainer">
      <div className="headerBox">
        <h2>Age Calculator</h2>
        <p>
        The Age Calculator computes the time span or age between two dates and displays the result in years.
        </p>
      </div>

      <div className="contentBox">

        <div className="right">
          <h4>Date of Birth</h4>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <div className="buttonBox">
            <button onClick={calculateAge}>Calculate</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>

        <div className="left">
          <h3>Your age is</h3>
        <h1>{age > 0 ? `${age}` : ""}</h1>
        </div>
        
      </div>

    </div>
  );
};

export default AgeCalculator;
