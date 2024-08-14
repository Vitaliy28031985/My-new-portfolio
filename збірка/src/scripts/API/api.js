const BASE_URL = 'https://backend-portfolio-e0lg.onrender.com/api/';

export const projectsUk = async () => {
    try {
        const response = await fetch(`${BASE_URL}projects/uk`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Failed to fetch data"); 
        }
    } catch (error) {
        console.error(error.message); 
        throw error; 
    }
}

export const projectsEn = async () => {
    try {
        const response = await fetch(`${BASE_URL}projects/en`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Failed to fetch data"); 
        }
    } catch (error) {
        console.error(error.message); 
        throw error; 
    }
}

export function addMessage(data) {
  fetch(`${BASE_URL}orders/`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    mode: "cors",
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((message) => {
      // Do something with updated task
    })
    .catch((error) => {
      return Promise.reject(new Error("Nothing was found for your request"));
    });
}