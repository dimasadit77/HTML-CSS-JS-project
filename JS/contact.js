document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mendapatkan nilai input
    let firstName = document.querySelector('input[placeholder=" Nama Depan"]').value.trim();
    let lastName = document.querySelector('input[placeholder=" Nama Belakang"]').value.trim();
    let email = document.querySelector('input[placeholder=" Alamat Email"]').value.trim();
    let phone = document.querySelector('input[placeholder="No Telepon/HP"]').value.trim();
    let inquiry = document.getElementById('inquiry').value;
    let message = document.querySelector('textarea[placeholder="Isi Pesan"]').value.trim();

    // Validasi input
    let isValid = true;
    clearErrors();

    if (!firstName) {
        showError('input[placeholder=" Nama Depan"]', 'Nama Depan harus diisi.');
        isValid = false;
    }
    if (!lastName) {
        showError('input[placeholder=" Nama Belakang"]', 'Nama Belakang harus diisi.');
        isValid = false;
    }
    if (!email) {
        showError('input[placeholder=" Alamat Email"]', 'Alamat Email harus diisi.');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('input[placeholder=" Alamat Email"]', 'Alamat Email tidak valid.');
        isValid = false;
    }
    if (!phone) {
        showError('input[placeholder="No Telepon/HP"]', 'Nomor Telepon/HP harus diisi.');
        isValid = false;
    } else if (!validatePhone(phone)) {
        showError('input[placeholder="No Telepon/HP"]', 'Nomor Telepon/HP tidak valid! (contoh valid: 081212345678)');
        isValid = false;
    }
    if (!inquiry) {
        showError('#inquiry', 'Inquiry harus dipilih.');
        isValid = false;
    }
    if (!message) {
        showError('textarea[placeholder="Isi Pesan"]', 'Isi Pesan harus diisi.');
        isValid = false;
    } else if (countWords(message) < 30) {
        showError('textarea[placeholder="Isi Pesan"]', 'Isi Pesan harus memiliki minimal 30 kata.');
        isValid = false;
    }

    // Menampilkan pesan error atau mengirimkan formulir
    if (isValid) {
        alert('Formulir berhasil dikirim.');
        document.getElementById('contact-form').reset();
        clearErrors();
        // Di sini Anda bisa menambahkan kode untuk mengirimkan formulir
        // Contoh: document.getElementById('contact-form').submit();
    }
});

function showError(selector, message) {
    let element = document.querySelector(selector);
    let errorElement = element.nextElementSibling;
    element.classList.add('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    document.querySelectorAll('.input').forEach(function(element) {
        element.classList.remove('error');
    });
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.style.display = 'none';
        element.textContent = '';
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\d{10,15}$/;
    return re.test(phone);
}
