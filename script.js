
const activityLog = document.getElementById('activityLog');

function logActivity(activity) {
    const time = new Date().toLocaleTimeString();
    const logEntry = document.createElement('p');
    logEntry.textContent = `[${time}] ${activity}`;
    activityLog.appendChild(logEntry);
    activityLog.scrollTop = activityLog.scrollHeight;
}

// Track button clicks
document.getElementById('clickMe').addEventListener('click', () => {
    logActivity('Button "Click Me" was clicked.');
});

// Track form submissions
document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    logActivity(`Form submitted with name: ${name}`);
});

// Track mouse movements
document.addEventListener('mousemove', (event) => {
    logActivity(`Mouse moved to (${event.clientX}, ${event.clientY})`);
});

// Track key presses
document.addEventListener('keydown', (event) => {
    logActivity(`Key "${event.key}" was pressed.`);
});

// Track window resize
window.addEventListener('resize', () => {
    logActivity('Window resized.');
});

// Track page visibility changes (when the user switches tabs or minimizes the browser)
document.addEventListener('visibilitychange', () => {
    const state = document.visibilityState === 'visible' ? 'visible' : 'hidden';
    logActivity(`Page is now ${state}.`);
});

// Track when the user leaves the page
window.addEventListener('beforeunload', () => {
    logActivity('User is leaving the page.');
});
