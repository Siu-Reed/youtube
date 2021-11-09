import { useCallback, useState } from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet }, closeVid, doubleView }) => {
    const [metaVis, setMetaVis] = useState(true);
    const viewType = doubleView ? styles.doubleViewTrue : styles.doubleViewFalse;

    const nullVideo = useCallback((e) => {
        e.preventDefault();
        closeVid(null);
    }, [closeVid]);

    const metaHandle = useCallback((e) => {
        e.preventDefault();
        setMetaVis((preSt) => !preSt);
    }, []);

    return (
    <section className={`${styles.detail} ${viewType}`}>
        <div className={styles.vidFrame}>
            <div className={styles.btnCont}>
                <button className={styles.vidClose} onClick={metaHandle}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 80.2 79.5" xmlSpace="preserve">
                        <path d="M40.2,79.6c-21.9,0-39.7-17.8-39.7-39.7c0-8.1,2.5-15.9,7-22.5c0.9-1.4,2.8-1.8,4.2-0.9c1.4,0.9,1.8,2.8,0.9,4.2  c0,0.1-0.1,0.1-0.1,0.2C2,36,5.8,57,21.1,67.5s36.2,6.7,46.8-8.6s6.7-36.2-8.6-46.8c-11.5-7.9-26.7-7.9-38.2,0  c-1.4,0.9-3.3,0.5-4.2-0.9c-0.9-1.4-0.5-3.2,0.8-4.1C35.7-5.3,60.5-0.8,72.9,17.3s7.9,42.8-10.1,55.3C56.1,77.1,48.3,79.6,40.2,79.6  z"/>
                        <rect x="24.2" y="23.8" width="32" height="32"/>
                    </svg>
                </button>
                <button className={styles.vidClose} onClick={nullVideo}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 80.2 79.5" xmlSpace="preserve">
                        <path d="M40.2,79.6c-21.9,0-39.7-17.8-39.7-39.7c0-8.1,2.5-15.9,7-22.5c0.9-1.4,2.8-1.8,4.2-0.9c1.4,0.9,1.8,2.8,0.9,4.2  c0,0.1-0.1,0.1-0.1,0.2C2,36,5.8,57,21.1,67.5s36.2,6.7,46.8-8.6s6.7-36.2-8.6-46.8c-11.5-7.9-26.7-7.9-38.2,0  c-1.4,0.9-3.3,0.5-4.2-0.9c-0.9-1.4-0.5-3.2,0.8-4.1C35.7-5.3,60.5-0.8,72.9,17.3s7.9,42.8-10.1,55.3C56.1,77.1,48.3,79.6,40.2,79.6  z"/>
                        <path d="M49.4,52.1c-0.8,0-1.6-0.3-2.2-0.9L28.9,32.8c-1.2-1.2-1.1-3.2,0.2-4.3c1.2-1.1,3-1.1,4.2,0l18.3,18.3  c1.2,1.2,1.2,3.1,0,4.3C51,51.7,50.2,52.1,49.4,52.1z"/>
                        <path d="M31,52.1c-0.8,0-1.6-0.3-2.2-0.9c-1.2-1.2-1.2-3.1,0-4.3l18.3-18.3c1.2-1.2,3.2-1.1,4.3,0.2c1.1,1.2,1.1,3,0,4.2L33.2,51.2  C32.6,51.7,31.9,52.1,31,52.1z"/>
                    </svg>
                </button>
            </div>
            <iframe
                className={styles.video}
                type="text/html"
                title="youtuve video player"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
        {metaVis && (<div className={styles.vidMeta}>
            <h2>{snippet.title}</h2>
            <h3><div className={styles.circle}></div>{snippet.channelTitle}</h3>
            <pre className={styles.description}>{snippet.description}</pre>
        </div>)}
    </section>
)};

export default VideoDetail;
