import React, { useEffect } from 'react'
import CustomTable from 'src/layouts/components/CustomTable'

function OrderList() {
  
  const [data, setData] = React.useState<any[]>([]);
  const data1 = [
    { id: 1, name: 'Product 1', price: 10.99, orderDate: '10-10-2021', orderStatus: 'Pending' },
    { id: 2, name: 'Product 2', price: 19.99 , orderDate: '12-10-2021', orderStatus: 'Closed'},
    { id: 3, name: 'Product 3', price: 5.99, orderDate: '15-10-2021', orderStatus: 'Approved' },
  ]
  useEffect(() => {
    setData(data1)
  }, []);
  

  return (
      data&&data.length>0&&
      <CustomTable data={data}/>
  )
}

export default OrderList
