import {IUser} from "../users";
import MainContainer from "../../components/MainContainer";
import {FC} from "react";

const User: FC<IUser> = (user) => {

	return (
		<MainContainer keywords="Пользователь">
			<h1>{user.name}</h1>
		</MainContainer>
	)
};

// @ts-ignore
export async function getServerSideProps({params}) {
	console.log(params)
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
	const user: IUser = await response.json()
	return {
		props: user, // will be passed to the page component as props
	}
}

export default User
