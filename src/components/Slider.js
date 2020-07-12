import React from 'react'

export default class Slider extends React.Component {
    render() {
        return (
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img1.jpg" class="d-block w-100" alt="Unavailable"></img>
                    </div>
                    <div class="carousel-item">
                        <img src="img2.jpg" class="d-block w-100" alt="Unavailable"></img>
                    </div>
                    <div class="carousel-item">
                        <img src="img3.jpg" class="d-block w-100" alt="Unavailable"></img>
                    </div>
                    <div class="carousel-item">
                        <img src="img4.jpg" class="d-block w-100" alt="Unavailable"></img>
                    </div>
                    <div class="carousel-item">
                        <img src="img5.jpg" class="d-block w-100" alt="Unavailable"></img>
                    </div>

                </div>
                <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        )
    }
}