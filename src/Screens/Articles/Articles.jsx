import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectArticles,
  selectErrorMessage,
  selectIsError,
  selectIsLoading,
} from "../../Store/Articles/selectors";
import { getArticles } from "../../Store/Articles/actions";
import "./Articles.css";
import { StuffList } from "../../Components/StuffList/StuffList";

export const Articles = () => {
  const articles = useSelector(selectArticles);
  const errorMessage = useSelector(selectErrorMessage);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();

  const requestArticles = async () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    requestArticles();
  }, []);

  return (
    <>
      <div className="Stuff-page">
        <h3 className="Stuff-heading">STUFF NEWS</h3>
        <div className="Stuff-loading">{isLoading && <CircularProgress />}</div>
        {!isError ? (
          <StuffList stuff={articles} />
        ) : (
          <>
            <h4>Error: {errorMessage}</h4>
            <button onClick={requestArticles}>Try again</button>
          </>
        )}
      </div>
    </>
  );
};
