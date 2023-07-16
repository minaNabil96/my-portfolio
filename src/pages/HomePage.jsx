import React, { useEffect } from "react";
import Landing from "../components/Landing";
import WithPackage from "../components/WithPackage";
import OurWorks from "../components/OurWorks";
import { useRefreshQuery } from "../store/api/apiSlice";
import { openContact } from "../store/reducers/languageSlice";
import { useDispatch } from "react-redux";
const HomePage = () => {
  const { isSuccess, isLoading, isError, error, data: res } = useRefreshQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (res && res.status === "ready") {
      dispatch(openContact(true));
    } else {
      dispatch(openContact(false));
    }
  }, [dispatch, res]);
  return (
    <>
      <Landing />
      <WithPackage />
      <OurWorks />
    </>
  );
};

export default HomePage;
