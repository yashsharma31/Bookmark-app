import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import B_login from './components/Bookmark_login';
import SignInSide from './components/Signinside';
import Signupinside from './components/Signupinside.';
import BookmarkPage from './components/BookmarkPage';
import Bookmark_card_table from './components/Bookmark_card_table';
import Bookmark_card from './components/Bookmark_card';

function App() {
  return (
    
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
