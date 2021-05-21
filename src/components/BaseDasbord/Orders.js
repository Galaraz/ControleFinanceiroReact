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
import TablePagination from '@material-ui/core/TablePagination';
import currencyPrettyPrint from "../Functions/currencyPrettyPrint";
import currencyPrettyDate from '../Functions/currencyPrettyDate';
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [result, setResult] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, result.length - page * rowsPerPage);
  


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
          {result
          .slice(page *rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <TableRow key={row._id}>
              <TableCell>{currencyPrettyDate(row.hireDate)}</TableCell>
              <TableCell>{row.receptor}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.paid}</TableCell>
              <TableCell align="right">{currencyPrettyPrint(row.value)}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
         )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={result.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        color="primary"
      />
      <div className={classes.seeMore}>
        <Link  color="primary" component={ RouterLink } to="/order" >
          Veja mais 
        </Link>
      </div>
    </React.Fragment>
  );
}