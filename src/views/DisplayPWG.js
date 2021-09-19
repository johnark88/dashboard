import PasswordGenerator from '../components/PwGenerator/PasswordGenerator';

const DisplayPWG = () => {
	return (
		<div className='relative block h-52 overflow-hidden bg-gray-200 rounded-lg shadow dark:bg-gray-800 xl:h-72 pt-4'>
			<PasswordGenerator />
		</div>
	);
};

export default DisplayPWG;
