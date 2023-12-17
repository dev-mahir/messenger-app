import { useEffect, useRef, useState } from "react";

const useDropdownPopupControl = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dropDownRefWrapper = useRef(null);

	// toggle menu
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

  const handleClickOutside = (e) => {
		if (
			dropDownRefWrapper?.current &&
			!dropDownRefWrapper?.current.contains(e.target)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return { isOpen, toggleMenu, dropDownRefWrapper, handleClickOutside };
};

export default useDropdownPopupControl;
