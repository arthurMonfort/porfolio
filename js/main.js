// ==================== DONNÉES DES PROJETS ====================
const projectsData = [
    {
        title: "SAÉ Client PHP",
        type: "Développement Web",
        description: "Réalisation d'une application web complète selon les besoins d'un client.",
        context: "Dans le cadre d'une SAÉ, nous devions développer une application web en PHP pour un client réel. Le projet nécessitait une analyse des besoins, la conception d'une base de données, et le développement d'une interface responsive.",
        objectifs: [
            "Analyse des besoins du client",
            "Conception de la base de données MySQL",
            "Développement en PHP avec architecture MVC",
            "Interface responsive avec HTML/CSS/JavaScript",
            "Gestion d'authentification sécurisée",
            "Tests et validation avec le client"
        ],
        technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
        detailLink: "src/view/projet1.html",
        liveLink: "https://sae-client.herokuapp.com/"
    },
    {
        title: "Nuit de l'Info",
        type: "Hackathon - Développement Web",
        description: "Site web réalisé lors du hackathon national sous contrainte de temps.",
        context: "Participation à la Nuit de l'Info, un hackathon national réunissant des étudiants en informatique. Intégration rapide dans une équipe de développeurs pour créer un site web complet en une nuit.",
        objectifs: [
            "Intégration rapide dans une nouvelle équipe",
            "Développement sous pression temporelle",
            "Création d'un site web fonctionnel",
            "Gestion collaborative avec Git",
            "Présentation du projet devant un jury"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Git", "Travail d'équipe"],
        detailLink: "#",
        liveLink: "#"
    },
    {
        title: "SAÉ Pokémon TCG",
        type: "Application Java",
        description: "Application de gestion de cartes Pokémon développée en Java.",
        context: "Projet de développement d'une application desktop pour gérer une collection de cartes Pokémon TCG. Utilisation de JavaFX pour l'interface graphique et SQLite pour la persistance des données.",
        objectifs: [
            "Conception orientée objet en Java",
            "Interface graphique avec JavaFX",
            "Base de données SQLite",
            "Système de recherche et filtrage",
            "Gestion de collection (CRUD)",
            "Export et import de données"
        ],
        technologies: ["Java", "JavaFX", "SQLite", "POO", "MVC"],
        detailLink: "#",
        liveLink: "#"
    }
];

// ==================== GESTION DES ONGLETS ====================
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const formationsTimeline = document.getElementById('formations-timeline');
    const experiencesTimeline = document.getElementById('experiences-timeline');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');

            // Afficher/masquer les timelines
            const tabName = this.getAttribute('data-tab');
            if (tabName === 'formations') {
                formationsTimeline.classList.remove('hidden');
                experiencesTimeline.classList.add('hidden');
            } else if (tabName === 'experiences') {
                formationsTimeline.classList.add('hidden');
                experiencesTimeline.classList.remove('hidden');
            }
        });
    });
}

// ==================== GESTION DE LA MODAL ====================
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const projectCards = document.querySelectorAll('.project-card');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeButtons = document.querySelectorAll('.modal-close, .modal-close-btn');

    // Ouvrir la modal au clic sur une carte
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectIndex = parseInt(this.getAttribute('data-project'));
            const project = projectsData[projectIndex];

            // Remplir la modal avec les données du projet
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalBody').innerHTML = `
                <h3>Type : ${project.type}</h3>
                <p><strong>${project.description}</strong></p>
                
                <h4>Contexte</h4>
                <p>${project.context}</p>
                
                <h4>Objectifs réalisés</h4>
                <ul>
                    ${project.objectifs.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
                
                <h4>Technologies utilisées</h4>
                <div class="tags">
                    ${project.technologies.map(tech => `<span class="tag tag-primary">${tech}</span>`).join('')}
                </div>
            `;

            // Configurer les liens
            const detailLink = document.getElementById('modalDetailLink');
            const liveLink = document.getElementById('modalLiveLink');

            detailLink.href = project.detailLink;
            liveLink.href = project.liveLink;

            // Masquer les boutons si pas de lien
            if (!project.detailLink || project.detailLink === '#') {
                detailLink.style.display = 'none';
            } else {
                detailLink.style.display = 'inline-flex';
            }

            if (!project.liveLink || project.liveLink === '#') {
                liveLink.style.display = 'none';
            } else {
                liveLink.style.display = 'inline-flex';
            }

            // Afficher la modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Empêcher le scroll
        });
    });

    // Fermer la modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Réactiver le scroll
    };

    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    modalOverlay.addEventListener('click', closeModal);

    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Retirer la classe active de tous les liens
            navLinks.forEach(l => l.classList.remove('active'));

            // Ajouter la classe active au lien cliqué
            this.classList.add('active');

            // Scroll vers la section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initProjectModal();
    initSmoothScroll();

    console.log('✅ Portfolio chargé avec succès !');
});