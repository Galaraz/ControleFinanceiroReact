import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Link as RouterLink } from 'react-router-dom';

// Generate Order Data
function createData(id, name,address , cnpj, razaoSocial) {
  return { id, name, address, cnpj, razaoSocial };
}

const rows = [
  createData(0, 'Elvis Presley', 'hoolyhood 370', 312.44, 'musico'),
  createData(1, 'Paul McCartney', 'loge pra guariy', 866.99, 'beeatles'),
  createData(2, 'Tom Scholz', 'lugar', 100.81, 'medicoanomnimos'),
  createData(3, 'Michael Jackson', 'endereço ae', 654.39, 'nerverland' ),
  createData(4, 'Bruce Springsteen', 'um endereço maneiro', 212.79, 'cantor'),
];

/* function preventDefault(event) {
  event.preventDefault();
} */

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Client() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Ultimas Empresas</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Endereço</TableCell>
            
            <TableCell>CNPJ</TableCell>
            <TableCell align="right">Razao Social</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>             
              <TableCell>{row.cnpj}</TableCell>
              <TableCell align="right">{row.razaoSocial}</TableCell>
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