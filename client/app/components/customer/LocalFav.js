const React = require('react');
const axios = require('axios');

const hashHistory = require('react-router').hashHistory;

const LocalFav = React.createClass({
	getInitialState: function(){
		return {
			location: null,
			cuisine: null,
			items: [],
		};
	},


	componentWillMount: function(){
		axios.get('/top-food-items').then((response) => {
			this.setState({ items: response.data  });
		}).catch((error) => { console.log(error) });
	},

	componentWillReceiveProps: function(nextProps) {
		if(nextProps.items) {
			this.setState({ items: nextProps.items });
		}
	},

	handleClick: function(cookid) {
		hashHistory.push(`/customer/cookinfo/${cookid}`);
	},


	render: function() {

		const items = this.state.items;

		let foodCard = items.map((item, idx) => {
			return (
				<div key={idx} className="col-xs-3">

					<div onClick={() => this.handleClick(item.cook)}>
						<div className="localFav-card">
							<div className="localFav-cardTop">
								<img src={item.image} className="localFav-cardImg img-responsive"/>
							</div>

							<div className="localFav-cardBottom">


									<div className="localFav-cardBottom">
										<div className="localFav-cardInfo">
											<div className="row cardInfo-cont">
												<div className="col-md-12 localFav-cardName">
													<p className="item-name"><strong>{item.itemName}</strong></p>
												</div>
												<div className="col-md-12 localFav-cardPrice">
													<p className="item-price">${item.price}</p>
												</div>
											</div>
	

										</div>
									</div>

							</div>

						</div>
					</div>

				</div>
			);
		});

		const firstSet = foodCard.slice(0,4);
		const secondSet = foodCard.slice(4);

		return (
			<div className="container localFav-cont">
			    <div className="col-xs-12">
			         <div className="localfav-title">
			         	<img src="links/localfavs.png" className="localfav-img"/>
			         </div>

			        <div className="well">
			            <div id="myCarousel" className="carousel slide">

			                {/* Carousel Items */}
			                <div className="carousel-inner">
			                    <div className="item active">


			                        <div className="row carousel-div">


										{ firstSet }

			                        </div>
			                    </div>

			                   {/* Start List of Items */}
			                    <div className="item">
			                        <div className="row">

										{ secondSet }

			                        </div>
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
