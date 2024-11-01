function getFullYear() {
  const date = new Date();
  return date.getFullYear();
}

function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

function getLatestNotification() {
  // Return an HTML string
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

// Export functions as named exports
export { getFullYear, getFooterCopy, getLatestNotification };
