import React, { PureComponent } from 'react';
import styles from './popularList.module.css';

class PopularList extends PureComponent {
    
    preventD = (e) => {
        e.preventDefault();
        console.log('ㅇㅅㅇ;;')
    }

    vidClickHandle = (id) => {
        this.preventD.bind(this);
        this.props.selection(id);
    }

    render() {
        const {items} = this.props
        const lists = items.map((item) => {
            item.id = typeof(item.id) === 'string' ? item.id : item.id.videoId
            return (
            <li key={item.id}>
                <a className={styles.thumb} href="/" onClick={this.vidClickHandle(item.id)}>
                    <img src={item.snippet.thumbnails.medium.url} alt="썸네일" />
                </a>
                <div className={styles.meta}>
                    <a className={styles.profile} href="/">
                        <img src="#" alt="프사" />
                    </a>
                    <a className={styles.text} href="/">
                        <h3>{item.snippet.title}</h3>
                        <p>{item.snippet.channelTitle}</p>
                        <p className={styles.opt}>
                            <span>조회수</span>
                            <span>·</span>
                            <span>{item.snippet.publishedAt}</span>
                        </p>
                    </a>
                </div>
            </li>
        )}
        );

        return (
            <ul className={styles.list}>
                {lists}
            </ul>
        );
    }
}

export default PopularList;