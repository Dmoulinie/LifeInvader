import { useUserContext } from '@/components/layout/Context/Context';
import React, { useEffect, useState } from 'react';

import getAllPosts from './CenterGetPosts';
import { getCommentsByPostId } from './CenterGetComments';
import { handleSubmitComment, sendComment } from './CenterPostComments';

import './Center.css';

const Center = () => {
    const userData = useUserContext();
    const [allPosts, setallPosts] = useState(null);
    const [isloading, setisloading] = useState(true);

    const [allCommentsPostID, setallCommentsPostID] = useState({});
    const [postID, setpostID] = useState(null);
    
    const [commentsToShow, setCommentsToShow] = useState({}); // initialize an empty object

    const [postsToShow, setPostsToShow] = useState(6); // initial number of posts to show

    // Load all posts
    useEffect(() => {
        setisloading(true);
        getAllPosts().then((AllPosts) => {
            setallPosts(AllPosts);
            const timeout = setTimeout(() => {
                setisloading(false);
            }, 1500); //min 1.5s de chargement
            return () => clearTimeout(timeout);
        });
    }, []);
    // console.log('Posts:', allPosts);

    // Sort Posts by date
    function orderbyDate(a, b) {
        return b.date - a.date;
    }
    if (allPosts) {
        allPosts.sort(orderbyDate);
    }

    function convertTimestamptoDatefr(timestamp) {
        // format date en français : DD/MM/YYYY HH:MM
        const date = new Date(timestamp);
        return date.toLocaleDateString('fr-FR');
    }

    function convertTimestampToHumanReadable(timestamp) {
        //si la date (pas que des chiffres), converti en timestamp
        if (isNaN(timestamp)) {
            timestamp = Date.parse(timestamp);
        }

        const timestampSeconds = Math.floor(timestamp / 1000);
        const nowSeconds = Math.floor(Date.now() / 1000);
        const timeDiffSeconds = nowSeconds - timestampSeconds;

        let humaindate = 0;
        let moment = "";
        if (timeDiffSeconds < 60) {
            moment = 'à l\'instant';
        } else if (timeDiffSeconds < 3600) {
            humaindate = Math.floor(timeDiffSeconds / 60);
            moment = "minute";
        } else if (timeDiffSeconds < 86400) {
            humaindate = Math.floor(timeDiffSeconds / 3600);
            moment = "heure";
        } else if (timeDiffSeconds < 604800) {
            humaindate = Math.floor(timeDiffSeconds / 86400);
            moment = "jour";
        } else if (timeDiffSeconds < 2592000) {
            humaindate = Math.floor(timeDiffSeconds / 604800);
            moment = "semaine";
        } else if (timeDiffSeconds < 31104000) {
            humaindate = Math.floor(timeDiffSeconds / 2592000);
            moment = "mois";
        } else {
            humaindate = Math.floor(timeDiffSeconds / 31104000);
            moment = "an";
        }

        if (humaindate > 1 && moment !== "mois") {
            humaindate = `il y a ${humaindate} ${moment}s`;
        } else if (moment !== "à l\'instant") {
            humaindate = `il y a ${humaindate} ${moment}`;
        } else {
            humaindate = moment;
        }

        return humaindate;
    }

    // Load all comments
    useEffect(() => {
        if (allPosts !== null && allPosts.length > 0) {
            allPosts.forEach((post) => {
                getCommentsByPostId(post.id).then((comments) => {
                    setallCommentsPostID((prevComments) => ({ ...prevComments, [post.id]: comments }));
                });
            });
            console.log('Comments:', allCommentsPostID);
        }

        // update comments after posting a new comment
        if (postID !== null) {
            getCommentsByPostId(postID).then((comments) => {
                setallCommentsPostID((prevComments) => ({ ...prevComments, [postID]: comments }));
            });
        }
    }, [allPosts]);


    // Update comments when postID changes
    useEffect(() => {
        if (postID !== null) {
            getCommentsByPostId(postID).then((comments) => {
                setallCommentsPostID((prevComments) => ({ ...prevComments, [postID]: comments }));
            });
            setpostID(null);
        }
    }, [postID]);

    // Post a new comment
    const handleFormSubmit = (event, postId) => {
        handleSubmitComment(event, postId, userData);
        setpostID(postId);
    };

    useEffect(() => {
        if (allPosts) {
            allPosts.forEach((post) => {
            setCommentsToShow((prevPostCommentsToShow) => ({ ...prevPostCommentsToShow, [post.id]: 3 }));
            });
        }
    }, [allPosts]);

    const handleShowMore = (postId) => {
        setCommentsToShow((prevPostCommentsToShow) => ({
          ...prevPostCommentsToShow,
          [postId]: prevPostCommentsToShow[postId] + 2,
        }));
    };

    const handleShowMorePosts = () => {
        setPostsToShow(postsToShow + 6); // increment the number of posts to show
    };
    

    return (
        <div className='min-h-screen w-full'>
            <h1 className='mt-1 ml-10 mb-6 xl:text-2xl md:text-xl text-lg font-medium'>Les derniers posts disponibles <span className='font-extrabold italic'>({allPosts ? allPosts.length : 0}) </span> :</h1>

            {isloading ? (
                <div className='pt-40 flex justify-center'>
                    <p className='mr-8 text-center text-lg'>Chargement des postes...</p>
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:px-10 px-3'>
                    {allPosts.slice(0, postsToShow).map((post) => (
                        <div key={post.id}>
                        <div key={post.id} className='bg-slate-100 rounded-lg'>
                            <div className='relative'>
                                <div className='relative' id='perfectsquare'> {/* id='perfectsquare look css' */}
                                <img
                                    src={`http://localhost:5000/${post.path}`}
                                    className='rounded-t-lg overflow-hidden absolute w-full h-full'
                                    style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    }}
                                    alt={post.path}
                                />
                                </div>

                                <div className='bg-black bg-opacity-60 text-white p-3 absolute bottom-0 left-0 right-0'>
                                    <p className='text-lg'>{post.username}</p>
                                    <p className='text-sm font-light inline-flex w-1/2'>Date de publication : {convertTimestamptoDatefr(post.date)}</p>
                                    <p className='text-sm font-light inline-flex w-1/2 justify-end italic'>{convertTimestampToHumanReadable(post.date)}</p>
                                </div>
                            </div>

                            <p className='sm:text-sm text-xs px-2 pt-2'>
                                <strong>♔ Créateur : </strong><span>{post.description}</span>
                            </p>
                            
                            <section className='px-4 pb-4 flex flex-col justify-center'>
                            {allCommentsPostID[post.id] && [...allCommentsPostID[post.id]]
                                .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)) // sort by createdAt in descending order
                                .slice(0, commentsToShow[post.id]) // show only the first 'commentsToShow' comments
                                .map((comment) => (
                                <div key={comment._id} className='flex flex-row sm:text-sm text-xs'>
                                    <p className='font-medium'>By {comment.authorName} :</p>
                                    <p className='pl-1 grow'> {comment.content}</p>
                                    <p className='italic'>{convertTimestampToHumanReadable(comment.createdAt)}</p>
                                </div>
                                ))}
                            {commentsToShow[post.id] < allCommentsPostID[post.id].length && (
                                <button
                                className='mx-auto text-gray-400 hover:text-gray-500 font-bold rounded text-xs sm:text-sm'
                                onClick={() => handleShowMore(post.id)}>
                                Voir plus de commentaire(s) ({allCommentsPostID[post.id].length - commentsToShow[post.id]})
                                </button>
                            )}
                            </section>
                            { userData && (
                            <form className='flex flex-row justify-center items-center gap-2 px-2 pb-7' onSubmit={(e) => handleFormSubmit(e, post.id)}>
                                <input
                                    type='text'
                                    className='grow p-2 border border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-200 focus:ring-1 rounded-md text-sm placeholder:text-sm placeholder:text-slate-400'
                                    name={`comment-${post.id}`}
                                    id={`comment-${post.id}`}
                                    placeholder='Ajouter un commentaire'
                                    onChange={(e) => {
                                        const button = document.querySelector(`#button-${post.id}`);
                                        if (e.target.value !== '') {
                                            button.disabled = false;
                                            button.classList.remove('bg-slate-400');
                                            button.classList.add('bg-sky-600');
                                        } else {
                                            button.disabled = true;
                                            button.classList.remove('bg-sky-600');
                                            button.classList.add('bg-slate-400');
                                        }
                                    }}
                                />
                                <button id={`button-${post.id}`} className='bg-slate-400 text-white p-2 rounded-md text-sm' type='submit' disabled>
                                    Envoyer
                                </button>
                            </form>
                            )}

                        </div>
                            <hr className='md:my-20 sm:my-18 my-12 w-10/12 mx-auto border-gray-300'></hr>
                        </div>
                    ))}
                {postsToShow < allPosts.length && (
                    <button
                      className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mb-20'
                      onClick={handleShowMorePosts}>
                      Montrer plus ({allPosts.length - postsToShow} restant(s))
                    </button>
                )}
                </div>
            )}

        </div>
    );
};

export default Center;