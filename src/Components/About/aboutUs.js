import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  aboutWrap:{
  	paddingBottom: theme.spacing(8),
  	paddingTop: theme.spacing(4),
  }

});
class AboutUs extends Component{
	render() {
		const { classes } = this.props; 
	 return  (
          <div>
          <div className={classes.toolbar } />
          <Container maxWidth="sm" className={classes.aboutWrap}>
          	<br/>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem IpSum Lorem IpSum Lorem IpSum Lorem IpSum Lorem IpSum Lorem IpSum Lorem IpSum Lorem IpSum Lorem IpSum 
            </Typography>
          </Container>
        </div>
		);
	}
}
export default withStyles(styles)(AboutUs);