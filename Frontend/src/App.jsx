import { Routes, Route } from "react-router-dom";
import Code from "./pages/code/code";
import Graphic from "./pages/graphic/graphic";
import Music from "./pages/music/music";
import Photos from "./pages/photos/photos";
import WebThemes from "./pages/webThemes/webThemes";
import Video from "./pages/video/video";
import Dimension from "./pages/3D/3D";
import Layout from "./layout";
import CSS from "./pages/code/cssComponent";
import License from "./components/license/license";
import Download from "./components/download/download";
import Login from "./components/login/login";
import Logo from "./components/logo/logo";
import Java from "./pages/code/javaComponent";
import JS from './pages/code/javaScript'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Logo />} />
          <Route path="code" element={<Code/>} />
          <Route path="graphics" element={<Graphic />} />
          <Route path="music" element={<Music />} />
          <Route path="photos" element={<Photos />} />
          <Route path="web" element={<WebThemes />} />
          <Route path="video" element={<Video />} />
          <Route path="dimension" element={<Dimension />} />
          <Route path="/css" element={<CSS />} />
          <Route path="license" element={<License />} />
          <Route path="/java" element={<Java />} />
          <Route path="download" element={<Download />} />
          <Route path="sign-in" element={<Login />} />
          <Route path="/js" element={<JS />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
