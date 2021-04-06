import React from 'react';
import clsx from 'clsx';
import { ComboBox } from '../../components';
import { OrderForm } from '../../components';
import Orders from '../../components/BaseDasbord/Orders';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
 
}));

export default function Orderpage() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper );
  return (
    <>
      <ComboBox>
      <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}> 
        <Grid container spacing={3}>
        <Grid item xs={12}>   
        <Paper className={fixedHeightPaper}>
          <OrderForm />
        </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Orders />
        </Paper>
        </Grid>
       </Grid> 
       </Container>
      </ComboBox>
    </>
  );
}
