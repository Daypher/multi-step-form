import { createBrowserRouter, createHashRouter } from "react-router";
import { NavBar } from "./Layouts/NavBar";
import { Step1 } from "./Components/Step1";
import { Step2 } from "./Components/Step2";
import { Step3 } from "./Components/Step3";
import { Step4 } from "./Components/Step4";
import { loaderValidate } from "./Components/loaderValidate";

export const router = createHashRouter([
	{
		path: "/",
		Component: NavBar,
		children: [
			{
				index: true,
				Component: Step1,
			},
			{
				path: "/select-plan",
				Component: Step2,
			},
			{
				path: "/add-ons",
				Component: Step3,
			},
			{
				path: "/summary",
				Component: Step4,
			},
		],
	},
]);
