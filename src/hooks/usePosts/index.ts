import { useEffect, useState } from "react"
import { AxiosResponse } from "axios"
import { API } from "../../services/API";

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

interface Output {
    data: Array<Posts>;
    error: string | null;
    loading: boolean;
    getPosts:  () => Promise<void>
}

interface Headers {
    headers: {
        Authorization: string;
    }
}

interface AxiosErro {
    response: {
        data: string;
    }
}



export const usePosts = (): Output => {
    const token = localStorage.getItem("token");

    const headers: Headers = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const [data, setData] = useState<Array<Posts>>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getPosts = async (): Promise<void> => {
        await API.get("/posts", headers).then((item: AxiosResponse<Array<Posts>>) => {
            setData(item.data);
            setLoading(false);
        }).catch((error: AxiosErro) => {
            setError(error.response.data);
            setLoading(false);
        })
    }

    useEffect(() => {
        getPosts();
    }, []);

    return { data, error, loading, getPosts };

}