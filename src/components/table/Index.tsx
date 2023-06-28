import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  biguacu: string,
  itajai:string,
  tangua:string
) {
  return { name, biguacu, itajai, tangua};
}

const rows = [
  createData('Índice de acidez em NaOH/g (máx.)', '10%', '10%', '10%'),
  createData('Cálcio (máx.)', '6,0%', '6,0%', '6,0%'),
  createData('Extrato Etéreo (mín.)', '6,0%', '6,0%', '6,0%'),
  createData('Fósforo (mín.)', '3,0%', '3,0%', '3,0%'),
  createData('Índice de Peróxido (máx.)', '10,0 meq', '10,0 meq', '100 meq'),
  createData('Matéria Mineral (máx.)', '30,0%', '30,0%', '22%'),
  createData('Proteína Bruta (mín.)', '52,0%', '52,0%', '65%'),
  createData('Umidade (máx.)', '10,0%', '10,0%', '8,0%'),
  createData('Cloretos Exp. Em NaCl (máx.)', '5,0%', '5,0%', '5,0%'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> <strong>Parâmetros</strong> </TableCell>
            <TableCell align="right"> <strong>Biguaçu </strong> </TableCell>
            <TableCell align="right"> <strong> Itajaí</strong> </TableCell>
            <TableCell align="right"> <strong> Tanguá</strong> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.biguacu}</TableCell>
              <TableCell align="right">{row.itajai}</TableCell>
              <TableCell align="right">{row.tangua}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}