<script lang="ts">
    import { items } from "../stores";
    
    $: itemsCompleted = $items.filter((item) => item.taskComplete).length as Number;
</script>

<style lang="scss">
    h1, p {
        color: #fff;
    }

    .header {
        background: rgba(0, 0, 0, 0.1);
        width: 100%;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            font-size: large;
        }
    }
</style>

<div class="header">
    <h1>TodoList</h1>
    <p>Achevée(s): <span>{itemsCompleted}</span>/<span>{$items.length}</span></p>
</div>