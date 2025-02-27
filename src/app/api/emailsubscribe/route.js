// import { NextResponse } from 'next/server';
 
// export async function POST(request) {
//     const res = await request.json()
//     console.log(res);
//     return NextResponse.json({ res })

//   }
import { NextResponse } from 'next/server';
const  sheetURL='https://script.google.com/macros/s/AKfycbw2hlAL12Axgn4n3kgjjJjyEIZeG375glQBsst5sN8wxMWioPJTFvQPo6o9FeGqw5x2/exec'


export async function OPTIONS() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': 'https://www.vingt.io/',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}

export async function POST(req) {
    console.log(req.headers)
    
    try {
        const data = await req.json(); 
        // const email = data.email;
        if(!data.email)
            return new Response('Failed to process subscription', {status: 500,})
        console.log('Email:', data.email, data.date);
        if(!data.date)
            var d = new Date();

        await fetch(sheetURL, {
            method: 'POST',
            headers: { 'Content-Type':'application/x-www-form-urlencoded'},
            // body: JSON.stringify(data)
            body:`email=${data.email}&date=${data.date||d}`
        }).then(res=>res.text()).then(data=>{
            console.log("data inserted successfully", data)
            // alert(data)
        }).catch(err=>console.log(err))
        return NextResponse.json({ message: 'Subscription successful!' }, {status: 200});
    } catch (error) {
        return new Response('Failed to process subscription', {
            status: 500,
            headers: {
                'Access-Control-Allow-Origin': origin,
            },
        });
    }
}
