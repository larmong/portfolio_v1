import { Route, Routes } from "react-router-dom";

import Layout from "@commons/layout";
import Intro from "@pages/intro";
import Contact from "@pages/contact";
import About from "@pages/about";
import Profile from "@pages/profile";
import Project from "@pages/project";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Intro />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
