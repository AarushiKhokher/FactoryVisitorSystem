// logoutPrompt.js
 
function showLogoutPrompt() {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(173, 216, 230, 0.9)'; 
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = '1000';
 
  // Create prompt box
  const promptBox = document.createElement('div');
  promptBox.style.backgroundColor = '#fff';
  promptBox.style.padding = '20px';
  promptBox.style.borderRadius = '8px';
  promptBox.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
  promptBox.style.textAlign = 'center';
 
  // Prompt message
  const message = document.createElement('p');
  message.textContent = 'Are you sure you want to log out?';
  message.style.marginBottom = '20px';
  message.style.fontSize = '18px';
 
  // Buttons
  const yesBtn = document.createElement('button');
  yesBtn.textContent = 'Yes';
  yesBtn.style.marginRight = '10px';
  yesBtn.onclick = () => {
    // Perform logout logic here
    alert('Logged out!');
    document.body.removeChild(overlay);
  };
 
  const noBtn = document.createElement('button');
  noBtn.textContent = 'No';
  noBtn.onclick = () => {
    document.body.removeChild(overlay);
  };
 
  // Append elements
  promptBox.appendChild(message);
  promptBox.appendChild(yesBtn);
  promptBox.appendChild(noBtn);
  overlay.appendChild(promptBox);
  document.body.appendChild(overlay);
}
 

 
 