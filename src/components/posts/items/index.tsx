import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb";
import { Container, Items, Text } from "../../../styles/styled";
import { IoChatboxOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { API } from "../../../services/API";
import { useNavigate } from "react-router-dom";

interface Flags {
  like: boolean;
  dislike: boolean;
}

type Posts = {
  data: {
    id: string;
    creatorName: string;
    creatorId: string;
    content: string;
    like: number;
    dislike: number;
    comments: number;
    createdAt: string;
    updatedAt: string;
    postComment?: string;
  },
  getPosts: () => Promise<void>
};

const ItemsPost = ({ data, getPosts }: Posts) => {
  const navigate = useNavigate();

  const openPost = (id: string): void => {
    navigate(`/${id}`);
}
  const [flags, setFlags] = useState<Flags>({
    like: false,
    dislike: false,
  });

  const headers = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };

  const Liked = async () => {
    await API.get(`/posts/${data.id}/like`, headers).then((item) => {
      if(item.data.like === 1){
        setFlags({...flags, like: true, dislike: false});
        getPosts();
      }

      if(item.data.dislike === 1){
        setFlags({...flags, like: false, dislike: true});
        getPosts();
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    Liked();
    getPosts();
  }, [flags.like, flags.dislike]);


  

  const toogleLike = () =>
    setFlags({ ...flags, like: !flags.like, dislike: false });
  const toogleDislike = () =>
    setFlags({ ...flags, dislike: !flags.dislike, like: false });

  const like = async (): Promise<void> => {
    await API.post(`/posts/${data.id}/like`, {like: true}, headers).then(() => {
      toogleLike();  
    });
  }

  const dislike = async (): Promise<void> => {
    await API.post(`/posts/${data.id}/like`, {like: false}, headers).then(() => {
      toogleDislike();   
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
        <Text w="100%" color="#6F6F6F" fontSize="12px" fontWeight="400">
          Enviado por: <strong>{data.creatorName}</strong>
        </Text>

        <Text fontSize="18px" color="black" fontWeight="400" w="100%" onClick={() => openPost(data.id)}>
          {data.content}
        </Text>

        <Container display="flex" gap="15px" align="center" w="100%">
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

          {data.comments !== undefined && (
            <Container
              radius="28px"
              p="5px 10px"
              border="1px solid #6F6F6F"
              display="flex"
              align="center"
              gap="5px"
            >
              <IoChatboxOutline className="icon" />
              <Text
                color="#6F6F6F"
                display="inline"
                fontSize="10px"
                fontWeight="700"
              >
                {data.comments > 999
                  ? `${(data.comments / 1000).toFixed(1)}k`
                  : data.comments}
              </Text>
            </Container>
          )}
        </Container>
      </Items>
    </>
  );
};

export default ItemsPost
