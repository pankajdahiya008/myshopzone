import React from 'react'

export default class Deals extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row"><h4>Deals of the Day</h4></div>

                <div className="row">

                    <div class="card col m-2">
                        <img class="card-img-top img-thumbnail" src="d1.jpg" alt="Unavailable"></img>
                        <div class="card-body">
                            <h6>Shirt</h6>
                            <p class="text-success">Upto 50% off</p>
                            <p class="card-text text-secondary">Raymond, COBB & more</p>
                            <a href="/Shirt" class="stretched-link"></a>

                        </div>
                    </div>
                    <div class="card col m-2">
                        <img class="card-img-top img-thumbnail" src="d2.jpg" alt="Unavailable"></img>
                        <div class="card-body">
                            <h6>Earphone</h6>
                            <p class="text-success">Upto 80% off</p>
                            <p class="card-text text-secondary">JBL, Sony & more</p>
                            <a href="/Shirt" class="stretched-link"></a>

                        </div>
                    </div>
                    <div class="card col m-2">
                        <img class="card-img-top img-thumbnail" src="d3.jpg" alt="Unavailable"></img>
                        <div class="card-body">
                            <h6>Watch</h6>
                            <p class="text-success">Upto 20% off</p>
                            <p class="card-text text-secondary">Titan, Sonata & more</p>
                            <a href="/Shirt" class="stretched-link"></a>

                        </div>
                    </div>
                    <div class="card col m-2">
                        <img class="card-img-top img-thumbnail" src="d4.jpg" alt="Unavailable"></img>
                        <div class="card-body">
                            <h6>Fan</h6>
                            <p class="text-success">Upto 10% off</p>
                            <p class="card-text text-secondary">JBL, Sony & more</p>
                            <a href="/Shirt" class="stretched-link"></a>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



