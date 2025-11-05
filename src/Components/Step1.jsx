import React, { useState } from "react";
import { useNavigate } from "react-router";
import { UseAppContext } from "../Data/Context";

export const Step1 = () => {
	const nav = useNavigate();
	const { form, setForm, error, setError, isValid, setIsValid, handleSubmit } =
		UseAppContext();
	const handle = () => {
		handleSubmit();
		if (isValid.step1) {
			nav("/select-plan");
		}
	};
	return (
		<>
			<h2 className="title">Personal info</h2>
			<p className="title-desc">
				please provide your name, email address, and phone number
			</p>
			<div className="st1-form">
				<div>
					<div className="form-label">
						<label htmlFor="name">Name</label>
						{error.name ? <p>This field is required</p> : null}
					</div>

					<input
						placeholder="e.g. Stephen King"
						id="name"
						value={form.name}
						onInput={(e) => {
							setForm((x) => ({ ...x, name: e.target.value })),
								setError((x) => ({ ...x, name: false }));
						}}
						className={error.name ? "error" : ""}
					></input>
				</div>
				<div>
					<div className="form-label">
						<label htmlFor="email">Email Address</label>
						{error.email ? <p>This field is required</p> : null}
					</div>

					<input
						placeholder="e.g. StephenKing@lorem.com"
						id="email"
						value={form.email}
						onInput={(e) => {
							setForm((x) => ({ ...x, email: e.target.value })),
								setError((x) => ({ ...x, email: false }));
						}}
						className={error.email ? "error" : ""}
					></input>
				</div>
				<div>
					<div className="form-label">
						<label htmlFor="phone">Phone Number</label>
						{error.phone ? <p>This field is required</p> : null}
					</div>

					<input
						placeholder="e.g. +1 234 567 890"
						id="phone"
						value={form.phone}
						onInput={(e) => {
							setForm((x) => ({ ...x, phone: e.target.value })),
								setError((x) => ({ ...x, phone: false }));
						}}
						className={error.phone ? "error" : ""}
					></input>
				</div>
			</div>
			<button
				className="form-btn"
				onClick={handle}
			>
				Next Step
			</button>
		</>
	);
};
