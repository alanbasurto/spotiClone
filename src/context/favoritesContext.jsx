import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();
const initialState = JSON.parse(localStorage.getItem("favorites" || '[]'))
export const FavoritesProvider = ({ children }) => {

   const [favoriteSongs, setFavoriteSongs] = useState(initialState);
   
   useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favoriteSongs))
   }, [favoriteSongs])
   return (
      <FavoriteContext.Provider value={{ favoriteSongs, setFavoriteSongs }}>
         {children}
      </FavoriteContext.Provider>
   )
}

export const useFavorites = () => useContext(FavoriteContext);