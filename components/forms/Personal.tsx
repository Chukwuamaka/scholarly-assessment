import styles from '../../styles/Forms.module.css';
import Input from "../Input";

const inputs = ['First Name', 'Middle Name', 'Last Name', 'Referral Code (Optional)'];

export default function Personal() {
  return (
    <div className={styles.form_container}>
      {inputs.map((input, index, arr) => (
        <Input key={input} input={input} type={input} required={index !== arr.length - 1} />
      ))}
    </div>
  )
}
