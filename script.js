document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            console.log('Cliccato su un elemento della galleria!');
            const imageUrl = item.getAttribute('href');
            window.open(imageUrl, '_blank');
        }); 
    });
});
