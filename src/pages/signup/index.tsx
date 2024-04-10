import { Button, Container, Form, Input, Label, Link, Text, Title } from "../../styles/styled";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API } from "../../services/API";
import Header from "../../components/header";

interface SignupProps {
    nome: string;
    email: string;
    password: string;
    received: boolean;
}

const SignupPage = (): JSX.Element => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: {errors} } = useForm<SignupProps>();
    async function signupData(data: SignupProps){
        console.log(data)
        await API.post("user/login", data).then((item) => {
            reset();
            console.log(item);
            navigate("/feed");
        }).catch((err) => {
            console.log(err.request.data);
        })
    }
    return (
        <>
            <Header />
                <Container p="0 33px" w="100%" display="flex" flexdir="column">
                    <Title mt="29px">Olá, boas vindas ao LabEddit ;)</Title>
                    <Form 
                        w="100%" mt="100px"
                        display="flex"
                        flexdir="column"
                        gap="10px"
                    >
                        
                        <Label w="100%" h="50px">
                            <Input 
                                type="text" color="#323941"
                                w="100%"
                                h="100%"
                                p="16px 20px"
                                border="1px solid #D5D8DE"
                                radius="4px"
                                placeholder="Apelido"
                                fontSize="16px" fontWeight="400"
                                {...register("nome", {
                                    required: true
                                })}
                                />
                        </Label>
                        {
                            errors.nome?.type === "required" && (
                                <Text w="100%" color="orange" fontSize="16px" fontWeight="700">Apelido e um dado obrigatorio</Text>                                    
                            )
                        }
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
                        <Text fontSize="14px" mt="65px" w="100%">Ao continuar, você concorda com o nosso <Link display="inline" color="blue" fontWeight="500">Contrato de usuário</Link> e nossa <Link display="inline" color="blue" fontWeight="500">Política de Privacidade</Link></Text>
                        <Label display="flex" gap="10px" align="center">
                            <Input 
                                type="checkbox" 
                                w="20px" 
                                border="1px solid #C4C4C4" 
                                h="20px" 
                                radius="2px" 
                                {
                                    ...register("received")
                                }
                                />
                            <Text textAlign="left" color="black" fontSize="14px">Eu concordo em receber emails sobre coisas legais no Labeddit</Text>
                        </Label>

                        <Button w="100%" type="button" h="50px" radius="27px" color="white" mt="28px" fontWeight="700" fontSize="18px" bg="linear-gradient(to right, #FF6489, #F9B24E)" border="none" onClick={() => handleSubmit(signupData)()}>Cadastrar</Button>
                    </Form>
                </Container>
        </>
    )
};

export default SignupPage;