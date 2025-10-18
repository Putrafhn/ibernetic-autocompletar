// Obtener el valor guardado de la extensión
chrome.storage.local.get(['ibernetic_sitename'], (result) => {
    const sitenameValue = result.ibernetic_sitename;

    if (sitenameValue) {
        // Buscar el campo por el atributo 'name'
        const sitenameInput = document.querySelector('input[name="sitename"]');

        if (sitenameInput) {
            // Rellenar el campo
            sitenameInput.value = sitenameValue;

            // Opcional: Disparar un evento para que la web detecte el cambio
            // Algunas webs requieren esto
            sitenameInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }
});