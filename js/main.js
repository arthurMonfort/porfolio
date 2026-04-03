// ==================== DONNÉES DES PROJETS ====================
const projectsData = [
    {
        title: "SAÉ Client PHP",
        type: "SAÉ · Développement Web · S3",
        badge: "En équipe de 4 · ~6 semaines",
        description: "Réalisation d'une application web complète selon les besoins d'un client réel.",
        context: "Dans le cadre d'une SAÉ du semestre 3, nous devions développer une application web en PHP pour un client réel de l'IUT. Le projet partait d'un cahier des charges à analyser : nous avons conçu la base de données, mis en place l'architecture et développé toutes les fonctionnalités en respectant les délais fixés. Travailler avec un vrai client nous a appris à reformuler ses besoins techniques et à gérer ses retours.",
        contexteDetail: "Durée : ~6 semaines — Équipe de 4 — Contrainte : cahier des charges client, délais imposés",
        objectifs: [
            "Analyse du cahier des charges et modélisation UML de la base de données",
            "Mise en place d'une architecture MVC (Modèle-Vue-Contrôleur) en PHP pur",
            "Développement d'un système d'authentification sécurisé (sessions, hashage)",
            "Interface responsive avec HTML/CSS/JavaScript",
            "Déploiement sur le serveur IUT via SSH"
        ],
        competences: {
            techniques: ["PHP 8", "MySQL", "Architecture MVC", "HTML/CSS", "JavaScript", "SSH"],
            humaines: ["Communication client", "Travail en équipe", "Gestion des délais", "Documentation"]
        },
        technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
        detailLink: "projets/sae-php.html",
        liveLink: "https://webinfo.iutmontp.univ-montp2.fr/~larcherc/democr@/web/controleurFrontal.php"
    },
    {
        title: "Nuit de l'Info 2024",
        type: "Hackathon National",
        badge: "Équipe de 5 · 16 heures",
        description: "Plateforme web interactive réalisée lors du hackathon national sous contrainte de temps extrême.",
        context: "La Nuit de l'Info est un défi national qui dure toute une nuit, du coucher au lever du soleil. Notre équipe de 5 étudiants devait répondre à une problématique de santé publique : sensibiliser les jeunes à l'importance de prendre soin de leur santé mentale. Nous avons conçu et développé une plateforme web interactive, en gérant à la fois l'aspect technique et la coordination du travail en temps réel.",
        contexteDetail: "Durée : 16h en continu — Équipe de 5 — Contrainte : deadline fixe, travail en parallèle sur Git",
        objectifs: [
            "Conception rapide de l'architecture et répartition des tâches",
            "Développement front-end avec React sous contrainte de temps",
            "Gestion des conflits Git lors des fusions de code en équipe",
            "Mise en place d'une interface utilisateur intuitive et responsive",
            "Présentation du projet en fin de nuit"
        ],
        competences: {
            techniques: ["React", "Git/GitHub", "HTML/CSS"],
            humaines: ["Gestion du stress", "Agilité", "Communication en équipe", "Priorisation"]
        },
        technologies: ["React", "HTML/CSS", "Git"],
        detailLink: "projets/nuit-info.html",
        liveLink: null
    },
    {
        title: "SAÉ Pokémon TCG",
        type: "SAÉ · Application Java · S3",
        badge: "En binôme · ~4 semaines",
        description: "Application desktop de gestion de collection de cartes Pokémon développée en Java.",
        context: "Ce projet avait pour objectif de concevoir un logiciel de bureau permettant aux collectionneurs de gérer leur inventaire de cartes Pokémon TCG. Le défi principal était de produire une interface graphique fluide avec JavaFX tout en appliquant rigoureusement les principes de la programmation orientée objet : héritage, encapsulation, polymorphisme.",
        contexteDetail: "Durée : ~4 semaines — En binôme — Contrainte : respect strict des concepts POO",
        objectifs: [
            "Conception orientée objet : hiérarchie de classes, interfaces, design patterns",
            "Développement de l'interface graphique avec JavaFX",
            "Persistance des données (fichiers)",
            "Gestion des erreurs et validation des saisies utilisateur"
        ],
        competences: {
            techniques: ["Java", "JavaFX", "POO", "MVC"],
            humaines: ["Rigueur", "Conception logicielle", "Travail en binôme"]
        },
        technologies: ["Java", "JavaFX"],
        detailLink: "projets/pokemon-tcg.html",
        liveLink: null
    },
    {
        title: "TD PHP — Covoiturage",
        type: "Cours · Développement Web · S3",
        badge: "Individuel · Tout le semestre",
        description: "Site web de covoiturage complet développé au fil des séances de TD du semestre 3.",
        context: "Tout au long du semestre 3, les TD de développement web nous ont permis de construire itérativement un site de covoiturage complet. Chaque séance apportait de nouvelles fonctionnalités : gestion des utilisateurs, des trajets, système d'inscription aux trajets, panneau d'administration. Ce projet m'a permis d'intégrer progressivement les bonnes pratiques du développement PHP en architecture MVC.",
        contexteDetail: "Durée : tout le S3 (12 séances) — Individuel — Contrainte : progression guidée par les TD",
        objectifs: [
            "Conception et évolution de la base de données MySQL (entités, associations)",
            "Mise en place progressive d'une architecture MVC en PHP",
            "Gestion sécurisée de l'authentification et des sessions",
            "Fonctionnalités CRUD complètes pour les trajets et utilisateurs"
        ],
        competences: {
            techniques: ["PHP", "MySQL", "Architecture MVC", "HTML/CSS"],
            humaines: ["Autonomie", "Apprentissage progressif", "Rigueur"]
        },
        technologies: ["PHP", "MySQL", "HTML/CSS"],
        detailLink: "projets/td-php.html",
        liveLink: null
    },
    {
        title: "SAÉ Noodle",
        type: "SAÉ · Refonte applicative · S4",
        badge: "En équipe · ~8 semaines",
        description: "Refonte complète d'une application existante : analyse de l'existant, nouvelles fonctionnalités, amélioration UX.",
        context: "La SAÉ du semestre 4 nous a placés dans la situation d'une équipe de développeurs reprenant un projet existant. Baptisée « Noodle », l'application devait être analysée, documentée, puis enrichie de nouvelles fonctionnalités. Ce projet m'a confronté à la réalité du développement en contexte professionnel : comprendre du code que l'on n'a pas écrit, rédiger des spécifications et planifier les livraisons.",
        contexteDetail: "Durée : ~8 semaines — Équipe — Contrainte : reprise de code existant, rédaction de spécifications",
        objectifs: [
            "Analyse et documentation du code source existant",
            "Rédaction d'un cahier des charges pour les nouvelles fonctionnalités",
            "Développement de nouvelles fonctionnalités en JavaScript",
            "Amélioration de l'expérience utilisateur (UX)",
            "Gestion des versions et revues de code via Git"
        ],
        competences: {
            techniques: ["JavaScript", "HTML/CSS", "Git", "UX Design"],
            humaines: ["Analyse de l'existant", "Rédaction de spécifications", "Gestion de projet", "Communication d'équipe"]
        },
        technologies: ["JavaScript", "HTML/CSS", "Git"],
        detailLink: "projets/noodle.html",
        liveLink: null
    },
    {
        title: "TD JavaScript",
        type: "Cours · Développement Web · S4",
        badge: "Individuel · Tout le semestre",
        description: "Travaux pratiques progressifs sur le JavaScript moderne : DOM, événements, API REST, async/await.",
        context: "Les TD de JavaScript du semestre 4 m'ont permis d'approfondir ma maîtrise du langage côté client, en partant des bases du DOM pour aller vers des concepts avancés : programmation asynchrone, manipulation des API REST, gestion des promesses. Chaque TP construisait sur le précédent, aboutissant à des mini-applications interactives complètes.",
        contexteDetail: "Durée : tout le S4 — Individuel — Contrainte : progression guidée, notations régulières",
        objectifs: [
            "Manipulation avancée du DOM (événements, sélecteurs, modification dynamique)",
            "Programmation asynchrone : Promises, async/await, fetch()",
            "Consommation d'API REST externes (affichage de données dynamiques)",
            "Bonnes pratiques : séparation des responsabilités, modules ES6"
        ],
        competences: {
            techniques: ["JavaScript ES6+", "DOM API", "Fetch / API REST", "HTML/CSS"],
            humaines: ["Autonomie", "Rigueur", "Débogage méthodique"]
        },
        technologies: ["JavaScript", "HTML/CSS", "API REST"],
        detailLink: "projets/td-javascript.html",
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

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
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
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
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