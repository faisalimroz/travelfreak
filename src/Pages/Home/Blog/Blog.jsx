import  { useEffect, useRef, useState } from 'react';
import './Blog.css';

import Blogdetail from './Blogdetail/Blogdetail';
import { useLoaderData } from 'react-router-dom';
const Blog = () => {
    const searchRef = useRef(null)
    const [search, setSearch] = useState('')
    const handleSearch = () => {
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value)

    }
    const [blogs, setBlog] = useState([]);
    const [currentPage, setCurrentpage] = useState(1);
    const [itemsPerPage, setItemsperpage] = useState(6);
    const { totalBlogs } = useLoaderData();
    console.log(totalBlogs);

    const totalPage = Math.ceil(totalBlogs / itemsPerPage);
    console.log(totalPage)
    const pageNumber = []
    for (let i = 1; i <= totalPage; i++) {
        pageNumber.push(i);
    }

    // const pageNumbers = [...Array(totalPage).keys()]
    // setArrr(arrr.sort(0, 6))
    //option 
    const options = [6, 12, 18];
    const handleSelectChange = (event) => {
        setItemsperpage(parseInt(event.target.value))
        setCurrentpage(1)
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/blog`)
    //         .then(res => res.json())
    //         .then(data => setBlog(data))
    // }, [])
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/blog?page=${currentPage}&limit=${itemsPerPage}&search=${search}`)
            const data = await response.json()
            setBlog(data)

        }
        fetchData();
    }, [currentPage, itemsPerPage, search])
    return (
        <>
            <div className="form-control mt-5 mx-auto">
                <div className="input-group search-field-container">
                    <input id='search' type="text" ref={searchRef} placeholder="Search…" className="input input-bordered search" />
                    <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='mt-8  flex flex-wrap justify-evenly'>

                {
                    blogs.map(blog => <Blogdetail key={blog._id} blog={blog}></Blogdetail>)
                }
            </div>
            <div className='pagination'>
                <p>Current Page: {currentPage} and items per page {itemsPerPage}</p>
                {
                    pageNumber.map(number => <button id='page-button' className={currentPage === number ?
                        'selected' : 'notselected'} key={number} onClick={() => setCurrentpage(number)}>{number}</button>)
                }
                <select value={itemsPerPage} onChange={handleSelectChange}>
                    {
                        options.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>
            </div>
        </>
    );
};

export default Blog;