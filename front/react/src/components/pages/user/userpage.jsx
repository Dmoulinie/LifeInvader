import { useUserContext } from '@/components/layout/Context/Context';
import React, { useState, useEffect } from 'react';
import Anonymous from '@/assets/start/account_anonymous.png';

import UserUtility from "./UserUtility";
import getAllUserPosts from './UserPosts';

import ModalPost from './modal/ModalPost';

import './Userpage.css';

const User = () => {
  const userData = useUserContext();
  const OtherInfo = UserUtility();
  
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true); // finishes after 1.5s minimum, and when userPosts is set (after fetching data)
  const [postID, setPostID] = useState(null); // userPosts[0].id

  const [showModalPost, setShowModalPost] = useState(false);

  const handleOpenPost = (e, id) => {
    setShowModalPost(!showModalPost);
    setPostID(id);
    // console.log('Post ID:', id);
  };

  let current_user = {
    "name": "Anonyme",
    "id": "00000001",
    "node_id": "MDQ6VXNlcjkwMDMxMTg1",
    "avatar_url": Anonymous,
    "html_url": "./login",
    "postCount": "0",
    "followerCount": "0",
    "followingCount": "0",
    "nickname": "Veuillez vous connecter pour voir les informations.",
    "profession": "Je suis un(e) Anonyme.",
    "hobby": "être Anonyme."
  }


  if (userData) {
    current_user = {
      "name": userData.name,
      "id": userData.id,
      "node_id": userData.node,
      "avatar_url": userData.avatar,
      "html_url": userData.html,
      "postCount": OtherInfo.postCount,
      "followerCount": OtherInfo.followerCount,
      "followingCount": OtherInfo.followingCount,
      "nickname": OtherInfo.nickname,
      "profession": OtherInfo.profession,
      "hobby": OtherInfo.hobby
    }
    // console.log(userData)
  }

  useEffect(() => {
    if (userData) {
      getAllUserPosts(userData.name).then((AllPosts) => {
        setUserPosts(AllPosts);
        const timeout = setTimeout(() => {
          setLoading(false);
        }, 1500); //min 1.5s de chargement
        return () => clearTimeout(timeout);
      });
      // console.log('Posts:', userPosts);
    }
  }, [userData]);

  function orderbyDate(a, b) {
    return b.date - a.date;
  }
  if (userPosts) {
    userPosts.sort(orderbyDate);
  }

  return (
    <section>
      <div className='pt-5 pb-24 mx-auto'>
        <div className='flex sm:flex-row flex-col align-center items-center justify-center mt-4'>

          <img src={current_user.avatar_url} alt={current_user.name} className='rounded-full w-40 h-40'>
          </img>

          <div className='sm:ml-[7rem] sm:mt-0 mt-8 w-4/12'>
            <h2 className='text-2xl'>{current_user.name}</h2>
            <p className='text-gray-500'>#{current_user.id}</p>

            <div className='flex flex-row sm:mt-6 mt-4'>
              <p className='text-md'><span className='font-semibold'>{userPosts?.length}</span> Posts</p>
              <p className='text-md ml-9'><span className='font-semibold'>{current_user.followerCount}</span> Followers</p>
              <p className='text-md ml-9'><span className='font-semibold'>{current_user.followingCount}</span> Suivi(e)s</p>
            </div>

            <p className='sm:mt-4 mt-5 text-sm'>
              <span className='font-bold text-md'>{current_user.name}</span><br />
              <span className='text-gray-500'>@{current_user.nickname}</span><br />
              🙀{current_user.profession}🙀<br />
              ❤️J'adore {current_user.hobby}❤️<br />
              Mon site web : <a href={current_user.html_url} target='_blank' className='text-sky-600 hover:text-sky-400 cursor-pointer'>===ici===</a>
            </p>
          </div>

        </div>

        <hr className='sm:mt-20 mt-16 w-7/12 mx-auto border-gray-300'></hr>

        <div className='lg:w-8/12 md:w-8/12 w-10/12 mx-auto'>
          <h2 className='text-2xl mt-10 font-medium mb-4'>Vos Post{userPosts.length === 1 ? '' : 's'} ({userPosts.length})</h2>
          <div>
            {userPosts === null || current_user.name === "Anonyme" ? (
              <p className='font-base text-lg'>Connectez-vous pour voir vos posts.</p>
            ) : (loading) ? (
              <>
                <p className='mb-4'>Chargement...</p>
                <div className="three-body">
                  <div className="three-body__dot"></div>
                  <div className="three-body__dot"></div>
                  <div className="three-body__dot"></div>
                </div>
              </>
            ) : (userPosts.length === 0) ? (
              <p>Aucun postes de disponibles.</p>
            ) : (
              <div className='grid sm:grid-cols-3 grid-cols-2 2xl:gap-2 gap-1 align-center justify-center'>
                {userPosts.map((post) => (

                  <div key={post.id} className='relative' id='perfectsquare'> {/* id='perfectsquare look css' */}
                    <img
                      src={`http://localhost:5000/${post.path}`}
                      className='rounded-lg overflow-hidden absolute w-full h-full'
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                      alt={post.path}
                    />
                    <div className='bg-black w-full h-full absolute rounded-lg bg-opacity-0 hover:bg-opacity-50 cursor-pointer transition-all' onClick={(e) => handleOpenPost(e, post.id)}>
                      <div className='opacity-0 hover:opacity-100 absolute text-white xl:text-xl text-base font-semibold text-center w-full flex justify-center h-full items-center'>
                        <p>Voir le post ▲</p>
                      </div>
                    </div>
                  </div>

                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    <ModalPost showModal={showModalPost} setShowModal={setShowModalPost} userData={userData} idPost={postID}/>
    </section>
  );
};

export default User;