// ==================== DONNÉES DES PROJETS ====================
const projectsData = [
    {
        title: "SAÉ Client PHP",
        type: "SAÉ · Développement Web · S3",
        badge: "En équipe de 5 · ~12 semaines",
        description: "Réalisation d'une application web complète selon les besoins d'un client réel.",
        context: "Dans le cadre d'une SAÉ du semestre 3, nous devions développer une application web en PHP pour un client réel de l'IUT. Le projet couvrait l'intégralité du cycle : analyse du cahier des charges, modélisation de la base de données, développement en architecture MVC et déploiement sur le serveur de l'IUT via SSH.",
        contexteDetail: "Durée : ~12 semaines — Équipe de 5 — Contrainte : cahier des charges client, délais imposés, déploiement réel",
        objectifs: [
            "Analyse du cahier des charges et modélisation UML de la base de données",
            "Mise en place d'une architecture MVC en PHP pur",
            "Système d'authentification sécurisé (sessions, hashage, protection CSRF)",
            "Interface responsive avec HTML/CSS/JavaScript",
            "Déploiement sur le serveur IUT via SSH"
        ],
        competences: {
            techniques: ["PHP 8", "MySQL", "Architecture MVC", "HTML/CSS", "JavaScript", "SSH · Déploiement"],
            humaines: ["Communication client", "Travail en équipe", "Gestion des délais", "Documentation"]
        },
        technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
        detailLink: "projets/sae-php.html",
        liveLink: "https://webinfo.iutmontp.univ-montp2.fr/~larcherc/democr@/web/controleurFrontal.php"
    },
    {
        title: "Nuit de l'Info 2025",
        type: "Hackathon National",
        badge: "Équipe de 10 · 16 heures",
        description: "Plateforme web interactive réalisée lors du hackathon national sous contrainte de temps extrême.",
        context: "La Nuit de l'Info est un défi national du coucher au lever du soleil. Notre équipe devait répondre à une problématique de santé publique en concevant une plateforme React en 16h. Répartition des tâches, gestion des conflits Git en temps réel, décisions sous pression : une expérience formatrice hors du commun.",
        contexteDetail: "Durée : 16h en continu — Équipe de 10 — Contrainte : deadline fixe et immuable, travail en parallèle sur Git",
        objectifs: [
            "Cadrage rapide et répartition des tâches en sous-équipes",
            "Développement React avec composants réutilisables et routing",
            "Gestion Git intensive : branches, pull requests, résolution de conflits",
            "Design d'interface cohérent sous contrainte de temps"
        ],
        competences: {
            techniques: ["React", "HTML/CSS", "Git / GitHub", "UI/UX Design"],
            humaines: ["Gestion du stress", "Agilité", "Communication d'équipe", "Priorisation"]
        },
        technologies: ["React", "HTML/CSS", "Git"],
        detailLink: "projets/nuit-info.html",
        liveLink: "https://ndi-tous-marthau.ewenphilippot.fr"
    },
    {
        title: "SAÉ Pokémon TCG",
        type: "SAÉ · Application Java · S3",
        badge: "En binôme · ~6 semaines",
        description: "Application desktop de gestion de collection de cartes Pokémon développée en Java.",
        context: "Ce projet visait à concevoir un logiciel de bureau permettant à des collectionneurs de gérer leur inventaire de cartes Pokémon TCG. Le défi : appliquer rigoureusement les principes POO tout en produisant une interface graphique ergonomique avec JavaFX.",
        contexteDetail: "Durée : ~6 semaines — En binôme — Contrainte : respect strict des concepts POO, interface graphique obligatoire",
        objectifs: [
            "Conception orientée objet : hiérarchie de classes, interfaces, principes SOLID",
            "Interface graphique JavaFX avec SceneBuilder",
            "Architecture MVC : modèle, vues FXML, contrôleurs",
            "Persistance des données entre sessions"
        ],
        competences: {
            techniques: ["Java", "JavaFX", "POO avancée", "Architecture MVC", "SceneBuilder"],
            humaines: ["Rigueur de conception", "Travail en binôme", "Débogage méthodique"]
        },
        technologies: ["Java", "JavaFX"],
        detailLink: "projets/pokemon-tcg.html",
        liveLink: null
    },
    {
        title: "TD PHP & Symfony",
        type: "Cours · Développement Web · S3 & S4",
        badge: "Individuel · Sur 2 semestres",
        description: "Progression du PHP artisanal (MVC) aux composants professionnels Symfony et au moteur de gabarit Twig.",
        context: "En S3, construction itérative d'un site de covoiturage en PHP pur avec architecture MVC. En S4, montée en puissance vers une approche MVCS avec le composant de routage Symfony et les vues Twig — découverte d'un langage de gabarit professionnel avec héritage de templates, blocs et filtres.",
        contexteDetail: "Durée : S3 & S4 (progressif) — Individuel — Contrainte : progression notée, complexité croissante",
        objectifs: [
            "S3 : MVC artisanal, CRUD complet, authentification sécurisée en PHP pur",
            "S4 : Architecture MVCS avec couche Service isolant la logique métier",
            "S4 : Routage Symfony (composant symfony/routing) déclaratif et propre",
            "S4 : Vues Twig — héritage de templates, blocs, filtres, composants partiels"
        ],
        competences: {
            techniques: ["PHP MVC / MVCS", "Symfony (composants)", "Twig (gabarit)", "MySQL", "HTML/CSS"],
            humaines: ["Autonomie", "Apprentissage progressif", "Rigueur architecturale"]
        },
        technologies: ["PHP", "Symfony", "Twig", "MySQL"],
        detailLink: "projets/td-php.html",
        liveLink: null
    },
    {
        title: "SAÉ Noodle",
        type: "SAÉ · Refonte applicative · S4",
        badge: "En équipe · ~8 semaines",
        description: "Refonte d'une application existante : analyse de l'existant, nouvelles fonctionnalités, amélioration UX.",
        context: "La SAÉ du semestre 4 nous a placés dans un contexte professionnel : reprendre un projet existant, le comprendre, le documenter, puis l'enrichir. Ce projet m'a confronté à la réalité de la reprise de code et de la conduite de projet avec rédaction de spécifications.",
        contexteDetail: "Durée : ~8 semaines — Équipe — Contrainte : reprise de code existant, rédaction de spécifications, livraisons planifiées",
        objectifs: [
            "Analyse et documentation du code source existant",
            "Rédaction d'un cahier des charges pour les nouvelles fonctionnalités",
            "Développement JavaScript et amélioration UX",
            "Gestion des versions et revues de code via Git"
        ],
        competences: {
            techniques: ["JavaScript ES6+", "DOM API", "HTML/CSS", "Git collaboratif"],
            humaines: ["Analyse de l'existant", "Rédaction de specs", "Gestion de projet", "Communication d'équipe"]
        },
        technologies: ["JavaScript", "HTML/CSS", "Git"],
        detailLink: "projets/noodle.html",
        liveLink: "https://webinfo.iutmontp.univ-montp2.fr/~larcherc/noodle/noodle-code-de-base/web/accueil"
    },
    {
        title: "TD JavaScript",
        type: "Cours · Développement Web · S4",
        badge: "Individuel · Tout le semestre",
        description: "Travaux pratiques progressifs sur le JavaScript moderne : DOM, événements, API REST, async/await.",
        context: "Progression structurée du semestre 4 autour du JavaScript côté client. Chaque TP introduisait de nouveaux concepts — DOM, événements, programmation asynchrone, consommation d'APIs REST — en s'appuyant sur les acquis précédents.",
        contexteDetail: "Durée : tout le S4 — Individuel — Contrainte : progression notée, approfondissement continu",
        objectifs: [
            "Manipulation avancée du DOM (sélecteurs, événements, modification dynamique)",
            "Programmation asynchrone : Promises, async/await, fetch()",
            "Consommation d'API REST externes et affichage dynamique",
            "Organisation en modules ES6 et séparation des responsabilités"
        ],
        competences: {
            techniques: ["JavaScript ES6+", "DOM API", "Fetch / API REST", "async/await", "Modules ES6"],
            humaines: ["Autonomie", "Débogage méthodique", "Rigueur"]
        },
        technologies: ["JavaScript", "HTML/CSS", "API REST"],
        detailLink: "projets/td-javascript.html",
        liveLink: null
    },
    {
        title: "Infrastructure Docker",
        type: "TP Noté · Virtualisation · S4",
        badge: "En binôme/trinôme · 3 heures",
        description: "Conception et déploiement d'une stack d'entreprise complète avec Docker Compose : reverse proxy, réplication MySQL, Keycloak SSO.",
        context: "Projet noté de fin de module (R4.A.08) : déployer en 3h une infrastructure d'entreprise complète via Docker Compose, en respectant isolation réseau stricte et haute disponibilité. 7 conteneurs, 3 réseaux, une seule commande de déploiement.",
        contexteDetail: "Durée : 3h (TP noté) — En binôme — Contrainte : déploiement en une commande, évaluation automatisée",
        objectifs: [
            "Nginx reverse proxy : point d'entrée unique exposant les ports 80/443",
            "web_app : Dockerfile PHP/Apache custom sans port exposé directement",
            "Réplication MySQL Master/Slave : configuration binlog, synchronisation vérifiée",
            "Keycloak SSO + PostgreSQL : gestion des identités isolée sur net_auth",
            "Mailpit : intercepteur SMTP pour les tests d'envoi de mails",
            "Isolation réseau : 3 réseaux bridge (net_public, net_db, net_auth)"
        ],
        competences: {
            techniques: ["Docker & Docker Compose", "Nginx (reverse proxy)", "MySQL (réplication M/S)", "Keycloak · SSO", "PostgreSQL", "Isolation réseau"],
            humaines: ["Gestion sous pression", "Lecture de documentation", "Débogage systémique", "Travail en binôme"]
        },
        technologies: ["Docker", "Nginx", "MySQL", "Keycloak", "PostgreSQL"],
        detailLink: "projets/docker-infra.html",
        liveLink: null
    }
];

// ==================== GESTION DES ONGLETS ====================
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const timelines = document.querySelectorAll('.timeline-container');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const tabName = this.getAttribute('data-tab');
            timelines.forEach(t => t.classList.add('hidden'));

            const targetId = tabName === 'compétences' ? 'competences-timeline' : `${tabName}-timeline`;
            const target = document.getElementById(targetId);
            if (target) target.classList.remove('hidden');
        });
    });
}

// ==================== GESTION DE LA MODAL ====================
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    const projectCards = document.querySelectorAll('.project-card');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeButtons = document.querySelectorAll('.modal-close, .modal-close-btn');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectIndex = parseInt(this.getAttribute('data-project'));
            const project = projectsData[projectIndex];

            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalBody').innerHTML = `
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap;">
                    <span style="background:#1a2535;color:white;padding:4px 12px;border-radius:20px;font-size:0.8rem;font-weight:600;">${project.type}</span>
                    <span style="background:#f7f8fa;border:1px solid #e2e8f0;color:#718096;padding:4px 12px;border-radius:20px;font-size:0.8rem;">
                        <i class="fas fa-info-circle"></i> ${project.badge}
                    </span>
                </div>
                <p style="color:#4a5568;line-height:1.7;margin-bottom:6px;"><strong>${project.description}</strong></p>

                <h4>Contexte</h4>
                <p>${project.context}</p>
                <p style="font-size:0.85rem;color:#718096;background:#f7f8fa;padding:8px 14px;border-radius:6px;border-left:3px solid #e67e22;">
                    <i class="fas fa-clock"></i> ${project.contexteDetail}
                </p>

                <h4>Objectifs réalisés</h4>
                <ul>${project.objectifs.map(o => `<li>${o}</li>`).join('')}</ul>

                <h4>Compétences acquises</h4>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:8px;">
                    <div style="background:#f7f8fa;border-radius:8px;padding:14px;">
                        <p style="font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#1a2535;margin-bottom:8px;">Techniques</p>
                        <div class="tags">${project.competences.techniques.map(t => `<span class="tag tag-primary">${t}</span>`).join('')}</div>
                    </div>
                    <div style="background:#f7f8fa;border-radius:8px;padding:14px;">
                        <p style="font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#1a2535;margin-bottom:8px;">Humaines</p>
                        <div class="tags">${project.competences.humaines.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                    </div>
                </div>
            `;

            const detailLink = document.getElementById('modalDetailLink');
            const liveLink = document.getElementById('modalLiveLink');

            detailLink.href = project.detailLink;
            detailLink.style.display = 'inline-flex';

            if (project.liveLink) {
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
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
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
                window.scrollTo({ top: targetSection.offsetTop - navbarHeight - 10, behavior: 'smooth' });
            }
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// ==================== ACTIVE NAV ON SCROLL ====================
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - navbarHeight - 60) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    });
}

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initProjectModal();
    initSmoothScroll();
    initScrollSpy();
});