async function fetchData() {
  const url =
    "https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Coral%20Springs&minDate=2024-02-13&maxDate=2024-02-20&page=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a19ff8e0d4mshc242df1707a9e69p1444eajsn1f3a0794cafe",
      "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    document.getElementById("list-item").innerHTML = result.data
      .map((item) => `<li>${item.name}</li>`)
      .join("");
  } catch (error) {
    console.error(error);
  }
}
fetchData();
