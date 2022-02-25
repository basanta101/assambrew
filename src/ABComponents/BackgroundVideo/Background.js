import styles from './BackgroundVideo.module.css';
import { VIDEOS } from '../../ABAssets'; 

export default function Background() {
  return (
    <video autoPlay loop muted id="background_video" className={styles.video}>
      <source src={VIDEOS.backgroundVideo} type="video/mp4" />
    </video>
  );
}
