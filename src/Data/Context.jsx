import {
	children,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

const AppContext = createContext();
export const UseAppContext = () => useContext(AppContext);
export function AppContextProvider({ children }) {
	const [form, setForm] = useState({ name: "", email: "", phone: "" });
	const [error, setError] = useState({
		name: false,
		email: false,
		phone: false,
	});
	const [submited, isSubmited] = useState(false);
	const [selected, setSelected] = useState([
		{
			name: "Online service",
			desc: "Access to multiplayer games",
			price: 1,
			selected: false,
		},
		{
			name: "Larger storage",
			desc: "Extra 1TB of cloud save",
			price: 2,
			selected: false,
		},
		{
			name: "Customizable profile",
			desc: "Custom theme on your profile",
			price: 2,
			selected: false,
		},
	]);
	const [plan, setPlan] = useState(false);
	const [option, setOption] = useState([
		{
			name: "Arcade",
			monthly: 9,
			yearly: 90,
			selected: true,
			img: "./assets/images/icon-arcade.svg",
		},
		{
			name: "Advanced",
			monthly: 12,
			yearly: 120,
			selected: false,
			img: "./assets/images/icon-advanced.svg",
		},
		{
			name: "Pro",
			monthly: 15,
			yearly: 150,
			selected: false,
			img: "./assets/images/icon-pro.svg",
		},
	]);
	const [isValid, setIsValid] = useState({
		step1: false,
		step2: false,
		step3: false,
	});
	const handleSubmit = () => {
		if (!form.name) {
			setError((x) => ({ ...x, name: true }));
		}
		if (!form.email) {
			setError((x) => ({ ...x, email: true }));
		}
		if (!form.phone) {
			setError((x) => ({ ...x, phone: true }));
		}
	};
	useEffect(() => {
		if (form.name && form.email && form.phone) {
			setIsValid((x) => ({ ...x, step1: true }));
		} else {
			setIsValid((x) => ({
				step1: false,
				step2: false,
				step3: false,
			}));
		}
	}, [form]);
	return (
		<AppContext.Provider
			value={{
				form,
				setForm,
				error,
				setError,
				isValid,
				setIsValid,
				handleSubmit,
				option,
				setOption,
				plan,
				setPlan,
				selected,
				setSelected,
				submited,
				isSubmited,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
