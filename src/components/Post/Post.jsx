import React from 'react';
import './Post.css'

const Post = ({title, body, img, name, company}) => {
           
    return (
        <div className="p-post">
            <img src={img} alt="avatar" className="p-img" />
            <div className="p-title">
                <h2 className="p-title-p">Author: {name}</h2>
                <h2 className="p-title-p">Company: {company}</h2>
            </div>
            <div className="p-desc">
                <h3 className="p-title-b">
                    {title}
                </h3>
                <h3 className='p-title-b'>
                   {body}
                </h3>
            </div>
        </div>
    );
}

export default Post;
