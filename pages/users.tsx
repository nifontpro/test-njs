import {FC} from 'react';
import Link from "next/link";
import MainContainer from "../components/MainContainer";

export interface IUser {
	id: number,
	name: string
}

const Users: FC<{ users: IUser[] }> = ({users}) => {

	return (
		<MainContainer keywords="Пользователи">
			<h1>Список пользователей</h1>
			<ul>
				{users.map(user =>
					<li key={user.id}>
						<Link href={`/users/${user.id}`}>
							<a>{user.name}</a>
						</Link>
					</li>
				)}
			</ul>
		</MainContainer>
	);
};

export default Users;

export async function getStaticProps() {

	const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
	const users = await response.json()

	return {
		props: {users}, // will be passed to the page component as props
	}
}