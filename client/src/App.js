import Home from "./pages/home/Home";
import TopBar from "./component/topbar/TopBar";
import Single from"./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { Context } from "./context/Context";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  
}from"react-router-dom";
function App() {
  const {user}= useContext(Context);
  return (
  <Router>
      <TopBar />
      <Switch>
      <Route exact path="/"><Home /></Route>
      </Switch>
      <Switch>
      <Route exact path="/register">{user ?<Home/>:<Register />}</Route>
     </Switch>
      <Switch>
      <Route exact path="/login"> {user ?<Home/>:<Login />}</Route>
     </Switch>
     <Switch>
      <Route exact path="/write">{user?<Write/>:<Register/>}</Route>
     </Switch>
     <Switch>
      <Route exact path="/settings">{user?<Setting />:<Register/>}</Route>
     </Switch>
     <Switch>
      <Route exact path="/post/:postId"><Single /></Route>
     </Switch>
     

   </Router>
  );
}

export default App;
