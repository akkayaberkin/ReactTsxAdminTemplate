
import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

interface PaymentDetailsProps {
  activeStep: number; // Aktif adımı belirleyen prop
}

const OrderPaymentDetail: React.FC<PaymentDetailsProps> = ({ activeStep }) => {
  // Ödeme sürecinin adımlarını tanımla
  const steps = ['Ödeme Bilgileri', 'Onay', 'Tamamlandı'];

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default OrderPaymentDetail;
