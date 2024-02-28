import React, { useState } from "react";
import "./Experienced.css";

function Experienced() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="exp-div-1">
      <p>Resume</p>
      <div className="resume-btn">
        <div className="exp-div-2">
          <label htmlFor="upload-resume" className="upload-label">
            Upload Resume
            <input
              type="file"
              id="upload-resume"
              className="upload-input"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div className="exp-div-3">
          {file ? (
            <>
              {file.name}
              <button onClick={handleRemoveFile} className="remove-btn">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                  alt="Remove"
                  className="remove-icon"
                />
              </button>
            </>
          ) : (
            "DOC, DOCx, PDF, RTF | Max: 2 MB"
          )}
        </div>
      </div>
    </div>
  );
}

export default Experienced;
