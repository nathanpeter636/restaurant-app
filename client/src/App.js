
import Home from './Pages/Home'

import RestaurantDetail from './Pages/RestaurantDetail'

import UpdatePage from './Pages/UpdatePage'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (

    <Router>
    <Route exact path="/" component={Home}/>
    <Route exact path="/restaurants/:id" component={RestaurantDetail}/>
    <Route exact path="/restaurants/:id/update" component={UpdatePage}/>
    </Router>
  );
}

export default App;
