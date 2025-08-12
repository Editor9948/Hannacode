// Simple toast notification utility
export const showToast = (message, type = 'success') => {
  // Remove existing toast if any
  const existingToast = document.getElementById('toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.className = `fixed top-4 right-4 z-50 px-4 py-2 rounded-md shadow-lg transition-all duration-300 transform translate-x-0`;
  
  // Set styles based on type
  if (type === 'success') {
    toast.className += ' bg-green-500 text-white';
  } else if (type === 'error') {
    toast.className += ' bg-red-500 text-white';
  } else {
    toast.className += ' bg-blue-500 text-white';
  }
  
  toast.textContent = message;
  
  // Add to document
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
};

export default showToast;
