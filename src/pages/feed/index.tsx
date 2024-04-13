import { useForm } from "react-hook-form";
import Header from "../../components/header";
import Posts from "../../components/posts";
import { Button, Container, Form, Hr, Label, Text, TextArea } from "../../styles/styled";
import { API } from "../../services/API";
import { usePosts } from "../../hooks/usePosts";

interface CreatePost {
    content: string;
}

const FeedPage = () => {
    const { data, error, loading, getPosts } = usePosts();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CreatePost>();
    const headers = {
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    const createPost = async (data: CreatePost): Promise<void> => {
        await API.post("/posts", data, headers).then((response) => {
            console.log(response);
            getPosts();
            reset();
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <>  
        <Header />
            <Container w="100%" p="0 32px">
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
                        placeholder="Digite alguma coisa" 
                        {...register("content", {
                            required: true
                        })}
                        />
                    </Label>
                    {errors.content?.type === "required" && (
                        <Text color="red" fontWeight="700" textAlign="center" mt="10px">Escreva algo para poder enviar, um post com palavras eh muito mais bonito</Text>
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
                        onClick={() => handleSubmit(createPost)()}
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
                {
                    error !== null && (
                        <Text>{error}</Text>
                    )
                }
                {
                    loading && (
                        <Text>Carregando...</Text>
                    )
                }
                <Posts data={data} getPosts={getPosts} />
            </Container>
        </>
    );
};

export default FeedPage;