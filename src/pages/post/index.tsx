import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Header from "../../components/header";
import {
  Button,
  Container,
  Form,
  Hr,
  Label,
  List,
  Text,
  TextArea,
} from "../../styles/styled";
import { API } from "../../services/API";
import ItemsPost from "../../components/posts/items";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { useComments } from "../../hooks/useComments";
import Comentarios from "../../components/comments";

interface CreatePost {
  comment: string;
}

interface Posts {
  id: string;
  creatorId: string;
  creatorName: string;
  content: string;
  like: number;
  dislike: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}

const PostPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePost>();
  const { id } = useParams();
  const {
    data: Comments,
    error,
    loading,
    getComments,
  } = useComments(id as string);
  const [data, setData] = useState<Posts>({
    id: "",
    comments: 0,
    content: "",
    createdAt: "",
    creatorId: "",
    creatorName: "",
    dislike: 0,
    like: 0,
    updatedAt: "",
  });
  const headers = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const getPostById = async () => {
    await API.get(`/posts/${id}`, headers).then((item) => {
      setData(item.data as Posts);
    });
  };

  useEffect(() => {
    getPostById();
  }, [id]);

  const createCommentInPost = async (data: CreatePost): Promise<void> => {
    await API.post(`/posts/comments/${id}`, data, headers)
      .then((response) => {
        console.log(response);
        reset();
        getComments();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header>
          <FaX />
        </Header>
        <Container w="100%" p="0 32px">
          <List>
            <ItemsPost data={data} getPosts={getPostById} />
          </List>

          <Form w="100%" mt="32px">
            <Label w="100%" display="flex" align="center" flexdir="column">
              <TextArea
                fontSize="18px"
                type="text"
                bg="#EDEDED"
                w="365px"
                minH="131px"
                radius="12px"
                p="18px 18px"
                placeholder="Escreva seu comentario"
                {...register("comment", {
                  required: true,
                })}
              />
            </Label>
            {errors.comment?.type === "required" && (
              <Text color="red" fontWeight="700" textAlign="center" mt="10px">
                Escreva algo para poder enviar, um post com palavras eh muito
                mais bonito
              </Text>
            )}
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
              onClick={() => handleSubmit(createCommentInPost)()}
            >
              Comentar
            </Button>
          </Form>
          <Hr
            w="100%"
            h="1px"
            radius="8px"
            m="32px 0 28px 0"
            bg="linear-gradient(#FF6489 30%, #F9B24E 50%)"
          />
          {error !== null && <Text>{error}</Text>}
          {loading && <Text>Loading . . .</Text>}

          <Comentarios data={Comments} getPosts={getComments} />
        </Container>
      </motion.div>
    </>
  );
};

export default PostPage;
