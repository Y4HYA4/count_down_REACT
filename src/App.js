import { useEffect, useState } from "react";
function App() {
	const [date, setDate] = useState({
		d: "",
		h: "",
		m: "",
		s: "",
	});
	useEffect(() => {
		const timer = setTimeout(() => {
			const future = Date.parse("2022-07-31T00:00:00.000Z");
			const now = new Date();
			const diff = future - now;
			const days = Math.floor(diff / (1000 * 60 * 60 * 24));
			const hours = Math.floor(diff / (1000 * 60 * 60));
			const mins = Math.floor(diff / (1000 * 60));
			const secs = Math.floor(diff / 1000);
			setDate({
				d: days,
				h: hours - days * 24,
				m: mins - hours * 60,
				s: secs - mins * 60,
			});
		}, 1000);
		return () => clearTimeout(timer);
	});

	return (
		<div>
			<div className="content">
				<h1>Under Construction</h1>
				<p>We are busy working on something awesome</p>
				<div className="timer">
					<div className="box">
						<div id="days" className="value">
							{date.d}
						</div>
						<div>days</div>
					</div>
					<div className="box">
						<div id="hours" className="value">
							{date.h}
						</div>
						<div>hours</div>
					</div>
					<div className="box">
						<div id="minutes" className="value">
							{date.m}
						</div>
						<div>minutes</div>
					</div>
					<div className="box">
						<div id="seconds" className="value">
							{date.s}
						</div>
						<div>seconds</div>
					</div>
				</div>
				<button type="button">Notify Me</button>
				<div className="social">
					<i className="fab fa-linkedin"></i>
					<i className="fab fa-facebook-square"></i>
				</div>
			</div>
		</div>
	);
}

export default App;
