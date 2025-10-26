const appli = Vue.createApp({

    data() {
        return {
            projetsArr: [],
            selectedProject: [],
            index: 0
        };
    },
    mounted() {
        console.log("L'app Vue a été créée et montée au DOM (mounted) !");

        this.message = "Vue a été chargé et montée au DOM (mounted) !";

        fetch("./projects.json")
            .then(data => data.json())
            .then(result => {
                console.log(result);
                this.projetsArr = result
                this.selectedProject = this.projetsArr[0]
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
        }
    }
});

const vm = appli.mount('.appli-vue');

document.addEventListener("DOMContentLoaded", () => {

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
});
