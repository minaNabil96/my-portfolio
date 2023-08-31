import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findTheTopOfElement } from "../store/reducers/scrollingSlice";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

//
const myPhoto = `https://res.cloudinary.com/minatry/image/upload/v1692445323/y5wjcyiaqb5mrvxqjg8v.jpg`;
const suezMisLogo = `https://res.cloudinary.com/minatry/image/upload/v1692446351/stoxd6lkttqdbxxizkrn.png`;
const educationLogo = `https://res.cloudinary.com/minatry/image/upload/v1692467340/ywyvv37klj64vjruxefi.png`;

//
const AboutMe = () => {
	const aboutMeRef = useRef();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			findTheTopOfElement({
				top: aboutMeRef.current.offsetTop,
				name: "aboutMe",
			}),
		);
	}, [dispatch]);

	const { translate } = useSelector((state) => state.languageSlice);
	return (
		<div
			className={`min-h-[700px] bg-gradient-to-tr from-mainColor2/60 to-mainColor flex items-center justify-center`}
			ref={aboutMeRef}
		>
			<div
				className={`grid max-md:grid-cols-1 grid-cols-2 place-content-start w-full space-y-10 my-8 `}
			>
				<div
					className={`flex items-center justify-center flex-col space-y-6 max-md:border-b border-r border-slate-100 `}
				>
					<div
						className={`flex items-center justify-center w-[290px] border-b border-slate-100  pb-3  `}
					>
						<img
							src={myPhoto}
							alt={`myphoto`}
							className={` h-24 w-24 rounded-full object-cover  shadow-sm shadow-slate-700 ring-2 ring-mainColor `}
						/>
					</div>
					<div className={`w-[75%] pb-4  `}>
						<p
							className={`text-white text-[16px] leading-8 text-start capitalize line-height-[10px]`}
						>
							{`I’m a Front End Developer with 2 years of experience.
							I worked on different projects, with different technologies. 	
							I can do more than front end work, bacause i can
							work with back end technologies and use it to make
							restful apis, such node express and deal with
							mongoDB using mongoose.
							I'm passionate about the latest technologies. 
							I always strive to learn new technologies to achieve the best way to create
							web applications.`}
						</p>
					</div>
				</div>
				<div
					className={`flex items-center justify-center flex-col space-y-8`}
				>
					<div
						className={`flex flex-col items-center justify-center w-[290px] space-y-4 `}
					>
						<div className={`bg-slate-200 rounded-full`}>
							<img
								src={educationLogo}
								alt={`suezmislogo`}
								className={`h-10 w-10 object-cover p-1 `}
							/>
						</div>
						<h2
							className={`text-white text-[21px] text-bold mb-2 uppercase`}
						>
							{translate ? "التخرج" : "education"}
						</h2>
					</div>
					<div
						className={`flex items-center justify-between w-[290px]  `}
					>
						<div className={`bg-slate-200 rounded-md py-1 px-2  `}>
							<img
								src={suezMisLogo}
								alt={`suezmislogo`}
								className={`h-10 w-10 object-cover `}
							/>
						</div>
						<p
							className={`text-white text-[15px] font-medium flex flex-col items-end justify-center ${
								translate ? "text-end" : "text-center"
							}  w-full`}
						>
							{translate
								? "معهد السويس"
								: `Higher Institute For Management Information Systems in suez`}

							{translate && (
								<span>
									{translate
										? "لنظم المعلومات الإدارية"
										: "in suez"}
								</span>
							)}
						</p>
					</div>
					<div
						className={`flex items-center justify-between w-[290px] `}
					>
						<div className={`bg-slate-200 rounded-md p-1 `}>
							<span
								className={`h-10 w-10 uppercase text-mainColor text-[18px]  font-bold `}
							>
								pc%
							</span>
						</div>
						<p
							className={`text-white text-center text-[15px] font-medium flex flex-col ${
								translate ? "items-end" : "items-center"
							} justify-center capitalize w-full`}
						>
							75.44
							<span>{translate ? "جيد جداً" : "very good"}</span>
						</p>
					</div>
					<Link
						to={`https://drive.google.com/file/d/1V1GAE7IipbS2OCrU8U789CX5x8dHeftp/view?usp=drive_link`}
						relative={`path`}
						target="_blank"
					>
						<button
							type="button"
							className={` p-1 bg-gradient-to-tr from-mainColor2/70 to-mainColor flex items-center justify-around duration-150 rounded-sm  h-[35px] w-[70px]  hover:bg-mainColor2 hover:shadow-sm hover:shadow-mainColor group `}
						>
							<span
								className={`text-white text-[14px]   uppercase group-hover:text-yellow-200 duration-150 `}
							>
								cv
							</span>
							<IoArrowForwardCircleSharp
								className={`text-white text-[22px] group-hover:text-yellow-200 duration-150 transform group-hover:translate-x-1 `}
							/>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
