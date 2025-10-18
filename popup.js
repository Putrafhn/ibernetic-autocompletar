document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('sitenameInput');
    const button = document.getElementById('saveButton');
    const status = document.getElementById('status');

    // Cargar el valor guardado al abrir el popup
    chrome.storage.local.get(['ibernetic_sitename'], (result) => {
        if (result.ibernetic_sitename) {
            input.value = result.ibernetic_sitename;
        }
    });

    // Guardar el valor al hacer clic en el botón
    button.addEventListener('click', () => {
        const sitename = input.value.trim();

        if (sitename) {
            chrome.storage.local.set({ ibernetic_sitename: sitename }, () => {
                status.textContent = '¡Guardado con éxito!';
                setTimeout(() => { status.textContent = ''; }, 2000);
            });
        } else {
            status.textContent = 'El campo no puede estar vacío.';
            status.style.color = 'red';
            setTimeout(() => { status.textContent = ''; status.style.color = 'green'; }, 2000);
        }
    });
});