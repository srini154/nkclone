import React, { useState } from "react";
import "./AppliedFilters.css";
function AppliedFilters() {
  const [openModal, setOpenModal] = useState(false);
  const open = () => {
    setOpenModal(true);
  };
  const close = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <p onMouseLeave={close}>Applied</p>
      {openModal && (
        <div className="modal-applied">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </div>
      )}
    </div>
  );
}

export default AppliedFilters;
