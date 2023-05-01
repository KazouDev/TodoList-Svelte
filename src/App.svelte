<script lang="ts">
import Header from "./Components/Header.svelte";
import List from "./Components/List.svelte";
    import Toast from "./Components/Toast.svelte";
</script>

<style>
	:global(*) {
		box-sizing: border-box;
		font-family: Arial, Helvetica, sans-serif;
	}

	.container {
		background-color: #009579;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

<div class="container">
	<Toast />
	<Header />
	<List />
</div>