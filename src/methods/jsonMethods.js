import jsonData from "../data/platform.json";

export async function fetchJson(method, url, target, parent) {
  let result = await returnResult(method, url);
  parent.setState({ result: result, searching: false });
  return result;
}
async function returnResult(method, url) {
  let result;
  const options = {
    method: method,
  };
  try {
    let response = await fetch(
      url + "&key=07eaf5a4bce8434b85cf5c1f9f03a302",
      options
    );
    result = await response.json();
  } catch (err) {
    console.log(err);
  }
  return await result;
}

export function returnPicture(searchedPlatforms) {
  let html = "";
  let searching = [];
  searchedPlatforms.forEach((element) => {
    if(!searching.includes(element.platform.slug)){
      searching.push(element.platform.slug);
    }
    
  });

  jsonData.platformparents.forEach((element) => {
    if (searching.includes(element.slug)) {
      html += element.svg;
    }
  });

  return html;
}
