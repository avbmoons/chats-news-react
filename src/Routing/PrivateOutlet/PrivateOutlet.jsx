import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsAuthed } from "../../Store/Profile/selectors";

export const PrivateOutlet = () => {
  const isAuthed = useSelector(selectIsAuthed);
  return isAuthed ? <Outlet /> : <Navigate to="/" replace />;
};
