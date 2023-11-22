import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and QueryClientProvider

const queryClient = new QueryClient(); // Create a new instance of QueryClient

const Profile = () => {
    const isAdmin = true;
    
    return (
        <QueryClientProvider client={queryClient}> {/* Wrap your component tree with QueryClientProvider */}
            <div className=''>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button sm:hidden md:hidden lg:hidden">Open drawer</label>
                    </div>
                    <div className="drawer-side bg-green-200 ">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full  text-base-content">
                            {/* Sidebar content here */}
                            {/* <Outlet></Outlet> */}
                            {
                                isAdmin ? <>
                                   
                                    <li><Link to='postblog'><img className='h-8 w-8 decoration-black' src="https://i.ibb.co/zGv0jNF/content-writing.png" alt="salary" />PostBlog</Link></li>
                                </> : <>
                                    
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default Profile;
