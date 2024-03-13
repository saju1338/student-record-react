// App.jsx
import React, { useState } from 'react';
import StudentTable from './components/StudentRecord/StudentTable';
import StudentModal from './components/StudentRecord/StudentModal';


const studentData = [
  { id: '1', name: 'student1', age: '12', grade: 'A' },
  { id: '2', name: 'student2', age: '12', grade: 'B' },
  { id: '3', name: 'student3', age: '12', grade: 'C' },
  { id: '4', name: 'student4', age: '12', grade: 'D' }
];

const App = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleRowClick = record => {
    setSelectedRecord(record);
  };

  const closeModal = () => {
    setSelectedRecord(null);
  };

  return (
    <div className="App">
      <h1>Student Records</h1>
      <StudentTable students={studentData} onRowClick={handleRowClick} />
      {selectedRecord && (
        <StudentModal isOpen={true} onClose={closeModal} record={selectedRecord} />
      )}
    </div>
  );
};

export default App;