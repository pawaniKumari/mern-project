import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-4xl mx-auto flex justify-center gap-8 items-center flex-col p-6'>
      <h1 className='text-4xl font-bold text-center'>Explore Our Projects</h1>
      <p className='text-lg text-gray-600 text-center max-w-3xl'>
      Explore a captivating collection of elephant-centered projects and activities
       designed to educate, inspire, and spark curiosity. Whether you're a wildlife researcher, 
       student, or elephant enthusiast, these projects offer hands-on experiences — from tracking 
       elephant migration patterns to building awareness campaigns for conservation. Jump in and start 
       exploring the world of elephants in new and creative ways!
      </p>
      <div className='w-full flex flex-col gap-6'>
        <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold dark:text-gray-900'>
          Why Explore Elephant Projects?
          </h2>
          <p className='text-gray-700 mt-2'>
          Working on elephant-related projects is a powerful way to deepen your 
          understanding of wildlife, conservation, and ecology. These hands-on experiences
           let you apply what you’ve learned, engage with real-world environmental challenges, 
           and contribute to meaningful causes. Whether you're raising awareness or developing solutions,
            each project helps build your knowledge and impact in the world of elephant conservation.
          </p>
        </section>
        <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold dark:text-gray-900'>
            What You'll Learn
          </h2>
          <ul className='list-disc list-inside text-gray-700 mt-2'>
            <li>How to understand elephant behavior and social structures</li>
            <li>Insights into habitat conservation and environmental impact</li>
            <li>Techniques for tracking migration and monitoring elephant populations</li>
            <li>Approaches to raise awareness through educational content and storytelling</li>
            <li>Best practices for promoting ethical and sustainable wildlife engagement</li>
          </ul>
        </section>
      </div>
      <CallToAction />
    </div>
  );
}
