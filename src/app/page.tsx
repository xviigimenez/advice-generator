export default function Home() {
	return (
        <main className="bg-blue-dark w-screen h-screen flex items-center justify-center">
            <article className="bg-blue-dark_gray flex flex-col items-center rounded-xl gap-6 p-4">
                <div className="mt-6"><h1 className="text-neon_green uppercase text-sm tracking-[.2em] font-bold">adive</h1></div>
                <div><h2 className="text-light_cyan text-xl font-bold">it is eas yto set up</h2></div>
                <div className="flex flex-col items-center">
                    <img src="/pattern-divider-mobile.svg"/>
                    <button className="p-4 bg-neon_green rounded-full translate-y-[85%]"><img src="/icon-dice.svg"/></button>
                </div>
            </article>
        </main>
    );
}
