import React from "react";
import { CardHeader } from "reactstrap";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import FileUpload from "../../containers/file-upload";
import PdfGen from '../../containers/pdf-gen';
import "../../assets/styles/master.scss";

const Header = () => (
  <CardHeader className="header">
    <h1 className="title">
      <Link to="/">File storage</Link>
    </h1>
  </CardHeader>
);

const Nav = () => (
  <div className="nav">
    <ul>
      <li>
        <NavLink to={'/file/upload'}>upload images</NavLink>
      </li> / 
      <li>
        <NavLink to={'/file/pdf'}>generate pdf</NavLink>
      </li>
    </ul>
  </div>
);

const Main = () => (
  <h2>Hello, this is Main page ;)</h2>
);

const NotFound = () => (
  <h2>Page not found (404) (:</h2>
);

const App = () => (
  <Router>
    <div className="container-fluid ">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/file/upload/" component={FileUpload} />
        <Route path="/file/pdf/" component={PdfGen} />
        <Route component={NotFound} />
        </Switch>
    </div>
  </Router>  
);

export default App;
