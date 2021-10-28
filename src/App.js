import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound'
import Admin from './Pages/Admin/Admin';
import Events from './Pages/Events/Events';
import Donations from './Pages/Donations/Donations';
import Blogs from './Pages/Blogs/Blogs';
import Registration from './Pages/Registration/Registration';
import AdminLogIn from './Pages/LogIn/AdminLogin';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
            <Footer />
          </Route>
          <Route exact path="/home">
            <Home />
            <Footer />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/adminLogin">
            <AdminLogIn />
          </Route>
          <Route exact path="/events">
            <Header />
            <Events />
            <Footer />
          </Route>
          <Route exact path="/blog">
            <Header />
            <Blogs />
            <Footer />
          </Route>
          <Route exact path="/donations">
            <Header />
            <Donations />
            <Footer />
          </Route>
          <Route exact path="/donations">
            <Header />
            <Donations />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <PrivateRoute exact path="/registration/:id">
            <Registration />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
