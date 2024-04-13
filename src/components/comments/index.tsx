import { List } from "../../styles/styled";
import ItemsComments from "./items";


type Comments = {
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
  };

interface Props {
    data: Array<Comments>;
    getPosts: () => Promise<void>;
}


const Comentarios = ({data, getPosts}: Props) => {   

    return (
        <>
        <List gap="10px" display="flex" flexdir="column" pb="30px">
            {
                data && data.map((item, index) => (
                    <span key={index}> <ItemsComments data={item} getPosts={getPosts} /> </span>
                ))
            }
        </List>
        </>
    );
};

export default Comentarios;