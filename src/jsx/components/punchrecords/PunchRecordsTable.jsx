import React, { useState } from 'react';
import PunchRecordRow from './PunchRecordRow';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../../css/components/punchrecords/PunchRecordsComponents.css';

const tableData = [
  {
    id: 1,
    date: 'Oct 24, 2023',
    time: '09:12:44 AM',
    employeeName: 'Sarah Jenkins',
    employeeAvatar: 'https://i.pravatar.cc/150?img=5',
    location: 'Main Entrance - Gate 1',
    source: 'Machine',
    status: 'IN'
  },
  {
    id: 2,
    date: 'Oct 24, 2023',
    time: '09:15:22 AM',
    employeeName: 'Sarah Jenkins',
    employeeAvatar: 'https://i.pravatar.cc/150?img=5',
    location: 'East Wing - Staff Portal',
    source: 'Machine',
    status: 'IN'
  },
  {
    id: 3,
    date: 'Oct 24, 2023',
    time: '12:30:10 PM',
    employeeName: 'Sarah Jenkins',
    employeeAvatar: 'https://i.pravatar.cc/150?img=5',
    location: 'Main Entrance - Gate 1',
    source: 'Machine',
    status: 'OUT'
  },
  {
    id: 4,
    date: 'Oct 24, 2023',
    time: '01:44:12 PM',
    employeeName: 'Sarah Jenkins',
    employeeAvatar: 'https://i.pravatar.cc/150?img=5',
    location: 'Warehouse - Loading Dock',
    source: 'Machine',
    status: 'IN'
  },
  {
    id: 5,
    date: 'Oct 24, 2023',
    time: '05:32:19 PM',
    employeeName: 'Sarah Jenkins',
    employeeAvatar: 'https://i.pravatar.cc/150?img=5',
    location: 'East Wing - Staff Portal',
    source: 'Machine',
    status: 'OUT'
  }
];

const PunchRecordsTable = ({ searchTerm = '' }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // For demonstration

  const filteredData = tableData.filter(record => 
    record.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    record.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="punch-records-table-container">
      <table className="punch-records-table">
        <thead>
          <tr>
            <th className="icon-col"></th>
            <th>PUNCH DATE-TIME</th>
            <th>EMPLOYEE</th>
            <th>MACHINE LOCATION</th>
            <th>SOURCE TYPE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? currentItems.map(record => (
            <PunchRecordRow key={record.id} record={record} />
          )) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '24px', color: '#64748b' }}>No records found matching "{searchTerm}"</td>
            </tr>
          )}
        </tbody>
      </table>
      
      <div className="table-footer">
        <div className="showing-entries">
          Showing {filteredData.length > 0 ? startIndex + 1 : 0} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} entries
        </div>
        <div className="pagination">
          <button className="page-btn" onClick={handlePrevPage} disabled={currentPage === 1}>
            <ChevronLeft size={16} />
          </button>
          
          {[...Array(totalPages)].map((_, idx) => (
             <button 
               key={idx} 
               className={`page-btn ${currentPage === idx + 1 ? 'active' : ''}`}
               style={currentPage === idx + 1 ? { backgroundColor: '#ea580c', color: 'white', borderColor: '#ea580c' } : {}}
               onClick={() => setCurrentPage(idx + 1)}
             >
               {idx + 1}
             </button>
          ))}
          
          <button className="page-btn" onClick={handleNextPage} disabled={currentPage === totalPages}>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PunchRecordsTable;
