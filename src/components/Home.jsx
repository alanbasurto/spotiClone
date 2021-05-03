import { useFavorites } from '../context/favoritesContext'
import Song from './Song'

const Home = () => {
   const {favoriteSongs} = useFavorites();
   return (
      <main>
         <h1>Favoritos</h1>
         <section
            style={{
               display: 'grid',
               gridTemplateColumns: 'repeat(3, 1fr)',
               gap: '1rem'
            }}
         >
            {favoriteSongs.length > 0 ? (favoriteSongs.map(song => <Song song={song} key={song.id} />)
            ) : (
               <h4>Empty favorite song list</h4>
            )}
            
         </section>
      </main>
   )
}

export default Home
