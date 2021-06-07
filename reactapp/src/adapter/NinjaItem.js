import React, { Component } from 'react';

class NinjaItem extends Component {
    render() {
        const {
            ninja
        } = this.props;
        return (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>
        );
    }
}
export default NinjaItem;