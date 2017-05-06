
const React = require("react");

const LocalFav = React.createClass({
	getInitialState: function(){
		return {
			items: [],
		};
	},
	componentWillReceiveProps(nextProps) {
		if (nextProps.foodItems[0]._id !== this.props.foodItems[0]._id )
			this.setState({ items: nextProps.foodItems });
			console.log("called willReveiveProps")
	},
	render: function() {
		const items = this.props.foodItems;

		let foodCard = function(items){
			return items.map((item) => {
						return (
							<div key={item.id} className="col-xs-3">

								<div className="localFav-card">
									<div className="localFav-cardTop">
										<img src="links/home.jpg" className="localFav-cardImg"/>
										<h3 className="localFav-cardItem">{item.cuisine}</h3>
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
											<div className="col-md-3 localFav-cardPrice">
												{item.price}
											</div>
											<div className="col-md-9 localFav-cardName">
												<p className="item-name">{item.itemName}</p>
											</div>
										</div>
									</div>
								</div>

							</div>
						);
					});
		};

		const firstSet = foodCard(items.slice(0,4));
		const secondSet = foodCard(items.slice(4));
		console.log(firstSet, secondSet);

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

																{	firstSet }

			                        </div>
			                        {/* End Row */}
			                    </div>

			                   {/* Start List of Items */}
			                    <div className="item">

			                        <div className="row">
																	{ secondSet }

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
