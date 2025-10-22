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