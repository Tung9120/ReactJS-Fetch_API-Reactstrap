import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/TopMenu';
import Products from './components/pages/Products';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopMenu />
  
          {/* Bộ switch xem các tuyến đường dẫn (route) và hiển thị cái khớp url hiện tại */}
          {/* NOTE: đặt component render cho path="/" ở dưới cùng */}

          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}



export default App;
