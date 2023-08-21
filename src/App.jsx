import normalize from './styles/normalize.css';
import { createGlobalStyle } from 'styled-components';
import { layout } from './styles/theme';

import React, { useState } from 'react';
import RatingSection from './components/RatingSection';
import ResultSection from './components/ResultSection';

const GlobalStyle = createGlobalStyle`
${normalize}

#root {
  height: 100vh;
  width: 100%;
  background: #131518;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
  ${layout.center}
}
`;

const App = () => {
  const [submitStatus, setSubmitStatus] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleSubmit = () => {
    if (selected === 0) {
      alert('Choose a rating');
    } else {
      setSubmitStatus(true);
    }
  };

  return (
    <>
      <GlobalStyle />
      {submitStatus ? (
        <ResultSection selected={selected} />
      ) : (
        <RatingSection
          selected={selected}
          setSelected={setSelected}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default App;
