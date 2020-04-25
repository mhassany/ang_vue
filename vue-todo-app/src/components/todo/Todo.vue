<template>
	<div class="todo">
		<input type="checkbox" v-model="todo.completed" v-on:change="update()" />
		<input class="todo-label" v-model="todo.label" />
		<button v-if="$store.state.trash" v-on:click="destroy()">x</button>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from "vue-property-decorator";
import { Todo as Todo_ } from "../../store/Todo";

@Component
export default class Todo extends Vue {
	@Model() todo!: Todo_;

	update() {
		this.$store.dispatch("update", this.todo);
	}

	destroy() {
		this.$store.dispatch("destroy", this.todo.id);
	}
}
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
