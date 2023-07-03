import { Card } from "@/components/Card";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center p-24 mobile:p-0
     mobile:items-start md:items-center md:justify-center  
     w-screen h-screen font-hanken-grotesk bg-slate-100"
    >
      <Card.Root className="mobile:flex-col max-mobile:h-full max-tablet:h-full  max-mobile:w-full max-tablet:w-full w-2/4 h-2/3 rounded-4xl bg-white md:shadow-2xl md:shadow-slate-200">
        <Card.Result />
        <Card.Category />
      </Card.Root>
    </main>
  );
}
