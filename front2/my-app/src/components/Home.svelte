<script lang="ts">
    import { Link } from 'svelte-routing';
</script>

<section id="hi">
    <h1>Hello! I'm <span class="colorName">Rokkel Maria Andreevna</span><br>I am a first year student at <br>Innopolis University</h1>
    <Link to="/about" class="btn" id="button1">About me</Link>
</section>

<style>
    body {
        padding: 0 200px;
    }
    a {
        margin: 5px;
    }
    #hi {
        text-align: center;
    }
    .colorName {
        color: #6F6456;
    }
    #button1 {
        appearance: none;
        border: 0;
        border-radius: 20px;
        background: #6F6456;
        color: #E8DBC0;
        padding: 10px 37px;
        font-size: 26px;

    }
    .btn {
        margin-left: 360px;
        margin-top: 30px;
    }
</style>

