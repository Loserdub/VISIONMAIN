import React from 'react';
import { ViteReactSSG } from 'vite-react-ssg';
import App from './App';
import Home from './components/Home';
import MusicList from './components/MusicList';
import ProjectsList from './components/ProjectsList';
import Biography from './components/Biography';
import WhatIsHybrid from './components/WhatIsHybrid';
import Services from './components/Services';
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