import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsAuthed } from "../../Store/Profile/selectors";

export const PublicOutlet = () => {
  const isAuthed = useSelector(selectIsAuthed);
  return !isAuthed ? <Outlet /> : <Navigate to="/chats" replace />;
};
