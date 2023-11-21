import React, { useEffect } from 'react'
import CustomTable from 'src/layouts/components/CustomTable'
import {getData} from 'src/api'
import moment from 'moment';
import apiClient from '../../api/apiClient';
function OrderList() {
  
  const [data, setData] = React.useState<any[]>([]);
  useEffect(() => {
    getUserData();
  }, []);
  
  const getUserData = async () => {
    try {
       await getData('/Order/GetOpenOrders').then((res:any) => res.data).then((res:any) => {
        let parseData = res.map((item:any) => {
          return {
            "Sip.No": item.orderNo,
            "customerGuid": item.customerGuid,
            "Durum": item.status,
            id: item.id,
            "Adres": item.deliveryAddress,
            "Ödeme Tipi": item.paymentMethod,
            "Tahmini Teslim Tarihi": item.expectedDeliveryDate,
            "Kargo No": item.trackingNumber,
            "Oluşturulma Tarihi": moment(item.createdDate).format('DD.MM.YYYY'),
          }
        })
        setData(parseData);
        });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  

  return (
      data&&data.length>0&&
      <CustomTable data={data}
      linkColumns={[
        {
          basePath: '/order-detail',
          columnName: 'Sip.No',
          linkColumn: 'customerGuid', 
        }
      ]}
      excludeColumns={["customerGuid"]}
      />
  )
}

export default OrderList
