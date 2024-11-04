import { Span } from "next/dist/trace";
import Image from "next/image";

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
		
		<div className="flex flex-row px-60">
			<div className="basis-1/3 pt-8">
				<Terminal_ID/> 
			</div>
			<div className="basis-1/3">
				<Terminal_Intro/>
			</div>
			<div className ="basis-1/3 pl-24 pt-10">
				<Terminal_Contact/>
			</div>
		</div>
    </div>
	);
}

function Create_Next() {
	return (
		<div className="text-lg text-gray-400 pt-1 pl-1 w-full">
			<Name/>
			<span className="pr-2">$ cd Documents<br/></span>
			<Name/>
			<span className="text-blue-300">/Documents</span>
			<span className="pr-2">$ npx create-next-app@latest portfolio</span>
			<span className="h-3.5 w-2.5 bg-white">&nbsp;<br/></span>

			<span className="text-lg text-green-400">&nbsp;&#x2713; </span>
			<span className="font-bold">
				Would you like to use <span className="text-purple-400">TypeScript</span>? <span className="font-normal"> ... No / <span className="underline text-cyan-300">Yes</span></span>
			</span><br/>

			<span className="text-lg text-green-400">&nbsp;&#x2713; </span>
			<span className="font-bold">
				Would you like to use <span className="text-purple-400">ESLint</span>? <span className="font-normal"> ... No / <span className="underline text-cyan-300">Yes</span></span>
			</span><br/>

			<span className="text-lg text-green-400">&nbsp;&#x2713; </span>
			<span className="font-bold">
				Would you like to use <span className="text-purple-400">Tailwind CSS</span>? <span className="font-normal"> ... No / <span className="underline text-cyan-300">Yes</span></span>
			</span><br/>

			<span className="text-lg text-green-400">&nbsp;&#x2713; </span>
			<span className="font-bold">
				Would you like to use <span className="text-purple-400">`src/` directory</span>? <span className="font-normal"> ... No / <span className="underline text-cyan-300">Yes</span></span>
			</span><br/>

			<span className="text-lg text-green-400">&nbsp;&#x2713; </span>
			<span className="font-bold">
				Would you like to use <span className="text-purple-400">App Router</span>? (recommended)<span className="font-normal"> ... No / <span className="underline text-cyan-300">Yes</span></span>
			</span><br/>

			<span className="text-lg text-green-400">&nbsp;&#x2713; </span>
			<span className="font-bold">
				Would you like to customize the default <span className="text-purple-400">import alias</span> (@/*)? <span className="font-normal"> ... No / <span className="underline text-cyan-300">Yes</span></span>
			</span><br/>

			<span>
				&nbsp;Creating a new Next.js app in <span className="text-green-400">/Users/dotson/Documents/portfolio</span>.
			</span>
		</div>
	)
}

function Name () {
	return (
		<span className="text-lg font-bold">
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
				find_me.exec
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
				who_am_i.exec 
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
		<div className="border border-gray-600 inline-block text-gray-300 bg-gray-700 text-xl">
				<span className="md:w-full inline-block text-right font-bold">
					- o <span className="text-red-600">x&nbsp;</span>
				</span>

			<p className="md:w-full pb-0.5 text-center">
				introduction.txt
			</p>
			<p className="pb-20 bg-black px-2 pt-1">
				Hello! I'm Dotson and I recently graduated with a 
				<span className="text-yellow-300"> B.S in Computer Engineering </span>
				with a focus on
				<span className="text-yellow-300"> Embedded Systems, Microcontrollers, and FPGAs</span>.<br/><br/>
				<span>
				I am currently seeking professional opportunities where I can advance my career. Feel free to reach out if I am a good fit to build and grow alongside!
				</span>
				
			</p>
		</div>
	)
}
