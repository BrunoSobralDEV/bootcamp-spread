import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Button } from "@mui/material";


const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) {
      document.querySelector('#noSearch').innerText = 'Usuário não encontrado'
      return
    };
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
      <TextField 
        size="small"
        fullWidth 
        type="text"
        id="outlined-basic" 
        label="Nome do usuário..." 
        placeholder="Digite o username para pesquisa..."
        variant="outlined" 
        onChange={(event) => setUsernameForSearch(event.target.value)}
      />
        {/* <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        /> */}
        {/* <button type="submit" onClick={submitGetUser}>
          <span><SearchIcon /> Buscar</span>
        </button> */}
        <Button variant="contained" type="submit" onClick={submitGetUser}>
          <SearchIcon /> Buscar
        </Button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
