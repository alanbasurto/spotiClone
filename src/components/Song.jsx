import { useContext } from 'react';
import { currentSongContext } from '../context/currentSongContext';
import { useFavorites } from '../context/favoritesContext';
import styles from '../styles/Search.module.css';

const Song = ({ song }) => {
   const {favoriteSongs, setFavoriteSongs} = useFavorites();

   const { setCurrentSong } = useContext(currentSongContext);
   const addToFavoriteSongs = () => {
      const exist = favoriteSongs.includes(song)
      if (!exist) {
         setFavoriteSongs([...favoriteSongs, song])
      }
   }
   const removeFromFavorites = () => {
      setFavoriteSongs(favoriteSongs.filter(fs => fs.id!==song.id));
   }

   return (
      <div className={styles.song} style={{ backgroundColor: song.colorBg }}>
         <h3>
            {song.name}
         </h3>
         <button onClick={() => setCurrentSong(song)}>Play</button>
         <button onClick={addToFavoriteSongs}>Fav</button>
         <button onClick={removeFromFavorites}>Remove</button>
      </div>
   )
}

export default Song
