import { useState } from 'react';
import WeatherResults from './WeatherResults';
import Button from '../Elements/Button';

const Weather = () => {
	const [ZipCode, setZipCode] = useState('');
	const [weather, setWeather] = useState();
	const [status, setStatus] = useState(false);

	async function requestWeather() {
		const res = await fetch(
			// TODO: Env API key
			`https://api.weatherbit.io/v2.0/current?postal_code=${ZipCode}&country=US&units=I&key=`
		);

		const json = await res.json();
		const temp = json.data[0];
		console.log(temp, 'wd');

		setWeather(temp);
		setStatus(true);
	}

	return (
		<div className='weather-section'>
			<span className='text-black font-bold text-2xl mb-4'>
				Weather Section
			</span>
			<div></div>
			<form
				className='flex flex-col justify-center items-center'
				onSubmit={(e) => {
					e.preventDefault();
					requestWeather();
				}}
			>
				<label htmlFor='zip_code' className='pb-2'>
					<input
						id='zip_code'
						onChange={(event) => setZipCode(event.target.value)}
						onKeyPress={(event) => event.key === 'Enter' && requestWeather()}
						value={ZipCode}
						placeholder='Enter zip code'
						type='number'
						min='0'
					/>
				</label>
				<Button buttonText={'Submit'} extraClassName={'w-28'} />
			</form>
			{status ? <WeatherResults weather={weather} /> : <h3></h3>}
		</div>
	);
};

export default Weather;
