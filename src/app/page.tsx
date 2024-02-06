import Image from "next/image";
import Question from "./question"
import { promises as fs } from 'fs';

const fetchData = async () =>{
  const lang = "es"
  var temp1 = await fs.readFile(process.cwd() + '/src/lib/questions.json', 'utf8');
  const questions = JSON.parse(temp1);
  var temp1 = await fs.readFile(process.cwd() + '/src/lib/options.json', 'utf8');
  const options = JSON.parse(temp1);
  
  return [questions[lang],options[lang]]
}

export default async function Home() {
  const [questions,options] = await fetchData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-dark">
      <div className="center-elems w-100">
        <Question questions={questions} options={options}></Question>
      </div>
    </main>
  );
}
