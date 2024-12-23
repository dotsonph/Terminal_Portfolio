import { Span } from "next/dist/trace";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="font-mono">
      <div className="bg-gray-700 text-gray-400">
        <span className="w-full inline-block text-xl text-right font-bold text-gray-300">
          - o <span className="text-red-600">x&nbsp;</span>
        </span>
        <h1 className="font-bold text-center pb-10 text-xl">
          dotson@Yoga-C-930:~/Documents/portfolio
        </h1>
        <Top_Row />
      </div>

      <Create_Next />
      <br />

      <div className="grid grid-cols-8 grid-rows-2 gap-4">
        <div className="row-start-1 row-span-2 col-start-2 col-span-3 row-span-2">
          <Terminal_Intro />
        </div>
        <div className="col-start-5 col-span-4 row-span-1 row-start-1">
          <Terminal_ID />
        </div>
        <div className="col-start-5 col-span-4 row-span-1 row-start-2">
          <Terminal_Contact />
        </div>
      </div>

      <Create_Proj />
      <Senior_Design />
      <PortfolioDesc />
    </div>
  );
}

function PortfolioDesc() {
  return (
    <div className="pl-40">
      <div className="md:w-2/5 border border-gray-600 text-gray-300 bg-gray-700 text-md">
        <span className="md:w-full inline-block text-right font-bold text-xl">
          - o <span className="text-red-600">x&nbsp;</span>
        </span>

        <p className="text-xl md:w-full pb-0.5 text-center">
          Portfolio Website &lt;proj&gt;
        </p>

        <div className="pb-10 bg-black px-2 pt-1">
          <p>
            This entire website for one is my most recent &quot;project&quot;.
            <br />
            <br />
            During this gruesome job hunt, I seemingly have been at a
            disadvantage without a personal website and decided to finally
            commit and build a portfolio to showcase my background who I am.
            <br />
            <br />
            The purpose of creating this portfolio was to demonstrate my
            technical skills, abilities, and career marketability. In the
            future, I intend to further adapt this website to become more
            blog-oriented, documenting my professional whereabouts, personal
            projects, and learning journey.
            <br /> <br />
            If my web development journey peaks any interest, please do continue
            reading. I discuss in further details the tech stack used, processes
            undertaken, successes, failures, and final impressions.
          </p>
        </div>
      </div>
    </div>
  );

function PortfolioDesc() {
  return (
    <div className="pl-40">
      <div className="md:w-2/5 border border-gray-600 text-gray-300 bg-gray-700 text-md">
        <span className="md:w-full inline-block text-right font-bold text-xl">
          - o <span className="text-red-600">x&nbsp;</span>
        </span>

        <p className="text-xl md:w-full pb-0.5 text-center">
          Portfolio Website &lt;proj&gt;
        </p>

        <div className="pb-10 bg-black px-2 pt-1">
          <p>
            This entire website for one is my most recent &quot;project&quot;.
            <br />
            <br />
            During this gruesome job hunt, I seemingly have been at a
            disadvantage without a personal website and decided to finally
            commit and build a portfolio to showcase my background who I am.
            <br />
            <br />
            The purpose of creating this portfolio was to demonstrate my
            technical skills, abilities, and career marketability. In the
            future, I intend to further adapt this website to become more
            blog-oriented, documenting my professional whereabouts, personal
            projects, and learning journey.
            <br /> <br />
            If my web development journey peaks any interest, please do continue
            reading. I discuss in further details the tech stack used, processes
            undertaken, successes, failures, and final impressions.
          </p>
        </div>
      </div>
    </div>
  );
function PortfolioDesc() {
  return (
    <div className="pl-40">
      <div className="md:w-2/5 border border-gray-600 text-gray-300 bg-gray-700 text-md">
        <span className="md:w-full inline-block text-right font-bold text-xl">
          - o <span className="text-red-600">x&nbsp;</span>
        </span>

        <p className="text-xl md:w-full pb-0.5 text-center">
          Portfolio Website &lt;proj&gt;
        </p>

        <div className="pb-10 bg-black px-2 pt-1">
          <p>
            This entire website for one is my most recent &quot;project&quot;.
            <br />
            <br />
            During this gruesome job hunt, I seemingly have been at a
            disadvantage without a personal website and decided to finally
            commit and build a portfolio to showcase my background who I am.
            <br />
            <br />
            The purpose of creating this portfolio was to demonstrate my
            technical skills, abilities, and career marketability. In the
            future, I intend to further adapt this website to become more
            blog-oriented, documenting my professional whereabouts, personal
            projects, and learning journey.
            <br /> <br />
            If my web development journey peaks any interest, please do continue
            reading. I discuss in further details the tech stack used, processes
            undertaken, successes, failures, and final impressions.
          </p>
        </div>
      </div>
    </div>
  );
}

function Senior_Design() {
  return (
    <div className="pt-10">
      <div className="grid grid-cols-6">
        <div className="col-span-3 col-start-1">
          <Senior_Design_Desc />
        </div>
        <div className="col-start-4 col-span-2 border border-gray-600 bg-black text-gray-300">
          <span className="w-full inline-block text-right font-bold bg-gray-700 text-xl">
            - o <span className="text-red-600">x&nbsp;</span>
          </span>

          <p className="text-xl md:w-full pb-0.5 bg-gray-700 text-center">
            group_photo.png
          </p>
          <span className="flex justify-center">
            <Image
              src="/group.png"
              width={550}
              height={400}
              alt="This is a not so great group photo following our department's presentation."
            />
          </span>
        </div>
      </div>
      <div
        id="secondRow"
        className="flex justify-evenly p-10 columns-3 aspect-auto"
      >
        <Image
          src="/patch_sim.webp"
          width={400}
          height={501}
          alt="A simulation screenshot of the patch-yagi feed from below"
        />
        <Image
          src="/patch_anim_side.gif"
          width={403}
          height={401}
          alt="A side view gif of the patch-yagi feed's electromagnetic field"
        />
        <Image
          src="/patch_anim_above.gif"
          width={513}
          height={501}
          alt="An aerial view of the patch-yagi feed's electromagnetic field"
        />
      </div>
      <div
        id="thirdRow"
        className="p-10 columns-3 flex justify-evenly aspect-auto"
      >
        <Image
          src="/horn_sim.webp"
          width={410}
          height={400}
          alt="A simulation screenshot of the horn feed from above"
        />
        <Image
          src="/horn.webp"
          width={500}
          height={501}
          alt="An image of the final horn-feed constructed and soldered"
        />
        <Image
          src="/patch.webp"
          width={500}
          height={401}
          alt="An image of the final patch-yagi-feed constructed and soldered"
        />
      </div>
    </div>
  );
}

function Senior_Design_Desc() {
  return (
    <div className="pl-40">
      <div className="md:w-4/5 border border-gray-600 text-gray-300 bg-gray-700 text-md">
        <span className="md:w-full inline-block text-right font-bold text-xl">
          - o <span className="text-red-600">x&nbsp;</span>
        </span>

        <p className="text-xl md:w-full pb-0.5 text-center">
          RF Antenna Feed Development &lt;proj&gt;
        </p>

        <div className="pb-10 bg-black px-2 pt-1">
          <p>
            Originally a Senior Design project and later adapted to compete in
            the{" "}
            <a
              className="text-yellow-300"
              target="_blank"
              href="https://midatlantic.sspi.org/cpages/home"
            >
              SSPI Mid-Atlantic Regional Chapter's{" "}
            </a>
            Aerospace Science & Engineering Competition.
          </p>
          <br />
          <p>
            Our task being to construct two antenna feeds (L/X Band) for the{" "}
            <a
              className="text-yellow-300"
              href="https://www.gmu.edu/news/2022-10/george-mason-readies-reclaimed-satellite-dish"
              target="_blank"
            >
              GMU SATCOM's{" "}
            </a>{" "}
            9m Satellite Dish.
          </p>
          <br />
          <p>
            An entire semester was dedicated to simulations and research using
            ANSYS HFSS/CST Studio.
          </p>
          <br />
          <p>
            The next semester consisted of construction, and testing. Further
            tasks included compiling journal entries, rehearsing, presenting,
            drafting technical reports, and awaiting the long anticipated
            competition.
          </p>
        </div>
      </div>
    </div>
  );
}

function Create_Proj() {
  return (
    <div className="pl-1 text-gray-400">
      <p>
        <Name />
        <span className="text-blue-300">/Documents</span>$ ls
      </p>
      <div className="flex flex-row gap-8">
        <span className="pl-2">
          <p>Backup_Files</p>
          <p>Screenshots</p>
        </span>
        <span>
          <p>Transcripts</p>
          <p>Hidden_Goods</p>
        </span>
        <span>
          <p>Archives</p>
          <p>GMU</p>
        </span>
        <span>
          <p>Lab_Reports</p>
        </span>
      </div>

      <p>
        <Name />
        <span className="text-blue-300">/Documents</span>$ cd GMU/Projects
      </p>
      <p>
        <Name />
        <span className="text-blue-300">/Documents/GMU/Projects</span>$ gcc
        senior_design.c -o exec
      </p>
      <p>
        <Name />
        <span className="text-blue-300">/Documents/GMU/Projects</span>$ ./exec
      </p>
    </div>
  );
}

function Create_Next() {
  return (
    <div className="text-md text-gray-400 pt-1 pl-1 w-full">
      <Name />
      <span className="pr-2">
        $ cd Documents
        <br />
      </span>
      <Name />
      <span className="text-blue-300">/Documents</span>
      <span className="pr-2">$ npx create-next-app@latest portfolio</span>
      <br />
      <span>
        &nbsp;Creating a new Next.js app in{" "}
        <span className="text-green-400">
          /Users/dotson/Documents/portfolio
        </span>
        .
      </span>
    </div>
  );
}

function Name() {
  return (
    <span className="text-md font-bold">
      <span className="text-lime-300">&nbsp;dotson@Yoga-C-930</span>
      <span>:</span>
      <span className="text-blue-300">~</span>
    </span>
  );
}

function Top_Row() {
  return (
    <div className="text-lg bg-gray-600 flex space-x-4">
      <span className="pl-3">Intro</span>
      <span>Projects</span>
      <span>Experience</span>
      <span>Resume</span>
      <span>Contact</span>
    </div>
  );
}

function Terminal_Contact() {
  return (
    <div className="border border-gray-600 inline-block bg-gray-700 text-gray-300">
      <span className="md:w-full inline-block text-xl text-right font-bold">
        - o <span className="text-red-600">x&nbsp;</span>
      </span>

      <p className="text-center text-xl">find_me.txt</p>
      <div className="pb-20 bg-black pt-1 pr-10 text-md">
        <div>
          <span className="text-gray-500">-- </span>
          <span className="text-blue-300">@Email: </span>
          <span>dotsonph01@gmail.com</span>
          <br />
        </div>

        <div className="text-gray-500">
          <br />
          -- //Links directly accessible on hover
        </div>
        <br />
        <div>
          <span className="text-gray-500">-- </span>
          <span className="text-blue-300">@LinkedIn: </span>
          <a target="_blank" href="https://www.linkedin.com/in/dotson-pham/">
            linkedin.com/in/dotson-pham
          </a>
        </div>

        <div>
          <span className="text-gray-500">-- </span>
          <span className="text-blue-300">@GitHub: </span>
          <a target="_blank" href="https://www.github.com/dotsonph">
            github.com/dotsonph
          </a>
        </div>

        <div>
          <span className="text-gray-500">-- </span>
          <span className="text-blue-300">@Twitch: </span>
          <a target="_blank" href="https://www.twitch.tv/dawgsonnn">
            twitch.tv/dawgsonnn
          </a>
        </div>
      </div>
    </div>
  );
}

function Terminal_ID() {
  return (
    <div className="border border-gray-600 inline-block bg-gray-700 text-gray-300">
      <span className="text-xl md:w-full inline-block text-right font-bold">
        - o <span className="text-xl text-red-600">x&nbsp;</span>
      </span>

      <p className="text-center text-xl">who_am_i.txt</p>
      <div className="pb-10 bg-black pt-1 text-md">
        <div>
          <span className="text-gray-500">-- </span>
          <span className="text-red-300">@User: </span>
          <span>Dotson Pham</span> <span className="text-gray-500">#4067</span>
        </div>

        <div>
          <span className="text-gray-500">-- </span>
          <span className="text-red-300">@Role: </span>
          <span className="text-gray-500">Searching...</span>
        </div>

        <div>
          <span className="text-gray-500">-- </span>
          <span className="text-red-300">@Education: </span>
          <span>Bachelors of Science</span>
        </div>

        <div>
          <span className="text-gray-500">-- </span>
          <span className="text-red-300">@Location: </span>
          <span>Woodbridge, VA</span>
        </div>

        <div className="text-gray-500">
          <br />
          -- //More information on education below...&nbsp;&nbsp;
        </div>

        <div>
          <br />
          <span className="text-gray-500">-- </span>
          <span className="text-red-300">@College: </span>
          <span>George Mason University</span>
        </div>

        <div>
          <span className="text-gray-500">-- </span>
          <span className="text-red-300">@Major: </span>
          <span>Computer Engineering</span>
        </div>

        <div>
          <span className="text-gray-500">-- </span>
          <span className="text-red-300">@Concentration: </span>
          <span>Embedded Systems</span>
        </div>

        <div>
          <span className="text-gray-500">-- </span>
          <span className="text-red-300">@Status: </span>
          <span>Graduated - May 2024</span>
        </div>
      </div>
    </div>
  );
}

function Terminal_Intro() {
  return (
    <div className="border border-gray-600 text-gray-300 bg-gray-700 w-full">
      <span className="text-xl md:w-full inline-block text-right font-bold">
        - o <span className="text-red-600">x&nbsp;</span>
      </span>

      <p className="md:w-full pb-0.5 text-center text-xl">introduction.png</p>
      <p className="pb-10 bg-black px-2 pt-1 text-md">
        Hello! I'm Dotson and I recently graduated with a
        <span className="text-yellow-300"> B.S in Computer Engineering </span>
        with a focus on
        <span className="text-yellow-300">
          {" "}
          Embedded Systems, Microcontrollers, and FPGAs
        </span>
        .<br />
        <br />
        <span>
          I am currently seeking professional opportunities where I can advance
          my career. Feel free to reach out if you find me a good fit! I am
          confident I can be a great asset to any team.
        </span>
      </p>
      <div className="pb-10 bg-black flex justify-center">
        <Image
          className="border-2 border-dotted hover:border-solid border-yellow-300"
          src="/studious.png"
          width={350}
          height={400}
          alt="photo of me trying to be productive"
        />
      </div>
    </div>
  );
}
