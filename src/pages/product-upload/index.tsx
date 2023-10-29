import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, FormControl, InputLabel, Select, MenuItem, IconButton, Breadcrumbs, Typography, Link } from '@mui/material';
import { Alert, AlertTitle } from '@mui/lab';

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

const initialProduct: Product = {
  name: '',
  productCode: '',
  description: '',
  stock: -1,
  price: 0,
  color: '',
  size: '',
  customerGuid: '00000000-0000-0000-0000-000000000000',
  categoryGuids: '00000000-0000-0000-0000-000000000000',
  productPhotoList: [
    {
      name: '',
      description: '',
      photoUrl: '',
    },
  ],
};

const ProductUpload = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}/api/Category/`;
  console.log(apiUrl);
  const [product, setProduct] = useState<Product>(initialProduct);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [photoCount, setPhotoCount] = useState<number>(1);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        debugger;
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<{ value: unknown }>, name: string) => {
    const value = event.target.value as string;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      stock: parseInt(value),
    }));
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      price: parseFloat(value),
    }));
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      color: value,
    }));
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      size: value,
    }));
  };

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpenAlert(true);
  };
  const handleAddPhoto = () => {
    setPhotoCount((prevCount) => prevCount + 1);
  };
  
  return (
    <>
   <Breadcrumbs aria-label="breadcrumb">
  <Link color="inherit" href="/">
    Home
  </Link>
  <Link color="inherit" href="/product-upload">
    Products
  </Link>
  <Typography color="textPrimary">Upload</Typography>
</Breadcrumbs>
      <Typography variant="h4" component="h1" gutterBottom>
        Ürün Yükleme
      </Typography>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Name' name='name' value={product.name} onChange={(e) => handleProductChange(e, 'name')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Product Code' name='productCode' value={product.productCode} onChange={(e) => handleProductChange(e, 'productCode')} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label='Description' name='description' value={product.description} onChange={(e) => handleProductChange(e, 'description')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Stock' name='stock' type='number' value={product.stock} onChange={handleStockChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Price' name='price' type='number' value={product.price} onChange={handlePriceChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Color' name='color' value={product.color} onChange={handleColorChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Size' name='size' value={product.size} onChange={handleSizeChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Customer GUID</InputLabel>
            <Select label='Customer GUID' name='customerGuid' value={product.customerGuid} onChange={(e:any) => handleProductChange(e, 'customerGuid')}>
              <MenuItem value='00000000-0000-0000-0000-000000000000'>00000000-0000-0000-0000-000000000000</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Category GUIDs</InputLabel>
            <Select label='Category GUIDs' name='categoryGuids' value={product.categoryGuids} onChange={(e:any) => handleProductChange(e, 'categoryGuids')}>
              <MenuItem value='00000000-0000-0000-0000-000000000000'>00000000-0000-0000-0000-000000000000</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {Array.from({ length: photoCount }).map((_, index) => (
      <React.Fragment key={index}>
        <Grid item xs={12} sm={6} style={{marginTop:"2rem"}}>
          <TextField fullWidth label={`Photo ${index + 1} Name`} name={`photoName${index}`} value={product.productPhotoList[index]?.name} onChange={(e) => handleProductChange(e, `productPhotoList.${index}.name`)} />
        </Grid>
        <Grid item xs={12} sm={6} style={{marginTop:"2rem"}}>
          <TextField fullWidth label={`Photo ${index + 1} Description`} name={`photoDescription${index}`} value={product.productPhotoList[index]?.description} onChange={(e) => handleProductChange(e, `productPhotoList.${index}.description`)} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label={`Photo ${index + 1} URL`} name={`photoUrl${index}`} value={product.productPhotoList[index]?.photoUrl} onChange={(e) => handleProductChange(e, `productPhotoList.${index}.photoUrl`)} />
        </Grid>
        <br/>
      </React.Fragment>
    ))}
    <Grid item xs={12}>
      <Button variant='contained' color='primary' onClick={handleAddPhoto}>
        Add Photo
      </Button>
    </Grid>
        <Grid item xs={12}>
          <Button type='submit' variant='contained' color='primary'>
            Upload
          </Button>
        </Grid>
        {openAlert && (
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Alert
              severity='warning'
              sx={{ '& a': { fontWeight: 400 } }}
              action={
                <IconButton size='small' color='inherit' aria-label='close' onClick={handleAlertClose}>
                </IconButton>
              }
            >
              <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>
              <a href='/' onClick={(e: React.SyntheticEvent) => e.preventDefault()}>
                Resend Confirmation
              </a>
            </Alert>
          </Grid>
        )}
      </Grid>
    </form>
    </>
  );
};
export default ProductUpload;