import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import * as AxiosHelper from '../../axiosHelper';
import * as Utilities from '../../utilities';
import CardComponent from "../card/card.component";
import HeaderComponent from "../header/header.component";
import NoodleDetailsComponent from "../noodle-details/noodle-details.component";
import SearchResultsComponent from "../search-results/search-results.component";

export default class HomeComponent extends React.Component<any, any>{
    /**
     *
     */
    constructor(props) {
        super(props);
        this.state = {
            noodles: [],
            images: [],
            sort: ''
        }
    }

    componentDidMount() {
        AxiosHelper.getNoodles().then((data: any) => this.setState({ noodles: data.map((x, idx) => ({ ...x, imgId: Utilities.getImageId(), id: idx, Stars: (parseFloat(x.Stars) || 0) })) }));
        AxiosHelper.getImages().then((data: any) => this.setState({ images: data.map(x => x.Image) }));
    }

    onSortClick = () => {
        let sort = this.state.sort ? this.state.sort == 'ASC' ? 'DESC' : '' : 'ASC';
        let noodles: any[] = this.state.noodles;
        if (sort === 'ASC') {
            noodles.sort((a, b) => (parseFloat(a.Stars) - parseFloat(b.Stars)));
        } else if (sort === 'DESC') {
            noodles.sort((a, b) => (parseFloat(b.Stars) - parseFloat(a.Stars)));
        } else {
            noodles.sort((a, b) => (a.id - b.id));
        }
        this.setState({ sort, noodles });
    }

    render() {
        return <Router>
            <HeaderComponent />
            <div className='container'>
                <Switch>
                    <Route path='/noodles' exact>
                        <div>
                            <button className='btn btn-secondary sortBtn' onClick={this.onSortClick}>Sort By Stars {this.state.sort ? <i className={"bi " + (this.state.sort === 'ASC' && 'bi-arrow-up-short' || 'bi-arrow-down-short')}></i> : '-'}</button>
                        </div>
                        <div className='row'>
                            {this.state.noodles?.map((noodle, nIndex) => <CardComponent key={nIndex} index={nIndex} noodle={noodle} imageUrl={this.state.images[noodle.imgId]}></CardComponent>)}
                        </div>
                    </Route>
                    <Route path='/noodle/:id' exact render={props => <NoodleDetailsComponent {...props} noodles={this.state.noodles} images={this.state.images} />} />
                    <Route path='/searchresults' exact render={props => <SearchResultsComponent {...props} noodles={this.state.noodles} images={this.state.images} />}>
                    </Route>
                    <Route path='**'><Redirect to='/noodles' /></Route>
                </Switch>
            </div>
        </Router>
    }
}