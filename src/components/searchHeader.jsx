import React, { PureComponent } from 'react';
import styles from './searchHeader.module.css';

class SearchHeader extends PureComponent {
    inputRef = React.createRef();
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.inputRef.current.value);
    }

    onKeyPress = (e) => {
        if(e.key === 'Enter') {
            return this.onSubmit
        }
    }

    render() {
        return (
            <header className={styles.header}>
                <h3 className={styles.logo}>YOUTUBE</h3>
                <form className={styles.schform} onSubmit={this.onSubmit}>
                    <input ref={this.inputRef} className={styles.schbar} type="search" onKeyPress={this.onKeyPress} />
                    <input className={styles.schbtn} type="submit" value='검색'/>
                </form>
            </header>
        );
    }
}

export default SearchHeader;