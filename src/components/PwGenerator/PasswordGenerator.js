import { Component } from 'react';
import Button from '../Elements/Button';

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

	handleCopyToClipBoard = () => {
		const passwordInput = document.getElementById('generatedPassword');
		const lengthInput = document.getElementById('lengthInput');
		const successMessage = document.getElementById('copy_success');
		navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
			if (result.state == 'granted' || result.state == 'prompt') {
				const copyToClipboard = navigator.clipboard.writeText(
					passwordInput.value
				);
				copyToClipboard.then(() => {
					successMessage.innerHTML = 'Password saved to clipboard.';
					passwordInput.value = '';
					lengthInput.value = '';
				});
			}
		});
	};

	// handle the password length and set it to state
	handleChange = ({ target }) => {
		this.setState({
			[target.name]: target.value,
		});
	};

	render() {
		return (
			<div className='pwg-section flex flex-col justify-center align-middle items-center w-full'>
				<span className='text-black font-bold text-2xl mb-4'>
					Password Generator
				</span>
				<div className='flex flex-row justify-center align-middle items-center w-7/12 pt-2'>
					<label htmlFor='lengthInput' className='mr-2'>
						Password Length
					</label>
					<input
						className='pwgen w-6/12'
						type='number'
						id='lengthInput'
						name='passWordLength'
						min='5'
						max='99'
						maxLength='2'
						onChange={this.handleChange}
					/>
				</div>
				<div className='pt-2 flex flex-row w-11/12'>
					<input
						type='text'
						id='generatedPassword'
						className='generatedPassword w-full'
						placeholder='Generated Password'
						readOnly
					/>
				</div>
				<div className='flex flex-row justify-around mt-2'>
					<Button
						extraClassName='mr-2'
						buttonText={'Generate'}
						handleClick={this.handleGeneratePassword}
					/>
					<Button
						extraClassName='mr-2'
						buttonText={'Copy password'}
						handleClick={this.handleCopyToClipBoard}
					/>
				</div>
				<span
					id='copy_success'
					className='text-black font-bold p-4 mt-2s'
				></span>
			</div>
		);
	}
}

export default PasswordGenerator;
