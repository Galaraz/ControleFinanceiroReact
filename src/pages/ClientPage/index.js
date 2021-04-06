import React from 'react';
import clsx from 'clsx';
import { ComboBox } from '../../components';
import { ClientForm } from '../../components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Client from '../../components/BaseDasbord/Client';

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
  }));

 
export default function ClientPage() {
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
          <ClientForm />
        </Paper>
        </Grid>
      
        <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Client />
              </Paper>
            </Grid>
          </Grid>  
       </Container>     
    </ComboBox>
    </>
  );
}
