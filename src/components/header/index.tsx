import { useLocation, useNavigate } from "react-router-dom";
import { Container, Image, Button, Text } from "../../styles/styled";
import Logo from "./assets/sem fundo.png";


interface Props {
    children?: React.ReactNode;
}


const Header = (props: Props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const removeToken = () => {
        localStorage.removeItem("token");
    }

    return (
        <>  
            <Container p="0 30px" bg="#EDEDED" w="100%" h="50px" display="flex" justify="space-between" align="center">
                <Text>{props.children && props.children}</Text>
                <Image src={Logo} alt="Logo Labeddit" w="40px" h="40px" />
                {
                    location.pathname !== "/signup" &&  (
                    <Button 
                        border="none" 
                        fontWeight="600" 
                        lineHeight="24px" 
                        fontSize="18px" 
                        color="#4088CB"
                        onClick={removeToken}
                        
                        >Logout</Button>) 
                }
                {
                    location.pathname === "/signup" &&  (<Button border="none" onClick={() => navigate("/login")} fontWeight="600" lineHeight="24px" fontSize="18px" color="#4088CB">Entrar</Button>) 
                }
            </Container>
        </>
    );
};

export default Header;