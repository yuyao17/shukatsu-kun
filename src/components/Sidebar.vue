<template lang="pug">

.icon-bar.col-md-1
	a(href="#")
		i.fa.fa-search
	a(href="#")
		i.fa.fa-star(:style="{ color: isFavorited }", @click="toggleFavorite")
	a(href="#")
		i.fa.fa-globe
	a(href="#")
		i.fa.fa-trash

</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'

export default {
    name: "sidebar",
    computed: {
        ...mapState({
            favorited: state => state.activeCompany.favorite
        }),
        isFavorited() {
          return this.favorited ? 'yellow' : ''
        }
    },
    methods: mapActions([
        "toggleFavorite"
    ])
}
</script>

<style scoped>
.col-md-1 {
    height: 100%;
    min-height: 100%;
}

.icon-bar {
    background-color: #555;
    /* Dark-grey background */
}

.icon-bar a {
    display: block;
    /* Make the links appear below each other instead of side-by-side */
    text-align: center;
    /* Center-align text */
    padding: 16px;
    /* Add some padding */
    transition: all 0.3s ease;
    /* Add transition for hover effects */
    color: white;
    /* White text color */
    font-size: 36px;
    /* Increased font-size */
}

</style>
