import { 
  TableContainer, 
  Table, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell,
  Paper, 
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";
import DataTable from '../DataTable';

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);
  
const columns = [
  { field: 'name', headerName: 'First name' },
  { field: 'full_name', headerName: 'Last name' },
];

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
            <S.WrapperTab>Table</S.WrapperTab>
            <S.WrapperTab>TableGrid</S.WrapperTab>
          </S.WrapperTabList>

          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>

          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>

          <S.WrapperTabPanel>
            <S.WrapperList>
              <DataTable
                rows={githubState.repositories}
                columns={columns}
                pageSize={5}
                loading={!githubState.repositories.length}
              />
            </S.WrapperList>
          </S.WrapperTabPanel>

          <S.WrapperTabPanel>
            <S.WrapperList>
              <TableContainer component={Paper}>
                <Table sx={{ width: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Full Name</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {githubState.repositories.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row">{item.name}</TableCell>
                      <TableCell><a href={item.html_url}>{item.full_name}</a></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                </Table>
              </TableContainer>
            </S.WrapperList>
          </S.WrapperTabPanel>
          
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
