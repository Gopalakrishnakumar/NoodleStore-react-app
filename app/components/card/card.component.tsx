import React from "react";
import RatingComponent from "../rating/rating.component";
import { Link } from "react-router-dom";
import * as AxiosHelper from '../../axiosHelper';
import './card.component.scss';

export default class CardComponent extends React.Component<any, any>{
    /**
     *
     */
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return <div className='col-xs-6 col-md-3 noodlecard'>
            <h3 className='header'><Link to={'/noodle/' + this.props.index}> {this.props.noodle?.Brand} </Link></h3>
            <div className='img-container'>
                <img src={this.props.imageUrl} alt='loading...' className='noodleimage'></img>
            </div>
            <div>
                <span className='label'>Variety:</span> {this.props.noodle?.Variety}
            </div>
            <div>
                <span className='label'>Made in:</span> {this.props.noodle?.Country}
            </div>
            <div>
                <RatingComponent fillCount={this.props.noodle?.Stars} cKey={this.props.index}></RatingComponent>
                <span className='label'>{this.props.noodle?.Stars}</span>
            </div>
        </div>
    }
}