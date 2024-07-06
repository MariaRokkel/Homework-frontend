<script lang="ts">
    import { Link } from 'svelte-routing';
</script>

<footer>
    <nav class="navbar">
        <Link to="/" class="nav-link">Home page</Link>
        <Link to="/about" class="nav-link">About me</Link>
        <Link to="/portfolio" class="nav-link">Portfolio</Link>
        <Link to="/comic" class="nav-link">Comic</Link>
    </nav>
</footer>

<style>
    .navbar {
        background-color: #685641;
        color: black;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        left: 0;
        height: 10%;
    }

    .nav-link {
        text-decoration: none;
        color: black;
        padding: 10px;
        display: block;
        text-align: center;
        font-size: 20px;
    }

    .nav-link:hover {
        background-color: #B77B57;
    }
</style>
