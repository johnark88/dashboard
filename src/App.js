import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import DisplayWeather from './views/DisplayWeather';

const App = () => {
	return (
		<div className='container mx-auto text-center'>
			<h1 className='text-3xl'>Dashboard</h1>
			<DisplayWeather />
		</div>
	);
};

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
