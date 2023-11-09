import { Navigate, RouteProps } from "react-router-dom";
// import useAuthValue from "src/Hooks/Custom/useAuthValue";

export type AuthRouteProps = {
  authenticationPath?: string;
  children: any;
} & RouteProps;

function AuthRouter(props: AuthRouteProps) {
  const { authenticationPath = "/home", children } = props;
  //   const { loggedIn } = useAuthValue();

  if (true) {
    return children;
  } else {
    return <Navigate to={authenticationPath} />;
  }
}

export default AuthRouter;
