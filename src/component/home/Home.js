import './Heme.css'
import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div className='homecontainer'>
                <div className="hometext">
                    <h1>Portable Emergency Solar Radio</h1>
                    <h3>2021 NEWEST DESIGN MD-090P: 4000mAh 
                        replaceable li-ion battery can charge more than one smartphone. 
                    </h3>
                    
                    <button>See review</button>
                </div>
                <div className="homeimage">
                    <img src={'light.webp'} alt="" />
                </div>
            </div>
        );
    }
}

export default Home;