<script>
    import me from '/public/media/me.jpg'
    import pochta from '/public/media/icons8-почта-48.png'
    import github from '/public/media/icons8-github-50.png'
    import tg from '/public/media/icons8-логотип-telegram-48.png'
    import vk from '/public/media/icons8-vk-48.png'
</script>

<section>
    <h1 class="colorH">About me</h1>
    <div id="ttext">
        <p>
            Hello, my new friend! I'm glad you decided to <br>
            look at my website and find out something about me.
        </p>
        <p><br></p>
        <p>
            My name is Maria, I am 18 years old, and I am a first-year<br>
            student at the best university in the world, namely Innopolis<br>
            University. Back in 7th grade, I decided that I wanted to be a<br>
            programmer, and at 8 I had already decided on an educational<br>
            institution. At school, I participated in various Olympiads,<br>
            school and city competitions, at the same time I danced with my<br>
            favorite team, participating in various events. By the way, I <br>
            graduated from school with honors!
        </p>
        <p><br></p>
        <p>
            At the moment, I am gaining experience, trying myself in<br>
            different areas of IT in order to determine my future direction.<br>
            You can contact with me on:
        </p>
        <div id="contacts">
            <a href="mailto:mararokkel@mail.ru"><img id="imail" src={pochta} alt=" Картинка"/></a>
            <a href="https://github.com/MariaRokkel"><img id="igit" src={github} alt=" Картинка"/></a>
            <a href="https://t.me/mars_min"><img id="itg" src={tg} alt=" Картинка"/></a>
            <a href="https://vk.com/bangchan_ol"><img id="ivk" src={vk} alt=" Картинка"/></a>
        </div>
    </div>
    <div id="photo">
        <img id="mee" src={me}>
    </div>


</section>

<style>
    body {
        background-color: #ebe2d2;
    }
    #photo {
        margin-top: -40%;
        float: right;
        margin-bottom: 20%;
    }
    #mee {
        width: 371.25px;
        height: 495px;
    }
    p {
        float: left;
        margin: 0;
        text-indent: 2ch;
        font-size: 20pt;
        text-align: justify;
    }

    .colorH {
        color: #9E8567;
        float: left;
        margin-top: -8% ;
    }

    #imail {
        width: 45px;
        height: 45px;
        margin-left: -50%;
    }
    #igit {
        width: 40px;
        height: 40px;
        margin-left: 3%;
    }
    #itg {
        width: 40px;
        height: 40px;
        margin-left: 3%;
    }
    #ivk {
        width: 40px;
        height: 40px;
        margin-left: 3%;
    }

    #contacts {
        width: 50%;
        float: left;
        margin-top: 1%;
    }

    #ttext {
        margin-top: 10%;
        bottom: 10%;
    }
</style>
