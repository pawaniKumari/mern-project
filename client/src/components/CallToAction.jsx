import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Want to explore why elephants are considered one of the smartest
          animals on Earth?
        </h2>
        <p className="text-gray-500 my-2">
          Check out our elephant facts hub and start discovering amazing things
          about these gentle giants
        </p>
        <a
          href="https://www.natgeokids.com/uk/discover/animals/general-animals/elephant-facts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            gradientDuoTone="greenToBlue"
            className="rounded-tl-xl rounded-bl-none rounded-br-xl w-full"
          >
            Elephant Facts Hub
          </Button>
        </a>
      </div>
      <div className="flex-1 p-7">
        <img src="https://cdn.mos.cms.futurecdn.net/WGzcuRs4XGskZC3TSMbUNS.jpg" />
      </div>
    </div>
  );
}
