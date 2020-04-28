import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Form, Button, Dropdown } from 'react-bootstrap';
import '../Css/Hobbies.css';
import PreloadImage from 'react-preload-image'
import ReactLoading from 'react-loading'

class HobbieCard extends Component {
    constructor(props){
        super(props);

    }

    loading = ()=>{
        return(
            <div className="viewLoading">
            <ReactLoading
                type={'spin'}
                color={'#203152'}
                height={'3%'}
                width={'3%'}
            />
        </div>
        )
    }
    render() {
        return (
            <div className="CardItem" onClick={()=>this.props.addToCart(this.props.oneItem)}>
            <PreloadImage  className="CardImage" lazy={true} variant="top" src={this.props.oneItem.image} />
                    <div className="titleCardDiv"><h4 className="titleh">{this.props.oneItem.name}</h4></div>
            </div>
        );
    }
}

export default HobbieCard;