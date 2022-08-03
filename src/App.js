import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import B_login from './components/Bookmark_login';
import SignInSide from './components/Signinside';
import Signupinside from './components/Signupinside.';
import BookmarkPage from './components/BookmarkPage';
import Bookmark_card_table from './components/Bookmark_card_table';
import Bookmark_card from './components/Bookmark_card';
import AuthRoute from './routes/AuthRoute';
import { ApolloProvider } from '@apollo/client';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bookmarkpage" element={
        <AuthRoute path="/bookmarkpage" type="private" Element={BookmarkPage} />}/>
        <Route path="/signin" element={
        <AuthRoute path="/signin" type="guest" Element={Signupinside} />}/>
        <Route path="/" element={
        <AuthRoute path="/" type="guest" Element={SignInSide} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
