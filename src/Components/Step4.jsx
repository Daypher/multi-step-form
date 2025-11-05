import { useNavigate, NavLink } from "react-router";
import { UseAppContext } from "../Data/Context";
import { useEffect, useState } from "react";

export const Step4 = () => {
	const nav = useNavigate();
	const { option, plan, selected, isValid, submited, isSubmited } =
		UseAppContext();
	const selectedplan = option.find((x) => x.selected);
	const selectedAddOns = selected.filter((x) => x.selected);
	const conf = () => {
		isSubmited((x) => true);
	};
	useEffect(() => {
		if (!isValid.step1) {
			nav("/");
		}
	}, [isValid]);
	const tot = selectedAddOns.reduce((p, n) => {
		return p + n.price;
	}, 0);
	const total = plan
		? selectedplan.yearly + tot * 10
		: selectedplan.monthly + tot;

	return (
		<>
			{!submited ? (
				<>
					<h2 className="title">Finishing up</h2>
					<p className="title-desc">
						Double-check everything looks OK before confirming
					</p>
					<div className="summary-container">
						<div className="summary-plan">
							<div>
								<p className="plan-type">
									{selectedplan.name} ({plan ? "yearly" : "Monthly"})
								</p>
								<NavLink
									to={"/select-plan"}
									className="summary-adds"
								>
									Change
								</NavLink>
							</div>
							<p className="plan-type">
								$
								{plan
									? selectedplan.yearly + "/yr"
									: selectedplan.monthly + "/mo"}
							</p>
						</div>
						<div>
							{selectedAddOns.length > 0 ? <hr /> : null}
							{selectedAddOns.map((x, i) => {
								return (
									<div
										key={i}
										className="summary-add-on"
									>
										<p className="summary-adds">{x.name}</p>
										<p className="summary-adds-price">
											+${plan ? x.price * 10 + "/yr" : x.price + "/mo"}
										</p>
									</div>
								);
							})}
						</div>
					</div>
					<div className="summary-total">
						<p className="summary-adds">
							Total ({plan ? "per year" : "per month"})
						</p>
						<p className="summary-total-sum">
							+${total}/{plan ? "yr" : "mo"}
						</p>
					</div>

					<NavLink
						to={"/add-ons"}
						className="go-back"
					>
						Go Back
					</NavLink>
					<button
						className="form-btn"
						onClick={conf}
					>
						Confirm
					</button>
				</>
			) : (
				<div className="summary-confirm">
					<img src="./assets/images/icon-thank-you.svg"></img>
					<p className="title">Thank you!</p>
					<p className="summary-adds">
						Thanks for confirming your subscription! We hope you have fun using
						our platform. If you ever need support, please feel free to email us
						at support@loremgaming.com
					</p>
				</div>
			)}
		</>
	);
};
