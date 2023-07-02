import { Card } from ".";

export const Result = () => (
  <Card.Side className="mobile:rounded-b-4xl md:rounded-4xl flex flex-col mobile:w-full md:w-1/2 bg-gradient-to-t to-blue-light from-blue-royal text-center justify-around py-4 text-white h-full">
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
