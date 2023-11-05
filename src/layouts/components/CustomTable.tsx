import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';
import apiClient from '../../api/apiClient';

interface LinkColumnInfo {
  columnName: string; // Link oluşturulacak kolonun adı
  linkColumn: string; // Link için kullanılacak değerin alınacağı kolonun adı
  basePath: string; // Linkin başlangıç URL yolu
}

interface CustomTableProps {
  data: any[];
  path?: string;
  excludeColumns?: string[]; // Göstermek istemediğim kolonlar
  linkColumns?: LinkColumnInfo[]; // Link verilecek sütunlar ve link yapısını tanımlayan nesneler
}

const CustomTable: React.FC<CustomTableProps> = ({ data, linkColumns = [], path, excludeColumns = [] }) => {
  const headers = data.length > 0 ? Object.keys(data[0]).filter(header => !excludeColumns.includes(header)) : [];

  const renderCellContent = (header: string, row: any) => {
    const linkColumnInfo = linkColumns.find(lc => lc.columnName === header);
    if (linkColumnInfo) {
      const linkValue = row[linkColumnInfo.linkColumn];
      const linkPath = `${window.location.origin}${linkColumnInfo.basePath}/${linkValue}`;
      return <Link href={linkPath}>{row[header]}</Link>;
    }
    return row[header];
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {headers.map((header) => (
                <TableCell key={header}>{renderCellContent(header, row)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
