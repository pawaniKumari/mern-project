import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-10  px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl pt-10'>Discover the World of Wild Giants</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
        Welcome to the World of Elephants! Here, you’ll find a wide range of stories,
         facts, and resources all about the majestic giants of the wild — elephants.
          Whether you’re fascinated by their deep intelligence, social bonds, 
          unique behaviors, or their vital role in ecosystems, there's something
           here for every wildlife enthusiast. Dive into articles about their habitats,
            conservation efforts, and fun elephant trivia. Step into the wild and
             explore the world of these gentle giants like never before.     
         </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-green-500 font-bold hover:underline'
        >
          View all docs
        </Link>
        <div className='p-3 bg-yellow-50 dark:bg-sky-950'>
          <CallToAction />
        </div>
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-3'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Docss</h2>
            <div className='flex flex-wrap gap-3'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all Docs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
