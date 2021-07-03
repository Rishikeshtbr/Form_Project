import './App.css';
import PersonalDetails from './component/PersonalDetails';
import Address from './component/Address';
import BankDetails from './component/BankDetails';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Greet from './component/Greet';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/step1"/>
          )}/>
        <Route path="/step1" component={PersonalDetails}/>
        <Route path="/step2" component={Address}/>
        <Route path="/step3" component={BankDetails}/>
        <Route path="/finish" component={Greet}/>
      </Switch>
     </Router>
  );
}

export default App;
