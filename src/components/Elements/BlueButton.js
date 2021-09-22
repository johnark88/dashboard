const BlueButton = (props) => {
	return (
		<button
			className={`${props.extraClassName} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded `}
			onClick={props.handleClick}
		>
			{props.buttonText}
		</button>
	);
};

export default BlueButton;
