import { Routes, Route } from "react-router-dom";
import Code from "./pages/code/code";
import Graphic from "./pages/graphic/graphic";
import Music from "./pages/music/music";
import Photos from "./pages/photos/photos";
import WebThemes from "./pages/webThemes/webThemes";
import Video from "./pages/video/video";
import Course from "./pages/course/course";
import Layout from "./layout";
import CSS from "./pages/code/cssComponent";
import C from "./pages/code/cProgramming";
import Download from "./components/download/download";
import Login from "./components/login/login";
import Logo from "./components/logo/logo";
import Java from "./pages/code/javaComponent";
import JS from "./pages/code/javaScript";
import Cplus from "./pages/code/cPlusPlus";
import Tailwindcss from "./pages/code/tailwindCSSComponent";
import Form from "./pages/code/formComponent";
import Auth from "./pages/code/authentication";
import API from "./pages/code/apiComponent";
import Wordpress from "./pages/webThemes/wordPress";
import Musics from "./pages/music/musics";
import Effectvideo from "./pages/video/afterEffect";
import GraphicPrint from "./pages/graphic/print";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Logo />} />
          <Route path="code" element={<Code />} />
          <Route path="graphics" element={<Graphic />} />
          <Route path="music" element={<Music />} />
          <Route path="photos" element={<Photos />} />
          <Route path="web" element={<WebThemes />} />
          <Route path="video" element={<Video />} />
          <Route path="course" element={<Course />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/c" element={<C />} />
          <Route path="/java" element={<Java />} />
          <Route path="download" element={<Download />} />
          <Route path="sign-in" element={<Login />} />
          <Route path="/js" element={<JS />} />
          <Route path="/cplusplus" element={<Cplus />} />
          <Route path="/tailwindcss" element={<Tailwindcss />} />
          <Route path="/form" element={<Form />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/api" element={<API />} />
          <Route path="/wordpress" element={<Wordpress />} />
          <Route path="/musics" element={<Musics />} />
          <Route path="/effectvideo" element={<Effectvideo />} />
          <Route path="/graphicPrint" element={<GraphicPrint />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
