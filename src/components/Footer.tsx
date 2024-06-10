import React from "react";
import "../css/Footer.scss";

import logoIcon from "../images/logo-dark.svg";
import facebookIcon from "../images/facebook.svg";
import instaIcon from "../images/instagram.svg";
import twitterIcon from "../images/x-twitter.svg";
import linkedinIcon from "../images/linkedin.svg";

function Footer() {
	return (
		<footer className="App-footer">
			<div className="footer-container">
				<div className="footer-content">
					<a className="footer-logo" href="https://www.bybit.com" target="_blank" rel="noreferrer">
						<img src={logoIcon} alt="logoIcon" />
					</a>

					<ul className="footer-bottom_links">
						<li>
							<a href="https://www.bybit.com/en/promo/global/aboutus/" target="_blank" rel="noreferrer">
								About
							</a>
						</li>
						<li>
							<a href="https://blog.bybit.com/en/" target="_blank" rel="noreferrer">
								Blog
							</a>
						</li>
						<li>
							<a href="https://announcements.bybit.com/en/" target="_blank" rel="noreferrer">
								Announcements
							</a>
						</li>
						<li>
							<a href="https://www.bybit.com/en/promo/global/careers/" target="_blank" rel="noreferrer">
								Careers
							</a>
						</li>
						<li>
							<a href="https://www.bybit.com/app/user/proof-of-reserve" target="_blank" rel="noreferrer">
								Audit
							</a>
						</li>
						<li>
							<a
								href="https://www.bybit.com/en/help-center/?language=en"
								target="_blank"
								rel="noreferrer"
							>
								Help Center
							</a>
						</li>
					</ul>
					<div className="footer-socials">
						<a href="https://www.facebook.com/Bybit" target="_blank" rel="noreferrer">
							<img src={facebookIcon} alt="facebookIcon" />
						</a>
						<a href="https://www.instagram.com/bybit_official/" target="_blank" rel="noreferrer">
							<img src={instaIcon} alt="instaIcon" />
						</a>
						<a href="https://twitter.com/Bybit_Official" target="_blank" rel="noreferrer">
							<img src={twitterIcon} alt="twitterIcon" />
						</a>
						<a href="https://www.linkedin.com/company/bybitexchange/" target="_blank" rel="noreferrer">
							<img src={linkedinIcon} alt="linkedinIcon" />
						</a>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="footer-bottom_content">
					<span className="copyright">© 2018-2024 Bybit.com. All rights reserved.</span>
					<ul className="footer-bottom_links">
						<li>
							<a
								href="https://www.bybit.com/app/terms-service/information"
								target="_blank"
								rel="noreferrer"
							>
								Terms of Service
							</a>
						</li>
						<li>
							<a
								href="https://www.bybit.com/app/terms-service/privacyPolicy"
								target="_blank"
								rel="noreferrer"
							>
								Privacy Terms
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
