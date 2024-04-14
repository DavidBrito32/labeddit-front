import { List } from "../../styles/styled";
import ItemsPost from "./items";

export type Posts = {
  id: string;
  creatorId: string;
  creatorName: string;
  content: string;
  like: number;
  dislike: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
};

interface Props {
  data: Array<Posts>;
  getPosts: () => Promise<void>;
}

const Posts = ({ data, getPosts }: Props) => {
  return (
    <>
      <List gap="10px" display="flex" flexdir="column" pb="30px">
        {data.reverse().map((item, index) => (
          <span key={index}>
            {" "}
            <ItemsPost data={item} getPosts={getPosts} />{" "}
          </span>
        ))}
      </List>
    </>
  );
};

export default Posts;
