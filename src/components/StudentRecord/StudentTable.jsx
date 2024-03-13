// StudentTable.jsx
import React from 'react';
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@carbon/react';
import './StudentTable.css';

const StudentTable = ({ students, onRowClick }) => {
  return (
    <DataTable
      rows={students}
      headers={[
        { key: 'id', header: 'ID' },
        { key: 'name', header: 'Name' },
        { key: 'age', header: 'Age' },
        { key: 'grade', header: 'Grade' }
      ]}

      render={({ rows, headers, getHeaderProps }) => (
        <TableContainer title="Student Records">
          <Table>
            <TableHead>
              <TableRow>
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })} key={header.key}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id} onClick={() => onRowClick(row)}>
                  {row.cells.map(cell => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default StudentTable;
