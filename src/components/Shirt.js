import React from 'react'

export default class Shirt extends React.Component {
    render() {
        return (
            <div class="container" id="product-section">
                <div class="row">
                    <div class="col-md-6">
                        <img src="d1.jpg" alt="Unavailable" class="image-responsive" />
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-12">
                            <h1>Men Trending Shirt</h1>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <span class="sr-only">Four out of Five Stars</span>
                                <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                                <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                                <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                                <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                                <span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                                <span class="label label-success">61</span>
                            </div>
                            <div class="col-md-3">
                                <span class="monospaced">Write a Review</span>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-12 bottom-rule">
                                <h2 class="product-price">$129.00</h2>
                            </div>
                        </div>

                        <div class="row add-to-cart">
                            <div class="col-md-5 product-qty">
                                <span class="btn btn-default btn-lg btn-qty">
                                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                </span>
                                <input class="btn btn-default btn-lg btn-qty" value="1" />
                                <span class="btn btn-default btn-lg btn-qty">
                                    <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
                                </span>
                            </div>
                            <div class="col-md-4">
                                <button class="btn btn-lg btn-brand btn-full-width">
                                    Add to Cart
  </button>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4 text-center">
                                <span class="monospaced">In Stock</span>
                            </div>
                            <div class="col-md-4 col-md-offset-1 text-center">
                                <a class="monospaced" href="#">Add to Shopping List</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}