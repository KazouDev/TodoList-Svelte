<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
    import TodoItem from './TodoItem.svelte';
    import NewItem from './NewItem.svelte';
    import TodoApi from '../TodoApi';
    import { items } from '../stores';
    import type { ITask } from '../task.type';

    let itemStored = [];

    $: {
        itemStored = [...$items];
        itemStored.sort((a: ITask, b: ITask) => {
            if (a.taskComplete && b.taskComplete){
                return a.taskDelay < b.taskDelay ? 1 : -1;
            }
            if (a.taskComplete) return 1;
            if (b.taskComplete) return -1;
        });
    }

    onMount(async () => {
        $items = await TodoApi.getAll();
    });

    $: console.log($items);

</script>

<style>
    .list {
        padding: 15px;
    }
</style>

<div class="list">
    <NewItem />
    {#each $items as task (task.taskId)}
        <TodoItem task={task}/>
    {/each}
</div>

