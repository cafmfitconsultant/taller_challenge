
const url = "https://jsonplaceholder.typicode.com/todos";

 const getAllPosts = async (url) => {  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
}