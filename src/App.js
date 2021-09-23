import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import DisplayWeather from './views/DisplayWeather';
import DisplayPWG from './views/DisplayPWG';
import DisplayClocks from './views/DisplayClocks';

const App = () => {
	return (
		<div className='mx-auto text-center bg-themeBlack'>
			<h1 className='text-3xl'>Dashboard</h1>
			<div className='container mx-auto grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3'>
				<DisplayWeather />
				<DisplayPWG />
				<DisplayClocks />
			</div>
			<div>
				<footer className='h-48'></footer>
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
