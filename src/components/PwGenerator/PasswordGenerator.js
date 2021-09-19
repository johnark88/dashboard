const PasswordGenerator = () => {
	return (
		<div className='pwg-section'>
			Password Generator
			<input
				type='text'
				id='generatedPassword'
				placeholder='generatedPassword'
				readOnly
			/>
		</div>
	);
};

export default PasswordGenerator;
