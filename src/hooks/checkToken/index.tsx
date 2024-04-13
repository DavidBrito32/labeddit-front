import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export const CheckToken = ({ children }: Props): JSX.Element => {

  const token: string | null = localStorage.getItem("token");

  if (!token || token?.length < 10) {
    return (
      <>
        {" "}
        <Navigate to={"/login"} />{" "}
      </>
    );
  } else {
    return <> {children} </>;
  }
};