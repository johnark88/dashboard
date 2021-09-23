import PasswordGenerator from '../components/PwGenerator/PasswordGenerator';

const DisplayPWG = () => {
	return (
		<div className='relative h-52 overflow-hidden bg-themeGrey rounded-lg shadow dark:bg-gray-800 xl:h-72 pt-4 flex justify-center w-full'>
			<PasswordGenerator />
		</div>
	);
};

export default DisplayPWG;
