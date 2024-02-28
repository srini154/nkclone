import React, { useState } from "react";
import "./Fresher.css";

function Fresher() {
  const cityname = [
    "Hyderabad",
    "New Delhi",
    "Bengaluru",
    "Mumbai",
    "Pune",
    "Chennai",
    "Gurugram",
    "Noida",
    "Ahmedabad",
    "Kolkata",
  ];

  const [selectedCity, setSelectedCity] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [error, setError] = useState("");

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setShowInput(false);
  };

  const handleRemoveCity = () => {
    setSelectedCity("");
    setShowInput(true);
    setError(""); // Reset error message when removing city
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSelectedCity(value);
    // Validate input value (Example: minimum length of 3 characters)
    if (value.trim().length < 3) {
      setError("City name must be at least 3 characters long.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      {showInput ? (
        <div>
          <p style={{ fontWeight: "bold" }}>Current City</p>
          <input
            type="text"
            placeholder="Mention the city you live"
            className="input-fresher"
            value={selectedCity}
            onChange={handleInputChange}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p>Suggestions</p>
          <div className="cityname-fresher-div">
            {cityname.map((city, index) => (
              <button
                key={index}
                className="cityname-fresher"
                onClick={() => handleCityClick(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>Selected City</p>
          <button className="selected-city-button" onClick={handleRemoveCity}>
            {selectedCity}
            <span className="remove-city" role="img" aria-label="remove">
              &#x2716;
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Fresher;
