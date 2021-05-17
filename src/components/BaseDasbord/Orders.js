import React, { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Link as RouterLink } from 'react-router-dom';
import {requestAllCount}  from '../../services/API/serviceAxio';


// Generate Order Data


/* mocar em test
  function createData(id, date, name, Type,pay, amount) {
  return { id, date, name, Type, pay, amount };
}

  const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'receita',true, 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'receita',false, 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'receita',true, 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'despesa', true, -654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'despesa', false, -212.79),
]; */
 


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [result, setResult] = useState([]);
  
async function ActionUpdate() {
  const getResult = await requestAllCount();
    
    setResult(getResult);
}
   
  useEffect(()=>{
    ActionUpdate();
  },[])

  return (
    <React.Fragment>
      <Title>Ordens Recentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Paga?</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.hireDate}</TableCell>
              <TableCell>{row.receptor}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.paid}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link  color="primary" component={ RouterLink } to="/order" >
          Veja mais 
        </Link>
      </div>
    </React.Fragment>
  );
}