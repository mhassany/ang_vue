<template>
	<div class="todo-app">
		<div class="category-tabs">
			<router-link to="/todo">
				<button :class="{ selected: $store.state.tab === 'todo' }">
					TODOs
				</button>
			</router-link>
			<router-link to="/completed">
				<button :class="{ selected: $store.state.tab === 'completed' }">
					Completed
				</button>
			</router-link>
		</div>

		<TodoList />

		<div class="list-footer">
			<span class="list-count">{{ $store.state.data.length }} Tasks</span>
			<button class="trash-toggle" v-on:click="$store.dispatch('toggleTrash')">
				<span class="icon"></span>
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class TodoApp extends Vue {
	constructor() {
		super();
	}

	@Watch("$route", { immediate: true, deep: true })
	onUrlChange(url: any) {
		const path = url.path.substring(1);
		if (["todos", "completed"].indexOf(path)) {
			this.$store.dispatch("setTab", path);
			this.$store.dispatch("reload");
		}
	}

	mounted() {
		this.$store.dispatch("reload");
	}
}
</script>

<style scoped lang="less">
.todo-app {
	display: flex;
	flex-direction: column;
	width: 340px;
	height: 320px;
	border: solid 1px;
	padding: 0.25rem;
	box-sizing: border-box;
	position: relative;
}

.category-tabs {
	display: flex;
	margin-bottom: 0.25rem;

	> a {
		flex-grow: 1;

		> button {
			width: 100%;
			padding: 0.25rem;
		}

		> button.selected {
			background-color: gray;
			color: white;
		}
	}
}

.list-footer {
	text-align: center;
	padding: 0.25rem;
}

.trash-toggle {
	position: absolute;
	border: none;
	right: 0.25rem;
	bottom: 0.25rem;

	> span.icon {
		content: url(data:image/png;base64,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);
		width: 1.5rem;
		height: 1.5rem;
	}
}

.list-count {
	color: lightgray;
}
</style>
