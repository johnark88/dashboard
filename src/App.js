import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import DisplayWeather from './views/DisplayWeather';
import DisplayPWG from './views/DisplayPWG';

const App = () => {
	return (
		<div className='container mx-auto text-center'>
			<h1 className='text-3xl'>Dashboard</h1>
			<div className='grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3'>
				<DisplayWeather />
				<DisplayPWG />
			</div>
		</div>
	);
};

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
