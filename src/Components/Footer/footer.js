import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
function Copyright() {
  return (
    <Typography color="inherit" align="center" variant="subtitle2">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
class Footer extends Component{
	render() {
	 return  (
	   <footer>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </Typography>
        <Copyright />
      </footer>
		);
	}
}
export default Footer;