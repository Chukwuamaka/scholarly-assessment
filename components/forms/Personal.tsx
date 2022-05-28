import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField"
import { useFormContext } from "../../context/FormContext";
import styles from '../../styles/Personal.module.css';

const inputs = ['First Name', 'Middle Name', 'Last Name', 'Referral Code (Optional)']

const generateInputName = (input: string) => {
  const split = input.split(' ');
  const name = split.map((item, index) => {
    if (index === 0) return item.toLowerCase();
    else if (index === 1) return item;
    return;
  });

  return name.join('');
}

export default function Personal() {
  const [formData, updateFormData] = useFormContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({[e.target.name]: e.target.value})
  }

  return (
    <div className={styles.form_container}>
      {inputs.map((input, index, arr) => (
        <>
          <Typography component='p' className={styles.input_label}>{input}</Typography>
          <TextField
            key={input} className={styles.input} name={generateInputName(input)}
            type='text' placeholder={input} variant="outlined" size='small' required={index !== arr.length - 1}
            onChange={handleChange}  
            />
        </>
      ))}
    </div>
  )
}
