import { Card } from ".";

export const Result = () => (
  <Card.Side className="sm:rounded-none sm:rounded-b-card md:rounded-none md:rounded-r-card lg:rounded-card bg-gradient-to-t to-blue-light from-blue-royal text-center justify-around py-4 text-white h-full">
    <Card.Top>Your Result</Card.Top>
    <Card.Value>76</Card.Value>
    <div className="flex flex-col w-58 mx-auto">
      <span className="text-3xl pb-2">Great</span>
      <span className="text-gray-400">
        You scored higher than 65% of the people who have taken these tests.
      </span>
    </div>
  </Card.Side>
);
