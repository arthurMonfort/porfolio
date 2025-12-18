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
            "Gestion d'authentification sécurisée"
        ],
        technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
        detailLink: "projets/sae-php.html",
        liveLink: "https://webinfo.iutmontp.univ-montp2.fr/~larcherc/democr@/web/controleurFrontal.php"
    },
    {
        title: "Nuit de l'Info",
        type: "Hackathon",
        description: "Site web réalisé lors du hackathon national sous contrainte de temps.",
        context: "La Nuit de l'Info est un défi national qui dure toute une nuit (du coucher au lever du soleil). L'objectif était de répondre à une problématique d'obsolescence programmée via une plateforme web interactive.",
        objectifs: [
            "Intégration rapide en équipe",
            "Gestion du stress et des délais",
            "Utilisation intensive de Git",
            "Mise en place d'une interface utilisateur intuitive"
        ],
        technologies: ["REACT", "HTML/CSS", "Git"],
        detailLink: "projets/nuit-info.html",
        liveLink: null
    },
    {
        title: "SAÉ Pokémon TCG",
        type: "Application Java",
        description: "Application de gestion de cartes Pokémon développée en Java.",
        context: "Conception d'un logiciel de bureau permettant aux collectionneurs de suivre l'évolution de leur inventaire de cartes Pokémon.",
        objectifs: [
            "Développement Java orienté objet",
            "Interface graphique JavaFX",
        ],
        technologies: ["Java", "JavaFX"],
        detailLink: "projets/pokemon-tcg.html",
        liveLink: null
    }
];

// ==================== GESTION DES ONGLETS ====================
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const formationsTimeline = document.getElementById('formations-timeline');
    const experiencesTimeline = document.getElementById('experiences-timeline');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const tabName = this.getAttribute('data-tab');
            if (tabName === 'formations') {
                formationsTimeline.classList.remove('hidden');
                experiencesTimeline.classList.add('hidden');
            } else {
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

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectIndex = parseInt(this.getAttribute('data-project'));
            const project = projectsData[projectIndex];

            // Remplissage de la modal
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
                <h4>Technologies</h4>
                <div class="tags">
                    ${project.technologies.map(tech => `<span class="tag tag-primary">${tech}</span>`).join('')}
                </div>
            `;

            // Gestion des boutons (Détails et Live)
            const detailLink = document.getElementById('modalDetailLink');
            const liveLink = document.getElementById('modalLiveLink');

            detailLink.href = project.detailLink;
            detailLink.style.display = 'inline-flex';

            if (project.liveLink && project.liveLink !== "#") {
                liveLink.href = project.liveLink;
                liveLink.style.display = 'inline-flex';
            } else {
                liveLink.style.display = 'none';
            }

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeButtons.forEach(btn => btn.addEventListener('click', closeModal));
    modalOverlay.addEventListener('click', closeModal);
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: targetSection.offsetTop - navbarHeight,
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
});