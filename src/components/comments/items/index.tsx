import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb";
import { Container, Items, Text } from "../../../styles/styled";
import { useEffect, useState } from "react";
import { API } from "../../../services/API";

interface Flags {
  like: boolean;
  dislike: boolean;
}

type Posts = {
  data: {
    id: string;
    creatorName: string;
    creatorId: string;
    postId: string;
    comment: string;
    like: number;
    dislike: number;
    createdAt: string;
    updatedAt: string;
    postComment: string;
  },
  getPosts: () => Promise<void>
};

const ItemsComments = ({ data, getPosts }: Posts) => {
  const [flags, setFlags] = useState<Flags>({
    like: false,
    dislike: false,
  });

  const headers = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };

  const CheckLikes = async (): Promise<void> => {
      await API.get(`/posts/comments/${data.id}/like`, headers).then((item) => {
        if(item.data.like === 1){
          setFlags({...flags, like: true, dislike: false});
          getPosts();
        }
  
        if(item.data.dislike === 1){
          setFlags({...flags, like: false, dislike: true});
          getPosts();
        }
      })
  }


  useEffect(() => {
    CheckLikes();
    getPosts();
  }, [flags.like, flags.dislike]);

  const like = async (): Promise<void> => {
    await API.post(`posts/comments/${data.id}/like`, {like: true}, headers).then(() => {
      setFlags({ ...flags, like: !flags.like, dislike: false });
    });
  }

  const dislike = async (): Promise<void> => {
    await API.post(`posts/comments/${data.id}/like`, {like: false}, headers).then(() => {
      setFlags({ ...flags, dislike: !flags.dislike, like: false }); 
    });
  }


  return (
    <>
      <Items
          border="1px solid #6F6F6F"
          gap="18px"
          display="flex"
          flexdir="column"
          radius="12px"
          p="9px 10px"
        >
        <Text 
          w="100%" 
          color="#6F6F6F" 
          fontSize="12px" 
          fontWeight="400"
          >
          Enviado por: <strong>{data.creatorName}</strong>
        </Text>

        <Text 
          fontSize="18px" 
          color="black" 
          fontWeight="400" 
          w="100%"
          >
          {data.comment}
        </Text>

        <Container 
          display="flex" 
          gap="15px" 
          align="center" 
          w="100%"
          >
          <Container
            radius="28px"
            p="5px 10px"
            border="1px solid #6F6F6F"
            display="flex"
            align="center"
            gap="10px"
          >
            <TbArrowBigUp
              className={flags.like ? "icon like" : "icon"}
              onClick={like}
            />
            <Text
              color="#6F6F6F"
              display="inline"
              fontSize="10px"
              fontWeight="700"
            >
              {data.like > 999
                ? `${(data.like / 1000).toFixed(1)}k`
                : data.like}
            </Text>
            <TbArrowBigDown
              className={flags.dislike ? "icon dislike" : "icon"}
              onClick={dislike}
            />
            <Text
              color="#6F6F6F"
              display="inline"
              fontSize="10px"
              fontWeight="700"
            >
              {data.dislike > 999
                ? `${(data.dislike / 1000).toFixed(1)}k`
                : data.dislike}
            </Text>
          </Container>
        </Container>
      </Items>
    </>
  );
};

export default ItemsComments
