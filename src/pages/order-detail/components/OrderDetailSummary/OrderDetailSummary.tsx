// React ve MUI importları
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { InfoOutlined } from '@material-ui/icons';

const OrderDetailSummary = () => {
  const [orderDetails, setOrderDetails] = useState([
    { productName: 'Ürün 1', description: 'Açıklama 1', quantity: 2, unitPrice: 100, discount: 10, total: 190 },
  ]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ürün Adı</TableCell>
            <TableCell>Açıklama</TableCell>
            <TableCell>Miktar</TableCell>
            <TableCell>Birim Fiyat</TableCell>
            <TableCell>İndirim</TableCell>
            <TableCell>Toplam Tutar</TableCell>
            <TableCell>Detaylar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderDetails.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.productName}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.unitPrice}</TableCell>
              <TableCell>{row.discount}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>
                <Button onClick={() => {/* Detayları göster */}}>
                  <InfoOutlined></InfoOutlined>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderDetailSummary;
