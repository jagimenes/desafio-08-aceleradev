class Api {
  static get(url, cb) {
    var myHeaders = new Headers();
    var myInit = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    };

    let myRequest = new Request(
      `https://5e7d0266a917d70016684219.mockapi.io/api/v1/${url}`
    );

    fetch(myRequest, myInit)
      .then((response) => response.json().then((result) => cb(result)))
      .catch((err) => console.error(err));
  }

  static post(url, object, cb) {
    var myHeaders = new Headers();
    var myInit = {
      method: "POST",
      body: JSON.stringify(object),
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    };

    let myRequest = new Request(
      `https://5e7d0266a917d70016684219.mockapi.io/api/v1/${url}`
    );

    fetch(myRequest, myInit)
      .then((response) => response.json().then((result) => cb(result)))
      .catch((err) => console.error(err));
  }
}

export default Api;
