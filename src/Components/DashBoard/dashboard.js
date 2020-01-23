import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import ListItem from './listItem'
const useStyles = theme => ({
paper:{
  padding:theme.spacing(2),
  textAlign:'center',
  color:theme.palette.text.secondary
  },
dashboard:{
  marginTop:'50px'
},
itemWrapper:{
  backgroundColor:'#000'
} 
});

 class Dashboard extends React.Component {
  state = {
    data: []
  }
componentDidMount(){
  axios.get(`https://rickandmortyapi.com/api/character/1,2,3,4`)
  .then(res => {
    const data = res.data;
    console.log(data);
    this.setState({ data });
  })
}

  render() {
    const { classes } = this.props;
  return (
    <React.Fragment>
    <main>
      <Container className={classes.dashboard}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={3} md={3}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={12} sm={9} md={9}>
            <Grid container spacing={4} className={classes.itemWrapper}> 
              <ListItem data={this.state.data} classGrid={classes}/>
            </Grid>                                                  
            </Grid>             
        </Grid>   
      </Container>
    </main>
    </React.Fragment>
  );
}
}
export default withStyles(useStyles)(Dashboard);