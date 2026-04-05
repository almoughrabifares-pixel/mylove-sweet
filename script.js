let sweets = {};

// جلب البيانات
fetch('data.json')
    .then(res => res.json())
    .then(data => {
        sweets = data;
    })
    .catch(err => console.log("Data file not ready yet."));

function openModal(month) {
    const modal = document.getElementById('sweetModal');
    const data = sweets[month];

    document.getElementById('modalMonth').innerText = month;
    const img = document.getElementById('sweetImage');
    
    if(data) {
        document.getElementById('sweetName').innerText = data.name;
        document.getElementById('sweetDesc').innerText = data.desc;
        if(data.image) {
            img.src = data.image;
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    } else {
        document.getElementById('sweetName').innerText = "Waiting for the surprise...";
        document.getElementById('sweetDesc').innerText = "This month's sweet hasn't been added yet.";
        img.style.display = "none";
    }
    
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('sweetModal').style.display = "none";
}

// إغلاق عند الضغط خارج الصندوق
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal();
    }
}
