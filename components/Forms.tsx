import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Personal from './forms/Personal';
import styles from '../styles/Forms.module.css';
import Account from './forms/Account';
import Contact from './forms/Contact';
import { useFormContext } from '../context/FormContext';

const steps = [
  { name: 'Personal', component: <Personal/> },
  { name: 'Account', component: <Account/> },
  { name: 'Contact', component: <Contact/> }
];

export default function HorizontalLinearStepper() {
  const [formData, updateFormData] = useFormContext();
  const [activeStep, setActiveStep] = useState<number>(0);
  console.log(formData)

  const handleNext = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{marginBottom: 4.5}}>
        {steps.map((label, index) => {
          return (
            <Step key={label.name}>
              <StepLabel>
                {label.name}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
            All steps completed. Here&lsquo;s the data that you provided:
          </Typography>
        </Fragment>
      ) : (
        <Fragment>
          {steps[activeStep].component}
          <div className={styles.next_btn_container}>
            <Button type='submit' variant='contained' onClick={handleNext}>Next</Button>
          </div>
        </Fragment>
      )}

    </Box>
  );
}
