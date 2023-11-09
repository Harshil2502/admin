import { Navigate, RouteProps } from "react-router-dom";
// import useAuthValue from "src/Hooks/Custom/useAuthValue";

export type AppRouterProps = {
  authenticationPath?: string;
  children: any;
} & RouteProps;

export default function AppRouter(props: AppRouterProps) {
  const { authenticationPath = "/", children } = props;
  //   const { loggedIn } = useAuthValue();

  if (true) {
    return children;
  } else {
    return <Navigate to={authenticationPath} />;
  }
}
