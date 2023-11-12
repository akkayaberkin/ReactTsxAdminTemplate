import CustomTable from 'src/layouts/components/CustomTable';

function OrderShippingDetail() {
  const deliveryDetails = [
    {
      orderNumber: '12345',
      customerName: 'Ahmet Yılmaz',
      deliveryAddress: '1234 Sokak, No:5, Beşiktaş, İstanbul',
      estimatedDeliveryDate: '2023-11-20',
      courierCompany: 'XYZ Kargo',
      trackingNumber: 'TR123456789'
    },
  ];

  return (
    <CustomTable data={deliveryDetails}/>
  );
}

export default OrderShippingDetail;
