import { Span } from "next/dist/trace";
import Image from "next/image";
import React from "react";


export default function Home() {
	return (
    <div className="font-mono">
		<div className = "bg-gray-700 text-gray-400">
			<span className="w-full inline-block text-xl text-right font-bold text-gray-300">
				- o <span className="text-red-600">x&nbsp;</span>
			</span>
			<h1 className="font-bold text-center pb-10 text-xl">dotson@Yoga-C-930:~/Documents/portfolio</h1>
			<Top_Row/>
		</div>

		<Create_Next/>
		<br/>

		<div className="grid grid-cols-8 grid-rows-2 gap-4">
			<div className="row-start-1 row-span-2 col-start-2 col-span-3 row-span-2">
				<Terminal_Intro/>
			</div>
			<div className="col-start-5 col-span-4 row-span-1 row-start-1">
				<Terminal_ID/>
			</div>
			<div className="col-start-5 col-span-4 row-span-1 row-start-2">
				<Terminal_Contact/>
			</div>
		</div>

		<Create_Proj/>
		<Senior_Design/>
    </div>
	);
}

function Senior_Design() {
	return (
		<div className="pt-10 pl-40">
			<div className="md:w-2/5 border border-gray-600 text-gray-300 bg-gray-700 text-md">
				<span className="md:w-full inline-block text-right font-bold text-xl">
					- o <span className="text-red-600">x&nbsp;</span>
				</span>

				<p className="text-xl md:w-full pb-0.5 text-center">
				RF Antenna Feed Development &lt;proj&gt;
				</p>

				<div className="pb-10 bg-black px-2 pt-1">
					<p>
						Originally a Senior Design project and later adapted to compete in the 2024 SSPI Mid-Atlantic Regional Chapter's 
						Aerospace Science & Engineering Competition.
					</p>
					<br/>
					<p>
						Our task being to construct two antenna feeds (L/X Band) for the GMU SATCOM Club's 9m Cassegrain Dish.
					<p>
					<br/>
						An entire semester was dedicated to simulations and research using ANSYS HFSS/CST Studio.
					</p>
					</p>
					<br/>
					<p>
						The next semester consisted of construction, and testing. Further tasks included compiling journal entries, rehearsing, presenting, drafting technical reports, and awaiting the long anticipated competition.
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

			<p><Name /><span className="text-blue-300">/Documents</span>$ cd GMU/Projects</p>
			<p><Name /><span className="text-blue-300">/Documents/GMU/Projects</span>$ gcc senior_design.c -o exec</p>
			<p><Name /><span className="text-blue-300">/Documents/GMU/Projects</span>$ ./exec</p>
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
			<span className="pl-3">Intro</span>
			<span>Projects</span>
			<span>Experience</span>
			<span>Resume</span>
			<span>Contact</span>
		</div>		
	)
}

function Terminal_Contact() {
	return (
		<div className="border border-gray-600 inline-block bg-gray-700 text-gray-300">
			<span className="md:w-full inline-block text-xl text-right font-bold">
				- o <span className="text-red-600">x&nbsp;</span>
			</span>

			<p className="text-center text-xl">
				find_me.txt
			</p>
			<div className="pb-20 bg-black pt-1 pr-10 text-md">

				<div>
					<span className = "text-gray-500">-- </span>
					<span className = "text-blue-300">@Email: </span>
					<span>dotsonph01@gmail.com</span>
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
		<div className="border border-gray-600 inline-block bg-gray-700 text-gray-300">
			<span className="text-xl md:w-full inline-block text-right font-bold">
				- o <span className="text-xl text-red-600">x&nbsp;</span>
			</span>

			<p className="text-center text-xl">
				who_am_i.txt 
			</p>
			<div className="pb-10 bg-black pt-1 text-md">

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
		<div className="border border-gray-600 text-gray-300 bg-gray-700 w-full">
				<span className="text-xl md:w-full inline-block text-right font-bold">
					- o <span className="text-red-600">x&nbsp;</span>
				</span>

			<p className="md:w-full pb-0.5 text-center text-xl">
				introduction.png
			</p>
			<p className="pb-10 bg-black px-2 pt-1 text-md">
				Hello! I'm Dotson and I recently graduated with a 
				<span className="text-yellow-300"> B.S in Computer Engineering </span>
				with a focus on
				<span className="text-yellow-300"> Embedded Systems, Microcontrollers, and FPGAs</span>.<br/><br/>
				<span>
				I am currently seeking professional opportunities where I can advance my career. Feel free to reach out if you find me a good fit! I am confident I can be a great asset to any team.
				</span>
			</p>
			<div className="pb-10 bg-black flex justify-center">
				<Image className="border-2 border-dotted hover:border-solid border-yellow-300" src="/studious.png" width={350} height={400} alt = "photo of me trying to be productive"/>
			</div>
		</div>
	)
}
