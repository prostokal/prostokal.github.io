export async function postData(url, data) { 
    const res = await fetch(url, {
        method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
    })
    return await res.json();
};

export async function getResourse(url) { 
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(`Some error code: ${res.status}, url: ${url}`)
    }

    return await res.json();
};