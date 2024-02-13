import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './view/Main/Main.jsx';
import Ending1 from './view/Ending1/Ending1.jsx';

import Message1 from './view/Phone/Message1.jsx';
import Message2 from './view/Phone/Message2.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} > </Route>
        <Route exact path="/ending1" element={<Ending1 />} > </Route>
        <Route exact path="/msg1" element={<Message1 />} > </Route>
        <Route exact path="/msg2" element={<Message2 />} > </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
