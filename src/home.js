import React, {Component,Fragment} from 'react';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import AboutUs from './Components/About/aboutUs';
import Services from './Components/Services/services';
import './styles.css';
class Home extends Component {
  constructor() {
    super();
    this.state = {open: false};
  }
	render(){
		return (<Fragment>
			<Header/>
			<AboutUs/>
			<Services/>
			<br/><br/><br/><br/><br/><br/>
			<Footer/>
			</Fragment>
			) 
	}
}
export default Home;