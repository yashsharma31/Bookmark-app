import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignInSide from './components/Signinside';
import Signupinside from './components/Signupinside.';
import BookmarkPage from './components/BookmarkPage';
import AuthRoute from './routes/AuthRoute';
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
