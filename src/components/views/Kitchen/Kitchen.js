import React from 'react';
//import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Kitchen.module.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const orderData = [
  {
    id: '1',
    table: 2,
    status: 'ready',
    order: 234,
  },
  {
    id: '2',
    table: 1,
    status: 'not ready',
    order: null,
  },
  {
    id: '3',
    table: 3551,
    status: 'ready',
    order: 123,
  },
];

const renderActions = status => {
  switch (status) {
    case 'ready':
      return (
        <FormControlLabel control={<Checkbox checked={true} name="checkedB" />} label="ready" />
      );
    case 'not ready':
      return (
        <FormControlLabel control={<Checkbox checked={false} name="checkedA" />} label="not ready" />
      );
    default:
      return null;
  }
};

const Kitchen = () => {
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nr</TableCell>
            <TableCell>Table/ Order number</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order details </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderData.map(row=> (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
              <TableCell>
                {row.order}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};


export default Kitchen;
