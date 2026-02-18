document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-info');
    const extraInfo = document.getElementById('extra-info');
    
    toggleButton.addEventListener('click', function() {
        if (extraInfo.style.display === 'none') {
            extraInfo.style.display = 'block';
            toggleButton.textContent = 'Hide Info';
        } else {
            extraInfo.style.display = 'none';
            toggleButton.textContent = 'Show More Info';
        }
    });
});