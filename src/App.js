import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header'
import Movies from './components/Movies';
import Series from './components/Series';
import Animes from './components/Animes';
import { Container } from '@mui/material';

function App() {

  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/animes" component={Animes} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
