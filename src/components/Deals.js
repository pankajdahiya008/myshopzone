import React from 'react'

export default class Slider extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row"><h4>Deals of the Day</h4>
                </div>
                <div className="row">
                <div class="card m-2" style={{ width: 12 + 'rem' }}>
                    <img class="card-img-top" src="d1.jpg" alt="Unavailable"></img>
                        <div class="card-body">
                            <h6>Headphones</h6>
                            <p class="text-success">Upto 50% off</p>
                        <p class="card-text text-secondary">JBL, Sony & more</p>
                    </div>
                </div>
                    
                    <div class="card m-2" style={{ width: 12 + 'rem' }}>
                        <img class="card-img-top" src="d2.jpg" alt="Unavailable"></img>
                        <div class="card-body">
                            <h6>Headphones</h6>
                            <p class="text-success">Upto 50% off</p>
                            <p class="card-text text-secondary">JBL, Sony & more</p>
                        </div>
                    </div>
                    <div class="card m-2" style={{ width: 12 + 'rem' }}>
                        <img class="card-img-top" src="d3.jpg" alt="Unavailable"></img>
                        <div class="card-body">
                            <h6>Headphones</h6>
                            <p class="text-success">Upto 50% off</p>
                            <p class="card-text text-secondary">JBL, Sony & more</p>
                        </div>
                    </div>
                    <div class="card m-2" style={{ width: 12 + 'rem' }}>
                        <img class="card-img-top" src="d4.jpg" alt="Unavailable"></img>
                        <div class="card-body">
                            <h6>Headphones</h6>
                            <p class="text-success">Upto 50% off</p>
                            <p class="card-text text-secondary">JBL, Sony & more</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



    