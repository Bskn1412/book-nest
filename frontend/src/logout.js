export default function logoutUser() {
  localStorage.clear(); // Clear user data
  window.location.href = '/'; // Redirect to login
}
