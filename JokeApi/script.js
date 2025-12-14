//Method 1
let button = document.getElementById("jokeBtn");
const jokeText1 = document.getElementById("jokeDisplay1");
const jokeText2 = document.getElementById("jokeDisplay2");

const generateJoke = () => {
  jokeText1.innerText = "Loading...";
};

button.addEventListener("click", generateJoke); //yhan event listener lagaya hai button pe jo click hone pe generateJoke function ko call karega

// async function getJoke() {
//   jokeText2.innerText = "Loading...";

//   const response = await fetch(
//     "https://official-joke-api.appspot.com/random_joke"
//   );

//   const data = await response.json();
//   console.log(data);
//   jokeText2.innerHTML = `
//     ${data.setup}
//     <br><br>
//     <b>${data.punchline}</b>
//   `;

//   //{type: 'general', setup: 'What do you get when you cross a snowman with a vampire?', punchline: 'Frostbite.', id: 232}
// }


async function getJoke() {
  try {
    jokeText2.innerText = "Loading...";

    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    if (!response.ok) {
      throw new Error("API Error");
    }

    const data = await response.json();

    jokeText2.innerHTML = `
      ${data.setup}
      <br><br>
      <b>${data.punchline}</b>
    `;
  } catch (error) {
    jokeText2.innerText = "Failed to load joke 😢";
  }
}
