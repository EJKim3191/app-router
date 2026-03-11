const apiUrl = "https://app-router-api-five.vercel.app/api/cart";

async function GET(request) {
    const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ id: productId }),
    });

    if (!response.ok) {
        // throw new Error({
        //     message: "장바구니에 담기 실패",
        //     status: response.status,
        // });
        throw new Error("장바구니에 담기 실패");
    }

    const data = await response.json();
    return data;

    return Response.json();
}

async function POST(request) {
    const body = await request.json();
    const { productId } = body;

    const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ productId }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        }, 
    });

    if (!response.ok) {
        throw new Error({
            message: "장바구니에 담기 실패",
            status: 500,
        });
    }
}

export { GET };
