import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useFormContext } from '../../context/FormContext';
import styles from '../../styles/Forms.module.css';
import inputStyles from '../../styles/Input.module.css';
import { countries, states } from '../../utils/data';
import Input from '../Input';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

export default function Contact() {
  const [formData, updateFormData] = useFormContext();

  const handleChange = (e: SelectChangeEvent<string>) => {
    updateFormData({[e.target.name]: e.target.value})
  }

  return (
    <div className={styles.form_container}>
      <div>
        <Typography component='p' className={inputStyles.input_label}>Country</Typography>
        <FormControl fullWidth size="small">
          <InputLabel id="select-country">Select country</InputLabel>
          <Select labelId="select-country" id="select-country" name='country' value={formData.country}
            label="Select country" className={inputStyles.select} MenuProps={MenuProps}
            onChange={handleChange} required
          >
            {countries?.map((country) => (
              <MenuItem key={country} value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      
      <div>
        <Typography component='p' className={inputStyles.input_label}>State of Origin</Typography>
        <FormControl fullWidth size="small">
          <InputLabel id="select-state">Select state</InputLabel>
          <Select labelId="select-state" id="select-state" name='stateOfOrigin' value={formData.stateOfOrigin}
            label="Select state" className={inputStyles.select} MenuProps={MenuProps}
            onChange={handleChange} required
          >
            {states?.map((state) => (
              <MenuItem key={state} value={state}>{state}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      
      <div>
        <Typography component='p' className={inputStyles.input_label}>State of Residence</Typography>
        <FormControl fullWidth size="small">
          <InputLabel id="select-residence">Select residence</InputLabel>
          <Select labelId="select-residence" id="select-residence" name='stateOfResidence' value={formData.stateOfResidence}
            label="Select residence" className={inputStyles.select} MenuProps={MenuProps}
            onChange={handleChange} required
          >
            {states?.map((state) => (
              <MenuItem key={state} value={state}>{state}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <Input input='Address' type='text' required={true} />
    </div>
  )
}
