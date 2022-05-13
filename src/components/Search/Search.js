import React, { useState } from "react";
import { SearchContainer } from "./searchElements";
import { Container } from "../Container";
const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <Container mt="80px">
      <SearchContainer>
        <form>
          <input
            placeholder="Search ..."
            type="text"
            value={text}
            autoFocus
            onChange={(e) => onChange(e.target.value)}
          />
        </form>
      </SearchContainer>
    </Container>
  );
};

export default Search;
