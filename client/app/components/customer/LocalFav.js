const React = require('react');
const axios = require('axios');

const hashHistory = require('react-router').hashHistory;

const LocalFav = React.createClass({
	getInitialState: function(){
		console.log("Fav Init");
		return {
			location: null,
			cuisine: null,
			items: [],
		};
	},

	componentWillMount: function(){
		console.log("Fav Will mount");
		axios.get('/top-food-items').then((response) => {
			this.setState({ items: response.data  });
		}).catch((error) => { console.log(error) });
	},

	componentDidMount: function(){
		console.log("Fav Did mount");
	},

	// refreshData: function() {
	// 	console.log("refreshData called");
	// 	if (this.state.location) {
	// 		console.log("Called with location");
	// 			axios.get('/cook/'+ this.state.location).then((response) => {
	// 					console.log("Called for location based item", response.data)
	// 					this.setState({
	// 						items: response.data.fooditems,
	// 					});
	// 			}).catch((error) => {	console.log(error) });
	// 	} else if (this.state.cuisine) {
	// 		console.log("Called with cuisine");
	// 			axios.get('/fooditem/'+ this.state.cuisine).then((response) => {
	// 					console.log(("Called for cuisine based item"),response.data)
	// 					this.setState({
	// 						items: response.data
	// 					});
	// 		}).catch((error) => { console.log(error) });
	// 	}
	// },

	componentWillReceiveProps: function(nextProps) {
		// if(nextProps.location !== this.props.location){
		// 	console.log("Fav Will reveive loc");
		// 	this.setState({ location: nextProps.location });
		// } else if (nextProps.cuisine !== this.props.cuisine) {
		// 	console.log("Fav Will reveive cusine");
		// 	this.setState({	cuisine: nextProps.cuisine 	});
		// }
		if (this.state.location) {
			console.log("Called with location");
				axios.get('/cook/'+ this.state.location).then((response) => {
						console.log("Called for location based item", response.data)
						this.setState({
							items: response.data.fooditems,
						});
				}).catch((error) => {	console.log(error) });
		} else if (this.state.cuisine) {
			console.log("Called with cuisine");
				axios.get('/fooditem/'+ this.state.cuisine).then((response) => {
						console.log(("Called for cuisine based item"),response.data)
						this.setState({
							items: response.data
						});
			}).catch((error) => { console.log(error) });
		}
	},

	handleClick: function(cookid) {
		hashHistory.push("/customer/cookinfo/" + cookid);
	},

	render: function() {
		console.log("Fav Did Render");

		const items = this.state.items;

		let foodCard = items.map((item, idx) => {
			return (
				<div key={idx} className="col-xs-3">

					<a onClick={() => this.handleClick(item.cook)}>
						<div className="localFav-card">
							<div className="localFav-cardTop">
								<img src={item.image} className="localFav-cardImg img-responsive"/>
							</div>

							<div className="localFav-cardBottom">

									<div className="row localFav-cardStarRating">
										<div className="col-md-12">
											<h4 className="localFav-cardItem">{item.cuisine}</h4>
										</div>
									</div>

									<div className="row localFav-cardInfo">
										<div className="col-md-4 localFav-cardPrice">
											${item.price}
										</div>
										<div className="col-md-8 localFav-cardName">
											{item.itemName}
										</div>
									</div>

							</div>

						</div>
					</a>

				</div>
			);
		});

		const firstSet = foodCard.slice(0,4);
		const secondSet = foodCard.slice(4);

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
