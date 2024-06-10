import React from "react";
import { isWindows } from "../const";
import "../css/DownloadSection.scss";
import secondaryLight from "../images/secondary-light.svg";

function DownloadSection() {
	return (
		<section className="download-section">
			<div className="download-container">
				<div className="download-text">
					<h3>Download Now and start reaping the rewards!</h3>
					<p>Experience the productivity boost that thousands of Traders have already enjoyed</p>
				</div>
				<button
					disabled={!isWindows}
					className="download-button"
					data-download
					onClick={(window as any).HANDLE_DOWNLOAD}
				>
					<span>{isWindows ? "Download for Rewards" : "Available on Windows"}</span>
				</button>
			</div>
			<img src={secondaryLight} alt="secondaryLight" className="primaryLight" />
			<img src={secondaryLight} alt="secondaryLight" className="secondaryLight" />
			<img src={secondaryLight} alt="secondaryLight" className="secondaryLight-second" />
		</section>
	);
}

export default DownloadSection;
