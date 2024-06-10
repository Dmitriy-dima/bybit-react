import React from "react";
import "../css/MainPoints.scss";
import efficientIcon from "../images/efficientIcon.svg";
import fortKnoxIcon from "../images/shield.svg";
import tailoredIcon from "../images/palette.svg";
import vipIcon from "../images/star.svg";

interface MainPointsCardProps {
	imgSrc: string;
	altText: string;
	title: string;
	description: string;
}

function MainPointsCard({ imgSrc, altText, title, description }: MainPointsCardProps) {
	return (
		<div className="card">
			<img src={imgSrc} alt={altText} />
			<div className="card-text">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function MainPointsSection() {
	return (
		<section id="features" className="main-points-section">
			<div className="main-points_container">
				<div className="grid-wrapper">
					<MainPointsCard
						imgSrc={efficientIcon}
						altText="Efficiency Icon"
						title="Efficiency Amplified"
						description="Maximize your trading efficiency with our desktop app’s streamlined interface and advanced tools, allowing you to execute trades swiftly and stay ahead of market trends"
					/>
					<MainPointsCard
						imgSrc={fortKnoxIcon}
						altText="Fort Knox Security Icon"
						title="Fort Knox Security"
						description="Shield yourself from the lurking dangers of malicious chrome extensions, clippers, and other web-borne malware"
					/>
					<MainPointsCard
						imgSrc={tailoredIcon}
						altText="Tailored Trading Experience Icon"
						title="Tailored Trading Experience"
						description="Tailor your trading experience to your preferences with our desktop app’s extensive customization options, from personalized layouts and chart settings to customizable alerts and notifications, empowering you to trade your way"
					/>
					<MainPointsCard
						imgSrc={vipIcon}
						altText="VIP Treatment Icon"
						title="VIP Treatment"
						description="Unlock exclusive rewards and benefits available only to desktop app users, including bonuses and special offers"
					/>
				</div>
			</div>
		</section>
	);
}
