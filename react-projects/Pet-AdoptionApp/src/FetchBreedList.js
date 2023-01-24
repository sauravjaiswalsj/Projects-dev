const FetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1];
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
    if (!apiRes.ok) {
        throw new Error(`Error occured during ${animal} API fetch `)
    }
    return apiRes.json();
}
export default FetchBreedList;