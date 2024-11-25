import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LeftBar.css';
const LeftBar = ({ toggleTheme, selected, setSelected, toggleSearchForm, isSearchOpen , toggleMenuMoreForm, isMenuMoreOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // const items = [
    //     { index: 1, link: '/' },
    //     { index: 2, link: '/search' },
    //     { index: 3, link: '/friends' },
    //     { index: 4, link: '/messages' },
    //     { index: 5, link: '/media' },
    //     { index: 6, link: '/games' },
    //     { index: 7, link: '/profile'},
    //     { index: 8, link: '/setting' }
    // ];


    // useEffect(() => {
    //     // Lấy đường dẫn hiện tại
    //     const currentPath = location.pathname;
    //     const pathSegments = currentPath.split('/');
    //     const mainSegment = pathSegments[1];
    //     // So sánh đường dẫn với danh sách items
    //     const foundItem = items.find(item => item.link === '/' + mainSegment); 
    //     // Nếu không tìm thấy đường dẫn, log ra console 1
    //     if (!foundItem) {
    //         setSelected(1);
    //     } else {
    //         if (pathSegments.length > 2) {
    //             setSelected(0);
    //         }
    //         else setSelected(foundItem.index);
    //     }
    // }, []);

    // Hàm thay đổi màu khi nhấn vào SVG
    const handleClick = (index, link) => {
        setSelected(index); // Lưu lại chỉ số của SVG được nhấn
        isSearchOpen && toggleSearchForm();
        isMenuMoreOpen && toggleMenuMoreForm();
        if (link) navigate(link);
    };

    useEffect(() => {
        // Đảm bảo rằng Leftbar luôn giữ kích thước cố định khi zoom
        document.documentElement.style.zoom = "100%";
    }, []);
    return (
        <div className="leftbar">
            <div className="leftbar-menu">
                <ul>
                    <li onClick={() => handleClick(1, '/')} className={selected === 1 ? 'active' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className={selected === 1 ? 'active' : ''}>
                            <g><g><g>
                                <path d="M123.3,22.7c-2.8,1.5-111.1,110-112.4,112.5c-2.3,5-0.2,11.4,4.7,14.4c2.6,1.6,3,1.7,10.4,1.8l7.7,0.2v41.3v41.3h17.5h17.5v-29.7v-29.7h18h18v29.7v29.7h58.8h58.8v-41.3v-41.3l7.7-0.2c7.1-0.2,7.8-0.3,10.2-1.7c4.6-2.7,6.8-8,5.4-13.1c-0.6-2.2-2.1-4-12-13.9l-11.3-11.4v-27v-27h-17.5h-17.5v9.2c0,5-0.2,9.2-0.4,9.2c-0.2,0-12-11.6-26.2-25.8c-14.2-14.2-26.7-26.3-27.8-26.9C130.4,21.6,125.7,21.4,123.3,22.7z M199,169.3V187h-29.7h-29.7v-17.7v-17.7h29.7H199L199,169.3L199,169.3z" /></g></g></g>

                        </svg>
                    </li>
                    <li onClick={toggleSearchForm} className={isSearchOpen ? 'active' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className={isSearchOpen ? 'active' : ''}>
                            <g><g><g><path d="M94.7,10.8c-43.4,6.5-77.8,41.3-84,84.8c-1.4,9.4-0.9,25,1,33.7c9,42.5,43.1,73.8,86.1,79.2c6.3,0.7,19.1,0.6,25.4-0.3c9.7-1.4,19-4.1,27.6-8.1l4.8-2.2l21.7,21.5c23.2,23.2,24.1,23.8,31.1,25.6c4.1,1,11.5,1.1,15.5,0c10.1-2.7,18.7-11.3,21.4-21.4c1-4,1-11.4,0-15.5c-1.8-7-2.4-7.9-25.6-31.1L198,155.6l2.2-4.8c5.9-12.8,8.8-26.1,8.8-40.8c0-16.9-3.2-30.7-10.7-45.5c-14.9-29.3-42.2-49-74.7-53.8C116.9,9.8,101.6,9.8,94.7,10.8z M126.2,26.1c41.4,8.7,70,45.1,68.2,86.8c-0.6,14.8-4.8,28.6-12.5,41.1l-2.4,3.9l25.1,25.2c22.6,22.7,25.2,25.5,26,27.8c4.1,12.4-7.4,23.8-19.8,19.8c-2.3-0.8-5-3.4-27.8-26l-25.2-25.1l-3.9,2.4c-24.8,15.3-56.4,16.7-82.1,3.8c-24-12.1-40.2-33.2-45.9-59.8c-1.6-7.4-1.8-23.6-0.3-31.5c5.7-30.9,27.7-56,57.2-65.7c5.3-1.7,10.7-2.9,17.7-3.9c0.9-0.1,5.8-0.2,10.9-0.1C118.6,24.9,122.3,25.3,126.2,26.1z" />
                                <path d="M103.1,39.6C66.8,43.1,39.6,72.9,39.5,109c-0.1,15,3.7,27.7,12.1,40.1c3.4,5.1,13.1,14.8,18.1,18.2c8.4,5.6,18.2,9.6,27.8,11.3c6,1,17.3,1,23.7,0.1c28.9-4.7,52.8-28.6,57.4-57.4c1-6.4,1-17.7-0.1-23.7C177,88,173,78.1,167.4,69.8c-3.4-5-13-14.7-18.2-18.1c-5.5-3.6-12.1-7-17.8-8.8C123,40.1,111.6,38.8,103.1,39.6z M125,48.7c11.2,2.9,19.7,7.7,28.2,16.2c8.9,8.8,14.1,17.7,17.2,29.4c1.8,6.7,2.2,18.4,1,25.6c-4.5,26.5-25.2,47.2-51.7,51.7c-7.2,1.2-18.9,0.8-25.6-1C74,165.2,57.3,150,50.3,130.7c-4.6-12.9-4.7-29.4-0.1-42.2c7.3-20.3,25-35.9,45.7-40.3C104.7,46.2,116.4,46.4,125,48.7z" /></g></g></g>

                        </svg>
                    </li>
                    <li onClick={() => handleClick(9, '/friends')} className={selected === 9 ? 'active' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className={selected === 9 ? 'active' : ''}>
                            <g><g>
                                <path d="M218.2,86.4c0-34.5-28-62.4-62.4-62.4s-62.4,28-62.4,62.4c0,23.8,13.3,44.5,33,55c-31.5,13-53.8,44-53.8,80.2c0,2.7,0.1,5.3,0.4,7.9c2,1.7,4.3,2.6,6.6,2.5c2.6-0.1,5.1-1,7.4-2.3c-0.3-2.7-0.5-5.4-0.5-8.1c0-40.2,32.6-72.9,72.9-72.9c1,0,2,0,3,0.1c0.1,0,0.3,0,0.4-0.1c12.7-1.9,19.7-5.6,25.5-8.9c0,0-0.1,0-0.1,0C206.1,128.9,218.2,109,218.2,86.4z M155.8,134.9c-26.8,0-48.6-21.7-48.6-48.6c0-26.8,21.7-48.6,48.6-48.6c26.8,0,48.6,21.7,48.6,48.6C204.4,113.2,182.6,134.9,155.8,134.9z M215.1,155.3c-6.3-0.1-9.6,4.9-10.7,9.2c16.9,13.3,27.7,34,27.7,57.2c0,2.9-0.2,5.7-0.5,8.5c2.2,1.2,4.8,2.1,7.4,2c2.4-0.1,4.7-1.3,6.6-2.9c0.2-2.5,0.3-5,0.3-7.5C246,195,234,171.2,215.1,155.3z M93.3,141.9c1.3-0.2,6.9-0.7,6.9-6.9s-6.9-6.9-6.9-6.9s-19.7,0.9-20.8,0c-1.1-0.9-23.9-11.7-20.8-41.6c3-29.9,26.2-35.6,34.7-34.7c1.3-0.2,7.4,0,6.9-6.9c-0.4-6.9-4.6-6.7-6.9-6.9c-2.4-0.2-48.8-1.7-48.6,55.5c0.2,25.6,13.9,34.7,13.9,34.7s-36.7,8.9-41.7,69.4c0.2,19.5,0,20.8,0,20.8s-1.3,6.7,6.9,6.9c8.9,0.2,6.9-6.7,6.9-13.9s-7.2-54.9,41.6-69.4C68.2,141.2,93.3,141.9,93.3,141.9z" /></g></g>

                        </svg>
                    </li >


                    <li onClick={() => handleClick(5, '/media')} className={selected === 5 ? 'active' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className={selected === 5 ? 'active' : ''}>
                            <g><g><path d="M104,91.1l59,36.9l-59,36.9V91.1z" />
                                <path d="M201.8,39.5H54.3H10v177h44.3h147.5H246v-177H201.8z M24.8,54.3h14.8v29.5H24.8V54.3z M24.8,113.3h14.8v29.5H24.8V113.3z M24.8,201.8v-29.5h14.8v29.5H24.8z M54.3,201.8V54.3h147.5v147.5H54.3z M231.3,201.8h-14.8v-29.5h14.8V201.8z M231.3,142.8h-14.8v-29.5h14.8V142.8z M231.3,83.8h-14.8V54.3h14.8V83.8z" /></g></g>

                        </svg>
                    </li>
                    <li onClick={() => handleClick(6, '/games')} className={selected === 6 ? 'active' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className={selected === 6 ? 'active' : ''}>
                            <g><g><g><path d="M67.4,50.9c-22.2,6-44.2,35.4-53.3,71.3c-3.2,12.7-4.1,19.3-4.1,32.1c0,9.1,0.1,11.7,1,16.3c3.3,17.9,11.1,29.8,22.3,33.9c3.1,1.2,4.1,1.3,9,1.3c5,0,6-0.2,9.6-1.4C71,197.5,90,173.7,99.7,144l1-3.1l3.8-1.8c8.5-4,15.4-5.7,23.4-5.7s14.8,1.7,23.4,5.7l3.8,1.8l1,3.1c6.9,21,19.5,40.9,32.7,51.4c9.7,7.8,17.8,11,26.6,10.5c27.6-1.5,38.8-43.9,24.2-91.5c-10-32.7-31.9-59.2-52.6-63.8c-4.1-0.9-10.9-0.7-13.6,0.5c-1.6,0.6-6,0.7-45.5,0.7c-39.7,0-43.9-0.1-45.5-0.8C79.5,49.8,71.7,49.7,67.4,50.9z M189.6,72.4c3.2,1.3,4.8,3.6,4.8,6.9c0.1,5.8-5.9,9.4-11.1,6.8c-5.5-2.9-5.2-10.9,0.6-13.5C186.3,71.5,187.5,71.5,189.6,72.4z M75.3,73.1c11.2,3.4,17.9,15.3,15,26.6c-2.9,10.9-13.9,18.2-24.8,16.4c-8.8-1.5-15.9-7.9-18.1-16.5C44.4,88.4,51.1,76.6,62.2,73C65.8,71.9,71.6,71.9,75.3,73.1z M175,87.5c1.1,0.6,2.4,1.6,2.9,2.3c1.8,2.5,1.8,6.3,0,9c-1,1.6-3.9,2.9-6.1,2.9c-8.2,0-10.5-11-3-14.4C171.2,86.2,172.6,86.2,175,87.5z M205.5,87.5c1.1,0.6,2.4,1.6,2.9,2.3c1.8,2.5,1.8,6.3,0,9c-1,1.6-3.9,2.9-6.1,2.9c-8.2,0-10.5-10.9-3-14.4C201.7,86.2,203,86.2,205.5,87.5z M189.6,101.9c3.2,1.3,4.8,3.6,4.8,6.9c0.1,4.2-3.3,7.7-7.4,7.7c-8.3,0-10.6-10.9-3.1-14.4C186.3,101,187.5,101,189.6,101.9z" />
                                <path d="M63.3,80.5c-3.1,1.2-6.6,4.6-8,7.7c-1.4,3.1-1.4,8.7,0,11.9c2,4.4,6.2,7.7,10.9,8.6c6.5,1.2,13.3-2.4,16.1-8.6c1.5-3.3,1.5-8.8-0.1-12C78.8,80.9,70.6,77.7,63.3,80.5z" /></g></g></g>

                        </svg>
                    </li>
                    {/* <li onClick={() => handleClick(3, '/friends')} className={selected === 3 ? 'active' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className={selected === 3 ? 'active' : ''}>
                            <g><g><path d="M213.5,181.6c-7.1,0-12.8-5.8-12.8-12.9V82.9c0-33.2-26.8-60.1-59.9-60.1c0-7.1-5.8-12.9-12.8-12.9s-12.8,5.8-12.8,12.9c-33,0-59.9,26.9-59.9,60.1v85.8c0,7.1-5.7,12.9-12.8,12.9c-7.1,0-12.8,5.8-12.8,12.9c0,7.1,5.8,12.9,12.8,12.9h171.1c7.1,0,12.8-5.8,12.8-12.9C226.4,187.4,220.7,181.6,213.5,181.6z M128,246c14.2,0,25.7-11.5,25.7-25.7h-51.3C102.3,234.5,113.8,246,128,246z" /></g></g>
                        </svg>
                    </li > */}
                    <li onClick={() => handleClick(4, '/messages')} className={selected === 4 ? 'active' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className={selected === 4 ? 'active' : ''} >
                            <g><g><g><path d="M89.6,24.3c-20.3,1.9-37.2,8-52,18.7C29.6,49,20.3,59.7,16.1,68.1c-1.9,3.7-4.2,10.4-5.2,15.1c-1.2,5.2-1.2,17.1,0,22.4c1,4.7,3.3,11.4,5.2,15.1c2.5,4.9,7.4,11.7,11.6,16.1c2.3,2.4,4.1,4.6,4.1,4.8c-0.1,0.2-3.4,6.6-7.6,14.2c-4.1,7.6-7.5,13.8-7.5,13.8c0,0.1,10.5-2.1,23.3-4.8c13.2-2.8,24-4.8,25-4.7c0.9,0.1,3.9,0.8,6.6,1.5c4.7,1.2,12.7,2.5,18.2,2.9l2.5,0.2l0.3-2.7c0.3-2.5,1.8-9.3,2.5-11c0.2-0.5-0.7-0.8-4.6-1c-6.5-0.5-13.9-1.9-20.1-3.8l-5.1-1.6l-10,2.1c-5.5,1.1-10.2,2-10.3,1.8c-0.1-0.1,1-2.4,2.5-5.1c1.5-2.7,2.7-5,2.7-5.1c0-0.1-2.8-2.7-6.2-5.8c-7.1-6.4-11.3-11.5-14.6-17.6C18.3,93.3,25.9,68.8,48.9,53c24.2-16.6,59.8-19,87.3-5.9c19,9.1,31.6,24.1,34.4,40.9c0.6,3.6,0.4,12.4-0.3,14.8C170,104,170,104,174,104c2.3,0,5.6,0.1,7.4,0.4l3.3,0.3l0.4-2.3c0.7-3.9,0.4-14.7-0.5-19c-2.6-12.5-8.4-23-18.2-32.8c-13.7-13.7-31.5-22.3-52.8-25.4C108.6,24.5,94,24,89.6,24.3z" />
                                <path d="M75.1,64c-8.3,2.3-14.3,8.6-16.5,17.2c-1,3.8-1,11.3,0,14.9c1.8,6.8,6.4,13.4,13.7,19.8c2.2,1.9,8,6.1,13,9.4c5,3.3,9.9,6.7,10.8,7.6l1.8,1.5l2.1-1.8c1.2-1,6.2-4.5,11.2-7.8c10.2-6.8,15-10.6,18.9-15.4c3.1-3.7,6.7-10.8,7.5-14.7c1.2-6,0.3-13.2-2.3-18.6c-1.7-3.5-6.2-8.3-9.3-10.1c-8.1-4.4-19.9-3.5-26.3,2.1L98,69.7l-2.5-2c-3.9-3-7.2-4.1-12.9-4.3C79.2,63.3,76.8,63.5,75.1,64z" />
                                <path d="M162.3,109.4c-34.4,3.9-60.3,25-64.3,52.4c-0.7,5.2-0.3,13.2,1,18.3c5.4,20.8,24.2,37.9,49.3,44.5c7.7,2.1,14.6,2.9,23.5,2.9c8.8,0,15.5-0.8,22.9-2.7l5-1.3l19.6,4c10.8,2.2,19.9,4.1,20.3,4.3c0.6,0.2-1.7-4.4-8.6-16.9c-2-3.6-3.6-6.6-3.6-6.8c0-0.1,1.7-2.1,3.7-4.2c20.3-21.2,19.7-51.5-1.2-72.5c-10.9-10.8-25.5-18.1-42.7-21.1C180.7,109.2,168.3,108.7,162.3,109.4z M165.1,140.4c1.4,0.5,3.6,1.7,4.8,2.6l2.2,1.6l1.5-1.2c2.2-1.8,6.5-3.7,9.9-4.2c10.8-1.7,21.2,5.6,23.5,16.6c0.8,3.9,0.4,11-0.9,14.5c-2.7,7.5-9.6,14.7-21.8,22.7c-4.4,2.9-8.9,6-10.1,6.9l-2.1,1.7l-3-2.3c-1.7-1.3-5.9-4.2-9.4-6.5c-11.5-7.6-16.8-12.7-20.4-20c-4.4-8.8-3.4-19.3,2.5-26.7c2.6-3.3,8.2-6.3,13-7C157.2,138.7,162.4,139.3,165.1,140.4z" /></g></g></g>

                        </svg>
                    </li>

                    <li onClick={() => handleClick(7, '/profile/tuhnz')} className={selected === 7 ? 'active' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className={selected === 7 ? 'active' : ''}>
                            <g><g><path d="M128,10C62.8,10,10,62.8,10,128c0,65.2,52.8,118,118,118c65.2,0,118-52.8,118-118C246,62.8,193.2,10,128,10z M128,234.2c-58.6,0-106.2-47.6-106.2-106.2S69.4,21.8,128,21.8S234.2,69.4,234.2,128S186.6,234.2,128,234.2z" />
                                <path d="M187.1,175.8l0-0.1c-2.7-19.8-15.2-37.1-33-45.8c10.2-8,16.2-20.2,16.2-33.3c0-23.3-19-42.2-42.3-42.2c-23.3,0-42.2,19-42.2,42.2c0,13,6,25.3,16.2,33.3c-8.2,4-15.4,9.8-21,17.1c-6.2,8-10.3,17.6-11.8,27.6c-0.4,0.9-0.6,1.9-0.6,2.8l0,0.6c0,4,3.3,7.3,7.4,7.3c3.6,0,6.5-2.5,7.2-5.9h0.1l0.2-1.4c1.3-10.5,6.3-20.3,14.2-27.5c7.9-7.2,18.1-11.4,28.8-11.8c0.2,0,0.4,0,0.5,0c0.3,0,0.6,0,0.9,0c0.3,0,0.6,0,0.9,0c0.2,0,0.4,0,0.5,0c10.7,0.3,21,4.5,28.8,11.8c7.9,7.2,12.9,17,14.2,27.5l0.2,1.4h0.1c0.7,3.3,3.7,5.9,7.2,5.9c4.1,0,7.4-3.3,7.4-7.4l0-0.6C187.3,176.7,187.2,176.2,187.1,175.8z M128,124.1c-15.1,0-27.5-12.3-27.5-27.5c0-15.1,12.3-27.5,27.5-27.5c15.1,0,27.5,12.3,27.5,27.5C155.5,111.7,143.1,124.1,128,124.1z" /></g></g>

                        </svg>
                    </li>
                    <li onClick={toggleMenuMoreForm} className={isMenuMoreOpen ? 'active' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className={isMenuMoreOpen ? 'active' : ''}>
                            <g><g><g><path d="M22.2,44.4c-4.8,1.2-8.8,4.8-10.9,9.5C10.2,56,10,57.1,10,60.6c0,3.8,0.1,4.5,1.5,7.2c1.8,3.6,4.7,6.5,8.4,8.2l2.6,1.2H128h105.5l2.6-1.2c3.6-1.7,6.6-4.5,8.4-8.2c1.3-2.7,1.5-3.4,1.5-7.2s-0.1-4.5-1.5-7.2c-1.8-3.6-4.7-6.5-8.4-8.2l-2.6-1.2l-104.6-0.1C47,43.9,23.9,44,22.2,44.4z" />
                                <path d="M22.2,111.8c-4.8,1.2-8.8,4.8-10.9,9.5c-1.1,2.2-1.2,3.2-1.2,6.7c0,3.8,0.1,4.5,1.5,7.2c1.8,3.6,4.7,6.5,8.4,8.2l2.6,1.2H128h105.5l2.6-1.2c3.6-1.7,6.6-4.5,8.4-8.2c1.3-2.7,1.5-3.4,1.5-7.2s-0.1-4.5-1.5-7.2c-1.8-3.6-4.7-6.5-8.4-8.2l-2.6-1.2l-104.6-0.1C47,111.3,23.9,111.4,22.2,111.8z" />
                                <path d="M22.2,179.3c-4.7,1.2-8.8,4.8-11,9.5c-1,2.2-1.2,3.2-1.2,6.7c0,3.8,0.1,4.5,1.5,7.2c1.8,3.6,4.7,6.5,8.4,8.2l2.6,1.2H128h105.5l2.6-1.2c3.6-1.7,6.6-4.5,8.4-8.2c1.3-2.7,1.5-3.4,1.5-7.2c0-3.8-0.1-4.5-1.5-7.2c-1.8-3.6-4.7-6.5-8.4-8.2l-2.6-1.2l-104.6-0.1C47,178.7,23.9,178.8,22.2,179.3z" /></g></g></g>
                        </svg>
                    </li>
                </ul>
                <div className='toggle-mode'>
                    <button className='toggle-btn' onClick={toggleTheme}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="20" height="20" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className='thumb'>
                            <g><g><g><path d="M113.3,32.9v22.9l1.3-0.3c3.6-0.8,8.3-1.2,13.5-1.2s9.8,0.4,13.5,1.2l1.2,0.3V32.9V10H128h-14.8V32.9z" />
                                <path d="M44.6,44.8L34.2,55.2l15.9,15.9c8.8,8.8,16,15.9,16.2,15.9c0.2,0,1.5-1.6,3-3.6c3.4-4.6,9.5-10.7,14.2-14.1c1.9-1.5,3.5-2.8,3.5-3c0-0.3-31.5-31.8-31.8-31.8C55,34.4,50.3,39.1,44.6,44.8z" />
                                <path d="M184.8,50.2c-8.7,8.7-15.8,15.9-15.8,16c0,0.2,1.6,1.5,3.6,3c4.6,3.4,10.7,9.5,14.1,14.1c1.5,2,2.8,3.6,3,3.6c0.1,0,7.4-7.1,16.2-15.9l15.9-15.9l-10.4-10.4c-5.7-5.7-10.5-10.4-10.6-10.4C200.7,34.4,193.5,41.5,184.8,50.2z" />
                                <path d="M120.9,69.5c-14,1.9-25.9,7.9-35.3,17.7c-7.8,8.2-12.8,17.7-15.2,28.8c-1.5,6.8-1.5,17.1,0,23.9c4.9,23.1,22.6,40.7,45.7,45.7c6.8,1.5,17.1,1.5,23.9,0c23.1-4.9,40.8-22.6,45.7-45.7c0.8-3.8,1-6.3,1-12c0-5.7-0.2-8.2-1-12c-4.9-23.1-22.9-41-45.7-45.6C134.4,69.2,125.6,68.9,120.9,69.5z M136.9,99.8c4.8,1.7,8.3,3.9,11.9,7.4c6.2,6.1,9.1,13.8,8.6,22.5c-0.5,7.5-3.1,13.5-8.6,18.9c-5.5,5.5-11.4,8.2-18.9,8.6c-13.7,0.8-25.6-7.5-30.2-21.1c-1.2-3.6-1.2-13,0-16.6c2.3-6.9,7.2-13.4,12.4-16.5c3-1.8,7.4-3.6,10.1-4.2C125.4,98.3,133.9,98.7,136.9,99.8z" />
                                <path d="M10,128v14.8h22.9h22.9l-0.3-1.3c-1.6-7.5-1.6-19.5,0-27l0.3-1.2H32.9H10V128z" />
                                <path d="M200.6,114.5c0.8,3.7,1.2,8.3,1.2,13.5s-0.4,9.8-1.2,13.5l-0.3,1.3h22.9H246V128v-14.8h-22.9h-22.9L200.6,114.5z" />
                                <path d="M50.1,184.9l-15.9,15.9l10.5,10.5l10.5,10.5l15.9-15.9c8.8-8.8,15.9-16,15.9-16.2c0-0.2-1.6-1.5-3.5-3c-2-1.5-5.4-4.4-7.6-6.6c-2.2-2.2-5.1-5.6-6.6-7.6c-1.5-1.9-2.8-3.5-3-3.5C66.1,169,58.9,176.2,50.1,184.9z" />
                                <path d="M186.7,172.6c-3.4,4.6-9.6,10.7-14.2,14.2c-1.9,1.5-3.5,2.8-3.5,3c0,0.1,7.1,7.4,15.9,16.2l15.9,15.9l10.5-10.5l10.5-10.5l-15.9-15.9c-8.8-8.8-16-15.9-16.2-15.9C189.5,169,188.2,170.6,186.7,172.6z" />
                                <path d="M113.3,223.1V246H128h14.8v-22.9v-22.9l-1.2,0.3c-3.7,0.8-8.3,1.2-13.5,1.2s-9.8-0.4-13.5-1.2l-1.3-0.3V223.1z" /></g></g></g>
                        </svg>
                    </button></div>
            </div>
        </div >
    );
}
export default LeftBar