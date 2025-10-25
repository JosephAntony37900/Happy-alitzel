        function createStars() {
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Mostrar siguiente tarjeta
        function showNextCard(cardNumber) {
            const card = document.getElementById('card' + cardNumber);
            const btn = document.getElementById('btn' + cardNumber);
            
            if (card) {
                card.classList.remove('hidden');
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            if (btn) {
                btn.classList.remove('hidden');
            }

            // Ocultar botón anterior
            const prevBtn = document.querySelector('.btn-container:not(.hidden)');
            if (prevBtn && prevBtn.id !== 'btn' + cardNumber) {
                prevBtn.style.display = 'none';
            }

            // Crear corazones flotantes
            if (cardNumber === 4) {
                createFloatingHearts();
            }
        }

        // Crear corazones flotantes
        function createFloatingHearts() {
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'heart-float';
                    heart.textContent = '❤️';
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
                    document.body.appendChild(heart);
                    
                    setTimeout(() => heart.remove(), 4000);
                }, i * 300);
            }
        }

        // Inicializar
        createStars();

        // Click en cualquier parte para efectos
        document.addEventListener('click', function(e) {
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
            ripple.style.animation = 'ripple 1s ease-out';
            document.body.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 1000);
        });

        // Animación ripple
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    width: 100px;
                    height: 100px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);