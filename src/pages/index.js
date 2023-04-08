import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/legacy/image";
import me from "../public/me.jpeg";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Elizabeth Seto</title>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl"></h1>
          </nav>
          <div className="text-center p-5">
            <h2 className="text-5xl py-2 text-pink-400 font-medium md:text-6xl max-w-xl mx-auto">Elizabeth Seto</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">designer & developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl">
              I'm software engineer based in Seattle, Washington. I have interest in full-stack software development, artificial intelligence, game development and everything in-between.
            </p>
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={me} layout="fill" objectFit="cover" />
          </div>
          <div className="text-5xl flex justify-center gap-16 py-20 ml-10 text-gray-600">
            <a href="https://www.linkedin.com/in/elizabethseto/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/elizabethseto">
              <AiFillGithub />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

