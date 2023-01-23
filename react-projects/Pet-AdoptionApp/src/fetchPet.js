const fetchPet = async () => {
    const id = queryKey[1];
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    if (!apiRes.ok) {
        throw new Error(`Error occured during API fetch `)
    }
    return apiRes.json();
}
export default fetchPet;