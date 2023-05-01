<script lang="ts">
    import TodoApi from "../TodoApi";
    import { items } from "../stores";
    import { toast, ThemesEnum } from "../notifications.js";
    let value = "";
    let errorMessage = "";

    $: error = errorMessage !== "";
    
    $: id = $items.length ? Math.max(...$items.map(i => i.taskId)) + 1 : 0;

    const handleKeyUp = ({key}) => {
        if (key !== "Enter") return;
        if (value.length <= 3) {
            errorMessage = "You must enter a minimal of 4 characters";
            return;
        }
        console.log("Success");
        $items = [...$items, {taskId: id, taskName: value, taskComplete: false}];
        TodoApi.save($items);
        value = "";
        errorMessage = "";
        toast("Todo created !", ThemesEnum.INFO);
    }
</script>

<style lang="scss">
    .newitem-container {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        width: 100%;
        height: 100px;

        input {
            height: 30px;
            width: 200px;
            padding: 3px;
            outline: none;
            &.error {
                border: 2px solid red;
            }
        }

        p {
            width: 100%;
            height: 20px;
            margin: 4px 0;
            opacity: 0;
            text-align: center;
            &.error {
                opacity: 1;
                color: rgb(196, 0, 0);
            }
        }
}
</style>

<div class="newitem-container">
    <input class:error type="text" on:keyup={handleKeyUp} bind:value placeholder="Add new task">
    <p class:error>{errorMessage}</p>
</div>