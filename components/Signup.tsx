import { Card, CardContent } from '@mui/material';
import Forms from './Forms';
import styles from '../styles/Signup.module.css';

export default function Signup() {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Forms />
      </CardContent>
    </Card>
  )
}
