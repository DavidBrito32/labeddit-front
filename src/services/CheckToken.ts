import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config()

export interface TokenPayload {
    id: string;
    name: string;
}

export function tokenManager (token: string){
    try {
        const payload = jwt.verify(token, process.env.JWT_KEY as string);
        return payload as TokenPayload;
        // se a validação falhar, um erro é disparado pelo jsonwebtoken
        // nós pegamos o erro aqui e retornamos null para a Business saber que falhou
    } catch (error) {
        return null;
    }
}