import React, { useState, memo, useMemo} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [searchText, setSearchText] = useState('');
    
    //to handle change in search-text
    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };
   
    //to handle the search (navigate to search page)
    const handleSearch = () => {
        if (searchText.trim() !== '') {
            navigate(`/search/${searchText.trim()}`);
            setSearchText(''); 
        }
    };
    
    //to show the path
    const renderPath = useMemo(() => {
        if (pathname.startsWith('/search/')) {
            return (
                <>
                    <p>Dashboard</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="header_path_arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    <p className="header_path_to">Search</p>
                </>
            );
        }
        if (pathname === '/home') {
            return <p>Dashboard</p>;
        }
        return null;
    }, [pathname]);

    return (
        <header className="header_main">
            {/* Header left section */}
            <div className="header_path">
                {renderPath}
            </div>

            {/* Header right section */}
            <div className="header_right">
                <div className="header_search">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="header_search_icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input 
                        type="text" 
                        placeholder="Search anything..." 
                        value={searchText} 
                        onChange={handleSearchChange} 
                        required
                    />
                    <button onClick={handleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>

                <div className="header_notifi">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>
                </div>

                <div className="header_user">
                    <div className="header_icon_cont">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="header_user_icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                    <p>User</p>
                </div>
            </div>
        </header>
    );
};

export default memo(Header);
