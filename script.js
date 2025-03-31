document.addEventListener('DOMContentLoaded', function() {
  // Get all tab triggers and content
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Add click event to each tab trigger
  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      // Remove active class from all triggers and contents
      tabTriggers.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked trigger
      trigger.classList.add('active');
      
      // Get the tab ID from data-tab attribute
      const tabId = trigger.getAttribute('data-tab');
      
      // Find and show the corresponding content
      const content = document.getElementById(tabId);
      if (content) {
        content.classList.add('active');
      }
    });
  });
});