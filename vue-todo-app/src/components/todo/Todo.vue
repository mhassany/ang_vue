<template>
	<div class="todo">
		<input type="checkbox" />
		<input class="todo-label" />
		<button>x</button>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Todo extends Vue {}
</script>

<style scoped lang="less">
.todo {
	display: flex;
	margin: 0.25rem 0.5rem;
}
.todo-label {
	flex-grow: 1;
	margin: 0 0.5rem;
}
.todo-label:not(:focus) {
	border: none;
}
</style>
