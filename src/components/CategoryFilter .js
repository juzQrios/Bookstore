import React from 'react'

const CategoryFilter = () => {
	const bookCategory = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

	return (
		<div>
			<select className="form-control">
				<option>All</option>
				{ bookCategory.map(val => <option key={val}>{val}</option> )}
			</select>
		</div>
	)
}
export default CategoryFilter