import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

import "./Posts.css";

const Posts = () => {
    const photos = useSelector((state) => state.photos.entity);
    const users = useSelector((state) => state.users.entity);
    const posts = useSelector((state) => state.posts.entity);

    const postsLoading = useSelector((state) => state.posts.loading);
    const postsError = useSelector((state) => state.posts.error);

    const { isEnter } = useSelector((state) => state.user);
    const navigate = useNavigate();

    function filterPosts(arr) {
        let posts = [];
        for (let i = 0; i < arr.length; i++) {
            if (!posts.map((post) => post.userId).includes(arr[i].userId)) {
                posts.push(arr[i]);
            }
        }
        if (
            JSON.stringify(posts.map((post) => post.userId)) ===
            JSON.stringify(users.map((user) => user.id))
        ) {
            return posts;
        }
    }

    function filterPhotos(arr) {
        let photos = [];
        for (let i = 0; i < arr.length; i++) {
            if (
                !photos.map((photo) => photo.albumId).includes(arr[i].albumId)
            ) {
                photos.push(arr[i]);
            }
        }

        return photos.filter((photo) => {
            if (
                posts
                    .map((post) => post.userId)
                    .some((userId) => userId === photo.albumId)
            ) {
                return photo;
            }
        });
    }
    const filteredPosts = filterPosts(posts); 
    const filteredPhotos = filterPhotos(photos);     

    useEffect(() => {
        if (isEnter) {
            navigate("/posts");
        } else {
            navigate("/");
        }
    }, [isEnter, navigate]);

    return (
        <>
            <Header />
            <div className="p">
                {postsLoading && <h2>{postsLoading}</h2>}
                {postsError && <h2>{postsError}</h2>}
                {filteredPosts && (
                    <>
                    <Post
                        key={filteredPosts[0]?.id}
                        title={filteredPosts[0]?.title}
                        body={filteredPosts[0]?.body}
                        img={filteredPhotos[0]?.url}
                        name={users[0]?.name}
                        company={users[0]?.company.name}
                    />
                    <Post
                        key={filteredPosts[1]?.id}
                        title={filteredPosts[1]?.title}
                        body={filteredPosts[1]?.body}
                        img={filteredPhotos[1]?.url}
                        name={users[1]?.name}
                        company={users[1]?.company.name}
                    />
                    <Post
                        key={filteredPosts[2]?.id}
                        title={filteredPosts[2]?.title}
                        body={filteredPosts[2]?.body}
                        img={filteredPhotos[2]?.url}
                        name={users[2]?.name}
                        company={users[2]?.company.name}
                    />
                    <Post
                        key={filteredPosts[3]?.id}
                        title={filteredPosts[3]?.title}
                        body={filteredPosts[3]?.body}
                        img={filteredPhotos[3]?.url}
                        name={users[3]?.name}
                        company={users[3]?.company.name}
                    />
                    </>
                )}
            </div>
        </>
    );
};

export default Posts;
