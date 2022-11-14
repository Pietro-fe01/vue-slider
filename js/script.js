"use strict";

// Vue.js App
const { createApp } = Vue;

createApp({
    data(){
        return{
            tabIndex: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            // Quando col mouse si punta lo slider, l'autoplay si ferma
            clearAutoplayImages: () => {
                clearInterval(this.autoPlay)
            },
        };
    },

    methods: {
        // Funzione che scorre le immagini al click dei pulsanti prev e next
        changeImage: function(direction){
            if(direction === "prev"){
                if(this.tabIndex === 0){
                    this.tabIndex = this.slides.length - 1;
                } else {
                    this.tabIndex--;
                }
            } else if (direction === "next"){
                if(this.tabIndex === this.slides.length - 1){
                    this.tabIndex = 0;
                } else {
                    this.tabIndex++;
                }
            }
        },

        // Funzione che mostra nello slider la thumb img cliccata
        selectImage: function(selectedImageIndex){
            return this.tabIndex = selectedImageIndex;
        },

        // Quando col mouse si esce dallo slider l'autoplay parte di nuovo
        replayImages: function(){
            this.autoPlay = setInterval(() => {
                this.changeImage("next");
            }, 3000)
        }
    },

    mounted(){
        // Funzione che continua a scorrere le immagini 'next' ogni 3s
        this.autoPlay = setInterval(() => {
            this.changeImage("next");
        }, 3000)
    }
}).mount('#app');