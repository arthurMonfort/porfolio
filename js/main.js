
// Données des projets
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

// Gestion des onglets
function initTabs() {
    const tabs = document.querySelectorAll('.tabs li');
    const formationsTimeline = document.getElementById('formations-timeline');
    const experiencesTimeline = document.getElementById('experiences-timeline');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            // Retirer la classe active de tous les onglets
            tabs.forEach(t => t.classList.remove('is-active'));

            // Ajouter la classe active à l'onglet cliqué
            this.classList.add('is-active');

            // Afficher/masquer les timelines
            const tabName = this.getAttribute('data-tab');
            if (tabName === 'formations') {
                formationsTimeline.classList.remove('is-hidden');
                experiencesTimeline.classList.add('is-hidden');
            } else if (tabName === 'experiences') {
                formationsTimeline.classList.add('is-hidden');
                experiencesTimeline.classList.remove('is-hidden');
            }
        });
    });
}

// Gestion de la modal
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const projectCards = document.querySelectorAll('.project-card');
    const closeButtons = modal.querySelectorAll('.delete, .modal-close, .modal-background');

    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();

            const projectIndex = parseInt(this.getAttribute('data-project'));
            const project = projectsData[projectIndex];

            // Remplir la modal
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalBody').innerHTML = `
                <div class="content">
                    <h3 class="title is-4" style="color: #2c3e50;">Type : ${project.type}</h3>
                    <p class="is-size-5"><strong>${project.description}</strong></p>

                    <h4 class="title is-5 mt-5" style="color: #2c3e50;">Contexte</h4>
                    <p>${project.context}</p>

                    <h4 class="title is-5 mt-4" style="color: #2c3e50;">Objectifs réalisés</h4>
                    <ul>
                        ${project.objectifs.map(obj => `<li>${obj}</li>`).join('')}
                    </ul>

                    <h4 class="title is-5 mt-4" style="color: #2c3e50;">Technologies utilisées</h4>
                    <div class="tags">
                        ${project.technologies.map(tech => `<span class="tag is-dark is-medium">${tech}</span>`).join('')}
                    </div>
                </div>
            `;

            const detailLink = document.getElementById('modalDetailLink');
            const liveLink = document.getElementById('modalLiveLink');

            detailLink.href = project.detailLink;
            liveLink.href = project.liveLink;

            // Masquer le bouton si pas de lien
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

            modal.classList.add('is-active');
            document.documentElement.classList.add('is-clipped');
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('is-active');
            document.documentElement.classList.remove('is-clipped');
        });
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initProjectModal();
    console.log('Portfolio chargé ! 🚀');
});
