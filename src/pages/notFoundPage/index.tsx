import { Container, Image, Text } from "../../styles/styled";
import { motion } from "framer-motion";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container
          align="center"
          p="0 33px"
          gap="30px"
          w="100%"
          h="100vh"
          display="flex"
          justify="center"
          flexdir="column"
        >
          <Text fontSize="22px">
            Desculpe, o recurso solicitado foi movido ou esta em manutencao!
          </Text>
          <Link to="/">Retornar a seguranca</Link>
        </Container>
      </motion.div>
      <Image src={Logo} w="60%" alt="logomarca" />
    </>
  );
};

export default NotFoundPage;
