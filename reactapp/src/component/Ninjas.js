import React, { Component } from 'react';
import NinjaItem from '../adapter/NinjaItem';

//Functional Component 
const Ninjas = (props) => {
    console.log(props);
    const { ninjas } = props
    const ninjaList = ninjas.map(ninja => {
        return (
            <NinjaItem ninja={ninja} />
        );
    });
    return ( ninjaList);
}

//Class Component
// class Ninjas extends Component {
//     render() {
//         console.log(this.props);
//         const { ninjas } = this.props
//         const ninjaList = ninjas.map(ninja => {
//             return (
//                 <NinjaItem ninja={ninja} />
//             );
//         });
//         return ( ninjaList);
//     }
// }
 
export default Ninjas;