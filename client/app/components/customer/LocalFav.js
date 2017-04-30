
const React = require("react");

const LocalFav = React.createClass({

	render: function() {
		return (
			<div className="container localFav-cont">
			    <div className="col-xs-12">
			         <h2>Local Favorites</h2>

			        <div className="well">
			            <div id="myCarousel" className="carousel slide">

			                {/* Carousel Items */}
			                <div className="carousel-inner">
			                    <div className="item active">
			                        <div className="row">
			                            <div className="col-xs-3">
			                            	<div className="localFav-card">
			                            		<div className="localFav-cardTop">
			                            			<img src="links/home.jpg" className="localFav-cardImg"/>
			                            			<h3 className="localFav-cardItem">Food name</h3>
			                            		</div>
			                            		<div className="localFav-cardBottom">
													<div className="row localFav-cardStarRating">
														<div className="col-md-12">
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
														</div>
													</div>
													<div className="row localFav-cardInfo">
														<div className="col-md-4 localFav-cardPrice">
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
														</div>
														<div className="col-md-8 localFav-cardName">
															Restaurant Name
														</div>
													</div>

			                            		</div>
			                            	</div>
			                            </div>
			                            <div className="col-xs-3">
			                            	<div className="localFav-card">
			                            		<div className="localFav-cardTop">
			                            			<img src="links/home.jpg" className="localFav-cardImg"/>
			                            			<h3 className="localFav-cardItem">Food name</h3>
			                            		</div>
			                            		<div className="localFav-cardBottom">
													<div className="row localFav-cardStarRating">
														<div className="col-md-12">
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
														</div>
													</div>
													<div className="row localFav-cardInfo">
														<div className="col-md-4 localFav-cardPrice">
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
														</div>
														<div className="col-md-8 localFav-cardName">
															Restaurant Name
														</div>
													</div>
			                            		</div>
			                            	</div>
			                            </div>
			                            <div className="col-xs-3">
			                            	<div className="localFav-card">
			                            		<div className="localFav-cardTop">
			                            			<img src="links/home.jpg" className="localFav-cardImg"/>
			                            			<h3 className="localFav-cardItem">Food name</h3>
			                            		</div>
			                            		<div className="localFav-cardBottom">
													<div className="row localFav-cardStarRating">
														<div className="col-md-12">
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
														</div>
													</div>
													<div className="row localFav-cardInfo">
														<div className="col-md-4 localFav-cardPrice">
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
														</div>
														<div className="col-md-8 localFav-cardName">
															Restaurant Name
														</div>
													</div>
			                            		</div>
			                            	</div>
			                            </div>
			                            <div className="col-xs-3">
			                            	<div className="localFav-card">
			                            		<div className="localFav-cardTop">
			                            			<img src="links/home.jpg" className="localFav-cardImg"/>
			                            			<h3 className="localFav-cardItem">Food name</h3>
			                            		</div>
			                            		<div className="localFav-cardBottom">
													<div className="row localFav-cardStarRating">
														<div className="col-md-12">
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
														</div>
													</div>
													<div className="row localFav-cardInfo">
														<div className="col-md-4 localFav-cardPrice">
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
														</div>
														<div className="col-md-8 localFav-cardName">
															Restaurant Name
														</div>
													</div>
			                            		</div>
			                            	</div>
			                            </div>
			                        </div>
			                        {/* End Row */}
			                    </div>
			                   {/* Start List of Items */}
			                    <div className="item">
			                        <div className="row">
			                            <div className="col-xs-3">
			                            	<div className="localFav-card">
			                            		<div className="localFav-cardTop">
			                            			<img src="links/home.jpg" className="localFav-cardImg"/>
			                            			<h3 className="localFav-cardItem">Food name</h3>
			                            		</div>
			                            		<div className="localFav-cardBottom">
													<div className="row localFav-cardStarRating">
														<div className="col-md-12">
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
														</div>
													</div>
													<div className="row localFav-cardInfo">
														<div className="col-md-4 localFav-cardPrice">
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
														</div>
														<div className="col-md-8 localFav-cardName">
															Restaurant Name
														</div>
													</div>
			                            		</div>
			                            	</div>
			                            </div>
			                            <div className="col-xs-3">
			                            	<div className="localFav-card">
			                            		<div className="localFav-cardTop">
			                            			<img src="links/home.jpg" className="localFav-cardImg"/>
			                            			<h3 className="localFav-cardItem">Food name</h3>
			                            		</div>
			                            		<div className="localFav-cardBottom">
													<div className="row localFav-cardStarRating">
														<div className="col-md-12">
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
														</div>
													</div>
													<div className="row localFav-cardInfo">
														<div className="col-md-4 localFav-cardPrice">
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
														</div>
														<div className="col-md-8 localFav-cardName">
															Restaurant Name
														</div>
													</div>
			                            		</div>
			                            	</div>
			                            </div>
			                           <div className="col-xs-3">
			                            	<div className="localFav-card">
			                            		<div className="localFav-cardTop">
			                            			<img src="links/home.jpg" className="localFav-cardImg"/>
			                            			<h3 className="localFav-cardItem">Food name</h3>
			                            		</div>
			                            		<div className="localFav-cardBottom">
													<div className="row localFav-cardStarRating">
														<div className="col-md-12">
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
														</div>
													</div>
													<div className="row localFav-cardInfo">
														<div className="col-md-4 localFav-cardPrice">
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
														</div>
														<div className="col-md-8 localFav-cardName">
															Restaurant Name
														</div>
													</div>
			                            		</div>
			                            	</div>
			                            </div>
			                            <div className="col-xs-3">
			                            	<div className="localFav-card">
			                            		<div className="localFav-cardTop">
			                            			<img src="links/home.jpg" className="localFav-cardImg"/>
			                            			<h3 className="localFav-cardItem">Food name</h3>
			                            		</div>
			                            		<div className="localFav-cardBottom">
													<div className="row localFav-cardStarRating">
														<div className="col-md-12">
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
															<i className="fa fa-star" aria-hidden="true"></i>
														</div>
													</div>
													<div className="row localFav-cardInfo">
														<div className="col-md-4 localFav-cardPrice">
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
															<i className="fa fa-usd" aria-hidden="true"></i>
														</div>
														<div className="col-md-8 localFav-cardName">
															Restaurant Name
														</div>
													</div>

			                            		</div>
			                            	</div>
			                            </div>
			                        </div>
			                        {/* End Row */}
			                    </div>
			                </div>

			            </div>
			           	{/* End Carousel */}
			            {/* Carousel Controls */}
			            <a className="left carousel-control" href="#myCarousel" data-slide="prev"><i className="fa fa-angle-left fa-2x" aria-hidden="true"></i></a>

			            <a className="right carousel-control" href="#myCarousel" data-slide="next"><i className="fa fa-angle-right fa-2x" aria-hidden="true"></i></a>
			        </div>
			        {/* End Well */}
			    </div>
			 </div>
		);
	}
});

module.exports = LocalFav;
