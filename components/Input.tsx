import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField"
import { generateInputName } from "../utils/utils";
import { useFormContext } from "../context/FormContext";
import styles from '../styles/Input.module.css';

type InputProps = {
  input: string;
  type: string;
  required?: boolean;
}

export default function Input({ input, type, required }: InputProps) {
  const [formData, updateFormData] = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({[e.target.name]: e.target.value})
  }

  return (
    <>
      <Typography component='p' className={styles.input_label}>{input}</Typography>
      <TextField
        name={generateInputName(input)} type={type} placeholder={input}
        variant="outlined" size='small' required={required}
        className={styles.input} onChange={handleChange}  
      />
    </>
  )
}