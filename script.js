// app vue créée
const appli = Vue.createApp({

    data() {
        return {
            // retourne le contenu de projetsArr en tableau, le selectedProject, l'index pour le carrousel et le projet sélectionné via l'URL
            projetsArr: [],
            selectedProject: [],
            index: 0,
            projet: {}
        };
    },
    mounted() {
        // récupération des paramètres de l'URL
        const params = new URLSearchParams(window.location.search)
        // fetch pour récupérer le JSON des projets
        fetch("./projects.json")
            .then(data => data.json())
            .then(result => {

                console.log(result);
                // assignation du résultat à projetsArr
                this.projetsArr = result
                // récupération de l'ID du projet dans l'URL
                const id = parseInt(params.get("proj-id"));
                this.projet = this.projetsArr.find(p => p.id === id);
                // si le projet est trouvé, on récupère son index dans projetsArr
                if (this.projet) {
                    this.projetsArr.findIndex(p => p.id === id);
                } else {
                    console.warn("Aucun projet trouvé pour l'ID :", id);
                }
                // assignation du projet sélectionné
                this.selectedProject = this.projetsArr[this.index]
                // lancement des animations GSAP après le rendu du DOM
                this.$nextTick(() => {
                    this.jumpstartGSAP();
                });
            });
    },
    methods: {
        // méthode pour changer le projet sélectionné dans le carrousel
        changeSelectedProject(value) {
            // modification de l'index selon la valeur reçue
            if (value == "back") {
                this.index--
            } else if (value == "next") {
                this.index++
            }

            // si index dépasse, on boucle
            if (this.index > this.projetsArr.length - 1) {
                this.index = 0
            } else if (this.index <= -1) {
                this.index = this.projetsArr.length - 1
            }
            // on assigne le projet sélectionné selon le nouvel index
            this.selectedProject = this.projetsArr[this.index]
        },
        // méthode pour initialiser les animations GSAP avec ScrollTrigger
        jumpstartGSAP() {
            // enregistrement du plugin ScrollTrigger
            gsap.registerPlugin(ScrollTrigger);

            // header, carrousel et hero sans scrollTrigger
            gsap.from("header", {
                opacity: 0,
                duration: 1,
            });

            gsap.from(".section-carrousel", {
                opacity: 0,
                duration: 1,
            });

            gsap.from(".section-hero", {
                opacity: 0,
                duration: 1,
            });

            // sections avec scrollTrigger
            gsap.from(".section-competences", {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section-competences",
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                }
            });

            gsap.from(".section-projets", {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section-projets",
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                }
            });

            gsap.from(".section-propos", {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section-propos",
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                }
            });

            gsap.from("footer", {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: "footer",
                    start: "top 100%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                }
            });

            gsap.from(".section-description", {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section-description",
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                }
            });

            gsap.from(".section-collaborateurs", {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section-collaborateurs",
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                }
            });

            gsap.from(".section-galerie", {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section-galerie",
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                }
            });

            gsap.from(".section-oeuvre", {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section-oeuvre",
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                }
            });

            gsap.from(".section-processus", {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section-processus",
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                }
            });

            gsap.from(".section-specs", {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section-specs",
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                }
            });
        }
    }
});

const vm = appli.mount('.appli-vue');