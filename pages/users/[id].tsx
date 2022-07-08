import {useRouter} from "next/router";

export default function () {

	const {query} = useRouter()
	console.log(query.id)

	return (
		<div>
			User id = {query.id}
		</div>
	)
};
