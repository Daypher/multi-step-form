import { UseAppContext } from "../Data/Context";
import { redirect } from "react-router";

export const loaderValidate = () => {
	const { isValid } = UseAppContext();

	if (!isValid.step1) {
		return redirect("/");
	}
};
