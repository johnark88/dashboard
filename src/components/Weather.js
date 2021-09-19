const Weather = ({
	app_temp,
	city,
	temp,
	state,
	country,
	description,
	aqi,
}) => {
	return (
		<div className='image-container '>
			<h2>
				Location: {city}, {state}, {country}
			</h2>
			<h3>Tempurature: {temp}</h3>
			<h3>Feels Like: {app_temp}</h3>
			<h3>Air Quality: {aqi}</h3>
			<h3>{description}</h3>
		</div>
	);
};
export default Weather;
