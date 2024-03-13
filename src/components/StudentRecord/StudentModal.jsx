// StudentModal.jsx
import React from 'react';
import './StudentModal.css'; 

const StudentModal = ({ isOpen, onClose, record }) => {
  if (!isOpen || !record) { 
    return null;
  }

  // Extract student details from the record object
  const { id, name, age, grade } = record.cells.reduce((acc, cell) => {
    const header = cell.info.header.toLowerCase();
    acc[header] = cell.value; 
    return acc;
  }, {});

  return (
    <div className="overlay">
      <div className="custom-modal">
        <h2 className="custom-modal-title">Student Details</h2>
        <div className="custom-modal-content">
          <p><strong>ID:</strong> {id}</p>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Grade:</strong> {grade}</p>
        </div>
        <div className="custom-modal-footer">
          <button className="custom-modal-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
