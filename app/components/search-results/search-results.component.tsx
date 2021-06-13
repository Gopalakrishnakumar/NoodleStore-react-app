import React from "react";
import CardComponent from "../card/card.component";

export default class SearchResultsComponent extends React.Component<any, any>{
    /**
     *
     */
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        let { searchText } = this.props.location.state;
        searchText = searchText.toLocaleLowerCase();
        let results = this.props.noodles.filter(x => x.Brand.toLocaleLowerCase().includes(searchText));
        this.setState({ results });
    }

    onBackBtnClick = () => {
        this.props.history.goBack();
    }

    render() {
        return <>
            <button className='btn btn-light backButton' onClick={this.onBackBtnClick}><i className='bi bi-arrow-left' />Back</button>
            <h2>Found {this.state.results?.length} results!</h2>
            <div className='row'>
                {this.state.results?.map((noodle, nIndex) => <CardComponent key={nIndex} index={nIndex} noodle={noodle} imageUrl={this.props.images[noodle.imgId]}></CardComponent>)}
            </div>
        </>
    }
}