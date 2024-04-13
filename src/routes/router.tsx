import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/notFoundPage";
import SignupPage from "../pages/signup";
import { CheckToken } from "../hooks/checkToken";
import FeedPage from "../pages/feed";
import PostPage from "../pages/post";

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<CheckToken> <FeedPage /> </CheckToken> } />
                    <Route path="/:id" element={<CheckToken> <PostPage /> </CheckToken> } />
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/signup" element={<SignupPage />}/>
                    <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;