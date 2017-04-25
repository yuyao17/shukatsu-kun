<template lang="pug">






.col-md-12
	.progress(v-if='steps')
		div(v-for='step in steps', :style="[styleObject.step, {left : step.wayPoint + '%'}, step.wayPoint <= completed ? styleObject.primaryColor : styleObject.noColor]")
			p.stepname {{ step.stepName }}
		.progress-bar.progress-bar-striped.active(role='progressbar', aria-valuenow='40', aria-valuemin='0', aria-valuemax='100', :style="{ width: completed + '%'}")
	.col-md-12
		form.form-horizontal(v-on:submit.prevent="onSubmit")
			.form-group
				.col-md-12
					.content.row
						.col-md-5
							input.form-control(type="text", placeholder="Add Step")
						.col-md-2
							Datepicker(format="yyyy-MM-dd", placeholder="Choose a date")
						.col-md-3
							VueTimepicker
						.col-md-2
							button.btn.btn-primary(type="submit") Add Step





</template>

<script>
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'
import VueTimepicker from 'vue2-timepicker'
import {mapActions, mapGetters} from 'vuex'

export default {
		name: 'ProgressBar',
		data() {
				return {
						styleObject: {
								step: {
										position: 'absolute',
										textAlign: 'center',
										marginTop: '-4px',
										zIndex: '1',
										height: '30px',
										width: '30px',
										borderRadius: '15px',
										border: '2px solid #256d95'
								},
								primaryColor: {
										backgroundColor: '#4989bd'
								},
								noColor: {
										backgroundColor: 'inherit'
								}
						},
						completed: 40 // make it reactive later, just for debugging purposes, 日にちと日にちの差
				}
		},
		methods: {
				...mapActions([
					'addStep'
				]),
				onSubmit(e) {
					let step = {
						stepName: e.target[0].value,
						date: moment(`${e.target[1].value} ${e.target[2].value}`)
					}
					this.addStep(step)
				}
		},
		computed: mapGetters([
			'steps'
		]),
		watch: {
				steps(v) {
						for (let i = 0; i < v.length; i++) {
								let intervals = v.length + 1
								v[i].wayPoint = Math.floor(100 / intervals * (i + 1))
						}
				}
		},
		components: {
				Datepicker,
				VueTimepicker
		}
}
</script>

<style scoped>
.progress {
		margin-top: 50px;
}
.stepname {
	font-size: 10px;
	margin-top: -35px;
}

</style>
