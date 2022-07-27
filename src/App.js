import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import B_login from './components/Bookmark_login';
import SignInSide from './components/Signinside';
import Signupinside from './components/Signupinside.';
import BookmarkPage from './components/BookmarkPage';
import Bookmark_card_table from './components/Bookmark_card_table';
import Bookmark_card from './components/Bookmark_card';

function App() {
  return (
    <Router>
    
    <div className="center w85">
      <Switch>
        <Route path="/bookmarkpage">
          <BookmarkPage />
        </Route>
        <Route path="/signin">
          <Signupinside />
        </Route>
        <Route path="/">
          <SignInSide />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
