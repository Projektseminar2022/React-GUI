export default function PageNotFound() {
    return (
        <section className="flex items-center h-full p-16 bg-base dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl mb-8">Sorry, we couldn't find this page.</p>
                    <a rel="noopener noreferrer" href={"/dashboard"} className="px-8 py-3 font-semibold rounded bg-primary text-primary-content">Back to homepage</a>
                </div>
            </div>
        </section>
    );
}