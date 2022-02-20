const getData = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
};

export { getData };
