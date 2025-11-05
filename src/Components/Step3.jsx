import { useContext, useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router";
import { UseAppContext } from "../Data/Context";

export const Step3 = () => {
	const nav = useNavigate();
	const { selected, setSelected, isValid, setIsValid } = UseAppContext();
	useEffect(() => {
		if (!isValid.step1) {
			nav("/");
		}
		if (isValid.step2 && !isValid.step3) {
			setIsValid((x) => ({ ...x, step3: true }));
		}
	}, [isValid]);
	const handlechk = (item) => {
		if (!selected.includes(item)) {
			setSelected((x) => [...x, item]);
		} else {
			setSelected((x) => [...x.filter((y) => y !== item)]);
		}
		console.log(selected);
	};

	return (
		<>
			<h2 className="title">Pick add-ons</h2>
			<p className="title-desc">Add-ons help enhance your gaming experience</p>
			<div className="add-ons-container">
				{selected.map((o, i) => {
					return (
						<div
							className="add-ons-wrapper"
							key={i}
							onClick={() => {
								setSelected((x) => [
									...x.map((r, n) => {
										if (n === i) {
											return { ...r, selected: !x[n].selected };
										}
										return r;
									}),
								]);
							}}
						>
							<div className="add-ons-item">
								<input
									type="checkbox"
									className="add-ons-chk"
									checked={o.selected}
									readOnly
								/>
								<div>
									<p className="plan-type">{o.name}</p>
									<p className="plan-price">{o.desc}</p>
								</div>
							</div>
							<p className="price">+${o.price}/mo</p>
						</div>
					);
				})}
			</div>
			<NavLink
				to={"/select-plan"}
				className="go-back"
			>
				Go Back
			</NavLink>
			<button
				className="form-btn"
				onClick={() => nav("/summary")}
			>
				Next Step
			</button>
		</>
	);
};
