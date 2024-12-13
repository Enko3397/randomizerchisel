let isDarkTheme = false;

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    document.querySelector('.theme-toggle').textContent = `Тема: ${isDarkTheme ? 'Тёмная' : 'Светлая'}`;
}

function generateRandomNumber() {
    const minValue = parseInt(document.getElementById('minValue').value, 10);
    const maxValue = parseInt(document.getElementById('maxValue').value, 10);

    if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
        document.getElementById('result').textContent = 'Ошибка ввода';
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById('result').textContent = randomNumber;
}
