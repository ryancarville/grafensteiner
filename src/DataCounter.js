import React from 'react';
import './DataCounter.css';
import $ from 'jquery';

export default class DataCounter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// number count for stats, using jQuery animate

		const rollData = () => {
			$(window).scroll(function() {
				var hT = $('#scroll-to').offset().top,
					hH = $('#scroll-to').outerHeight(),
					wH = $(window).height(),
					wS = $(this).scrollTop();
				if (wS > hT + hH - wH) {
					$('.counting').each(function() {
						var $this = $(this),
							countTo = $this.attr('data-count');
						//text or image to be animated
						$({ countNum: $this.text() }).animate(
							{
								countNum: countTo
							},

							{
								duration: 1000,
								easing: 'linear',
								step: function() {
									$this.text(Math.floor(this.countNum));
								},
								complete: function() {
									$this.text(this.countNum);
									//alert('finished');
								}
							}
						);
					});
				}
			});
		};
		return (
			<div className='dataCounter' id='scroll-to' onLoad={rollData}>
				<section
					id='counter-stats'
					class='wow fadeInRight'
					data-wow-duration='1.4s'>
					<div clasNames='container'>
						<div className='col-lg-3 stats'>
							<i className='fa'>
								<img
									src={require('./images/stepsCounter.jpg')}
									alt='step counter icon'
									className='counterIcon'
								/>
							</i>
							<div className='counting' data-count='82354'>
								0
							</div>
							<h5>Sq Meters Walked</h5>
						</div>

						<div className='col-lg-3 stats'>
							<i className='fa'>
								<img
									src={require('./images/contractCounter.png')}
									alt='step counter icon'
									className='counterIcon'
								/>
							</i>
							<div className='counting' data-count='280'>
								0
							</div>
							<h5>Contracts Signed</h5>
						</div>

						<div className='col-lg-3 stats'>
							<i className='fa'>
								<img
									src={require('./images/happyCounter.png')}
									alt='step counter icon'
									className='counterIcon'
								/>
							</i>
							<div className='counting' data-count='75'>
								0
							</div>
							<h5>Happy clients</h5>
						</div>

						<div className='col-lg-3 stats'>
							<i className='fa'>
								<img
									src={require('./images/coffeeCounter.png')}
									alt='step counter icon'
									className='counterIcon'
								/>
							</i>
							<div className='counting' data-count='999'>
								0
							</div>
							<h5>Cups of coffee</h5>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
