
import { createContext, useState } from 'react';
import { Route, Routes, useNavigation } from 'react-router';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import UsersPage from './pages/UsersPage';

type Theme = 'light' | 'dark'
type ContextType = { theme: Theme, toggleTheme: ((theme: Theme) => void) | null }

export const Context = createContext<ContextType>({ theme: 'light', toggleTheme: null })

function App() {

  const [theme, setTheme] = useState<Theme>('light')
  const toggleTheme = (theme: 'light' | 'dark') => setTheme(theme)
  const nav = useNavigation()

  return (
    <div className="App">
      <Context.Provider value={{ theme: theme, toggleTheme }}>
        <Nav />
        {/* <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='users' element={<UsersPage />} />
          <Route path='users/:id' element={<div>id</div>} />
        </Routes> */}
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='/profile/*' element={<ProfilePage />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/users/:id' element={<div>id</div>} />
          </Route>



        </Routes>
        {/* {
          useRoutes([
            {
              path: '/',
              element: <HomePage />,
              children: [
                {
                  path: 'profile',
                  element: <ProfilePage />
                },
                {
                  path: 'users/',
                  element: <ProfilePage />,
                  children: [
                    {
                      path: ':id',
                      element: <div>id</div>
                    }
                  ]
                }
              ]
            }
          ])
        } */}
      </Context.Provider>
    </div>
  );
}

export default App;
