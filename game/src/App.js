import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './view/Main/Main.jsx';
import Ending1 from './view/Ending1/Ending1.jsx';
import Message from './view/Phone/Message.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} > </Route>
        <Route exact path="/ending1" element={<Ending1 />} > </Route>
        <Route exact path="/msg1" element={<Message />} > </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
