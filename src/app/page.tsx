import Image from "next/image";
import Question from "./question"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-primary">
      <div className="w-100" style={{background:"gray"}}>
        <Question id={1}></Question>

      </div>
    </main>
  );
}
