<template lang="pug">

.col-md-4
	.input-group
		input.form-control(type='text' placeholder='Add Company Name' v-model="name" @keyup.enter="addCompanyName")
		.input-group-btn
			button.btn.btn-default(@click="addCompanyName")
				i.glyphicon.glyphicon-plus
	.list-group
		a.list-group-item(v-for="company in companyNames", :class="{active: activeComp === company}" href="#" @click="activeCompany(company)")
			| {{ company.name }}

</template>

<script>

import {
    mapState,
		mapActions,
		mapGetters
} from 'vuex'

export default {
    name: "companyList",
    data() {
        return {
					name: ""
        }
    },
    computed: mapGetters({
			activeComp: 'active_comp',
			companyNames: 'company_names'
		}),
    methods: {
			...mapActions([
				"activeCompany"
			]),
			addCompanyName(e) {
				let text = ""
				if (e.target.value in e) {
					text = e.target.value
					e.target.value = ""
				} else {
					text = this.name
					this.name = ""
				}
				console.log(this.companyNames)
				if (text.trim()) // returns modified string, so if its nothing it returns false
				this.$store.dispatch('pushName', {
					name: text
				})
			}
		}
}

</script>

<style scoped>
	.list-group {
		padding-top: 20px;
	}

	.input-group {
		padding-top: 10px;
		margin: 0 auto;
	}
</style>
