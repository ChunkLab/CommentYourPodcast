export default function Home({ params }) {
    console.log(params.podcast)
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1>PODCAST</h1>
            <h2>{params.podcast}</h2>
        </main>
    )
}
