import { useUserContext } from '@/components/layout/Context/Context';
import React, { useState, useEffect } from 'react';
import Anonymous from '@/assets/start/account_anonymous.png';

import UserUtility from "./UserUtility";
import getAllUserPosts from './UserPosts';

import './Userpage.css';

const User = () => {
  const userData = useUserContext();
  const OtherInfo = UserUtility();
  
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
  
  
  const [userPosts, setUserPosts] = useState(null); 
  const [loading, setLoading] = useState(true);
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
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        });
        console.log('Posts:', userPosts); 
      }
    }, [userData]);



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
                            <p className='text-md'><span className='font-semibold'>{current_user.postCount}</span> Posts</p>
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
                <h2 className='text-2xl mt-10 font-medium mb-4'>Vos Posts</h2>
                <div>
                  {userPosts === null || current_user.name === "Anonyme" ? (
                    <p className='float'>Connectez-vous pour voir vos posts.</p>
                  ) : (loading) ? (
                    <>
                    <p className='mb-4'>Chargement...</p>
                    <div class="three-body">
                      <div class="three-body__dot"></div>
                      <div class="three-body__dot"></div>
                      <div class="three-body__dot"></div>
                    </div>
                    </>
                  ) : (userPosts.length === 0) ? (
                    <p>Aucun postes de disponibles.</p>
                  ) : (
                    <div className='grid grid-cols-3 lg:gap-2 gap-1'>
                    { userPosts.map((post) => (

                      <div key={post.id}>
                        <div className='w-full 2xl:h-[32vh] xl:h-[27vh] lg:h-[17vh] md:h-[18vh] h-[15vh]' style={{ 
                          backgroundImage: `url("http://localhost:5000/${post.path}")`, 
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                          }}></div>
                      </div>
                    
                    )) }
                    </div>
                  )}
                </div>
              </div>

            </div>
        </section>
    );
};

export default User;