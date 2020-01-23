import React,{Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    card: {
        maxWidth: 345,
        backgroundColor:'#33323285'
      },
      media: {
        height: 140,
      }
});

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     listDataFromChild: null
        // };    
    }
    render (){
        const { classes } = this.props;
        return ( 
            <Fragment>
            {this.props.data.map((listItem, index) => (
                <Grid item xs={12} sm={3} md={3} key={listItem.id}>
                <Card className={classes.card}>
                   <CardActionArea>
                        <CardMedia className={classes.media}
                        image={listItem.image}
                        title={listItem.name}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" color="primary">
                                {listItem.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {listItem.species}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>                
           </Grid>  
        ))}            
            </Fragment>
  
        )
    }
}
export default withStyles(useStyles)(ListItem);

/*
            {this.state.data.map((listItem, index) => (
                <Grid item xs={12} sm={3} md={3} key={listItem.id}>
                <Paper className={classes.paper}>{listItem.name}</Paper>
                </Grid>  
         ))} 
         */