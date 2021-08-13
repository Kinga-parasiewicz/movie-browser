import { MediumTile } from "../../common/Tile/MediumTile";
import React, { useEffect } from "react";
import { movieData } from "../../movieData";
import Pagination from "./../../common/Pagination/index";
import { useSelector, useDispatch } from "react-redux";
import { StatusChecker } from "./../../common/StatusChecker/index";
import { Container } from "./../../common/Container/index";
import { NoResult } from "./../../common/NoResult";
import { pageState } from "./../../common/pageState";
import { selectGenerateList } from "./../../common/commonSlice";
import { usePageParameter } from "./../usePageParameters";
import { Header } from "./styled";

import {
  selectList,
  selectLoading,
  selectError,
  selectTotalResults,
  fetchList,
  resetState,
} from "../listSlice";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const pageNumber = +usePageParameter("page");
  const urlQuery = usePageParameter("search");
  const page = pageState(pageNumber);
  const totalResults = useSelector(selectTotalResults);
  const resultsPage = useSelector(selectList);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const generateList = useSelector(selectGenerateList);

  useEffect(() => {
    dispatch(fetchList({ page, urlQuery, type: "movies" }));

    return () => resetState();
  }, [urlQuery, dispatch, generateList, page]);

  return (
    <Container>
      <StatusChecker isError={isError} isLoading={isLoading}>
        {!resultsPage.length ? (
          <NoResult urlQuery={urlQuery} />
        ) : (
          <>
            <Header>
              {urlQuery
                ? `Search results for "${urlQuery}" (${totalResults})`
                : "Popular Movies"}
            </Header>

            <MediumTile
              imageSrc={movieData.poster}
              title={movieData.title}
              subtitle={movieData.subtitle}
              tags={movieData.tags}
              rating={movieData.rating}
              votes={movieData.votes}
            />
            <Pagination />
          </>
        )}
      </StatusChecker>
    </Container>
  );
};

export default MoviesPage;
