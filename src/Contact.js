import React from 'react';

import './Contact.css';
class Contact extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<section>
				<div className='contactPage'>
					<div className='contactForm'>
						<section className='contactForm'>
							<div className='container'>
								<div className='headers'>
									<article className='contactHeader'>
										<h2 className='header'>Say hi!</h2>

										<h4 className='info'>
											Gräfenstiener | Swiss Real Estate <br />
											<a className='emailLink' href='mailto:infor@jdjksl.com'>
												info@gräfenstiener.com
											</a>
										</h4>
									</article>
								</div>
								<div className='form-wrapper'>
									<div id='contact-form-wrap'>
										<div className='contact-item pad-common '>
											<form
												name='myform'
												id='contactForm'
												action='./sendcontact.php'
												enctype='multipart/form-data'
												method='post'>
												<article>
													<input
														type='text'
														placeholder='Full Name'
														id='name'
														name='name'
														className='border-form font2'
														required
													/>
													<br />
													<input
														type='text'
														placeholder='Valid email ID'
														name='email'
														id='email'
														size='30'
														className='border-form font2'
														required
													/>
													<br />
													<input
														type='text'
														placeholder='Address'
														id='address'
														name='addess'
														className='border-form font2'
														required
													/>
													<br />
													<input
														type='text'
														placeholder='Phone Number'
														id='phoneNum'
														name='phone'
														className='border-form font2'
														required
													/>
													<br />
												</article>

												<article>
													<textarea
														placeholder='Your Message'
														name='message'
														cols='40'
														rows='4'
														id='msg'
														className='border-form font2'
													/>
													<br />
													<button
														className='btn btn-otto btn-otto-color'
														id='submit'
														name='submit'
														type='submit'>
														Send Message
													</button>
												</article>
											</form>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
