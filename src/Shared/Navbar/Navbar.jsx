import  { useContext } from 'react';
import './Navbar.css';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className="navbar bg-green-200 h-1">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mb-6 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/package'>Packages</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
{/*                            
                            {
                                        user?.uid? <li><button onClick={handleLogout}>Sign out</button></li>: <li><Link to='/login'>Login</Link></li>
                            } */}
                              {
                                    user?.uid ? (
                                        <div className="dropdown dropdown-end ml-3 mb-[40px]  ">
                                            <label style={{ marginBottom: '50px' }} id='imgggg' tabIndex={0} className="btn btn-ghost btn-circle avatar mb-[20px]">
                                                <div className="w-10 rounded-full mb-[20px]">
                                                    <img style={{ marginBottom: '200px' }} id='imgbb'  className='' src={user.photoURL} alt='ddd' />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><Link to='/profile'>Profile</Link></li>


                                                <li onClick={handleLogout}><a>Logout</a></li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <li><Link to='/login'>Login</Link></li>
                                    )
                                }


                        </ul>
                    </div>
                    <img src='https://i.ibb.co/gtTfrjr/travelfreak.png' alt='' className='logo' />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  h-16 mb-6" id='navlist' >
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/package'>Packages</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                        
                        {/* {
                                        user?.uid? <li><button onClick={handleLogout}>Sign out</button></li>: <li><Link to='/login'>Login</Link></li>
                         } */}
                               {
                                    user?.uid ? (
                                        <div className="dropdown dropdown-end  ">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full ">
                                                <img src={user.photoURL} alt='ddd' />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><Link to='/profile'>Profile</Link></li>


                                                <li onClick={handleLogout}><a>Logout</a></li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <li><Link to='/login'>Login</Link></li>
                                    )
                                }
                          

                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Navbar;