const getData = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
};

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: data,
    });

    return await res.json();
};

export { getData, postData };
