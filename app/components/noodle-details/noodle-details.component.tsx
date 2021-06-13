import React from "react";
import './noodle-details.component.scss';

export default class NoodleDetailsComponent extends React.Component<any, any>{
    /**
     *
     */
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let id = this.props.match.params['id'];
        if (isNaN(id) || id < 0 || id > (this.props.noodles.length - 1)) {
            this.props.history.push('/noodles');
        } else {
            this.setState({ noodle: this.props.noodles[id] });
        }
    }

    onBackBtnClick = () => {
        this.props.history.goBack();
    }

    render() {
        return <div>
            <button className='btn btn-light backButton' onClick={this.onBackBtnClick}><i className='bi bi-arrow-left' />Back</button>
            <h2>{this.state?.noodle?.Brand}</h2>
            <div className='row productContainer'>
                <div className='col-xs-12 col-md-5 imageContainer'>
                    <img src={this.props.images[this.state?.noodle?.imgId]} alt='loading...' className='productImage'></img>
                </div>
                <div className='col-xs-12 col-md-5 details'>
                    <p><span className='label'>Variety:</span>{this.state?.noodle?.Variety}</p>
                    <p><span className='label'>Style:</span>{this.state?.noodle?.Style}</p>
                    <p><span className='label'>Made In:</span>{this.state?.noodle?.Country}</p>
                    <p><span className='label'>Rating:</span>{this.state?.noodle?.Stars}</p>
                    <p><span className='label'>Position:</span>{isNaN(this.state?.noodle['Top Ten']) ? '-' : this.state?.noodle['Top Ten']}</p>
                </div>
            </div>
        </div>
    }
}