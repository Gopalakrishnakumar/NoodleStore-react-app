import React from "react";
import { withRouter } from 'react-router-dom';
import './header.component.scss';

class HeaderComponent extends React.Component<any, any>{
    /**
     *
     */
    constructor(props) {
        super(props);
    }

    onSearchTextChange = (e) => {
        this.setState({ searchText: e.target.value });
    }

    onSearch = (e) => {
        if (this.state?.searchText?.length > 2) {
            if (e.keyCode === 13) {
                this.props.history.push('searchresults',
                    {
                        searchText: this.state.searchText
                    });
            }
        }
    }

    render() {
        return <nav>
            <span className='logo'>Noodle Store</span>
            <div className='search'>
                <i className='bi bi-search'></i>
                <input type='text' placeholder='Search by Brand' onChange={this.onSearchTextChange} onKeyDown={this.onSearch}></input>
            </div>
        </nav>
    }
}

export default withRouter(HeaderComponent);