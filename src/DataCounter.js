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
			console.log('roll');
			// number count for stats, using jQuery animate
			$('.counting').each(function() {
				var $this = $(this),
					countTo = $this.attr('data-count');

				$({ countNum: $this.text() }).animate(
					{
						countNum: countTo
					},

					{
						duration: 3000,
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
		};
		return (
			<div className='dataCounter' onMouseOver={rollData}>
				<section
					id='counter-stats'
					class='wow fadeInRight'
					data-wow-duration='1.4s'>
					<div clasNames='container'>
						<div className='col-lg-3 stats'>
							<i className='fa fa-code' aria-hidden='true' />
							<div className='counting' data-count='900000'>
								0
							</div>
							<h5>Sq Meters Walked</h5>
						</div>

						<div className='col-lg-3 stats'>
							<i className='fa fa-check' aria-hidden='true' />
							<div className='counting' data-count='280'>
								0
							</div>
							<h5>Contracts Signed</h5>
						</div>

						<div className='col-lg-3 stats'>
							<i className='fa fa-user' aria-hidden='true' />
							<div className='counting' data-count='75'>
								0
							</div>
							<h5>Happy clients</h5>
						</div>

						<div className='col-lg-3 stats'>
							<i className='fa fa-coffee' aria-hidden='true' />
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
