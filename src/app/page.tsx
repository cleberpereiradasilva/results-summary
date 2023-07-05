import { Card } from "@/components/Card";

export default function Home() {
  return (
    <main
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
    </main>
  );
}
