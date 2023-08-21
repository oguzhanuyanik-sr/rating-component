import React, { useState } from 'react';
import RatingSection from './components/RatingSection';
import ResultSection from './components/ResultSection';

const App = () => {
  const [isSend, setIsSend] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <>
      {isSend ? (
        <ResultSection selected={selected} />
      ) : (
        <RatingSection
          selected={selected}
          setSelected={setSelected}
          handleSubmit={() =>
            selected === 0 ? alert('Choose a rating') : setIsSend(true)
          }
        />
      )}
    </>
  );
};

export default App;
