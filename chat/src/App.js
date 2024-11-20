import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider, Outlet, useNavigate, useLocation, Navigate } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from './pages/Home/Home';
import LeftBar from './components/LeftBar/LeftBar';
import Messages from './pages/Messages/Messages';
import Profile from './pages/Profile/Profile';
import Friends from './pages/Friends/Friends';
import Media from './pages/Media/Media';
import Games from './pages/Games/Games';
import Setting from './pages/Setting/Setting';
import Navbar from './components/Navbar/Navbar';
import { useCallback, useContext, useEffect, useState } from 'react';
import Login from './pages/Login/Login';
import Banner from './components/Banner/Banner';
import ViewGuest from './pages/VỉewGuest/ViewGuest';

import { io } from "socket.io-client";
import { AuthContext } from './context/authContext';
import { makeRequest } from './axios';

function App() {

  const { handleLogout, currentUser } = useContext(AuthContext);
  const [user, setUser] = useState('');
  const [socket, setSocket] = useState(null); 

  useEffect(() => {
    // Khởi tạo socket khi component mount
    const socket = io("http://localhost:8900");
    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, []); // Chỉ chạy một lần khi component mount

  console.log(socket)
  useEffect(() => {
    if (socket) {
      socket.emit("login", currentUser?.username);

      // socket.on('forceLogout', (message) => {
      //   alert(message);  // Thông báo cho người dùng
      //   handleLogout();  // Gọi hàm để log out
      // });

      return () => {
        socket.off('forceLogout');  // Cleanup khi component unmount
      };
    }
  }, [socket, currentUser, user])

  const queryClient = new QueryClient();
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add('light-mode'); // Mặc định là chế độ sáng
    }
  }, []);

  const [selected, setSelected] = useState(() => {
    // Kiểm tra localStorage khi load lại trang
    const savedIndex = localStorage.getItem('activeIndex');
    return savedIndex ? parseInt(savedIndex) : 0; // Nếu có giá trị lưu trong localStorage thì dùng, ngược lại mặc định là 0
  });

  useEffect(() => {
    localStorage.setItem('activeIndex', selected);
  }, [selected], localStorage.getItem('activeIndex'));


  const toggleTheme = useCallback(() => {
    if (document.body.classList.contains('dark-mode')) {
      // Chuyển về chế độ sáng
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
    } else {
      // Chuyển về chế độ tối
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    }
  }, []);
  const handleGuest = () => {
    setAuthor(true)
  }

  const [author, setAuthor] = useState(true);
  const Layout = () => {
    return (
      <div>
        <QueryClientProvider client={queryClient}>
          {currentUser && user.trim() !== '' ?
            <div className='app-container'>
              <div className='leftbar'>
                <LeftBar toggleTheme={toggleTheme} selected={selected} setSelected={setSelected} /></div>
              <div className='contentbar'>
                <Outlet /></div>
            </div> :

            <div className='none-author'>
              <div className='banner'>
                <Banner />
              </div>
              <div className='view-guest'>
                <ViewGuest handleGuest={handleGuest} setSelected={setSelected} />
              </div>
            </div>}

        </QueryClientProvider>
      </div>
    )
  }
  console.log(currentUser, user)
  const ProtectedRoute = ({ children }) => {
    useEffect(() => {
      const auth = async () => {
        try {
          if (currentUser) {
            const response = await makeRequest.post('/auth/authorize', { username: currentUser.username });
            setUser(currentUser.username);
          } else {
            setUser('');
          }
        } catch (error) {
          if (error.response && error.response.status === 404) {
            setUser('');
          } else {
            console.error('Có lỗi xảy ra:', error);
            // Xử lý lỗi khác (như 500, timeout, v.v.)
            alert('Đã xảy ra lỗi, vui lòng thử lại sau');
          }
        }
      };
      auth();
    }, [currentUser])

    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: <Home />
        },
        {
          path: "/search",
          element: <Home />
        },
        {
          path: "/profile/:username",
          element: <Profile />
        },
        {
          path: "/messages",
          element: <Messages socket={socket} />
        },
        {
          path: "/friends",
          element: <Friends />
        },
        {
          path: "/media",
          element: <Login />
        },
        {
          path: "/games",
          element: <Games />
        },
        {
          path: "/setting",
          element: <Setting />
        },
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
