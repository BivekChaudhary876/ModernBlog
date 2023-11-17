/* eslint-disable react/prop-types */
import React, { useId } from 'react';

function Select({ options, label, className, ...props }, ref) {
    const id = useId()
    return (
			<div className='w-full'>
				{label && <label htmlFor={id} className=''></label>}
				<select
					id={id}
					{...props}
					ref={ref}
					className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
				>
                {/*  options.map can't be written since there won't be value in the array and while making loop then there will result into crashing the app so  options are made into the loop*/}
                
                {options?.map((option) => (
						<option key={option} value = {option}>{option}</option>
					))}
				</select>
			</div>
		);
}

// export default Select;

// Alternative to the forwarded ref is as follows
export default React.forwardRef(Select)
