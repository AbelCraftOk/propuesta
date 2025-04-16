function mostrarPestaña(id) {
    // Oculta todas las pestañas
    document.querySelectorAll('.container').forEach(div => {
        div.style.display = 'none';
    });

    // Muestra la pestaña seleccionada
    document.getElementById(id).style.display = 'block';
}

function notificaciones() {
    alert("El dia 07/04/2025 no habran clases"
        + "\nMotivo: Feriado Nacional"
    );
    alert("El dia 08/04/2025 no habran clases"
        + "\nMotivo: Feriado Nacional"
    );
    alert("El dia 09/04/2025 no habran clases"
        + "\nMotivo: Feriado Nacional"
    );
    alert("El dia 10/04/2025 no habran clases"
        + "\nMotivo: Feriado Nacional"
    );
    alert("El dia 11/04/2025 no habran clases"
        + "\nMotivo: Feriado Nacional"
    );
    alert("Recurda mirar los avisos");
}
