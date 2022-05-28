import { Card, CardContent, Button, Typography, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import Forms from './forms/Forms';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: '70%',
    borderRadius: 12,
    padding: '45px 40px 25px'
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

export default function Signup() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Forms />
      </CardContent>
    </Card>
  )
}
