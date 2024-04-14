import {
  Button,
  Container,
  Form,
  Input,
  Label,
  Link,
  Spinner,
  Text,
  Title,
} from "../../styles/styled";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API } from "../../services/API";
import Header from "../../components/header";
import { useState } from "react";

interface SignupProps {
  name: string;
  email: string;
  password: string;
  received: boolean;
}

const SignupPage = (): JSX.Element => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupProps>();
  const [loading, setLoading] = useState<boolean>(false);

  async function signupData(data: SignupProps) {
    setLoading(true);
    await API.post("/user/signup", data)
      .then((item) => {
        setLoading(false);
        reset();
        localStorage.setItem("token", item.data.token);
        console.log(item);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        <Container p="0 33px" w="100%" display="flex" flexdir="column">
          <Title mt="29px">Olá, boas vindas ao LabEddit ;)</Title>
          <Form w="100%" mt="100px" display="flex" flexdir="column" gap="10px">
            <Label w="100%" h="50px">
              <Input
                type="text"
                color="#323941"
                w="100%"
                h="100%"
                p="16px 20px"
                border="1px solid #D5D8DE"
                radius="4px"
                placeholder="Apelido"
                fontSize="16px"
                fontWeight="400"
                {...register("name", {
                  required: true,
                })}
              />
            </Label>
            {errors.name?.type === "required" && (
              <Text w="100%" color="orange" fontSize="16px" fontWeight="700">
                Apelido e um dado obrigatorio
              </Text>
            )}
            <Label w="100%" h="50px">
              <Input
                type="email"
                color="#323941"
                w="100%"
                h="100%"
                p="16px 20px"
                border="1px solid #D5D8DE"
                radius="4px"
                placeholder="E-mail"
                fontSize="16px"
                fontWeight="400"
                {...register("email", {
                  required: true,
                })}
              />
            </Label>
            {errors.email?.type === "required" && (
              <Text w="100%" color="orange" fontSize="16px" fontWeight="700">
                E-mail e um dado obrigatorio
              </Text>
            )}
            <Label w="100%" h="50px">
              <Input
                type="password"
                color="#323941"
                w="100%"
                h="100%"
                p="16px 20px"
                border="1px solid #D5D8DE"
                radius="4px"
                placeholder="Senha"
                fontSize="16px"
                fontWeight="400"
                {...register("password", {
                  required: true,
                })}
              />
            </Label>
            {errors.password?.type === "required" && (
              <Text w="100%" color="orange" fontSize="16px" fontWeight="700">
                senha e um dado obrigatorio
              </Text>
            )}
            <Text fontSize="14px" mt="65px" w="100%">
              Ao continuar, você concorda com o nosso{" "}
              <Link display="inline" color="blue" fontWeight="500">
                Contrato de usuário
              </Link>{" "}
              e nossa{" "}
              <Link display="inline" color="blue" fontWeight="500">
                Política de Privacidade
              </Link>
            </Text>
            <Label display="flex" gap="10px" align="center">
              <Input
                type="checkbox"
                w="20px"
                border="1px solid #C4C4C4"
                h="20px"
                radius="2px"
                {...register("received")}
              />
              <Text textAlign="left" color="black" fontSize="14px">
                Eu concordo em receber emails sobre coisas legais no Labeddit
              </Text>
            </Label>
            {loading ? (
              <Button
                w="100%"
                type="button"
                h="50px"
                radius="27px"
                display="flex"
                justify="center"
                align="center"
                color="white"
                mt="28px"
                fontWeight="700"
                fontSize="18px"
                bg="linear-gradient(to right, #FF6489, #F9B24E)"
                border="none"
                disabled={true}
              >
                <Spinner />
              </Button>
            ) : (
              <Button
                w="100%"
                type="button"
                h="50px"
                radius="27px"
                color="white"
                mt="28px"
                fontWeight="700"
                fontSize="18px"
                bg="linear-gradient(to right, #FF6489, #F9B24E)"
                border="none"
                onClick={() => handleSubmit(signupData)()}
              >
                Cadastrar
              </Button>
            )}
          </Form>
        </Container>
      </motion.div>
    </>
  );
};

export default SignupPage;
