import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import MuiTab, { TabProps } from '@mui/material/Tab'
import { styled } from '@mui/material/styles'
// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import OrderDetailSummary from './components/OrderDetailSummary/OrderDetailSummary';
import OrderShippingDetail from './components/OrderShippingDetail/OrderShippingDetail';
import OrderPaymentDetail from './components/OrderPaymentDetail/OrderPaymentDetail';

const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

export default function OrderDetailsTabs() {  
  const [value, setValue] = useState("order");

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  return (
    <Card>
      <h1 style={{padding:5}}>Sipariş Detay</h1>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='order-details tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='order'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName> Sipariş  </TabName>
              </Box>
            }
          />
          <Tab
            value='shipping'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline />
                <TabName>Teslimat</TabName>
              </Box>
            }
          />
          <Tab
            value='payment'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InformationOutline />
                <TabName>Ödeme</TabName>
              </Box>
            }
          />
        </TabList>
        <TabPanel sx={{ p: 0 }} value='order'>
          <OrderDetailSummary />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='shipping'>
          <OrderShippingDetail />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='payment'>
          <OrderPaymentDetail activeStep={1} />
        </TabPanel>
      </TabContext>
    </Card>
  );
}
