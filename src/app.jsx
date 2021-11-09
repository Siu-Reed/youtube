import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo1, setSelectedVideo1] = useState(null);
    const [selectedVideo2, setSelectedVideo2] = useState(null);
    const [doubleView, setDoubleView] = useState(false);

    const selectVideo = video => {
        !(selectedVideo1) ? setSelectedVideo1(video) : setSelectedVideo2(video);
    };

    useEffect(() => {
        (selectedVideo1 && selectedVideo2) ? setDoubleView(true) : setDoubleView(false);
    }, [selectedVideo1, selectedVideo2]);
    
    const dvStyle = doubleView ? styles.dbViewTrue : styles.dbViewFalse;

    const search = useCallback(
        query => {
        youtube
            .search(query) //
            .then(videos => setVideos(videos));
        },
        [youtube]
    );

    useEffect(() => {
        youtube
        .mostPopular() //
        .then(videos => setVideos(videos));
    }, [youtube]);
    return (
        <div className={styles.app}>
            { (!doubleView) && <SearchHeader onSearch={search} /> }
            <section className={`${styles.content} ${dvStyle}`}>
                {selectedVideo1 && <VideoDetail video={selectedVideo1} closeVid={setSelectedVideo1} doubleView={doubleView}/>}
                {selectedVideo2 && <VideoDetail video={selectedVideo2} closeVid={setSelectedVideo2} doubleView={doubleView}/>}
                {!(selectedVideo1 && selectedVideo2) && <VideoList
                    videos={videos}
                    onVideoClick={selectVideo}
                    display={(selectedVideo1||selectedVideo2) ? 'list' : 'grid'}
                />}
            </section>
        </div>
    );
}

export default App;
