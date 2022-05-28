import styles from '../../styles/Forms.module.css';
import Input from "../Input";

const inputs = [
  {name: 'Email', type: 'email'},
  {name: 'Phone', type: 'number'},
  {name: 'Password', type: 'password'},
  {name: 'Confirm Password', type: 'password'}
]

export default function Account() {
  return (
    <div className={styles.form_container}>
      {inputs.map(input => (
        <Input key={input.name} input={input.name} type={input.type} required={true} />
      ))}
    </div>
  )
}
