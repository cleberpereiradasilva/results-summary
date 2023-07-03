import { Card } from "@/components/Card";
import { Button } from "@/components/button";
import Image from "next/image";
export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center p-24 mobile:p-0
     mobile:items-start md:items-center md:justify-center  
     w-screen h-screen font-hanken-grotesk bg-slate-100"
    >
      <Card.Root className="mobile:flex-col h-2/3 mobile:w-full md:rounded-4xl bg-white md:shadow-2xl md:shadow-slate-200">
        <Card.Result />
        <Card.Side className="mobile:shadow-none md:rounded-4xl flex flex-col mobile:w-full md:w-1/2 px-4 justify-around py-4 text-white h-full">
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
      </Card.Root>
    </main>
  );
}
