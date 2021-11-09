import styles from './search_header.module.css';
import React, { memo, useRef } from 'react';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 80 80" xmlSpace="preserve">
            <path xmlns="http://www.w3.org/2000/svg" d="M69.7,6.5H40H10.3c-1.9,0-3.5,1.6-3.5,3.5v59.4c0,1.9,1.6,3.5,3.5,3.5H40h29.7c1.9,0,3.5-1.6,3.5-3.5V54.6V39.7V10  C73.2,8.1,71.7,6.5,69.7,6.5z M66.2,51.1H43.5v-7.9h22.7V51.1z M66.2,13.5v22.7H43.5V13.5H66.2z M13.8,13.5h22.7v26.2v14.9v11.4  H13.8V13.5z M43.5,65.9v-7.9h22.7v7.9H43.5z"/>
            </svg>
            <h1 className={styles.title}><span>SIU</span>TUBE</h1>
        </div>
        <div className={styles.searchBar}>
            <input
                ref={inputRef}
                className={styles.input}
                type="search"
                placeholder="Search..."
                onKeyPress={onKeyPress}
            />
            <button className={styles.button} type="submit" onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24.8 24.4" xmlSpace="preserve">
                    <path d="M23.7,21l-6-6c-0.1-0.1-0.2-0.1-0.4-0.1c-0.1,0-0.3,0.1-0.4,0.1l-0.5,0.5l-1-1l0.3-0.3c1.2-1.5,1.9-3.4,1.9-5.4  c0-4.7-3.8-8.5-8.5-8.5S0.7,4.2,0.7,8.9s3.8,8.5,8.5,8.5c1.9,0,3.8-0.6,5.3-1.8l0.3-0.3l1,1l-0.5,0.5c-0.2,0.2-0.2,0.5,0,0.7  c0,0,0,0,0,0l6,6c0.4,0.4,0.8,0.6,1.4,0.6c0.9,0,1.6-0.7,1.6-1.5c0-0.1,0-0.1,0-0.2C24.3,21.8,24,21.4,23.7,21z M1.7,8.9  c0-4.1,3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5c0,1.7-0.6,3.4-1.7,4.7c-0.2,0.2-0.3,0.4-0.5,0.6l0,0l0,0c-0.2,0.2-0.4,0.3-0.6,0.5  c-1.3,1.1-3,1.7-4.7,1.7C5.1,16.4,1.7,13,1.7,8.9z M23.1,22.8C23,22.9,22.9,23,22.7,23c-0.2,0-0.5-0.1-0.7-0.3l-5.6-5.6l0.5-0.5l0,0  l0,0l0.5-0.5l5.6,5.6c0.2,0.2,0.3,0.4,0.3,0.6C23.3,22.5,23.2,22.7,23.1,22.8z"/>
                </svg>
            </button>
        </div>
    </header>
  );
});

export default SearchHeader;
