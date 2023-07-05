import { Card } from ".";
import { Button } from "@/components/button";
import Image from "next/image";

export const Category = () => (
  <Card.Side className="sm:rounded-none lg:rounded-card flex flex-col sm:w-full lg:w-1/2 px-4 justify-around py-4 text-white h-full">
    <Card.Title>Summary</Card.Title>
    <Card.Subject
      icon={
        <Image
          src="./img/icon-reaction.svg"
          width="20"
          height="20"
          alt="icon reaction"
        />
      }
      title="Reaction"
      value={80}
      className="bg-neutral-light text-primary-light"
    />

    <Card.Subject
      icon={
        <Image
          src="./img/icon-memory.svg"
          width="20"
          height="20"
          alt="icon memory"
        />
      }
      title="Memory"
      value={92}
      className="bg-neutral-orangey text-primary-orangey"
    />

    <Card.Subject
      icon={
        <Image
          src="./img/icon-verbal.svg"
          width="20"
          height="20"
          alt="icon verbal"
        />
      }
      title="Verbal"
      value={61}
      className="bg-neutral-green flex text-primary-green"
    />

    <Card.Subject
      icon={
        <Image
          src="./img/icon-visual.svg"
          width="20"
          height="20"
          alt="icon visual"
        />
      }
      title="Visual"
      value={72}
      className="bg-neutral-cobalt flex text-primary-cobalt"
    />
    <div className="h-16 mt-4">
      <Button.DefaultButton>Continue</Button.DefaultButton>
    </div>
  </Card.Side>
);
