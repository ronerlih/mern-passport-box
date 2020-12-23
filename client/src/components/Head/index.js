import React from "react";
import useLogRender from "../../utils/useLogPath";

function Nav() {
	useLogRender();

	return (
		<nav>
			<h1 className='mt-0 ml-0 mb-3 text-dark p-4 pt-3 pl-3'>Express Sequelize box</h1>
		</nav>
	);
}

export default Nav;
