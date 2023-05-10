import React, { useState } from 'react';
import TopLine from './components/TopLine';
import Modal from './components/Modal';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Content from './components/Content';
import AppStyles from './StyledComponents';

const App = () => {
  const [handleModal, setHandleModal] = useState(false);
  const [handleButtonDelete, setHandleButtonDelete] = useState(false);

  return (
    <AppStyles>
      <TopLine setHandleModal={setHandleModal} />
      <Navigation />
      {handleModal ? <Modal setHandleModal={setHandleModal} /> : undefined}
      <Content setHandleButtonDelete={setHandleButtonDelete} />
      <Footer handleButtonDelete={handleButtonDelete} />
    </AppStyles>
  );
};

export default App;
