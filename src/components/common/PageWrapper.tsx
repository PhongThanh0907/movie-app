import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppState, setAppState } from "../../redux/features/appStateSlice";

const PageWrapper = ({
  state,
  children,
}: {
  state: string;
  children: JSX.Element;
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setAppState(state));
  }, [state, dispatch]);

  return children;
};

export default PageWrapper;
