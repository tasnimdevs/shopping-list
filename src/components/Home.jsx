import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="w-1/2 m-auto h-screen flex items-center">
            <div className="p-5 border w-full">
                <h1 className="text-center text-lg font-bold mb-5"><Link to="/categories">Category</Link></h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ducimus quasi consectetur aut, praesentium sint magnam aperiam ad nesciunt sunt voluptas, facere velit at ipsa quis perferendis quos iste earum.
            </div>
        </div>
    );
};
export default Home;
