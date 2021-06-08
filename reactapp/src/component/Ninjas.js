// import React, { Component } from 'react';
import NinjaItem from '../adapter/NinjaItem';

//Functional Component 
const Ninjas = (props) => {
    console.log(props);
    const { ninjas, deleteNinja } = props

    //If condition
    // console.log(props);
    // const { ninjas } = props
    // const ninjaList = ninjas.map(ninja => {
    //     if(ninja.age > 20 ){
    //         return (
    //             <NinjaItem ninja={ninja} />
    //         );
    //     }else{
    //         return null;
    //     }
    // });
    
    //Conditional 
    // const ninjaList = ninjas.map(ninja => {
    //     return ninja.age > 20 ? (
    //         <NinjaItem ninja={ninja} />
    //     ) : null;
    // });
    return (ninjas.map(ninja => {
        return (
            <div>
                <NinjaItem ninja={ninja} deleteNinja={deleteNinja} />
                <br />
            </div>
        );
    }));
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