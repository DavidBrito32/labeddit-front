import { Container,  Modal, Spinner, Text } from "../../styles/styled";

const Loading = () => {
    return (
        <>
            <Modal>
                <Container display="flex" justify="center" align="center" flexdir="column">
                    <Spinner w="90px" h="90px" />
                    <Text color="white" fontSize="32px" fontWeight="bold">Carregando . . .</Text>
                </Container>
            </Modal>
        </>
    );
};

export default Loading;