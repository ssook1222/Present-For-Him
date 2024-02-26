import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './view/Main/Main.jsx';
import Ending1 from './view/Ending1/Ending1.jsx';

import Message1 from './view/Phone/Message1.jsx';
import Message2 from './view/Phone/Message2.jsx';
import Message3 from './view/Phone/Message3.jsx';
import Message4 from './view/Phone/Message4.jsx';
import Message5 from './view/Phone/Message5.jsx';

import Omokgyo from './view/Omokgyo/Omokgyo.jsx';
import HDepartment from './view/Omokgyo/HDepartment.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} > </Route>

        <Route exact path="/ending1" element={<Ending1 />} > </Route>

        <Route exact path="/msg1" element={<Message1 />} > </Route>
        <Route exact path="/msg2" element={<Message2 />} > </Route>
        <Route exact path="/msg3" element={<Message3 />} > </Route>
        <Route exact path="/msg4" element={<Message4 />} > </Route>
        <Route exact path="/msg5" element={<Message5 />} > </Route>

        <Route exact path="/omokgyo" element={<Omokgyo />} > </Route>
        <Route exact path="/Hdepartment" element={<HDepartment />}> </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
