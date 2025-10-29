const appli = Vue.createApp({

    data() {
        return {
            projetsArr: [],
            selectedProject: [],
            index: 0,
            projet: {}
        };
    },
    mounted() {

        const params = new URLSearchParams(window.location.search)

        fetch("./projects.json")
            .then(data => data.json())
            .then(result => {

                console.log(result);
                this.projetsArr = result

                const id = parseInt(params.get("proj-id"));
                this.projet = this.projetsArr.find(p => p.id === id);

                if (this.projet) {
                    this.projetsArr.findIndex(p => p.id === id);
                } else {
                    console.warn("Aucun projet trouvé pour l'ID :", id);
                }
                this.selectedProject = this.projetsArr[this.index]

                this.$nextTick(() => {
                    this.jumpstartGSAP();
                });
            });
    },
    methods: {
        changeSelectedProject(value) {
            if (value == "back") {
                this.index--
            } else if (value == "next") {
                this.index++
            }

            if (this.index > this.projetsArr.length - 1) {
                this.index = 0
            } else if (this.index <= -1) {
                this.index = this.projetsArr.length - 1
            }

            this.selectedProject = this.projetsArr[this.index]
        },
        jumpstartGSAP() {
            gsap.registerPlugin(ScrollTrigger);

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