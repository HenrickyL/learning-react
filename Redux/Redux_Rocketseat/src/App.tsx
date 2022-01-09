import { Provider } from "react-redux";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import store from "./store";
import { StApp } from "./styleGlobal";

function App() {
  return (
    <StApp>
      <Provider store={store}>
        <h1>ola</h1>
        <Video />
        <Sidebar />
      </Provider>
    </StApp>
  )
  
  
}

export default App;
