export async function fetchData() {
  const BASE_API = "http://103.183.75.112/api/directory/dataList";

  try {
    const response = await fetch(BASE_API);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
