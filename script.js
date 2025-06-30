// Main script for DEA Padel
// All logic is wrapped in DOMContentLoaded to avoid errors

console.log('DEA Padel script loaded'); // Debug

// Translations object
const translations = {
    it: {
        // Navigation
        'servicios': 'Servizi',
        'ubicacion': 'Ubicazione', 
        'contacto': 'Contatto',
        'noticias': 'Notizie',
        'reserva-ahora': 'Prenota Ora',
        
        // Hero
        'hero-subtitle': 'Il tuo club di padel a Riposto',
        'prenota-campo': 'Prenota il tuo campo',
        'scopri-piu': 'Scopri di più',
        
        // Services
        'nuestros-servicios': 'I Nostri Servizi',
        'clases-particulares': 'Lezioni Private',
        'clases-desc': 'Impara con i nostri istruttori certificati e migliora la tua tecnica di gioco. Lezioni personalizzate per tutti i livelli, dai principianti ai giocatori avanzati.',
        'prenota-clase': 'Prenota la tua lezione',
        'alquiler-pistas': 'Campi da Padel',
        'pistas-desc': 'Campi di prima qualità disponibili per tutti i livelli. Superfici professionali e illuminazione ottimale per giocare in qualsiasi momento della giornata.',
        'prenota-pista': 'Prenota il tuo campo',
        'torneos': 'Tornei',
        'torneos-desc': 'Partecipa ai nostri tornei e competi con altri giocatori. Organizziamo eventi speciali e tornei stagionali per creare un ambiente di gioco divertente e competitivo.',
        'iscriviti': 'Iscriviti',
        'servizi-aggiuntivi': 'Servizi Aggiuntivi',
        'servizi-desc': 'Goditi tutti i comfort del nostro club. Spogliatoi completi con docce, snack bar con bevande e spuntini, e ampio parcheggio gratuito per la tua comodità.',
        
        // Service features
        'istruttori-certificati': 'Istruttori certificati',
        'lezioni-personalizzate': 'Lezioni personalizzate',
        'tutti-livelli': 'Tutti i livelli',
        'superfici-professionali': 'Superfici professionali',
        'illuminazione-ottimale': 'Illuminazione ottimale',
        'prenotazione-online': 'Prenotazione online',
        'eventi-speciali': 'Eventi speciali',
        'tornei-stagionali': 'Tornei stagionali',
        'ambiente-competitivo': 'Ambiente competitivo',
        'spogliatoi-docce': 'Spogliatoi con docce',
        'snack-bar': 'Snack bar',
        'parcheggio-gratuito': 'Parcheggio gratuito',
        
        // Location
        'direccion': 'Indirizzo',
        'horario': 'Orari',
        'lunes-domingo': 'Lunedì - Domenica',
        'como-llegar': 'Come arrivare',
        'parcheggio-disponibile': 'Parcheggio gratuito disponibile',
        
        // Contact
        'telefono': 'Telefono',
        'email': 'Email',
        'whatsapp': 'WhatsApp',
        'instagram': 'Instagram',
        'mensaje-rapido': 'Messaggio rapido',
        'invia-messaggio': 'Invia messaggio',
        'invia-un-messaggio': 'Invia un messaggio',
        'invia-messaggio-btn': 'Invia Messaggio',
        'nombre': 'Nome',
        'mensaje': 'Messaggio',
        'selecciona-servicio': 'Seleziona un servizio',
        'lezione-privata': 'Lezione Privata',
        'noleggio-campo': 'Noleggio Campo',
        'tornei': 'Tornei',
        'sponsor': 'Sponsor',
        'altro': 'Altro',
        'enviar': 'Invia',
        
        // Sponsors
        'nuestros-patrocinadores': 'I Nostri Sponsor',
        'grazie-partner': 'Grazie ai nostri partner per il supporto e la fiducia',
        'partner-ufficiale': 'Partner Ufficiale',
        'partner-fiducia': 'Partner di Fiducia',
        'sponsor-club': 'Sponsor del club',
        'vuoi-sponsor': 'Vuoi diventare nostro sponsor?',
        'diventa-sponsor': 'Diventa Sponsor',
        
        // Modal
        'contacta-nosotros': 'Contattaci',
        'llamar': 'Chiama',
        'chatear-ahora': 'Chatta ora',
        
        // News page translations
        'servizi': 'Servizi',
        'ubicazione': 'Ubicazione',
        'contatto': 'Contatto',
        'prenota-ora': 'Prenota Ora',
        'filter-all': 'Tutte le categorie',
        'filter-team': 'Squadra',
        'filter-tournaments': 'Tornei',
        'filter-promos': 'Promozioni',
        'filter-lessons': 'Lezioni',
        'read-more': 'Leggi di più',
        'news-1-title': 'Vittoria nel torneo regionale!',
        'news-1-excerpt': 'La nostra squadra di DEA Padel ha vinto il torneo regionale della Sicilia.',
        'news-2-title': 'Inizia l\'Interclub Invernale',
        'news-2-excerpt': 'Le iscrizioni per il torneo Interclub Invernale sono ora aperte.',
        'news-3-title': '2x1 sui campi le domeniche di luglio',
        'news-3-excerpt': 'Approfitta della nostra promozione speciale: noleggia un campo e ottieni il secondo gratis.',
        'news-4-title': 'Nuovi corsi per principianti',
        'news-4-excerpt': 'Lanciamo nuovi corsi appositamente progettati per principianti.',
        'news-5-title': 'Presentiamo la divisa ufficiale 2025-2026',
        'news-5-excerpt': 'Presentiamo la nostra nuova divisa ufficiale per la stagione 2025-2026.',
        'news-6-title': 'Ranking interno: risultati della 3ª giornata',
        'news-6-excerpt': 'Scopri i risultati della terza giornata del ranking interno.',
        
        // Footer
        'copyright': '© 2025 Franco Aballay',
        
        // WhatsApp messages
        'whatsapp-reserva': 'Ciao! Vorrei prenotare un campo o una lezione. Potete aiutarmi?',
        'whatsapp-info': 'Ciao! Vorrei informazioni sui vostri servizi. Potete aiutarmi?',
        'whatsapp-messaggio': 'Ciao! Vorrei informazioni. Potete aiutarmi?',
        'whatsapp-contatto': 'Ciao! Vorrei contattarvi per informazioni.',
        'whatsapp-news': 'Ciao! Ho visto le vostre notizie e vorrei informazioni.',
        'whatsapp-news-footer': 'Ciao! Vorrei contattarvi.'
    },
    
    es: {
        // Navigation
        'servicios': 'Servicios',
        'ubicacion': 'Ubicación',
        'contacto': 'Contacto',
        'noticias': 'Noticias',
        'reserva-ahora': 'Reserva',
        
        // Hero
        'hero-subtitle': 'Tu club de pádel en Riposto',
        'prenota-campo': 'Reserva tu pista',
        'scopri-piu': 'Descubre más',
        
        // Services
        'nuestros-servicios': 'Nuestros Servicios',
        'clases-particulares': 'Clases Particulares',
        'clases-desc': 'Aprende con nuestros profesores certificados y mejora tu técnica de juego. Clases personalizadas para todos los niveles, desde principiantes hasta jugadores avanzados.',
        'prenota-clase': 'Reserva tu clase',
        'alquiler-pistas': 'Pistas de Pádel',
        'pistas-desc': 'Pistas de primera calidad disponibles para todos los niveles. Superficies profesionales e iluminación óptima para jugar en cualquier momento del día.',
        'prenota-pista': 'Reserva tu pista',
        'torneos': 'Torneos',
        'torneos-desc': 'Participa en nuestros torneos y compite con otros jugadores. Organizamos eventos especiales y torneos estacionales para crear un ambiente de juego divertido y competitivo.',
        'iscriviti': 'Inscríbete',
        'servizi-aggiuntivi': 'Servicios Adicionales',
        'servizi-desc': 'Disfruta de todas las comodidades de nuestro club. Vestuarios completos con duchas, snack bar con bebidas y aperitivos, y amplio estacionamiento gratuito para tu comodidad.',
        
        // Service features
        'istruttori-certificati': 'Profesores certificados',
        'lezioni-personalizzate': 'Clases personalizadas',
        'tutti-livelli': 'Todos los niveles',
        'superfici-professionali': 'Superficies profesionales',
        'illuminazione-ottimale': 'Iluminación óptima',
        'prenotazione-online': 'Reserva online',
        'eventi-speciali': 'Eventos especiales',
        'tornei-stagionali': 'Torneos estacionales',
        'ambiente-competitivo': 'Ambiente competitivo',
        'spogliatoi-docce': 'Vestuarios con duchas',
        'snack-bar': 'Snack bar',
        'parcheggio-gratuito': 'Estacionamiento gratuito',
        
        // Location
        'direccion': 'Dirección',
        'horario': 'Horarios',
        'lunes-domingo': 'Lunes - Domingo',
        'como-llegar': 'Cómo llegar',
        'parcheggio-disponibile': 'Estacionamiento gratuito disponible',
        
        // Contact
        'telefono': 'Teléfono',
        'email': 'Email',
        'whatsapp': 'WhatsApp',
        'instagram': 'Instagram',
        'mensaje-rapido': 'Mensaje rápido',
        'invia-messaggio': 'Enviar mensaje',
        'invia-un-messaggio': 'Envía un mensaje',
        'invia-messaggio-btn': 'Enviar Mensaje',
        'nombre': 'Nombre',
        'mensaje': 'Mensaje',
        'selecciona-servicio': 'Selecciona un servicio',
        'lezione-privata': 'Clase Particular',
        'noleggio-campo': 'Alquiler de Pista',
        'tornei': 'Torneos',
        'sponsor': 'Patrocinador',
        'altro': 'Otro',
        'enviar': 'Enviar',
        
        // Sponsors
        'nuestros-patrocinadores': 'Nuestros Patrocinadores',
        'grazie-partner': 'Gracias a nuestros socios por el apoyo y la confianza',
        'partner-ufficiale': 'Socio Oficial',
        'partner-fiducia': 'Socio de Confianza',
        'sponsor-club': 'Patrocinador del club',
        'vuoi-sponsor': '¿Quieres convertirte en nuestro patrocinador?',
        'diventa-sponsor': 'Conviértete en Patrocinador',
        
        // Modal
        'contacta-nosotros': 'Contacta con Nosotros',
        'llamar': 'Llamar',
        'chatear-ahora': 'Chatear ahora',
        
        // News page translations
        'servizi': 'Servicios',
        'ubicazione': 'Ubicación',
        'contatto': 'Contacto',
        'prenota-ora': 'Reserva',
        'filter-all': 'Todas las categorías',
        'filter-team': 'Equipo',
        'filter-tournaments': 'Torneos',
        'filter-promos': 'Promociones',
        'filter-lessons': 'Lecciones',
        'read-more': 'Leer más',
        'news-1-title': 'Victoria en el torneo regional!',
        'news-1-excerpt': 'Nuestro equipo de DEA Padel ha ganado el torneo regional de Sicilia.',
        'news-2-title': 'Comienza la Interclub Invernale',
        'news-2-excerpt': 'Las inscripciones para el torneo Interclub Invernale ya están abiertas.',
        'news-3-title': '2x1 en los campos los domingos de julio',
        'news-3-excerpt': 'Aprovecha nuestra promoción especial: alquila un campo y obtén el segundo gratis.',
        'news-4-title': 'Nuevos cursos para principiantes',
        'news-4-excerpt': 'Lanzamos nuevos cursos especialmente diseñados para principiantes.',
        'news-5-title': 'Presentamos la uniforme oficial 2025-2026',
        'news-5-excerpt': 'Presentamos nuestra nueva uniforme oficial para la temporada 2025-2026.',
        'news-6-title': 'Clasificación interna: resultados del tercer día',
        'news-6-excerpt': 'Descubre los resultados del tercer día de la clasificación interna.',
        
        // Footer
        'copyright': '© 2025 Franco Aballay',
        
        // WhatsApp messages
        'whatsapp-reserva': '¡Hola! Me gustaría reservar una pista o una clase. ¿Pueden ayudarme?',
        'whatsapp-info': '¡Hola! Me gustaría información sobre sus servicios. ¿Pueden ayudarme?',
        'whatsapp-messaggio': '¡Hola! Me gustaría información. ¿Pueden ayudarme?',
        'whatsapp-contatto': '¡Hola! Me gustaría contactarlos para información.',
        'whatsapp-news': '¡Hola! He visto sus noticias y me gustaría información.',
        'whatsapp-news-footer': '¡Hola! Me gustaría contactarlos.'
    },
    
    en: {
        // Navigation
        'servicios': 'Services',
        'ubicacion': 'Location',
        'contacto': 'Contact',
        'noticias': 'News',
        'reserva-ahora': 'Book Now',
        
        // Hero
        'hero-subtitle': 'Your padel club in Riposto',
        'prenota-campo': 'Book your court',
        'scopri-piu': 'Discover more',
        
        // Services
        'nuestros-servicios': 'Our Services',
        'clases-particulares': 'Private Lessons',
        'clases-desc': 'Learn with our certified instructors and improve your game technique. Personalized lessons for all levels, from beginners to advanced players.',
        'prenota-clase': 'Book your lesson',
        'alquiler-pistas': 'Padel Courts',
        'pistas-desc': 'First-class courts available for all levels. Professional surfaces and optimal lighting to play at any time of day.',
        'prenota-pista': 'Book your court',
        'torneos': 'Tournaments',
        'torneos-desc': 'Participate in our tournaments and compete with other players. We organize special events and seasonal tournaments to create a fun and competitive playing environment.',
        'iscriviti': 'Sign up',
        'servizi-aggiuntivi': 'Additional Services',
        'servizi-desc': 'Enjoy all the comforts of our club. Complete changing rooms with showers, snack bar with drinks and snacks, and spacious free parking for your convenience.',
        
        // Service features
        'istruttori-certificati': 'Certified instructors',
        'lezioni-personalizzate': 'Personalized lessons',
        'tutti-livelli': 'All levels',
        'superfici-professionali': 'Professional surfaces',
        'illuminazione-ottimale': 'Optimal lighting',
        'prenotazione-online': 'Online booking',
        'eventi-speciali': 'Special events',
        'tornei-stagionali': 'Seasonal tournaments',
        'ambiente-competitivo': 'Competitive environment',
        'spogliatoi-docce': 'Changing rooms with showers',
        'snack-bar': 'Snack bar',
        'parcheggio-gratuito': 'Free parking',
        
        // Location
        'direccion': 'Address',
        'horario': 'Schedule',
        'lunes-domingo': 'Monday - Sunday',
        'como-llegar': 'How to get there',
        'parcheggio-disponibile': 'Free parking available',
        
        // Contact
        'telefono': 'Phone',
        'email': 'Email',
        'whatsapp': 'WhatsApp',
        'instagram': 'Instagram',
        'mensaje-rapido': 'Quick message',
        'invia-messaggio': 'Send message',
        'invia-un-messaggio': 'Send a message',
        'invia-messaggio-btn': 'Send Message',
        'nombre': 'Name',
        'mensaje': 'Message',
        'selecciona-servicio': 'Select a service',
        'lezione-privata': 'Private Lesson',
        'noleggio-campo': 'Court Rental',
        'tornei': 'Tournaments',
        'sponsor': 'Sponsor',
        'altro': 'Other',
        'enviar': 'Send',
        
        // Sponsors
        'nuestros-patrocinadores': 'Our Sponsors',
        'grazie-partner': 'Thanks to our partners for their support and trust',
        'partner-ufficiale': 'Official Partner',
        'partner-fiducia': 'Trusted Partner',
        'sponsor-club': 'Club sponsor',
        'vuoi-sponsor': 'Want to become our sponsor?',
        'diventa-sponsor': 'Become a Sponsor',
        
        // Modal
        'contacta-nosotros': 'Contact Us',
        'llamar': 'Call',
        'chatear-ahora': 'Chat now',
        
        // News page translations
        'servizi': 'Services',
        'ubicazione': 'Location',
        'contatto': 'Contact',
        'prenota-ora': 'Book Now',
        'filter-all': 'All categories',
        'filter-team': 'Team',
        'filter-tournaments': 'Tournaments',
        'filter-promos': 'Promotions',
        'filter-lessons': 'Lessons',
        'read-more': 'Read more',
        'news-1-title': 'Victory in the regional tournament!',
        'news-1-excerpt': 'Our DEA Padel team has won the regional tournament of Sicily.',
        'news-2-title': 'Starts the Interclub Invernale',
        'news-2-excerpt': 'The registrations for the Interclub Invernale are now open.',
        'news-3-title': '2x1 on the fields on Sundays in July',
        'news-3-excerpt': 'Take advantage of our special promotion: rent a field and get the second one for free.',
        'news-4-title': 'New courses for beginners',
        'news-4-excerpt': 'We launch new courses specially designed for beginners.',
        'news-5-title': 'We present the official uniform 2025-2026',
        'news-5-excerpt': 'We present our new official uniform for the 2025-2026 season.',
        'news-6-title': 'Internal ranking: results of the 3rd day',
        'news-6-excerpt': 'Discover the results of the third day of the internal ranking.',
        
        // Footer
        'copyright': '© 2025 Franco Aballay',
        
        // WhatsApp messages
        'whatsapp-reserva': 'Hello! I would like to book a court or a lesson. Can you help me?',
        'whatsapp-info': 'Hello! I would like information about your services. Can you help me?',
        'whatsapp-messaggio': 'Hello! I would like information. Can you help me?',
        'whatsapp-contatto': 'Hello! I would like to contact you for information.',
        'whatsapp-news': 'Hello! I have seen your news and would like information.',
        'whatsapp-news-footer': 'Hello! I would like to contact you.'
    }
};

// Simple scroll spy function
function initScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    // Add click handlers for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Simple scroll spy
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 200;
        
        // Remove all active classes
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Check each section
        const sections = ['servicios', 'ubicacion', 'contacto'];
        let activeSection = null;
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    activeSection = sectionId;
                }
            }
        });
        
        // Add active class to current section
        if (activeSection) {
            const activeLink = document.querySelector(`.nav-menu a[href="#${activeSection}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Function to change language
function changeLanguage(lang) {
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Update content
    const t = translations[lang];
    
    // Navigation
    const serviciosLink = document.querySelector('a[href="#servicios"]');
    const ubicacionLink = document.querySelector('a[href="#ubicacion"]');
    const contactoLink = document.querySelector('a[href="#contacto"]');
    const noticiasLink = document.querySelector('a[href="news/"]');
    const reservaBtn = document.querySelector('.btn-reserva span');
    
    if (serviciosLink) serviciosLink.textContent = t['servicios'];
    if (ubicacionLink) ubicacionLink.textContent = t['ubicacion'];
    if (contactoLink) contactoLink.textContent = t['contacto'];
    if (noticiasLink) noticiasLink.textContent = t['noticias'];
    if (reservaBtn) reservaBtn.textContent = t['reserva-ahora'];
    
    // Hero
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const openModalBtn = document.querySelector('#openModal');
    const scopriBtn = document.querySelector('.cta-button.secondary');
    
    if (heroSubtitle) heroSubtitle.textContent = t['hero-subtitle'];
    if (openModalBtn) openModalBtn.textContent = t['prenota-campo'];
    if (scopriBtn) scopriBtn.textContent = t['scopri-piu'];
    
    // Services
    document.querySelector('#servicios h2').innerHTML = `<i class="fas fa-table-tennis-paddle-ball"></i>${t['nuestros-servicios']}`;
    
    // Update service cards
    const serviceCards = document.querySelectorAll('.servicio');
    serviceCards[0].querySelector('h3').textContent = t['clases-particulares'];
    serviceCards[0].querySelector('p').textContent = t['clases-desc'];
    serviceCards[0].querySelector('.servicio-link').textContent = t['prenota-clase'];
    
    // Update service features for first card
    const features1 = serviceCards[0].querySelectorAll('.servicio-features span');
    features1[0].innerHTML = `<i class="fas fa-check"></i> ${t['istruttori-certificati']}`;
    features1[1].innerHTML = `<i class="fas fa-check"></i> ${t['lezioni-personalizzate']}`;
    features1[2].innerHTML = `<i class="fas fa-check"></i> ${t['tutti-livelli']}`;
    
    serviceCards[1].querySelector('h3').textContent = t['alquiler-pistas'];
    serviceCards[1].querySelector('p').textContent = t['pistas-desc'];
    serviceCards[1].querySelector('.servicio-link').textContent = t['prenota-pista'];
    
    // Update service features for second card
    const features2 = serviceCards[1].querySelectorAll('.servicio-features span');
    features2[0].innerHTML = `<i class="fas fa-check"></i> ${t['superfici-professionali']}`;
    features2[1].innerHTML = `<i class="fas fa-check"></i> ${t['illuminazione-ottimale']}`;
    features2[2].innerHTML = `<i class="fas fa-check"></i> ${t['prenotazione-online']}`;
    
    serviceCards[2].querySelector('h3').textContent = t['torneos'];
    serviceCards[2].querySelector('p').textContent = t['torneos-desc'];
    serviceCards[2].querySelector('.servicio-link').textContent = t['iscriviti'];
    
    // Update service features for third card
    const features3 = serviceCards[2].querySelectorAll('.servicio-features span');
    features3[0].innerHTML = `<i class="fas fa-check"></i> ${t['eventi-speciali']}`;
    features3[1].innerHTML = `<i class="fas fa-check"></i> ${t['tornei-stagionali']}`;
    features3[2].innerHTML = `<i class="fas fa-check"></i> ${t['ambiente-competitivo']}`;
    
    serviceCards[3].querySelector('h3').textContent = t['servizi-aggiuntivi'];
    serviceCards[3].querySelector('p').textContent = t['servizi-desc'];
    serviceCards[3].querySelector('.servicio-link').textContent = t['scopri-piu'];
    
    // Update service features for fourth card
    const features4 = serviceCards[3].querySelectorAll('.servicio-features span');
    features4[0].innerHTML = `<i class="fas fa-check"></i> ${t['spogliatoi-docce']}`;
    features4[1].innerHTML = `<i class="fas fa-check"></i> ${t['snack-bar']}`;
    features4[2].innerHTML = `<i class="fas fa-check"></i> ${t['parcheggio-gratuito']}`;
    
    // Location
    document.querySelector('#ubicacion h2').innerHTML = `<i class="fas fa-map-marker-alt"></i>${t['ubicacion']}`;
    document.querySelector('.info-card:nth-child(1) h3').textContent = t['direccion'];
    document.querySelector('.info-card:nth-child(2) h3').textContent = t['horario'];
    document.querySelector('.info-card:nth-child(2) p').innerHTML = t['lunes-domingo'] + '<br>8:00 - 22:00';
    document.querySelector('.directions-btn span').textContent = t['como-llegar'];
    document.querySelector('.info-card:nth-child(3) p').textContent = t['parcheggio-disponibile'];
    
    // Contact
    document.querySelector('#contacto h2').innerHTML = `<i class="fas fa-phone-alt"></i>${t['contacto']}`;
    document.querySelector('.contacto-card:nth-child(1) h3').textContent = t['telefono'];
    document.querySelector('.contacto-card:nth-child(2) h3').textContent = t['whatsapp'];
    document.querySelector('.contacto-card:nth-child(2) p').textContent = t['mensaje-rapido'];
    document.querySelector('.contacto-card:nth-child(2) .contacto-link span').textContent = t['invia-messaggio'];
    document.querySelector('.contacto-card:nth-child(3) h3').textContent = t['email'];
    document.querySelector('.contacto-card:nth-child(4) h3').textContent = t['instagram'];
    
    // Form
    document.querySelector('.contacto-form-container h3').textContent = t['invia-un-messaggio'];
    document.querySelector('input[type="text"]').placeholder = t['nombre'];
    document.querySelector('input[type="email"]').placeholder = t['email'];
    document.querySelector('textarea').placeholder = t['mensaje'];
    document.querySelector('select option[value=""]').textContent = t['selecciona-servicio'];
    document.querySelector('select option[value="lezione"]').textContent = t['lezione-privata'];
    document.querySelector('select option[value="campo"]').textContent = t['noleggio-campo'];
    document.querySelector('select option[value="torneo"]').textContent = t['tornei'];
    document.querySelector('select option[value="sponsor"]').textContent = t['sponsor'];
    document.querySelector('select option[value="altro"]').textContent = t['altro'];
    document.querySelector('.submit-btn span').textContent = t['invia-messaggio-btn'];
    
    // Sponsors
    document.querySelector('#patrocinadores h2').innerHTML = `<i class="fas fa-trophy"></i>${t['nuestros-patrocinadores']}`;
    document.querySelector('#patrocinadores .section-subtitle').textContent = t['grazie-partner'];
    document.querySelectorAll('.patrocinador-info h3')[0].textContent = t['partner-ufficiale'];
    document.querySelectorAll('.patrocinador-info h3')[1].textContent = t['partner-fiducia'];
    document.querySelectorAll('.patrocinador-info h3')[2].textContent = t['partner-ufficiale'];
    document.querySelectorAll('.patrocinador-info p').forEach(p => {
        p.textContent = t['sponsor-club'];
    });
    document.querySelector('.sponsor-cta p').textContent = t['vuoi-sponsor'];
    document.querySelector('.sponsor-btn span').textContent = t['diventa-sponsor'];
    
    // Modal
    document.querySelector('.modal-content h2').textContent = t['contacta-nosotros'];
    document.querySelector('.contact-option:nth-child(1) h3').textContent = t['llamar'];
    document.querySelector('.contact-option:nth-child(2) h3').textContent = t['chatear-ahora'];
    
    // Footer
    const footerCopyright = document.querySelector('.footer-copyright a');
    if (footerCopyright) {
        footerCopyright.textContent = t['copyright'];
    }
    
    // Update WhatsApp links with translated messages
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes('wa.me')) {
            // Determine which type of WhatsApp link this is based on context
            let messageKey = 'whatsapp-contatto'; // default
            
            if (link.classList.contains('btn-reserva')) {
                messageKey = 'whatsapp-reserva';
            } else if (link.closest('.contact-option')) {
                messageKey = 'whatsapp-info';
            } else if (link.closest('.contacto-link')) {
                messageKey = 'whatsapp-messaggio';
            } else if (link.closest('.footer-social')) {
                messageKey = 'whatsapp-contatto';
            }
            
            // Create new href with translated message
            const newHref = `https://wa.me/+393519389555?text=${encodeURIComponent(t[messageKey])}`;
            link.setAttribute('href', newHref);
        }
    });
    
    // Store language preference
    localStorage.setItem('preferred-language', lang);
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

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded'); // Debug
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize scroll spy
    initScrollSpy();
    
    // Simple initialization of other features
    initBasicFeatures();

    // Formulario de contacto con feedback visual
    const contactoForm = document.querySelector('.contacto-form');
    const formModal = document.getElementById('formModal');
    const formModalTitle = document.getElementById('formModalTitle');
    const formModalMsg = document.getElementById('formModalMsg');
    const closeFormModal = document.getElementById('closeFormModal');

    if (contactoForm && formModal) {
        contactoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactoForm);
            fetch(contactoForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    formModalTitle.textContent = 'Messaggio inviato!';
                    formModalMsg.textContent = 'Grazie per averci contattato. Ti risponderemo al più presto.';
                    contactoForm.reset();
                } else {
                    formModalTitle.textContent = 'Errore';
                    formModalMsg.textContent = 'Si è verificato un errore nell\'invio. Riprova più tardi.';
                }
                formModal.style.display = 'block';
            })
            .catch(() => {
                formModalTitle.textContent = 'Errore';
                formModalMsg.textContent = 'Si è verificato un errore di connessione. Riprova più tardi.';
                formModal.style.display = 'block';
            });
        });
        // Cerrar modal al hacer clic en la X
        closeFormModal.addEventListener('click', function() {
            formModal.style.display = 'none';
        });
        // Cerrar modal al hacer clic fuera del contenido
        window.addEventListener('click', function(e) {
            if (e.target === formModal) {
                formModal.style.display = 'none';
            }
        });
    }
});

// Basic features initialization
function initBasicFeatures() {
    console.log('Initializing basic features...'); // Debug
    
    // Language selector
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Load saved language
    const savedLang = localStorage.getItem('preferred-language') || 'it';
    changeLanguage(savedLang);
    
    // Modal functionality
    const modal = document.getElementById('contactModal');
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.querySelector('.close');
    
    if (openModalBtn && modal) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
        });
    }
    
    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Smooth scroll
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
    
    console.log('Basic features initialized'); // Debug
} 