import { useContext } from 'react';
import { useAudio } from 'react-use';
import { currentSongContext } from '../context/currentSongContext';
import styles from '../styles/Reproductor.module.css';

const Reproductor = () => {
   const {currentSong:{previewURL,name}, setCurrentSong}= useContext(currentSongContext);

   const [audio, state, controls] = useAudio({
      src: previewURL,
      autoPlay: true,
   });

   if(!name.length){
      return null;
   }
   
   return (
      <div className={styles.reproductor}>
         <button onClick={() => setCurrentSong({previewURL:"", name:""})}>Remove current song</button>
         {audio}
         <h2>{name}</h2>
         <h3>time:{state.time}</h3>
         <div>
            <input
               type="range"
               value={state.volume}
               onChange={(e) => controls.volume(Number(e.target.value))}
               min="0.0"
               max="1.0"
               step="0.05"
            />
            <button onClick={state.paused ? controls.play : controls.pause}>
               {state.paused ? "Play" : "Pause"}
            </button>
         </div>
      </div>
   );
};
export default Reproductor
