import Header from "../../components/header";
import { Button, Container, Form, Hr, Label, TextArea } from "../../styles/styled";


const FeedPage = () => {
    return (
        <>  
        <Header />
            <Container w="100%" p="0 32px">
                <Form w="100%" mt="32px">
                    <Label w="100%" display="flex" align="center" flexdir="column">
                        <TextArea type="text" bg="#EDEDED" w="365px" minH="131px" radius="12px" p="18px 18px" placeholder="Digite alguma coisa" />
                    </Label>
                    <Button 
                        w="100%" 
                        type="button" 
                        h="50px" 
                        radius="27px" 
                        color="white" 
                        mt="57px" 
                        fontWeight="700" 
                        fontSize="18px" 
                        bg="linear-gradient(to right, #FF6489, #F9B24E)" 
                        border="none"
                        >
                            Continuar
                        </Button>
                </Form>
                <Hr 
                    w="100%" 
                    h="1px" 
                    radius="8px" 
                    m="32px 0 28px 0" 
                    bg="linear-gradient(#FF6489 30%, #F9B24E 50%)" 
                />
            </Container>
        </>
    );
};

export default FeedPage;