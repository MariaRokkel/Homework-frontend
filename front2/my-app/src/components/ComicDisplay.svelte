<script lang="ts">
    import { onMount } from 'svelte';
    import { formatDistanceToNow } from 'date-fns';

    interface Comic {
        img: string;
        alt: string;
        safe_title: string;
        year: number;
        month: number;
        day: string;
    }

    let comic: Comic | null = null;

    onMount(async () => {
        try {
            const id = await getID();
            comic = await getComic(id);
        } catch (error) {
            console.error('Error:', error);
        }
    });

    async function getID(): Promise<string> {
        const response = await fetch(`${apiEndpoint}/hw2?email=${email}`);
        const id: string = await response.text();
        return id;
    }

    async function getComic(id: string): Promise<Comic> {
        const response = await fetch(`${apiEndpoint}/comic?id=${id}`);
        const comic: Comic = await response.json();
        return comic;
    }

    const email: string = 'm.rokkel@innopolis.university';
    const apiEndpoint: string = 'https://fwd.innopolis.university/api';
</script>

{#if comic}
    <div id="comic-container">
        <h1>{comic.safe_title}</h1>
        <img src={comic.img} alt={comic.alt} />
        <h2>{formatDistanceToNow(new Date(comic.year, comic.month - 1, parseInt(comic.day)))}</h2>
        <p>{comic.alt}</p>
    </div>
{:else}
    <p>Loading...</p>
{/if}

<style>
    body {
        background-color: #e8dbc0;
    }
    #comic-container {
        background-color: #9E8567;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        border-radius: 8px;
        width: 1000px;
        margin: auto;
        margin-top: 3%;

    }
    h1 {
        font-size: 40pt;
    }
    h2 {
        font-size: 35pt;
        color: rgb(26, 25, 25);
    }
    p {
        font-size: 25pt;
    }
</style>
