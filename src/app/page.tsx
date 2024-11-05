import { Span } from "next/dist/trace";
import Image from "next/image";
import React from "react";


export default function Home() {
	return (
    <div className="font-mono">
		<div className = "bg-gray-700 text-gray-400">
			<span className="md:w-full inline-block text-xl text-right font-bold">
				- o <span className="text-red-600">x&nbsp;</span>
			</span>
			<h1 className="font-bold text-center pb-10 text-xl">dotson@Yoga-C-930:~/Documents/portfolio</h1>
			<Top_Row/>
		</div>

		<Create_Next/>
		
		<div className="flex flex-row">
			<span className="basis-1/3 pt-8 pl-60">
				<Terminal_ID/>
			</span>
			<span className="basis-1/3 flex flex-col pb-40">
				<Terminal_Intro/>
			</span>

			<span className ="basis-1/3 pl-24 pt-10">
				<Terminal_Contact/>
			</span>
		</div>

		<Create_Proj/>
		<Senior_Design/>
    </div>
	);
}

function Senior_Design() {
	return (
		<div className="pt-10 pl-40">
			<div className="md:w-2/5 border border-gray-600 text-gray-300 bg-gray-700 text-xl">
				<span className="md:w-full inline-block text-right font-bold">
					- o <span className="text-red-600">x&nbsp;</span>
				</span>

			<p className="md:w-full pb-0.5 text-center">
				RF Antenna Feed Development &lt;proj&gt;
			</p>
			<div className="pb-10 bg-black px-2 pt-1">
				<p className="text-sm text-gray-400">
					/*This project is one I hold close to my heart. I enjoyed the countless nights spent studying, simulating, constructing, and 
					presenting with my beloved team and supervisor. The doors it opened for me is indescribable.*/
				</p>
				<br/>
				<p>
					Originally a Senior Design project. Later competed in the 2024 Annual SSPI Mid-Atlantic Regional Chapter's 
					Aerospace Science & Engineering Competition.
				</p>
				<br/>
				<p>
					Our task being to construct two antenna feeds of varying frequency bands to place within a 9m Cassegrain Dish. An entire semester was 
					dedicated to simulations and research.
				</p>
				<br/>
				<p>
					The next semester consisted of soldering, construction, and testing. Further tasks included compiling journal entries, rehearsing, presenting, extensive technical 
					writing, and awaiting the long anticipated competition.
				</p>
			</div>
			</div>		
		</div>
	)
}

function Create_Proj() {
	return (
		<div className="pl-1 text-gray-400">
			<p><Name /><span className="text-blue-300">/Documents</span>$ ls</p>
			<div className="flex flex-row gap-8">
				<span className="pl-2">
					<p>Backup_Files</p>
					<p>GMU</p>
				</span>
				<span>
					<p>Academic Transcript.pdf</p>
					<p>Dotson_Pham_Resume.odt</p>
				</span>
				<span>
					<p>Projects</p>
					<p>Screenshots</p>
				</span>
				<span>
					ECE_Stuff
				</span>
			</div>

			<p><Name /><span className="text-blue-300">/Documents</span>$ cd Projects</p>
			<p><Name /><span className="text-blue-300">/Documents/Projects</span>$</p>
		</div>
	)
}

function Create_Next() {
	return (
		<div className="text-md text-gray-400 pt-1 pl-1 w-full">
			<Name/>
			<span className="pr-2">$ cd Documents<br/></span>
			<Name/>
			<span className="text-blue-300">/Documents</span>
			<span className="pr-2">$ npx create-next-app@latest portfolio</span>
			<br/>

			<span className="text-lg text-green-400">&nbsp;&#x2713; </span>
			<span className="font-bold">
				Would you like to use <span className="text-violet-300">TypeScript</span>? <span className="font-normal"> ... No / <span className="underline text-cyan-300">Yes</span></span>
			</span><br/>

			<span className="text-lg text-green-400">&nbsp;&#x2713; </span>
			<span className="font-bold">
				Would you like to use <span className="text-violet-300">ESLint</span>? <span className="font-normal"> ... No / <span className="underline text-cyan-300">Yes</span></span>
			</span><br/>

			<span className="text-lg text-green-400">&nbsp;&#x2713; </span>
			<span className="font-bold">
				Would you like to use <span className="text-violet-300">Tailwind CSS</span>? <span className="font-normal"> ... No / <span className="underline text-cyan-300">Yes</span></span>
			</span><br/>

			<span className="text-lg text-green-400">&nbsp;&#x2713; </span>
			<span className="font-bold">
				Would you like to use <span className="text-violet-300">`src/` directory</span>? <span className="font-normal"> ... No / <span className="underline text-cyan-300">Yes</span></span>
			</span><br/>

			<span className="text-lg text-green-400">&nbsp;&#x2713; </span>
			<span className="font-bold">
				Would you like to use <span className="text-violet-300">App Router</span>? (recommended)<span className="font-normal"> ... No / <span className="underline text-cyan-300">Yes</span></span>
			</span><br/>

			<span className="text-lg text-green-400">&nbsp;&#x2713; </span>
			<span className="font-bold">
				Would you like to customize the default <span className="text-violet-300">import alias</span> (@/*)? <span className="font-normal"> ... No / <span className="underline text-cyan-300">Yes</span></span>
			</span><br/>

			<span>
				&nbsp;Creating a new Next.js app in <span className="text-green-400">/Users/dotson/Documents/portfolio</span>.
			</span>
		</div>
	)
}

function Name () {
	return (
		<span className="text-md font-bold">
			<span className = "text-lime-300">&nbsp;dotson@Yoga-C-930</span>
			<span>:</span>
			<span className="text-blue-300">~</span>
		</span>
	)
}

function Top_Row() {
	return (
		<div className="text-lg bg-gray-600 flex space-x-4">
			<span className="pl-3">File</span>
			<span>Edit</span>
			<span>View</span>
			<span>Search</span>
			<span>Terminal</span>
			<span>Help</span>
		</div>		
	)
}

function Terminal_Contact() {
	return (
		<div className="border border-gray-600 text-xl inline-block bg-gray-700 text-gray-300">
			<span className="md:w-full inline-block text-right font-bold">
				- o <span className="text-red-600">x&nbsp;</span>
			</span>

			<p className="text-center">
				find_me.txt
			</p>
			<div className="pb-40 bg-black pt-1 pr-20">

				<div>
					<span className = "text-gray-500">-- </span>
					<span className = "text-blue-300">@Email: </span>
					<span>dotsonph01@gmail.com</span>
					<br/>
					<span className = "text-gray-500">-- </span>
					<span className = "text-blue-300">@Mobile: </span>
					<span>703-677-1143</span>
					<br/>
				</div>

				<div className="text-gray-500"><br/>
					-- //Links directly accessible on hover
				</div>
				<br/>
				<div>
					<span className = "text-gray-500">-- </span>
					<span className = "text-blue-300">@LinkedIn: </span>
					<a target = "_blank" href="https://www.linkedin.com/in/dotson-pham/">linkedin.com/in/dotson-pham</a>
				</div>

				<div>
					<span className = "text-gray-500">-- </span>
					<span className = "text-blue-300">@GitHub: </span>
					<a target = "_blank" href="https://www.github.com/dotsonph">github.com/dotsonph</a>
				</div>

				<div>
					<span className = "text-gray-500">-- </span>
					<span className = "text-blue-300">@Twitch: </span>
					<a target="_blank" href="https://www.twitch.tv/dawgsonnn">twitch.tv/dawgsonnn</a>
				</div>
			</div>
		</div>
	)
}

function Terminal_ID() {
	return (
		<div className="border border-gray-600 inline-block bg-gray-700 text-gray-300 text-xl">
			<span className="md:w-full inline-block text-right font-bold">
				- o <span className="text-red-600">x&nbsp;</span>
			</span>

			<p className="text-center">
				who_am_i.txt 
			</p>
			<div className="pb-40 bg-black pt-1">

				<div>
					<span className = "text-gray-500">-- </span>
					<span className = "text-red-300">@User: </span>
					<span>Dotson Pham</span> <span className="text-gray-500">#4067</span>
				</div>

				<div>
					<span className = "text-gray-500">-- </span>
					<span className = "text-red-300">@Role: </span>
					<span className = "text-gray-500">Searching...</span>
				</div>

				<div>
					<span className = "text-gray-500">-- </span>
					<span className = "text-red-300">@Education: </span>
					<span>Bachelors of Science</span>
				</div>

				<div>
					<span className = "text-gray-500">-- </span>
					<span className = "text-red-300">@Location: </span>
					<span>Woodbridge, VA</span>
				</div>

				<div className = "text-gray-500">
					<br/>
					-- //More information on education below...&nbsp;&nbsp;
				</div>

				<div>
					<br/>
					<span className = "text-gray-500">-- </span>
					<span className = "text-red-300">@College: </span>
					<span>George Mason University</span>
				</div>

				<div>
					<span className = "text-gray-500">-- </span>
					<span className = "text-red-300">@Major: </span>
					<span>Computer Engineering</span>
				</div>

				<div>
					<span className = "text-gray-500">-- </span>
					<span className = "text-red-300">@Concentration: </span>
					<span>Embedded Systems</span>
				</div>

				<div>
					<span className = "text-gray-500">-- </span>
					<span className = "text-red-300">@Status: </span>
					<span>Graduated - May 2024</span>
				</div>
			</div>
		</div>
	)
}

function Terminal_Intro() {
	return (
		<div className="border border-gray-600 text-gray-300 bg-gray-700 text-xl">
				<span className="md:w-full inline-block text-right font-bold">
					- o <span className="text-red-600">x&nbsp;</span>
				</span>

			<p className="md:w-full pb-0.5 text-center">
				introduction.png
			</p>
			<p className="pb-10 bg-black px-2 pt-1">
				Hello! I'm Dotson and I recently graduated with a 
				<span className="text-yellow-300"> B.S in Computer Engineering </span>
				with a focus on
				<span className="text-yellow-300"> Embedded Systems, Microcontrollers, and FPGAs</span>.<br/><br/>
				<span>
				I am currently seeking professional opportunities where I can advance my career. Feel free to reach out if you find me a good fit! I am confident I can be a great asset to any team.
				</span>
			</p>
			<div className="pb-10 bg-black pl-40">
				<Image className="border-2 border-dotted hover:border-solid border-yellow-300" src="/studious.png" width={350} height={400} alt = "photo of me trying to be productive"/>
			</div>
		</div>
	)
}
