import React from "react";

export function Table({ children }) {
	return (
		<table className=" table table-dark table-striped text-center text-break">
			<tbody> 
            {children}
         </tbody>
		</table>
	);
}

export function Tr({ children }) {
	return <tr >{children}</tr>;
}

export function Td({ children }) {
	return <td >{children}</td>;
}

export default Table;
