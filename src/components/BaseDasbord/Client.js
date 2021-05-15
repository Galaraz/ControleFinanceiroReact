import React, { useEffect, useState }from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Link as RouterLink } from 'react-router-dom';
import {requestAllClient}  from '../../services/API/serviceAxio';

// Generate Order Data
/* function createData(id, name,address , cnpj, razaoSocial) {
  return { id, name, address, cnpj, razaoSocial };
}

const rows = [
  createData(0, 'Elvis Presley', 'hoolyhood 370', 312.44, 'musico'),
  createData(1, 'Paul McCartney', 'loge pra guariy', 866.99, 'beeatles'),
  createData(2, 'Tom Scholz', 'lugar', 100.81, 'medicoanomnimos'),
  createData(3, 'Michael Jackson', 'endereço ae', 654.39, 'nerverland' ),
  createData(4, 'Bruce Springsteen', 'um endereço maneiro', 212.79, 'cantor'),
]; */


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Client() {
  const classes = useStyles();
  const [result, setResult] = useState([]);
  
  async function xablau() {
    const getResult = await requestAllClient();
    console.log(getResult);
    setResult(getResult)
    
  }

  useEffect(()=>{
    console.log("passou aqui");
    xablau();
        
  },[])
  
console.log(result);

  return (
    <React.Fragment>
      <Title>Ultimos Clientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Endereço</TableCell>
            
            <TableCell>Telefone</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.fullName}</TableCell>
              <TableCell>{row.address}</TableCell>             
              <TableCell>{row.mobile}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
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