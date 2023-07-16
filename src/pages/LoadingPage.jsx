import React from "react";
const LoadingPage = () => {
	return (
		<div
			className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-300 `}
		>
			<div
				className={` flex flex-col gap-10 p-5 min-w-[85%] min-h-[500px] items-center justify-center  rounded-sm`}
			>
				<h3 className={`text-green-600 text-[30px] mx-2 text-center `}>
					Loading
					<span className={`text-green-500 text-[40px] mx-2 `}>
						...
					</span>
				</h3>
			</div>
		</div>
	);
};

export default LoadingPage;
