import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Think Elephant
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to the Think Elephant!
            This site is dedicated to everything about elephants — from
             their majestic presence in the wild to conservation efforts and scientific insights. 
             Whether you're a wildlife enthusiast, researcher, or just curious about the gentle giants of 
             the animal kingdom, you'll find a trunkful of knowledge here. Dive into detailed articles, 
             fascinating facts, and resources that celebrate and protect elephants around the world.
            </p>

            <p>
            On this site, you'll find regularly updated articles, photo journals, and educational
             resources covering topics such as elephant behavior, habitat conservation, endangered 
             species programs, and the role of elephants in ecosystems. We're always exploring new research
              and stories from the field, so check back often for fresh content celebrating these incredible creatures!
            </p>

            <p>
            We invite you to share your thoughts on our articles and connect with fellow elephant 
            enthusiasts! Feel free to leave comments, like others' insights, and join in meaningful 
            discussions. Whether you're a wildlife expert or just love elephants, your voice helps build
             a vibrant community that learns and grows together.
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <CallToAction />
        </div>
      </div>
    </div>
  );
}