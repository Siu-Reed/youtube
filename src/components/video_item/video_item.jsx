import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    const thumbStyle = {
        background : `no-repeat center/cover url(${snippet.thumbnails.medium.url})`
    }
    return (
    <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(video)}
    >
        <div className={styles.thumbCont} style={thumbStyle} />
        <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
    </li>
    );
  }
);

export default VideoItem;
