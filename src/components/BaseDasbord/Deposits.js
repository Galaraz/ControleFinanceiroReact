import React, { useEffect, useState} from 'react';
import Axios from 'axios';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import currencyPrettyPrint from "../Functions/currencyPrettyPrint";
//import currencyPrettyDate from '../Functions/currencyPrettyDate'

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
  const [result, setResult] = useState([]);
  useEffect(() => {
    try {
       Axios.get('https://api-controlefinanceiro-heroku.herokuapp.com/conta').then(response =>{
        const result = response.data.map((res) => {
          const dataSet = {
            hireDate: res.hireDate,
            value: res.value
          };
          return dataSet;
        });
       
        setResult(result[result.length-1]);
        console.log(result, "valor setadoaqui");
       })
  
  } catch (error) {
    console.log("aqui dois", result)
      console.error(error.message)
  }
  },[result]);

 
  return (
    <React.Fragment>
      <Title>Depósitos Recentes</Title>
      <Typography component="p" variant="h4">
      {currencyPrettyPrint(result.value)}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
       {(result.hireDate)}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver Saldo
        </Link>
      </div>
    </React.Fragment>
  );
}
