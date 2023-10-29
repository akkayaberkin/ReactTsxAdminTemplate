import { useState } from 'react';
import { MenuItem, Menu } from '@mui/material';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from '@material-ui/core';

interface Product {
  name: string;
  productCode: string;
  description: string;
  stock: number;
  price: number;
  color: string;
  size: string;
  customerGuid: string;
  categoryGuids: string;
  productPhotoList: ProductPhoto[];
}

interface ProductPhoto {
  name: string;
  description: string;
  photoUrl: string;
}

const ProductList = () => {
  const [anchorEl, setAnchorEl] = useState<any>();

const handleMenuOpen = (event: any) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl("");
};

  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}/api/Category/`;
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 },
  ];
  
  return (
  
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {products.map((product) => (
      <TableRow key={product.id}>
        <TableCell>{product.id}</TableCell>
        <TableCell>{product.name}</TableCell>
        <TableCell>{product.price}</TableCell>
        <TableCell>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>
              <Link href={`/edit/${product.id}`}>Edit</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href={`/delete/${product.id}`}>Delete</Link>
            </MenuItem>
          </Menu>
          <MoreVertIcon onClick={handleMenuOpen} />
        </TableCell>
      </TableRow>
    ))}
        </TableBody>
      </Table>
    );
};
export default ProductList;