import React from 'react'
import Slider from './Slider';
import Deals from './Deals';
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Slider />
                <Deals />
            </div>
        )
    }
}