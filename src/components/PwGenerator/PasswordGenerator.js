import { Component } from 'react';

class PasswordGenerator extends Component {
	state = {
		passWordLength: null,
	};

	// generate the password
	handleGeneratePassword = () => {
		const requestLength = this.state.passWordLength;
		const chars =
			'0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const passwordLength = requestLength;
		let password = '';
		const display = document.getElementById('generatedPassword');

		for (var i = 1; i <= passwordLength; i++) {
			var randomNumber = Math.floor(Math.random() * chars.length);
			password += chars.substring(randomNumber, randomNumber + 1);
		}
		display.value = password;
	};

	// handle the password length and set it to state
	handleChange = ({ target }) => {
		this.setState({
			[target.name]: target.value,
		});
	};

	render() {
		return (
			<div className='pwg-section flex flex-col justify-center align-middle items-center'>
				Password Generator
				<div className='flex flex-row justify-center align-middle items-center'>
					<label htmlFor='lengthInput' className='p-4'>
						Password Length
					</label>
					<input
						className='pwgen'
						type='number'
						id='lengthInput'
						name='passWordLength'
						min='0'
						max='99'
						maxLength='2'
						onChange={this.handleChange}
					/>
				</div>
				<button
					className='w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={this.handleGeneratePassword}
				>
					Generate
				</button>
				<div className='pt-4 flex flex-row' style={{ width: '95%' }}>
					<input
						style={{ width: '100%' }}
						type='text'
						id='generatedPassword'
						className='generatedPassword'
						placeholder='Generated Password'
						readOnly
					/>
				</div>
			</div>
		);
	}
}

export default PasswordGenerator;
