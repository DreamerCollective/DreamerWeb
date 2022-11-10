export async function GET ({ request }) {
    const res = await fetch('http://localhost:3000/ElectionsVariables');
    console.log(res);
    const data = await res.json()
    return new Response(JSON.stringify(data), {status:200})
}
