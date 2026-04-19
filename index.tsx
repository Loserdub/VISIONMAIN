import React from 'react';
import './assets/index.css';
import { ViteReactSSG } from 'vite-react-ssg';
import App from './App';
import App from './App';
import Home from './components/Home';
import MusicList from './music/musicList'; // Fixed path
import ProjectsList from './projects/projectsList'; // Fixed path
import Biography from './aboutme/Biography'; // Fixed path
import WhatIsHybrid from './components/WhatIsHybrid'; 
import Services from './aboutme/Services'; // Fixed path
import Contact from './components/Contact';

export const createRoot = ViteReactSSG({
  routes: [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: 'music', element: <MusicList /> },
        { path: 'projects', element: <ProjectsList /> },
        { path: 'bio', element: <Biography /> },
        { path: 'what-is-hybrid', element: <WhatIsHybrid /> },
        { path: 'services', element: <Services /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ],
});
