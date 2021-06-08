import React, { Component } from 'react';

class NinjaItem extends Component {
    render() {
        const {
            ninja,
            deleteNinja
        } = this.props;

        return (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={() => deleteNinja(ninja.id)}>Delete</button>
            </div>
        );
    }
}
export default NinjaItem;