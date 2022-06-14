import React from "react";
import useGithub from "../../hooks/github-hooks";
import StatusCount from "../statusCount";
import * as S from "./styled";
import GitHubIcon from '@mui/icons-material/GitHub';

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
      <S.WrapperInfoUser>
        <div>
          <h1><GitHubIcon/> {githubState.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>{githubState.user.company? 'Company:' : ''}</h3>
            <span>{githubState.user.company}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>{githubState.user.location ? 'Location:' : ''}</h3>
            <span>{githubState.user.location}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>{githubState.user.blog ? 'Blog:' : ''}</h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </S.WrapperUserGeneric>
        </div>
        
        <StatusCount />
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
