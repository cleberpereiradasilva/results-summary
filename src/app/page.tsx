import { Card } from "@/components/Card";
export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center p-24
     max-mobile:items-start md:items-center justify-center  
     w-screen h-screen font-hanken-grotesk bg-slate-100"
    >
      <Card.Root className="max-mobile:flex-col h-4/5 max-mobile:w-full bg-white md:shadow-2xl md:shadow-slate-200">
        <Card.Result />
        <Card.Side className="mobile:rounded-b-4xl md:rounded-4xl flex flex-col max-mobile:w-full md:w-1/2 px-4 justify-around py-4 text-white h-full">
          <Card.Title>Summary</Card.Title>
          <Card.Subject
            icon={<img src="./img/icon-reaction.svg" />}
            title="Reaction"
            value={80}
            className="bg-neutral-light text-primary-light"
          />

          <Card.Subject
            icon={<img src="./img/icon-memory.svg" />}
            title="Memory"
            value={92}
            className="bg-neutral-orangey text-primary-orangey"
          />

          <Card.Subject
            icon={<img src="./img/icon-verbal.svg" />}
            title="Verbal"
            value={61}
            className="bg-neutral-green flex text-primary-green"
          />

          <Card.Subject
            icon={<img src="./img/icon-visual.svg" />}
            title="Visual"
            value={72}
            className="bg-neutral-cobalt flex text-primary-cobalt"
          />

          <div className="h-16 mt-6">
            <button className="bg-gray-700 text-white font-bold h-12 rounded-4xl w-full">
              Continue
            </button>
          </div>
        </Card.Side>
      </Card.Root>
    </main>
  );
}
