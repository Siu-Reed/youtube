import React, { Component } from 'react';
import './app.css';
import PopularList from './components/popularList';
import SearchHeader from './components/searchHeader';
import Video from './components/video';

class App extends Component {
    state = {
        items : [],
        selectedVid : null
    }

    componentDidMount() {
        this.props.youtube.popular()
        .then(result => this.setState({items : result}))
        .catch(error => console.log('error', error));
    }

    search(keyword) {
        this.props.youtube.search(keyword)
        .then(result => this.setState({items : result}))
        .catch(error => console.log('error', error));
    }

    videoSelection = (id) => {
        this.setState({
            selectedVid: id
        })
    }

    render() {
        return (
            <>
                <SearchHeader search={this.search.bind(this)}/>
                {this.state.selectedVid && <Video id={this.state.selectedVid}/>}
                <PopularList items={this.state.items} selection={this.videoSelection}/>
            </>
        );
    }
}

export default App;