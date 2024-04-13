import { Button, Container, Form, Hr, Image, Input, Label, Spinner, Text } from "../../styles/styled";
import Logo from "../../assets/Logo.svg";import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API } from "../../services/API";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

interface LoginProps {
    email: string;
    password: string;
}

const LoginPage = (): JSX.Element => {
    const { setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [erro, setErro] = useState<string | null>(null)

    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: {errors} } = useForm<LoginProps>();
    async function LoginData(data: LoginProps){
        setLoading(true)
        await API.post("user/login", data).then((item) => {
            reset();
            console.log(item);
            localStorage.setItem("token", item.data.token);
            setUser(item.data.user);
            navigate("/");
            setLoading(false)
        }).catch((err) => {
            console.log(err);
            setErro(err.response.data);
            setLoading(false);
        })
    }
    return (
        <>
            <Container align="center" p="0 33px" w="100%" minH="100vh" h="100vh" display="flex" justify="center" flexdir="column">
                <Image display="block" src={Logo} w={"150px"} h={"150px"}  />
                <Text fontSize="16px" fontWeight="300">O projeto de rede social da Labenu</Text>
                <Form 
                    w="100%" mt="100px"
                    display="flex"
                    flexdir="column"
                    gap="10px"
                >
                    
                    <Label w="100%" h="50px">
                        <Input 
                            type="email" color="#323941"
                            w="100%"
                            h="100%"
                            p="16px 20px"
                            border="1px solid #D5D8DE"
                            radius="4px"
                            placeholder="E-mail"
                            fontSize="16px" fontWeight="400"
                            {...register("email", {
                                required: true
                            })}
                            />
                    </Label>
                            {
                                errors.email?.type === "required" && (
                                    <Text w="100%" color="orange" fontSize="16px" fontWeight="700">E-mail e um dado obrigatorio</Text>                                    
                                )
                            }
                    <Label w="100%" h="50px">
                        <Input 
                            type="password" color="#323941"
                            w="100%"
                            h="100%"
                            p="16px 20px"
                            border="1px solid #D5D8DE"
                            radius="4px"
                            placeholder="Senha"
                            fontSize="16px" fontWeight="400"
                            {...register("password", {
                                required: true
                            })}
                            />
                    </Label>
                            {
                                errors.password?.type === "required" && (
                                    <Text w="100%" color="orange" fontSize="16px" fontWeight="700">senha e um dado obrigatorio</Text>                                    
                                )
                            }

                            
                        {erro !== null && (
                            <Text w="100%" color="orange" fontSize="16px" fontWeight="700">{erro}</Text> 
                        )}
                        
                    <Button 
                        w="100%" 
                        display="flex"
                        justify="center"
                        align="center"
                        type="button" 
                        h="50px" 
                        radius="27px" 
                        color="white" 
                        mt="57px" 
                        fontWeight="700" 
                        fontSize="18px" 
                        bg="linear-gradient(to right, #FF6489, #F9B24E)" 
                        border="none" 
                        onClick={() => handleSubmit(LoginData)()}
                        >
                            {loading ? <Spinner /> : "Continuar" }
                        </Button>

                    <Hr w="100%" h="1px" radius="8px" m="18px 0" bg="linear-gradient(#FF6489 30%, #F9B24E 50%)" />
                    <Button 
                        type="button"
                        w="100%"
                        h="50px"
                        radius="27px"
                        color="#FE7E02"
                        border="1px solid #FE7E02"
                        fontWeight="700"
                        fontSize="18px"
                        bg="white"
                        onClick={() => navigate("/signup")}
                        >Crie uma conta!</Button>
                </Form>
            </Container>
        </>
    )
};

export default LoginPage;