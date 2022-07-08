import {FC} from 'react';
import MainContainer from "../components/MainContainer";

const Error: FC = () => {
	return (
		<MainContainer keywords={"Ошибка"}>
			Ошибка! Такой страницы не существует! Error!
		</MainContainer>
	);
};

export default Error;