const photos = [
    {
        image: 'fotos/foto.jpg',
        date: '????',
        caption: 'Alitzel Vazquez Suarez',
        description: 'Tu hermosa foto de niña chiquita muy bonita (la princesa más linda).'
    },
    {
        image: 'fotos/foto1.jpg',
        date: '23 Diciembre 2021',
        caption: 'Primera vez juntos',
        description: 'Recuerdo este momento tan especial. Fue la primera vez que estuvimos juntos. Mi corazón iba a mil por hora...'
    },
    {
        image: 'fotos/foto2.jpg',
        date: '23 Diciembre 2021',
        caption: 'Día especial',
        description: 'La magia de haberte agarrado la mano por primera vez. Sentí que el mundo se detenía solo para nosotros...'
    },
    {
        image: 'fotos/foto5.jpg',
        date: '24 Diciembre 2021',
        caption: 'Sashaaaa',
        description: 'Tu con tu hermosa gatita, y la grandiosa conexión que tienen. Me encanta verte feliz con ella...'
    },
    {
        image: 'fotos/foto6.jpg',
        date: '24 Diciembre 2021',
        caption: 'Sensualidad pura',
        description: 'La primera foto sexy que me enviaste (golosa 7w7).'
    },
    {
        image: 'fotos/mainkra.jpg',
        date: '2 Enero 2022',
        caption: 'Minecraft juntos',
        description: 'Los momentos que compartimos en Minecraft fueron increíbles. Construimos varios mundos juntos, llenos de aventuras y risas, en especial en la que construimos nuestros salones de boda.'
    },
    {
        image: 'fotos/cabeio.jpg',
        date: '19 Enero 2022',
        caption: 'Cabello rebelde',
        description: 'Tu hermoso cabello rebelde siempre me ha encantado.'
    },
    {
        image: 'fotos/foto4.jpg',
        date: '3 Mayo 2022',
        caption: '5 minutos juntos',
        description: 'Los 5 minutos más felices de mi vida, era cuando iba a verte a la secundaria para poder mirarte y abrazarte.'
    },
    {
        image: 'fotos/foto3.jpg',
        date: '4 Junio 2022',
        caption: 'Segunda cita',
        description: 'La segunda vez que salimos juntos, me encantó cada momento a tu lado ese día...'
    },
    {
        image: 'fotos/sonrisa.jpg',
        date: '20 Junio 2022',
        caption: 'Tu sonrisa',
        description: 'Ver tu hermosa sonrisa ilumina mis días.'
    },
    {
        image: 'fotos/foto7.jpg',
        date: '????',
        caption: 'La PAPA',
        description: 'La BENDITA PAPA que nunca me dejo ver tu foto sexy completa...'
    },
    {
        image: 'fotos/tercerCita.jpg',
        date: '17 Febrero 2023',
        caption: 'Tercer cita',
        description: 'No fue la tercera cita, pero fue un momento único y especial saliendo a "starbucks".'
    },
    {
        image: 'fotos/foto8.jpg',
        date: '17 Febrero 2023',
        caption: 'Primer Beso',
        description: 'El momento en que nuestros labios se encontraron por primera vez. Un instante que quedará grabado para siempre en mi corazón.'
    },
    {
        image: 'fotos/foto9.jpg',
        date: '10 Mayo 2025',
        caption: 'Reencuentro',
        description: 'El día que nos reencontramos después de tanto tiempo. La alegría de verte de nuevo iluminó mi alma y me recordó lo mucho que te extrañaba...'
    },
    {
        image: 'fotos/foto10.jpg',
        date: '12 Julio 2025',
        caption: 'Tú pan favorito',
        description: 'Ese momento especial cuando compartimos tu pan favorito juntos. Ver tu sonrisa mientras lo disfrutabas hizo que ese instante fuera aún más dulce...'
    },
    {
        image: 'fotos/foto11.jpg',
        date: '4 Octubre 2025',
        caption: 'Salir contigo',
        description: 'Cada momento a tu lado es un regalo que atesoro profundamente.'
    }
];

const playlist = [
    {
        name: 'From Now On - The Features',
        url: 'musica/From.mp3'
    }
];

// ========== VARIABLES GLOBALES ==========
let currentSongIndex = 0;
let isPlaying = false;
let isMuted = false;

const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const muteBtn = document.getElementById('muteBtn');
const songName = document.getElementById('songName');
const progress = document.getElementById('progress');

// ========== INICIALIZACIÓN ==========
window.addEventListener('DOMContentLoaded', () => {
    createStars();
    generateGallery();
    loadSong(currentSongIndex);
    setupAudioPlayer();
});

// ========== CREAR ESTRELLAS ==========
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// ========== GENERAR GALERÍA ==========
function generateGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    photos.forEach((photo, index) => {
        // Crear polaroid
        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid';
        
        // Contenedor de la foto
        const photoContainer = document.createElement('div');
        photoContainer.className = 'photo-container';
        
        // Imagen
        const img = document.createElement('img');
        img.className = 'photo';
        img.src = photo.image;
        img.alt = photo.caption;
        img.loading = 'lazy';
        
        // Fecha
        const dateTag = document.createElement('div');
        dateTag.className = 'photo-date';
        dateTag.textContent = photo.date;
        
        // Caption corto
        const caption = document.createElement('div');
        caption.className = 'photo-caption';
        caption.textContent = photo.caption;
        
        // Ensamblar
        photoContainer.appendChild(img);
        photoContainer.appendChild(dateTag);
        polaroid.appendChild(photoContainer);
        polaroid.appendChild(caption);
        
        // Click para abrir overlay
        polaroid.addEventListener('click', () => openOverlay(index));
        
        galleryGrid.appendChild(polaroid);
    });
}

// ========== OVERLAY PARA DESCRIPCIÓN COMPLETA ==========
function openOverlay(index) {
    const photo = photos[index];
    
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'photo-overlay active';
    
    // Contenido del overlay
    overlay.innerHTML = `
        <div class="overlay-content">
            <button class="close-overlay">×</button>
            <img src="${photo.image}" alt="${photo.caption}" class="overlay-photo">
            <div class="overlay-text">
                ${photo.description}
            </div>
            <div class="overlay-date">${photo.date}</div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Cerrar al hacer click en X o fuera del contenido
    const closeBtn = overlay.querySelector('.close-overlay');
    closeBtn.addEventListener('click', () => closeOverlay(overlay));
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeOverlay(overlay);
        }
    });
    
    // Cerrar con ESC
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeOverlay(overlay);
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

function closeOverlay(overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 300);
}

// ========== REPRODUCTOR DE MÚSICA ==========
function loadSong(index) {
    if (playlist.length === 0) {
        songName.textContent = 'No hay canciones disponibles';
        return;
    }
    
    const song = playlist[index];
    audioPlayer.src = song.url;
    songName.textContent = song.name;
    
    // Si estaba reproduciendo, continuar
    if (isPlaying) {
        audioPlayer.play().catch(e => console.log('Error al reproducir:', e));
    }
}

function setupAudioPlayer() {
    // Play/Pause
    playBtn.addEventListener('click', togglePlay);
    
    // Anterior
    prevBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
    });
    
    // Siguiente
    nextBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
    });
    
    // Mute
    muteBtn.addEventListener('click', toggleMute);
    
    // Actualizar progreso
    audioPlayer.addEventListener('timeupdate', updateProgress);
    
    // Siguiente canción al terminar
    audioPlayer.addEventListener('ended', () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
    });
    
    // Volumen inicial
    audioPlayer.volume = 0.5;
}

function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        playBtn.textContent = '▶️';
        isPlaying = false;
    } else {
        audioPlayer.play().catch(e => {
            console.log('Error al reproducir:', e);
            alert('Por favor, interactúa con la página primero para activar el audio');
        });
        playBtn.textContent = '⏸️';
        isPlaying = true;
    }
}

function toggleMute() {
    if (isMuted) {
        audioPlayer.muted = false;
        muteBtn.textContent = '🔊';
        isMuted = false;
    } else {
        audioPlayer.muted = true;
        muteBtn.textContent = '🔇';
        isMuted = true;
    }
}

function updateProgress() {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progress.style.width = progressPercent + '%';
    }
}

// ========== EFECTOS DE CLICK ==========
document.addEventListener('click', function(e) {
    // No crear ripple si es un click en el reproductor o controles
    if (e.target.closest('.music-player') || e.target.closest('.photo-overlay')) {
        return;
    }
    
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 107, 107, 0.6)';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.pointerEvents = 'none';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.zIndex = '9999';
    
    // Animación
    ripple.animate([
        { width: '10px', height: '10px', opacity: 1 },
        { width: '100px', height: '100px', opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    });
    
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
});