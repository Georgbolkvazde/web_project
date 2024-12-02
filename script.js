document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('data-form');
    const tableBody = document.querySelector('#data-table tbody');

    const saveData = (data) => {
        localStorage.setItem('formData', JSON.stringify(data));
    };

    const loadData = () => {
        return JSON.parse(localStorage.getItem('formData')) || [];
    };

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = loadData();
            const newData = {
                name: form.name.value,
                email: form.email.value
            };
            formData.push(newData);
            saveData(formData);
            alert('Данные сохранены!');
            form.reset();
        });
    }

    if (tableBody) {
        const formData = loadData();
        formData.forEach((item) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.name}</td><td>${item.email}</td>`;
            tableBody.appendChild(row);
        });
    }
});