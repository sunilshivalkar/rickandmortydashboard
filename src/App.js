import React, {Component,Fragment} from 'react';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Dashboard from './Components/DashBoard/dashboard';
import './styles.css';
class App extends Component {
  constructor() {
    super();
  }
	render(){
		return (<Fragment>
					<Dashboard/>
				  </Fragment>
			) 
	}
}
export default App;