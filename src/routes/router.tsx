import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import NotFoundPage from "../pages/notFoundPage";

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;