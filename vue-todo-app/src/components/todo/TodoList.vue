<template>
	<div class="todo-list">
		<Todo v-for="todo of $store.state.data" v-bind:key="todo.id" :todo="todo" />
		<TodoAdd v-if="$store.state.tab === 'todo'" />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TodoList extends Vue {}
</script>

<style scoped lang="less">
.todo-list {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	height: 100%;
	position: relative;
	overflow-y: scroll;
	max-height: 245px;
	margin-bottom: 1rem;
}
</style>
