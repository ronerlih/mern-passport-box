import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
	return (
		<div className='form-group'>
			<input className='form-control' {...props} />
		</div>
	);
}

// forwarding ref (alternatively you can also prop drill it): https://reactjs.org/docs/forwarding-refs.html)
export const ForwardRefInput = React.forwardRef((props, ref) => (
	<div className='form-group'>
		<input className='form-control' ref={ref} {...props} />
	</div>
));

export function TextArea(props) {
	return (
		<div className='form-group'>
			<input className='form-control' {...props} />
		</div>
	);
}

export function FormBtn(props) {
	return (
		<button
			{...props}
			style={{ marginLeft: 10 }}
			className='btn btn-dark rounded-0'>
			{props.children}
		</button>
	);
}

export function Form({ searchTerm, handleInputChange, handleFormSubmit }) {
	return (
		<form>
			<div className="form-group">
				<label htmlFor="Search">
					<strong>Search Recommendations Below</strong>
				</label>
				<input className="form-control"
					id="search-title"
					type="text"
					value={searchTerm}
					name="searchTerm"
					placeholder="Search"
					onChange={handleInputChange}
					required
				/>
			</div>
			<div className="pull-right">
				<button
					className="btn btn-dark float-right"
					onClick={handleFormSubmit}
					type="submit">
					Search
                </button>
			</div>
		</form>
	)
}
