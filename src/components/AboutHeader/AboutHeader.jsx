import React from 'react';

function all() {
    return (  
        <div className=' absolute inset-x-0 top-40 bg-mainbg'>
            <p className='relative ml-10 text-7xl text-white bg-transparent font-semibold'>It's all about</p>
            <div className='ml-10 inline-block h-11 w-4/12 bg-secondary -mt-14'>     </div>
            <div className=' mb-10 ml-64'>
                <p className='relative text-7xl text-white bg-transparent font-semibold'>the people.</p>
                <div className='-ml-5 inline-block h-11 w-96 bg-primary -mt-14'>     </div>
            </div>    
        </div>
    );
}

export default all;