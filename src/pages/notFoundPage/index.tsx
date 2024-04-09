import { Container, Image, Text } from "../../styles/styled";
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <Container align="center" p="0 33px" gap="30px" w="100%" h="100vh" display="flex" justify="center" flexdir="column">
                <Image src={Logo} w="60%" alt="logomarca" />
                <Text fontSize="22px">Desculpe, o recurso solicitado foi movido ou esta em manutencao!</Text>
                <Link to="/">Retornar a seguranca</Link>
            </Container>
        </>
    );
};

export default NotFoundPage;