<script lang="ts">
    import { flip } from "svelte/animate";
    import { fly } from "svelte/transition";
    import { notifications, removeToast } from "../notifications";
</script>

<style>
    .toasts {
        position: absolute;
        top: 10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 0;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .toast {
        flex: 0 0 auto;
        margin-bottom: 10px;
    }

    .content {
        cursor: pointer;
    }

    .content {
        padding: 10px;
        display: block;
        color: white;
        font-weight: 500;
    }
</style>

<div class="toasts">
    {#each $notifications as notification (notification.id)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        animate:flip
        class="toast"
        style="background: {notification.type};"
        on:click={() => removeToast(notification)}
        in:fly={{ y: 30 }}
        out:fly={ {y: -30}}
    >
        <div class="content">{notification.message}</div>
    </div>
    {/each}
</div>