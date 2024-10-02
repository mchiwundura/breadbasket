import Image from "next/image";

export default function Home() {
  return (
	<main className='bg-white'>
		<section>
			<Billboard title='All your Favorite Zimbabean Products' callToAction='Shop Now' image='/images/headerImage.png'/>
		</section>
	</main>

);
}

function Billboard({title, callToAction, image}) {

	return (
		<div className="mx-10 bg-slate-200 rounded-3xl flex flex-col md:flex-row justify-between p-8">
			<div className='flex flex-col justify-center w-64 ml-10 items-center md:items-start mb-16'>
				<h1 className='text-2xl text-black text-center md:text-start'>
					{title}
				</h1>
				<button className='bg-green-500 px-5 w-32 mt-5 py-2 rounded-full'>
					{callToAction}
				</button>
			</div>

			<div>
				<Image src={image} width={500} height={250}/>
			</div>
		</div>
	)
}
