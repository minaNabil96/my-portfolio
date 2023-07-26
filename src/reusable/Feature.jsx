import React from "react";

const Feature = ({ cardStyle, num, sentence }) => {
	return (
		<div className={`${cardStyle}`}>
			<div
				className={`h-10 w-10 flex justify-center items-center bg-slate-800 rounded-full absolute -top-8 -right-5 ring-1 ring-purple-600 `}
			>
				<p className={`text-white p-1`}>{num}</p>
			</div>
			<p
				className={`text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
			>
				{sentence}
			</p>
		</div>
	);
};

export default Feature;
