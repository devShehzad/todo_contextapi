import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './Nav'
import BookList from './BookList';
import AddBook from './AddBook';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <Router >
    <div className="container">
      <Nav />
      <div className='content text-center'>
       <Switch>
        <Route exact path ='/'>
          <BookList />
        </Route>
        <Route path ='/AddBook'>
          <AddBook />
        </Route>
       </Switch>
      </div>
    </div>
    </Router>
    </GlobalProvider>
  );
}

export default App;
