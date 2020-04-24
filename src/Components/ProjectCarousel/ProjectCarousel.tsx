function ProjectCarousel() {
  return (
    <div className="grid-carousel">
		<div className="projects-carousel swiper-container">
            <div className="swiper-wrapper">
			    
			    <div className="swiper-slide">
				    <a className="swiper-slide__link" href="projects_single.html">
					    <div className="cover-slider lazyload" data-bg="assets/img/image_single_01.jpg"></div>
                        <div className="swiper-slide__description">
						    <h2 className="title _title--h2 js-text-wave">Independence</h2>
							<div className="change-text">
							    <div className="change-text__front down-up"><span>Website / Branding</span></div>
							    <div className="change-text__back">Discover</div>
							</div>
                        </div>
					</a>
				</div>
			    
					
			    
			    <div className="swiper-slide">
				    <a className="swiper-slide__link" href="projects_single_v2_youtube.html">
					    <div className="cover-slider lazyload" data-bg="assets/img/image_single_01.jpg"></div>
						<div className="swiper-slide__description">
						    <h2 className="title _title--h2 js-text-wave">Majesty</h2>
							<div className="change-text">
							    <div className="change-text__front down-up"><span>Website / Mobile app</span></div>
							    <div className="change-text__back">Discover</div>
							</div>
						</div>
					</a>
				</div>
			    
					
			    
			    <div className="swiper-slide">
				    <a className="swiper-slide__link" href="projects_single.html">
					    <div className="cover-slider lazyload" data-bg="assets/img/image_single_01.jpg"></div>
						<div className="swiper-slide__description">
						    <h2 className="title _title--h2 js-text-wave">Preferences</h2>
							<div className="change-text">
							    <div className="change-text__front down-up"><span>Website</span></div>
							    <div className="change-text__back">Discover</div>
							</div>
						</div>
					</a>
				</div>
			    

			    
			    <div className="swiper-slide">
				    <a className="swiper-slide__link" href="projects_single_v2_youtube.html">
					    <div className="cover-slider lazyload" data-bg="assets/img/image_single_01.jpg"></div>
						<div className="swiper-slide__description">
						    <h2 className="title _title--h2 js-text-wave">Sketch App</h2>
							<div className="change-text">
							    <div className="change-text__front down-up"><span>Website</span></div>
							    <div className="change-text__back">Discover</div>
							</div>
						</div>
					</a>
				</div>
			    
				
			    
			    <div className="swiper-slide">
				    <a className="swiper-slide__link" href="projects_single.html">
					    <div className="cover-slider lazyload" data-bg="assets/img/image_single_01.jpg"></div>
						<div className="swiper-slide__description">
						    <h2 className="title _title--h2 js-text-wave">Roebling</h2>
							<div className="change-text">
							    <div className="change-text__front down-up"><span>Branding</span></div>
							    <div className="change-text__back">Discover</div>
							</div>
						</div>
					</a>
				</div>
			    
		    </div>
		
		    
            <div className="swiper-pagination"></div>

		</div>
	</div>
  )
}

export default ProjectCarousel;