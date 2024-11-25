import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BannerHome from '../../components/BannerHome/BannerHome';
import OnlineFriends from '../../components/OnlineFriends/OnlineFriends';
import Posts from '../../components/Posts/Posts';
import Stories from '../../components/Stories/Stories';
import useScrollPosition from '../../hooks/useKeepPositionScroll';
import './Home.css'

const Home = () => {
    const { postId } = useParams();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.startsWith("/post")) {

        }
    })
    const [isLargeScreen, setIsLargeScreen] = useState(true);
    const [isHeightScreen, setIsHeightScreen] = useState(true)
    const listMessRef = useRef(null);
    useEffect(() => {
        if (listMessRef.current) {
            // Lấy màu nền của phần tử cha
            const parentBgColor = window.getComputedStyle(listMessRef.current).backgroundColor;

            // Áp dụng màu nền cho thanh cuộn, đặt giá trị nền của thanh cuộn là transparent
            listMessRef.current.style.setProperty('--scrollbar-track-bg', parentBgColor);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setIsLargeScreen(screenWidth > 900); // Kiểm tra kích thước màn hình
        };

        // Lắng nghe sự kiện thay đổi kích thước cửa sổ
        window.addEventListener("resize", handleResize);

        // Gọi hàm lần đầu tiên khi component mount
        handleResize();

        // Cleanup khi component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const screenHeight = window.innerHeight;
            setIsHeightScreen(screenHeight > 400); // Kiểm tra kích thước màn hình
        };

        // Lắng nghe sự kiện thay đổi kích thước cửa sổ
        window.addEventListener("resize", handleResize);

        // Gọi hàm lần đầu tiên khi component mount
        handleResize();

        // Cleanup khi component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [scrollPosition, elementRef] = useScrollPosition();

    useEffect(() => {
        const savedPosition = sessionStorage.getItem("posts");
        const element = elementRef.current;

        // Đảm bảo elementRef đã được gán và có giá trị
        if (savedPosition && element) {
            element.scrollTop = parseInt(savedPosition, 10); // Đặt lại vị trí cuộn
        }
    }, []); // Chạy một lần khi component mount lại

    useEffect(() => {
        // Lưu vị trí cuộn vào sessionStorage mỗi khi nó thay đổi
        if (postId === undefined) {
            sessionStorage.setItem("posts", scrollPosition);
        }
    }, [scrollPosition, postId]); // Chạy lại mỗi khi vị trí cuộn thay đổi
    const combinedRef = (node) => {
        // Gán node cho cả hai ref
        listMessRef.current = node;
        elementRef.current = node;
    };
    return (
        <div>
            {isLargeScreen ?
                <div className="home_container">
                    <div className='lefthome'>
                        <div className='banner-home'>

                            <BannerHome isLargeScreen={isLargeScreen} setIsLargeScreen={setIsLargeScreen} />
                        </div>
                        <div className='main-home' ref={combinedRef}>
                            <Posts postId={postId} />
                        </div>
                    </div>

                    <div className='righthome'>
                        <div className='toprighthome'>
                            <Stories />
                        </div>

                        <div className='botrighthome'>
                            <OnlineFriends />
                        </div>
                    </div>

                </div> :
                <div className="home_container">
                    <div className='lefthome-drop'>
                        <div className='banner-home'>
                            <BannerHome />
                        </div>
                        <div className='main-home' ref={combinedRef}>
                            <Posts postId={postId} />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
export default Home