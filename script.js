document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        const hours = new Date().getHours();
        if (hours < 12) {
            greetingElement.textContent = 'Labrīt!';
        } else if (hours < 18) {
            greetingElement.textContent = 'Labdien!';
        } else {
            greetingElement.textContent = 'Labvakar!';
        }
    }

    const saveData = (data) => {
        localStorage.setItem('formData', JSON.stringify(data));
    };

    const loadData = () => {
        return JSON.parse(localStorage.getItem('formData')) || [];
    };

    const form = document.getElementById('data-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = loadData();
            const newData = {
                name: form.name.value,
                email: form.email.value,
            };
            formData.push(newData);
            saveData(formData);
            alert('Dati saglabāti!');
            form.reset();
        });
    }

    const tableBody = document.querySelector('#data-table tbody');
    const recordCount = document.getElementById('record-count');
    if (tableBody && recordCount) {
        const formData = loadData();
        recordCount.textContent = `Ieraksti: ${formData.length}`;
        formData.forEach((item) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.name}</td><td>${item.email}</td>`;
            tableBody.appendChild(row);
        });
    }

    const clearButton = document.getElementById('clear-data');
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            localStorage.removeItem('formData');
            alert('Dati notīrīti!');
            location.reload();
        });
    }
});