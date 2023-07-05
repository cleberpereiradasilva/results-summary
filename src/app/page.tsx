import { Card } from "@/components/Card";

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden flex justify-end bg-slate-100 h-250 absolute right-0">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=cleberpereiradasilva&repo=results-summary&type=star&count=true"
          width="90"
          height="20"
          title="GitHub"
        ></iframe>
      </div>
      <div
        className="flex min-h-screen items-center p-24 sm:p-0
     sm:items-start lg:items-center lg:justify-center  
     w-screen h-screen font-hanken-grotesk bg-slate-100"
      >
        <Card.Root
          className="flex sm:flex-col md:flex-row lg:md-row
        sm:h-full md:h-full 
        sm:w-full md:w-full
        lg:w-2/5 lg:h-2/3 
        lg:rounded-card
         bg-white lg:shadow-2xl lg:shadow-slate-400"
        >
          <Card.Result />
          <Card.Category />
        </Card.Root>
      </div>
    </main>
  );
}
