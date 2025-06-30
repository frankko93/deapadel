// Translations for news page
const translations = {
    'it': {
        // Navigation
        'servizi': 'Servizi',
        'ubicazione': 'Ubicazione',
        'contatto': 'Contatto',
        'noticias': 'Notizie',
        'prenota-ora': 'Prenota Ora',
        
        // News page
        'news-title': 'Notizie & Novità',
        'news-subtitle': 'Rimani aggiornato con le ultime notizie di DEA Padel',
        'filter-all': 'Tutte le categorie',
        'filter-team': 'Squadra',
        'filter-tournaments': 'Tornei',
        'filter-promos': 'Promozioni',
        'filter-lessons': 'Lezioni',
        'read-more': 'Leggi di più',
        
        // News content
        'news-1-title': 'Vittoria nel torneo regionale!',
        'news-1-excerpt': 'La nostra squadra di DEA Padel ha vinto il torneo regionale della Sicilia, dimostrando un eccellente livello di gioco e lavoro di squadra.',
        'news-2-title': 'Inizia l\'Interclub Invernale',
        'news-2-excerpt': 'Le iscrizioni per il torneo Interclub Invernale sono ora aperte. Un\'opportunità unica per competere e migliorare il tuo ranking.',
        'news-3-title': '2x1 sui campi le domeniche di luglio',
        'news-3-excerpt': 'Approfitta della nostra promozione speciale: noleggia un campo e ottieni il secondo gratis tutte le domeniche di luglio. Non perdertela!',
        'news-4-title': 'Nuovi corsi per principianti',
        'news-4-excerpt': 'Lanciamo nuovi corsi appositamente progettati per principianti. Impara le tecniche base con i nostri istruttori certificati.',
        'news-5-title': 'Presentiamo la divisa ufficiale 2025-2026',
        'news-5-excerpt': 'Presentiamo la nostra nuova divisa ufficiale per la stagione 2025-2026. Design moderno e tecnologia all\'ultima generazione.',
        'news-6-title': 'Ranking interno: risultati della 3ª giornata',
        'news-6-excerpt': 'Scopri i risultati della terza giornata del ranking interno. Grandi sorprese ed eccellente livello di competizione.'
    },
    
    'es': {
        // Navigation
        'servizi': 'Servicios',
        'ubicazione': 'Ubicación',
        'contatto': 'Contacto',
        'noticias': 'Noticias',
        'prenota-ora': 'Reserva',
        
        // News page
        'news-title': 'Noticias & Novedades',
        'news-subtitle': 'Mantente al día con las últimas noticias de DEA Padel',
        'filter-all': 'Todas las categorías',
        'filter-team': 'Equipo',
        'filter-tournaments': 'Torneos',
        'filter-promos': 'Promociones',
        'filter-lessons': 'Clases',
        'read-more': 'Leer más',
        
        // News content
        'news-1-title': '¡Victoria en el torneo regional!',
        'news-1-excerpt': 'Nuestro equipo de DEA Padel se alzó con la victoria en el torneo regional de Sicilia, demostrando un excelente nivel de juego y trabajo en equipo.',
        'news-2-title': 'Arranca el Interclubes de Invierno',
        'news-2-excerpt': 'Le iscrizioni per il torneo Interclubes de Invierno sono ora aperte. Una oportunidad única para competere e migliorare il tuo ranking.',
        'news-3-title': '2x1 en canchas los domingos de julio',
        'news-3-excerpt': 'Aprovecha nuestra promoción especial: alquila una cancha y obtén la segunda gratis todos los domingos de julio. ¡No te lo pierdas!',
        'news-4-title': 'Nuevos cursos para principiantes',
        'news-4-excerpt': 'Lanzamos nuevos cursos especialmente diseñados para principiantes. Aprende las técnicas básicas con nuestros profesores certificados.',
        'news-5-title': 'Estrenamos equipación oficial 2025-2026',
        'news-5-excerpt': 'Presentamos nuestra nueva equipación oficial para la temporada 2025-2026. Diseño moderno y tecnología de última generación.',
        'news-6-title': 'Ranking interno: resultados de la 3.ª jornada',
        'news-6-excerpt': 'Conoce los resultados de la tercera jornada del ranking interno. Grandes sorpresas y excelente nivel de competencia.'
    },
    
    'en': {
        // Navigation
        'servizi': 'Services',
        'ubicazione': 'Location',
        'contatto': 'Contact',
        'noticias': 'News',
        'prenota-ora': 'Book Now',
        
        // News page
        'news-title': 'News & Updates',
        'news-subtitle': 'Stay updated with the latest news from DEA Padel',
        'filter-all': 'All categories',
        'filter-team': 'Team',
        'filter-tournaments': 'Tournaments',
        'filter-promos': 'Promotions',
        'filter-lessons': 'Lessons',
        'read-more': 'Read more',
        
        // News content
        'news-1-title': 'Victory in the regional tournament!',
        'news-1-excerpt': 'Our DEA Padel team won the regional tournament in Sicily, demonstrating excellent gameplay and teamwork.',
        'news-2-title': 'Winter Interclub starts',
        'news-2-excerpt': 'Registrations for the Winter Interclub tournament are now open. A unique opportunity to compete and improve your ranking.',
        'news-3-title': '2x1 on courts on Sundays in July',
        'news-3-excerpt': 'Take advantage of our special promotion: rent a court and get the second one free every Sunday in July. Don\'t miss it!',
        'news-4-title': 'New courses for beginners',
        'news-4-excerpt': 'We launch new courses specially designed for beginners. Learn basic techniques with our certified instructors.',
        'news-5-title': 'We present the official 2025-2026 kit',
        'news-5-excerpt': 'We present our new official kit for the 2025-2026 season. Modern design and cutting-edge technology.',
        'news-6-title': 'Internal ranking: 3rd round results',
        'news-6-excerpt': 'Discover the results of the third round of the internal ranking. Great surprises and excellent competition level.'
    }
};

// Function to format date based on language
function formatDate(dateString, lang) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(lang === 'it' ? 'it-IT' : lang === 'es' ? 'es-ES' : 'en-US', options);
}

// Function to change language
function changeLanguage(lang) {
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update dates
    document.querySelectorAll('time.news-date').forEach(time => {
        const dateString = time.getAttribute('datetime');
        time.textContent = formatDate(dateString, lang);
    });
    
    // Store language preference
    localStorage.setItem('preferred-language', lang);
}

// Function to handle category filter
function handleCategoryFilter() {
    const filterSelect = document.getElementById('categoryFilter');
    
    filterSelect.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        const newsCards = document.querySelectorAll('.news-card');
        
        newsCards.forEach(card => {
            if (selectedCategory === 'todas' || card.getAttribute('data-category') === selectedCategory) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Function to close mobile menu
function closeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        console.log('Mobile menu closed'); // Debug
    }
}

// Simple mobile menu functionality
function initMobileMenu() {
    console.log('Initializing mobile menu...'); // Debug
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    console.log('Menu elements:', { menuToggle, navMenu }); // Debug
    
    if (menuToggle && navMenu) {
        console.log('Menu elements found, adding event listener...'); // Debug
        
        menuToggle.onclick = function() {
            console.log('Menu toggle clicked!'); // Debug
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('Menu active:', navMenu.classList.contains('active')); // Debug
        };
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close menu when clicking on navigation links
        const navLinks = navMenu.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                console.log('Nav link clicked, closing menu'); // Debug
                closeMobileMenu();
            });
        });
        
        // Close menu with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        console.log('Mobile menu initialized successfully'); // Debug
    } else {
        console.log('Menu elements not found!'); // Debug
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize other features
    initCategoryFilter();
    initLanguageSelector();
    initSmoothScroll();
});

function initCategoryFilter() {
    const categoryLinks = document.querySelectorAll('.category-list a');
    const newsCards = document.querySelectorAll('.news-card');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Actualizar clase activa en los filtros
            document.querySelectorAll('.category-list a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
            
            const category = link.getAttribute('data-category');
            const newsGrid = document.querySelector('.news-grid');
            const articles = document.querySelectorAll('.news-card');
            
            // Añadir/quitar clase filtering según corresponda
            if (category === 'todas') {
                newsGrid.classList.remove('filtering');
            } else {
                newsGrid.classList.add('filtering');
            }
            
            // Filtrar artículos
            articles.forEach(article => {
                if (category === 'todas' || article.getAttribute('data-category') === category) {
                    article.style.display = '';
                    article.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
}

function initLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    function changeLanguage(lang) {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang]?.[key]) {
                element.textContent = translations[lang][key];
            }
        });

        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        localStorage.setItem('preferredLanguage', lang);
    }

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            changeLanguage(button.getAttribute('data-lang'));
        });
    });

    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'it';
    changeLanguage(preferredLanguage);
}

// Animación suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Modal functionality
const modal = document.getElementById('newsModal');
const modalTitle = document.getElementById('modalTitle');
const modalDate = document.getElementById('modalDate');
const modalMainImage = document.getElementById('modalMainImage');
const modalCarousel = document.getElementById('modalCarousel');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close-modal');

// Función para abrir el modal
function openModal(event) {
    event.preventDefault();
    const link = event.currentTarget;
    
    // Obtener datos del enlace
    const title = link.getAttribute('data-title');
    const date = link.getAttribute('data-date');
    const image = link.getAttribute('data-image');
    const description = link.getAttribute('data-description');
    const gallery = JSON.parse(link.getAttribute('data-gallery') || '[]');

    // Actualizar contenido del modal
    modalTitle.textContent = title;
    modalDate.textContent = new Date(date).toLocaleDateString('it-IT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    modalMainImage.src = image;
    modalMainImage.alt = title;
    modalDescription.textContent = description;

    // Limpiar y actualizar carrusel
    modalCarousel.innerHTML = '';
    
    // Forzar el display a flex para asegurar layout horizontal
    modalCarousel.style.display = 'flex';
    modalCarousel.style.flexDirection = 'row';
    modalCarousel.style.flexWrap = 'nowrap';
    
    if (gallery.length > 0) {
        gallery.forEach((imgSrc, index) => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'carousel-image';
            imgContainer.style.flexShrink = '0';
            imgContainer.style.minWidth = '160px';
            
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${title} - Image ${index + 1}`;
            
            // Cambiar imagen principal al hacer clic
            img.onclick = () => {
                modalMainImage.src = imgSrc;
                modalMainImage.alt = `${title} - Image ${index + 1}`;
            };
            
            imgContainer.appendChild(img);
            modalCarousel.appendChild(imgContainer);
        });
    } else {
        modalCarousel.style.display = 'none';
    }

    // Mostrar modal con animación
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    // Prevenir scroll en el body para móviles
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
}

// Función para cerrar el modal
function closeModalHandler() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        // Reset carousel display to flex for next time
        modalCarousel.style.display = 'flex';
    }, 300);
    
    // Restaurar scroll del body
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
}

// Event listeners
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', openModal);
});

closeModal.addEventListener('click', closeModalHandler);

// Cerrar modal al hacer clic fuera
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalHandler();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModalHandler();
    }
});

function initSmoothScroll() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    closeMobileMenu();
                }
            }
        });
    });
} 