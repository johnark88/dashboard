import GetWeather from '../components/Weather/GetWeather';

const DisplayWeather = () => {
	return (
		<div className='relative block h-52 overflow-hidden bg-themeGrey rounded-lg shadow dark:bg-gray-800 xl:h-72 pt-4'>
			<GetWeather />
		</div>
	);
};

export default DisplayWeather;
