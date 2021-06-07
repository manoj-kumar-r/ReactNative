import React, { Component } from 'react';
import NinjaItem from '../adapter/NinjaItem';

class Ninjas extends Component {
    render() {
        console.log(this.props);
        const { ninjas } = this.props
        const ninjaList = ninjas.map(ninja => {
            return (
                <NinjaItem ninja={ninja} />
            );
        });
        return ( ninjaList);
    }
}
 
export default Ninjas;