import { Route, Routes } from 'react-router-dom';

import Layout from '@commons/layout';
import Intro from "@pages/intro";
import Skill from '@pages/skill';
import Contact from '@pages/contact';
import About from '@pages/about';
import Project from '@pages/project';

export default function App() {
  return <Routes>
    <Route element={<Layout />}>
      <Route path='/' element={<Intro />} />
      <Route path='about' element={<About />} />
      <Route path='skill' element={<Skill />} />
      <Route path='project' element={<Project />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  </Routes>;
}
