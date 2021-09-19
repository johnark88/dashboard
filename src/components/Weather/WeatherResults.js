import Weather from './Weather';

const WeatherResults = ({ weather }) => {
	return (
		<div className='search p-4'>
			<Weather
				city={weather.city_name}
				state={weather.state_code}
				country={weather.country_code}
				app_temp={weather.app_temp}
				temp={weather.temp}
				description={weather.weather.description}
				aqi={weather.aqi}
			/>
		</div>
	);
};

export default WeatherResults;

// temp, app_temp(feels like), city_name, clouds, sunrise, sunset,
// weather.icon, wind_spd, wind_dir, vis, aqi(air quality), ob_time
