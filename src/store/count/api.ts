export function fetchRestaurant() {
  const baseUrl = "http://localhost:3000/";
  return fetch(`${baseUrl}people`)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}
