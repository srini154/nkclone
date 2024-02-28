import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./FiltersInternalPage.css";
import { FilterOption } from "../Constants";
import AppliedFilters from "./AppliedFilters/AppliedFilters";

const Dropdown = ({ name, options, selectedFilter, setSelectedFilter }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowUp") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-filter" tabIndex="0">
      <button className="dropbtn" onClick={handleToggle}>
        {name} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((eachOption, index) => (
            <div key={index} style={{ padding: "6px" }}>
              <input
                type="checkbox"
                id={eachOption.key}
                value={eachOption.value}
                style={{ height: "15px", width: "30px" }}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedFilter(eachOption.key);
                  } else {
                    setSelectedFilter(null);
                  }
                }}
                checked={eachOption.key === selectedFilter}
              />
              <label
                style={{
                  marginLeft: "10px",
                  color: "#322b2b",
                  fontWeight: "600",
                }}
              >
                {eachOption.value}
              </label>
            </div>
          ))}
          <hr />
        </div>
      )}
    </div>
  );
};

function FiltersInternalPage({ selectedFilter, setSelectedFilter }) {
  return (
    <div className="filter-div-1">
      <div className="filter-div-2">
        <p style={{ paddingTop: "15px" }}>All Filters</p>

        {/* <AppliedFilters /> */}
      </div>
      <hr />
      <div>
        {FilterOption.map((filter, index) => (
          <Dropdown
            key={index}
            name={filter.name}
            options={filter.options}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        ))}
      </div>
    </div>
  );
}

export default FiltersInternalPage;
