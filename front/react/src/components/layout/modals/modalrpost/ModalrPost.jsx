import React, { useEffect, useState } from "react";

import getAllCommentPost from './UserSelectedComments';
import getPost from "./UserSelectedPost";
import getAllPost from "./UserSelectedAllPosts";

import { handleSubmitComment, sendComment } from '@/components/pages/start/_main/center/CenterPostComments';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";


const ModalrPost = ({ showModal, setShowModal, userData }) => {
    {/* Dialog Modal - Plus */}

    const [idPost, setIdPost] = useState(null);

    const [allCommentsPostID, setAllCommentsPostID] = useState(null);
    const [updateComment, setUpdateComment] = useState(false);
    const [Post, setPost] = useState(null);
    const [commentsToShow, setCommentsToShow] = useState(2); // number of comments to show


    useEffect(() => {
        if (showModal) {
            getAllPost().then((data) => {
              const randomIndex = Math.floor(Math.random() * data.length);
              setIdPost(data[randomIndex].id);
            });
          }
    }, [showModal]); 


    useEffect(() => {
        if (!idPost) return;
        getAllCommentPost(idPost).then((data) => {
            setAllCommentsPostID(data);
            // console.log("COMMENTS", data);
        });
        getPost(idPost).then((data) => {
            setPost(data);
            // console.log("IMAGE", data);
        });
        setCommentsToShow(2); // reset the number of comments to show when the post changes
    }, [idPost]);
    
    // update the comments list when the post changes
    useEffect(() => {
        if (updateComment) {
            getAllCommentPost(idPost).then((data) => {
                setAllCommentsPostID(data);
                console.log("COMMENTS UPDATED!", data);
            });
            setUpdateComment(false);
        }
    }, [updateComment, idPost]);

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


    // Post a new comment
    const handleFormSubmit = (event, postId) => {
        event.preventDefault();
        handleSubmitComment(event, postId, userData);
        // update the comments list
        setUpdateComment(true);
        if (updateComment) {
            getAllCommentPost(idPost).then((data) => {
                setAllCommentsPostID(data);
                console.log("COMMENTS UPDATED!", data);
            });
            setUpdateComment(false);
        }
    };

    const handleShowMore = () => {
        setCommentsToShow(commentsToShow + 2); // increment the number of comments to show
    };


    return (
        <div>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="block mx-auto w-auto">
                    <div className="h-fit w-[500px] rounded-md border p-5 mx-auto">
                    <div className="rounded-lg">

                        <div key={Post?.id} className='bg-slate-100 rounded-lg'>
                            <div className='relative'>
                                <div className='relative' id='perfectsquare'> {/* id='perfectsquare look css' */}
                                <img
                                    src={`http://localhost:5000/${Post?.path}`}
                                    className='rounded-t-lg overflow-hidden absolute w-full h-full'
                                    style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    }}
                                    alt={Post?.path}
                                />
                                </div>

                                <div className='bg-black bg-opacity-60 text-white p-3 absolute bottom-0 left-0 right-0'>
                                    <p className='text-lg'>{Post?.username}</p>
                                    <p className='text-sm font-light inline-flex w-1/2'>Date de publication : {convertTimestamptoDatefr(Post?.date)}</p>
                                    <p className='text-sm font-light inline-flex w-1/2 justify-end italic'>{convertTimestampToHumanReadable(Post?.date)}</p>
                                </div>
                            </div>

                            <p className='text-sm px-2 pt-2'>
                                <strong>♔ Créateur : </strong><span>{Post?.description}</span>
                            </p>
                            
                            <section className='px-4 pb-4 flex flex-col justify-center'>
                            {allCommentsPostID && allCommentsPostID
                                .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)) // sort by createdAt in descending order
                                .slice(0, commentsToShow) // show only the first 'commentsToShow' comments
                                .map((comment) => (
                                <div key={comment._id} className='flex flex-row text-sm'>
                                    <p className='font-medium'>By {comment.authorName} :</p>
                                    <p className='pl-1 grow'> {comment.content}</p>
                                    <p className='italic'>{convertTimestampToHumanReadable(comment.createdAt)}</p>
                                </div>
                                ))}
                            {commentsToShow < allCommentsPostID?.length && (
                                <button
                                className='mx-auto text-gray-400 hover:text-gray-500 font-bold rounded text-sm'
                                onClick={handleShowMore}>
                                Voir plus de commentaire(s) ({allCommentsPostID?.length - commentsToShow})
                                </button>
                            )}
                            </section>

                            <form className='flex flex-row justify-center items-center gap-2 px-2 pb-7' onSubmit={(e) => handleFormSubmit(e, Post.id)}>
                                <input
                                    type='text'
                                    className='grow p-2 border border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-200 focus:ring-1 rounded-md text-sm placeholder:text-sm placeholder:text-slate-400'
                                    name={`comment-${Post?.id}`}
                                    id={`comment-${Post?.id}`}
                                    placeholder='Ajouter un commentaire'
                                    onChange={(e) => {
                                        const button = document.querySelector(`#button-${Post?.id}`);
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
                                <button id={`button-${Post?.id}`} className='bg-slate-400 text-white p-2 rounded-md text-sm' type='submit' disabled>
                                    Envoyer
                                </button>
                            </form>

                        </div>
            

                    </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ModalrPost;