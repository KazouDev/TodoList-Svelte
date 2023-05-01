<script lang="ts">
    import { items } from '../stores';
    import svg from '../assets/trash.svg';
    import type { ITask } from '../task.type';
    import TodoApi from '../TodoApi';
    import { toast, ThemesEnum } from "../notifications.js";

    export let task: ITask;

    $: complete = task.taskComplete;

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Enter"){
        updateTask();
        if (event.currentTarget instanceof HTMLElement){
          event.currentTarget.blur();
        }
      }
    }

    const updateTask = () => {
      const index = $items.findIndex((item) => item.taskId === task.taskId);
      $items[index] = task;
      TodoApi.save($items);
      toast("Todo updated !", ThemesEnum.SUCCESS, 3000);
    }

    const deleteTask = () => {
      $items = $items.filter((item) => item.taskId !== task.taskId);
      TodoApi.save($items);
      toast("Todo deleted !", ThemesEnum.DANGER, 3000);
    }
</script>

<style>
    .item {
    display: flex;
    align-items: center;
    padding: 15px;
    background: #ffffff;
  }

  .item:focus-within {
    background: rgba(255, 255, 255, 0.8);
  }

  .item.complete {
    background: #dddddd;
  }

  .item.complete .text-input {
    color: #666666;
    text-decoration: line-through;
  }

  .text-input {
    flex-grow: 1;
    background: none;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 1em;
  }

  .complete-checkbox {
    margin-left: 15px;
  }

  img {
    margin-left: 15px;
  }

  img:hover {
    filter: invert(37%) sepia(93%) saturate(7471%) hue-rotate(356deg) brightness(91%) contrast(135%);
    cursor: pointer;
  }
</style>

<div class="item" class:complete>
    <input
      class="text-input"
      type="text"
      bind:value={task.taskName}
      readonly={complete}
      on:keyup={handleKeyUp}
      />
    <input
      class="complete-checkbox"
      type="checkbox"
      bind:checked={task.taskComplete}
      on:change={() => updateTask()}
      />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img on:click={deleteTask} src={svg} alt="Trash Icone" title="Trash icone"/>
  </div>