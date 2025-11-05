import { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import { UseAppContext } from "../Data/Context";
export const NavBar = () => {
	const nav = useNavigate();
	const { isValid, handleSubmit, submited } = UseAppContext();
	return (
		<div className="container">
			<div className="wrapper">
				<div className="sidebar">
					<ol className="menu-items">
						<NavLink to={"/"}>
							<li>
								<div className="nav-links">
									<p className="step">Step 1</p>
									<p className="step-desc">YOUR INFO</p>
								</div>
							</li>
						</NavLink>
						<NavLink
							to={"/select-plan"}
							onClick={(e) => {
								handleSubmit();
								if (!isValid.step1) {
									e.preventDefault();
								}
							}}
						>
							<li>
								<div className="nav-links">
									<p className="step">Step 2</p>
									<p className="step-desc">SELECT PLAN</p>
								</div>
							</li>
						</NavLink>
						<NavLink
							to={"/add-ons"}
							onClick={(e) => {
								handleSubmit();

								if (!isValid.step2) {
									e.preventDefault();
									if (isValid.step1) {
										nav("/select-plan");
									}
								}
							}}
						>
							<li>
								<div className="nav-links">
									<p className="step">Step 3</p>
									<p className="step-desc">ADD-ONS</p>
								</div>
							</li>
						</NavLink>
						<NavLink
							to={"/summary"}
							onClick={(e) => {
								handleSubmit();

								if (!isValid.step3) {
									e.preventDefault();
									if (isValid.step2) {
										nav("/add-ons");
										console.log("dentro2");
									} else if (isValid.step1) {
										nav("/select-plan");
									}
								}
							}}
						>
							<li>
								<div className="nav-links">
									<p className="step">Step 4</p>
									<p className="step-desc">SUMMARY</p>
								</div>
							</li>
						</NavLink>
					</ol>
				</div>
				<div className={`content ${submited ? "submited" : ""}`}>
					<Outlet />
				</div>
			</div>
		</div>
	);
};
