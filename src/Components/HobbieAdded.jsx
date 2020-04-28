import React, { Component } from 'react';
import '../Css/Hobbies.css';
import PreloadImage from 'react-preload-image'

class HobbieAdded extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="CardItem" onClick={() => this.props.removeFromCart(this.props.item)}>
            <PreloadImage  className="CardImage"  lazy={true} variant="top"  src={this.props.item.image} />
                    <div className="titleCardDiv"><h4 className="titleh">{this.props.item.name}</h4></div>
                    <div className='del'>
                            <span className='delSpan'><i class="fas fa-times"></i></span>
                        </div>
            </div>
        );
    }
}

export default HobbieAdded;