import GetWeather from '../components/GetWeather';

const DisplayWeather = () => {
	return (
		<div className='grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3'>
			<div className=''>
				<GetWeather />
			</div>
		</div>
	);
};

export default DisplayWeather;
