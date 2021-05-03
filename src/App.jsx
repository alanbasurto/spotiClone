import Search from './components/Search'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom"
import Home from './components/Home';
import { CurrentSongProvider } from './context/currentSongContext';
import Reproductor from './components/Reproductor';
import { FavoritesProvider } from './context/favoritesContext';

const App = () => {

   return (
      <FavoritesProvider>
         <CurrentSongProvider>
            <Router>
               <Link to="/">Me</Link>
               <Link to="/search">Search</Link>
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route path="/search" >
                     <Search  />
                  </Route>
               </Switch>
            </Router>
            <Reproductor />
         </CurrentSongProvider>
      </FavoritesProvider>
   );
}

export default App
