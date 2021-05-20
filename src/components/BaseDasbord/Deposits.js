import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import currencyPrettyPrint from "../Functions/currencyPrettyPrint";
import currencyPrettyDate from '../Functions/currencyPrettyDate'

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  const outrovalor ="2021-05-22T23:12:00.000Z";
  const balance = 5000;
  return (
    <React.Fragment>
      <Title>Depósitos Recentes</Title>
      <Typography component="p" variant="h4">
      {currencyPrettyPrint(balance)}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
         {currencyPrettyDate(outrovalor)} 
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver Saldo
        </Link>
      </div>
    </React.Fragment>
  );
}
