import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import useAuthUser from "../../hooks/useAuthUser";

const ActivationAfterLogin = () => {
  const { user } = useAuthUser();
  console.log(user);
	return (
		<>
			<Topbar  />
		</>
	);
};

export default ActivationAfterLogin;
