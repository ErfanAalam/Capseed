import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    return (
        <>
            <nav className='absolute w-[100%]'>
                <ul className='flex justify-between pt-10 px-32 items-center'>
                    <a href=""><li>Home</li></a>
                    <a href=""><select name="services" id="" className='bg-transparent flex items-center'>
                        <option value="Services">Services</option>
                    </select></a>
                    <a href=""><li>About us</li></a>
                    <a href=""><img src="/Assets/Logo-12.png" alt="" className='w-[60px]' /></a>
                    <a href=""><li>Contact us</li></a>
                    <a href=""><li>Apply now</li></a>
                    <a href=""><li><MenuIcon fontSize='large' /></li></a>

                </ul>
            </nav>
        </>
    )
}

export default Navbar
