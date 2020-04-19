<template>
	<div class="todo">
		<input class="todo-label" placeholder="type and press enter to add" />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TodoAdd extends Vue {}
</script>

<style scoped lang="less">
.todo {
	display: flex;
	margin: 0.25rem 0.5rem;
}
.todo-label {
	flex-grow: 1;
	margin: 0 1.8rem 0 1.6rem;
}
</style>
