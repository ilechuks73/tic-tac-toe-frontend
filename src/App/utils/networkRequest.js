const baseURL = process.env.REACT_APP_API_BASE_URL

export function createRoom(params) {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/createRoom`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        roomID: params.roomID,
        playerName: params.playerName
      }),
    })
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};

export function requestRoomID() {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/requestRoomID`)
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  })
}

export function testConnection() {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/testConnection`)
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err))
  })
}