import React, { useEffect, useState } from "react";
import { UseAppContext } from "../Data/Context";
import { NavLink, useNavigate } from "react-router";

export const Step2 = () => {
	const nav = useNavigate();

	const { isValid, setIsValid, option, setOption, plan, setPlan } =
		UseAppContext();
	useEffect(() => {
		if (!isValid.step1) {
			nav("/");
		}
		if (!isValid.step2 && isValid.step1) {
			setIsValid((x) => ({ ...x, step2: true }));
		}
	}, [isValid]);
	return (
		<>
			<h2 className="title">Select your plan</h2>
			<p className="title-desc">
				You have the option of monthly or yearly billing
			</p>
			<div className="plan-container">
				{option.map((j, i) => {
					return (
						<div
							className="plan-item"
							key={j.name}
							onClick={() => {
								setOption((t) => [
									...t.map((m, r) => {
										return { ...m, selected: r === i };
									}),
								]);
							}}
						>
							<img src={j.img}></img>
							<div>
								<p className="plan-type">{j.name}</p>
								{plan ? (
									<>
										<p className="plan-price">${j.yearly}/yr</p>
										<p className="anually">2 months free</p>
									</>
								) : (
									<p className="plan-price">${j.monthly}/mo</p>
								)}
								<input
									type="radio"
									name="rd"
									value="Arcade"
									checked={j.selected}
									readOnly
								></input>
							</div>
						</div>
					);
				})}
			</div>
			<div className="switch-container">
				<p
					className={plan ? "plan-inactive" : "plan-active"}
					onClick={() => setPlan((x) => false)}
				>
					Monthly
				</p>
				<div className="switch">
					<input
						type="checkbox"
						id="chk"
						onChange={() => setPlan((x) => !x)}
						checked={plan}
					/>
					<label
						htmlFor="chk"
						className="chk-lab"
					></label>
				</div>
				<p
					className={plan ? "plan-active" : "plan-inactive"}
					onClick={() => setPlan((x) => true)}
				>
					Yearly
				</p>
			</div>

			<NavLink
				to={"/"}
				className="go-back"
			>
				Go Back
			</NavLink>
			<button
				className="form-btn"
				onClick={() => nav("/add-ons")}
			>
				Next Step
			</button>
		</>
	);
};
