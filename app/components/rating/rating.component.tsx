import React from "react";

export default class RatingComponent extends React.Component<any, any>{
    /**
     *
     */
    constructor(props) {
        super(props);
    }

    render() {
        let stars: JSX.Element[] = [];
        let fillCount = isNaN(this.props.fillCount) ? 0 : this.props.fillCount;
        for (let i = 0; i < fillCount; i++) {
            stars.push(<span key={this.props.cKey + '-star-' + i} style={{ color: 'yellow' }}>&#9733;</span>);
        }
        for (let i = 0; i < 5 - fillCount; i++) {
            stars.push(<span key={this.props.cKey + '-star-' + fillCount + i} style={{ color: 'lightgrey' }}>&#9733;</span>);
        }
        return stars;
    }
}