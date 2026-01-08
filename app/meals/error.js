// handling potential errors
// Error.js must be a Client-component, so it can also fetch errors on the client side

'use client';

export default function ErrorPage({error}){
    return <main className="error">
        <h1>An error occurred!</h1>
        <p>Failed to fetch meal data. Please try again later.</p>
    </main>
}