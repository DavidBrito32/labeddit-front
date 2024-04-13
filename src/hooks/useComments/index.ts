import { useEffect, useState } from "react"
import { AxiosResponse } from "axios"
import { API } from "../../services/API";

interface Comments {
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
}

interface Output {
    data: Array<Comments>;
    error: string | null;
    loading: boolean;
    getComments: () => Promise<void>;
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



export const useComments = (id: string): Output => {
    const token = localStorage.getItem("token");

    const headers: Headers = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const [data, setData] = useState<Array<Comments>>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getComments = async (): Promise<void> => {
        await API.get(`/posts/${id}/comments`, headers).then((item: AxiosResponse<Array<Comments>>) => {
            setData(item.data);
            setLoading(false);
        }).catch((error: AxiosErro) => {
            setError(error.response.data);
            setLoading(false);
        })
    }

    useEffect(() => {
        getComments();
    }, []);

    return { data, error, loading, getComments };

}