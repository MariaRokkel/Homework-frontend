<script lang="ts">
    import dance from '/public/media/dance.jpg'
    import cat from '/public/media/кот.jpg'
</script>

<section>
    <h1 class="colorH">Some of my skills</h1>
    <div id="card">
        <h2>My technical stack:</h2>
        <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>Figma</li>
        </ul>
    </div>
    <a><br><br></a>
    <div id="card1">
        <h2>My dancing styles:</h2>
        <ul>
            <li>Jazz-funk</li>
            <li>Dancehall</li>
            <li>Modern</li>
            <li>Pop dancing</li>
        </ul>
    </div>
    <div id="card2">
        <h2>Some of my personality characteristics</h2>
        <ul>
            <li>Responsibility</li>
            <li>Responsive</li>
            <li>Helpful</li>
            <li>Trustworthy</li>
            <li>Open minded</li>
            <li>Hardworking</li>
        </ul>
    </div>
    <img id="i1" src={cat}>
    <img id="i2" src={dance}>
</section>

<style>

    #card{
        margin-top: -5%;
        float: left;
        border: 1.5px solid black;
        border-radius: 20px;
        padding: 15px;
        background-color: #e8dbc0;
        width: 30%;
        min-height: 50%;
        margin-left: -35%;
    }
    .colorH {
        margin-top: -25%;
        color: #9E8567;
        text-align: center;
    }
    #card1 {
        border: 1.5px solid black;
        border-radius: 20px;
        padding: 15px;
        background-color: #e8dbc0;
        width: 225px;
        min-height: 180px;
        float: right;
        margin-top: 20%;
        margin-right: -38%;
        margin-bottom: -15%;
    }
    #card2 {
        border: 1.5px solid black;
        border-radius: 20px;
        padding: 15px;
        background-color: #e8dbc0;
        width: 300px;
        min-height: 325px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 15pt;
    }
    #i1 {
        width: 253.8px;
        height: 248.85px;
        position: relative;
        left: -52.5%;
        margin-top: 20%;
        margin-bottom: -30%;
    }
    #i2 {
        width: 223.965px;
        height: 250.425px;
        position: relative;
        float: right;
        right: -37%;
        margin-top: -17%;

    }
</style>
