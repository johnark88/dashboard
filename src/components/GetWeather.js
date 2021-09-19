import { useState } from 'react';
import WeatherResults from './WeatherResults';

const Weather = (props) => {
	const [ZipCode, setZipCode] = useState('');
	const [weather, setWeather] = useState();
	const [status, setStatus] = useState(false);

	async function requestWeather() {
		const res = await fetch(
			// TODO: Env API key
			`https://api.weatherbit.io/v2.0/current?postal_code=${ZipCode}&country=US&units=I&key=${}`
		);

		const json = await res.json();
		const temp = json.data[0];
		console.log(temp, 'wd');

		setWeather(temp);
		setStatus(true);
	}

	return (
		<div className='relative block h-52 overflow-hidden bg-gray-200 rounded-lg shadow dark:bg-gray-800 xl:h-72 pt-4'>
			Weather Section
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
					/>
				</label>
				<button className='w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
					Submit
				</button>
			</form>
			{status ? <WeatherResults weather={weather} /> : <h3></h3>}
		</div>
	);
};

export default Weather;
