// Obtener referencias a los elementos
const emotionSelect = document.getElementById('emotionSelect');
const generateMessageBtn = document.getElementById('generateMessage');
const messageOutput = document.getElementById('messageOutput');

const animationsContainer = document.querySelector('.animations-container');

// Listas de mensajes con emojis y animaciones
const messages = {
    mensajeDia: [
        { text: "Hoy será un día maravilloso. 🌟", emoji: "🌟" },
        { text: "Recuerda: eres increíble, ¡y puedes con todo! 💪", emoji: "💪" },
        { text: "Que este día esté lleno de amor y alegría. 💖", emoji: "💖" },
        { text: "Hoy será un día maravilloso. 🌟", emoji: "🌟" },
        { text: "Recuerda: eres increíble, ¡y puedes con todo! 💪", emoji: "💪" },
        { text: "Que este día esté lleno de amor y alegría. 💖", emoji: "💖" },
        { text: "Hoy es un buen día para hacer cosas grandes. 🚀", emoji: "🚀" },
        { text: "Un día lleno de nuevas oportunidades te espera. 🌱", emoji: "🌱" },
        { text: "Cada día trae una nueva oportunidad. 🌞", emoji: "🌞" },
        { text: "Hoy es perfecto para empezar algo nuevo. ✨", emoji: "✨" },
        { text: "Hoy será un gran día, confía en ti. 💫", emoji: "💫" },
        { text: "Haz que hoy sea un día increíble. 🌈", emoji: "🌈" },
        { text: "Cada paso que das te acerca a tu meta. 🏁", emoji: "🏁" },
        { text: "Hoy será un día lleno de momentos felices. 😊", emoji: "😊" },
        { text: "Hoy es un buen día para sonreír. 😀", emoji: "😀" },
        { text: "Este día está lleno de posibilidades. 🌟", emoji: "🌟" },
        { text: "Hoy es tu día para brillar. ✨", emoji: "✨" },
        { text: "Haz de este día algo especial. 💖", emoji: "💖" },
        { text: "Hoy es el mejor día para ser feliz. 😁", emoji: "😁" },
        { text: "Recuerda siempre sonreír, hoy y todos los días. 😃", emoji: "😃" },
        { text: "Este día será memorable. 📅", emoji: "📅" },
        { text: "Hoy es el día perfecto para ser feliz. 💫", emoji: "💫" },
        { text: "Un día lleno de magia te espera. 🪄", emoji: "🪄" },
        { text: "Hoy es el día para disfrutar de la vida. 🌍", emoji: "🌍" },
        { text: "Hoy será un día para recordar. 📸", emoji: "📸" },
        { text: "Que tu día sea tan brillante como tu sonrisa. 😄", emoji: "😄" },
        { text: "Cada día es una nueva aventura. 🏞️", emoji: "🏞️" },
        { text: "Hoy es perfecto para seguir tus sueños. 🌠", emoji: "🌠" },
        { text: "Hoy es un buen día para hacer el bien. 🤗", emoji: "🤗" },
        { text: "Este día es tuyo. 🌟", emoji: "🌟" },
        { text: "Hoy es un día para ser agradecido. 🙏", emoji: "🙏" },
        { text: "Que tengas un día lleno de bendiciones. 🙌", emoji: "🙌" },
        { text: "Hoy será un día épico. ⚡", emoji: "⚡" },
        { text: "Hoy es un nuevo comienzo. 🌅", emoji: "🌅" },
        { text: "Hoy es un buen día para ser tú mismo. 🌻", emoji: "🌻" },
        { text: "Hoy está lleno de oportunidades para crecer. 🌱", emoji: "🌱" },
        { text: "Haz que hoy cuente. 🔥", emoji: "🔥" },
        { text: "Hoy será un día brillante. ☀️", emoji: "☀️" },
        { text: "Un nuevo día trae nuevas posibilidades. 🌼", emoji: "🌼" },
        { text: "Haz de este día una obra maestra. 🎨", emoji: "🎨" },
        { text: "Hoy es el día para hacer realidad tus sueños. 💫", emoji: "💫" },
        { text: "Hoy es un buen día para ser feliz. 😊", emoji: "😊" },
        { text: "Este día será tan increíble como tú. 🌟", emoji: "🌟" },
        { text: "Hoy está lleno de oportunidades para ti. 🏆", emoji: "🏆" },
        { text: "Recuerda, hoy es un nuevo día para ser feliz. 🌞", emoji: "🌞" },
        { text: "Cada día te acerca más a tu objetivo. 🏅", emoji: "🏅" },
        { text: "Haz hoy algo que te haga feliz. 🥰", emoji: "🥰" },
        { text: "Hoy es un buen día para crecer. 📈", emoji: "📈" },
        { text: "Hoy está lleno de sorpresas. 🎁", emoji: "🎁" },
        { text: "Hoy es el día perfecto para empezar de nuevo. 🔄", emoji: "🔄" },
        { text: "Recuerda que hoy es un regalo. 🎁", emoji: "🎁" },
        { text: "Hoy es el día perfecto para alcanzar tus sueños. ✨", emoji: "✨" },
        { text: "Hoy es tu día, brilla con todo tu ser. ✨", emoji: "✨" },
        { text: "Hoy es un buen día para ser feliz. 🌟", emoji: "🌟" },
        { text: "Hoy es un buen día para hacer algo increíble. 🚀", emoji: "🚀" },
        { text: "Que tengas un día lleno de sonrisas. 😊", emoji: "😊" },
        { text: "Hoy es un buen día para empezar algo nuevo. 🏁", emoji: "🏁" },
        { text: "Que tengas un día lleno de luz y amor. 🌈", emoji: "🌈" },
        { text: "Hoy es un buen día para ser tu mejor versión. 🌱", emoji: "🌱" },
        { text: "Hoy es un día para crear momentos felices. 🧡", emoji: "🧡" },
        { text: "Haz de hoy un día grandioso. 🎉", emoji: "🎉" },
        { text: "Hoy será un día lleno de bendiciones. 🙌", emoji: "🙌" },
        { text: "Hoy será un día lleno de amor y alegría. ❤️", emoji: "❤️" },
        { text: "Hoy es el día perfecto para brillar. 🌟", emoji: "🌟" },
        { text: "Hoy es un día para disfrutar de la vida. 😄", emoji: "😄" },
        { text: "Hoy es un buen día para vivir tus sueños. 🌠", emoji: "🌠" },
        { text: "Que tengas un día lleno de alegría. 🥳", emoji: "🥳" },
        { text: "Hoy es un buen día para hacer algo divertido. 🎈", emoji: "🎈" },
        { text: "Hoy es un día para agradecer. 🙏", emoji: "🙏" },
        { text: "Hoy será un día increíble. 🔥", emoji: "🔥" },
        { text: "Hoy es el día perfecto para empezar de nuevo. 🌅", emoji: "🌅" },
        { text: "Hoy es un buen día para amar y ser amado. 💖", emoji: "💖" },
        { text: "Hoy es un buen día para ser feliz. 😁", emoji: "😁" },
        { text: "Hoy es un buen día para vivir en el presente. 🌸", emoji: "🌸" },
        { text: "Hoy es un buen día para sonreír. 😃", emoji: "😃" },
        { text: "Haz que hoy sea grandioso. 💫", emoji: "💫" },
        { text: "Hoy es un buen día para crear recuerdos. 📸", emoji: "📸" },
        { text: "Hoy es un buen día para ser positivo. 💖", emoji: "💖" },
        { text: "Hoy es un buen día para ser agradecido. 🙏", emoji: "🙏" },
        { text: "Hoy es un buen día para hacer lo que amas. 💖", emoji: "💖" },
        { text: "Hoy es un buen día para brillar. 🌟", emoji: "🌟" },
        { text: "Hoy es el día perfecto para sonreír. 😊", emoji: "😊" },
        { text: "Hoy es un buen día para disfrutar de la vida. 🌞", emoji: "🌞" },
        { text: "Hoy es un buen día para hacer algo nuevo. 🌟", emoji: "🌟" },
        { text: "Hoy es un buen día para ser feliz. 🌸", emoji: "🌸" },
        { text: "Haz que hoy sea un gran día. 😄", emoji: "😄" },
        { text: "Hoy es el día perfecto para hacer lo que amas. ❤️", emoji: "❤️" },
        { text: "Hoy es un día para sonreír. 😀", emoji: "😀" },
        { text: "Hoy es un buen día para brillar. 🌟", emoji: "🌟" },
        { text: "Hoy es un buen día para hacer lo que te hace feliz. 🥰", emoji: "🥰" },
        { text: "Hoy es un día lleno de posibilidades. ✨", emoji: "✨" },
        { text: "Hoy es un día para disfrutar de los pequeños momentos. 🌻", emoji: "🌻" },
        { text: "Hoy es un buen día para ser positivo. 🌈", emoji: "🌈" },
        { text: "Hoy es un día lleno de buenas energías. 💫", emoji: "💫" },
        { text: "Hoy es el día perfecto para ser tú mismo. 😎", emoji: "😎" },
        { text: "Hoy es un buen día para empezar a trabajar en tus sueños. 💪", emoji: "💪" },
        { text: "Haz que hoy sea un día memorable. 💖", emoji: "💖" },
        { text: "Hoy es el día perfecto para hacer cosas grandes. 🚀", emoji: "🚀" },
        { text: "Hoy es un día lleno de posibilidades. 🌠", emoji: "🌠" },
        { text: "Hoy es un buen día para disfrutar del presente. 🧘‍♀️", emoji: "🧘‍♀️" },
        { text: "Hoy es el día perfecto para amar. ❤️", emoji: "❤️" },
        { text: "Hoy, mi amor, será un día tan especial como tú. 🌟", emoji: "🌟" },
        //romanticos

        { text: "Recuerda siempre, mi vida, que eres increíble, y nada te detiene. 💪", emoji: "💪" },
        { text: "Que este día esté lleno de amor, risas y momentos que compartimos juntos. 💖", emoji: "💖" },
        { text: "Hoy, junto a ti, todo será maravilloso. 🌸", emoji: "🌸" },
        { text: "Te abrazo con el alma en cada paso que das hoy. 💫", emoji: "💫" },
        { text: "Este día es perfecto para que sigas brillando como lo haces cada día. ✨", emoji: "✨" },
        { text: "Hoy, mi amor, es un buen día para que nuestros sueños se sigan entrelazando. 🌱", emoji: "🌱" },
        { text: "Contigo, cada día es una nueva oportunidad para ser felices juntos. 💕", emoji: "💕" },
        { text: "Que este día esté lleno de sonrisas, como la tuya, que ilumina mi mundo. 😊", emoji: "😊" },
        { text: "Hoy, quiero que sientas todo mi amor en cada momento. ❤️", emoji: "❤️" },
        { text: "Hoy será un día lleno de magia, porque tú eres mi magia. ✨", emoji: "✨" },
        { text: "Hoy es el día para brillar juntos, mi amor. 🌟", emoji: "🌟" },
        { text: "Cada día contigo es un regalo, ¡que este sea uno lleno de momentos hermosos! 🎁", emoji: "🎁" },
        { text: "Que tu día sea tan brillante como la luz que traes a mi vida. 😄", emoji: "😄" },
        { text: "Hoy es tu día, amor, para conquistar el mundo, y yo estaré aquí animándote. 💪", emoji: "💪" },
        { text: "Hoy quiero que solo pienses en todo lo que nos espera, juntos. 💖", emoji: "💖" },
        { text: "Haz de hoy un día tan hermoso como tu sonrisa, mi amor. 🌸", emoji: "🌸" },
        { text: "Hoy es el día perfecto para seguir construyendo nuestros sueños. 🌠", emoji: "🌠" },
        { text: "Hoy, con todo mi corazón, te deseo un día lleno de amor y bendiciones. 🙏", emoji: "🙏" },
        { text: "Hoy es el día para que nuestro amor siga creciendo. 🌻", emoji: "🌻" },
        { text: "Hoy, quiero hacer de este día un recuerdo inolvidable, a tu lado. 💖", emoji: "💖" },
        { text: "Hoy es un buen día para hacer todo lo que te haga feliz, porque tú lo mereces. 🥰", emoji: "🥰" },
        { text: "Mi amor, hoy el sol brilla para ti y para todo lo que te hace feliz. 🌞", emoji: "🌞" },
        { text: "Hoy es un día para compartir y disfrutar de cada pequeño detalle juntos. 🌻", emoji: "🌻" },
        { text: "Hoy, más que nunca, quiero verte feliz, porque tu felicidad es la mía. 💖", emoji: "💖" },
        { text: "Que tu día esté lleno de momentos tan hermosos como nuestra historia. 🌟", emoji: "🌟" },
        { text: "Hoy es el día perfecto para amarnos más, mi vida. ❤️", emoji: "❤️" },
        { text: "Hoy, mi amor, es un buen día para seguir soñando juntos. 🌠", emoji: "🌠" },
        { text: "Que este día esté lleno de pequeños momentos que siempre recordaremos. 🥰", emoji: "🥰" },
        { text: "Hoy es el día perfecto para hacer lo que amamos, juntos. 💖", emoji: "💖" },
        { text: "Que tengas un día tan hermoso como el amor que compartimos. 💖", emoji: "💖" },
        { text: "Hoy, el amor será la energía que nos guíe en cada paso. 💫", emoji: "💫" },
        { text: "Este día, como todos, es mejor a tu lado. 🌸", emoji: "🌸" },
        { text: "Hoy es perfecto para seguir escribiendo nuestra historia de amor. 📖", emoji: "📖" },
        { text: "Hoy, mi amor, es un buen día para hacer que nuestros sueños se hagan realidad. ✨", emoji: "✨" }
    ],
    triste: [
        { text: "Todo estará bien, mi amor. 🌈", emoji: "🌈" },
        { text: "Aunque hoy sea difícil, siempre estaré contigo. 💕", emoji: "💕" },
        { text: "Eres más fuerte de lo que crees. 🌸", emoji: "🌸" },
        { text: "Aunque hoy sea difícil, siempre estaré contigo. 💕", emoji: "💕" },
        { text: "Eres más fuerte de lo que crees. 🌸", emoji: "🌸" },
        { text: "A veces las cosas se ponen difíciles, pero tú eres más fuerte. 💪", emoji: "💪" },
        { text: "Los días grises también pasarán, todo mejora. 🌧️", emoji: "🌧️" },
        { text: "Aunque hoy sea duro, estoy contigo. 🫂", emoji: "🫂" },
        { text: "No estás solo/a, todo estará bien. 💖", emoji: "💖" },
        { text: "Respira, esto también pasará. 🌦️", emoji: "🌦️" },
        { text: "Hoy es solo un día más, mañana será mejor. 🌅", emoji: "🌅" },
        { text: "Lo que sientes es válido, todo estará bien. 💙", emoji: "💙" },
        { text: "Aunque te sientas triste ahora, el sol siempre vuelve a brillar. 🌞", emoji: "🌞" },
        { text: "Sé que las cosas están difíciles, pero eres más fuerte de lo que piensas. 💪", emoji: "💪" },
        { text: "Recuerda que todo pasa. 💙", emoji: "💙" },
        { text: "Tómate tu tiempo, pero no olvides que todo mejorará. ⏳", emoji: "⏳" },
        { text: "Todo lo que sientes ahora es temporal, el sol volverá a brillar. 🌈", emoji: "🌈" },
        { text: "Hoy es un día difícil, pero estás más cerca de la paz. 🌸", emoji: "🌸" },
        { text: "Todo va a estar bien, por más que ahora parezca difícil. 🌧️", emoji: "🌧️" },
        { text: "Te mando un abrazo lleno de fuerza. 💕", emoji: "💕" },
        { text: "Aunque hoy no sea tu mejor día, todo mejorará. 🌞", emoji: "🌞" },
        { text: "No tienes que estar bien todo el tiempo. Te entiendo. 🖤", emoji: "🖤" },
        { text: "Los momentos difíciles también son parte de la vida. 🌿", emoji: "🌿" },
        { text: "Está bien sentirse triste, es parte de sanar. 💙", emoji: "💙" },
        { text: "Aunque ahora todo parezca gris, el sol volverá a brillar. 🌤️", emoji: "🌤️" },
        { text: "Todo lo que sientes es válido, y todo pasará. 🌸", emoji: "🌸" },
        { text: "Hoy tal vez no sea tu día, pero habrá otros mejores. 🌈", emoji: "🌈" },
        { text: "Recuerda que después de la tormenta, siempre llega la calma. 🌤️", emoji: "🌤️" },
        { text: "Si necesitas hablar, aquí estoy. 💬", emoji: "💬" },
        { text: "Hoy es un día para sentir lo que sientes. 🖤", emoji: "🖤" },
        { text: "Es normal sentirse así a veces, todo pasa. 💕", emoji: "💕" },
        { text: "Todo mejorará, no te desesperes. 🌈", emoji: "🌈" },
        { text: "Las lágrimas también son parte del proceso de sanar. 💧", emoji: "💧" },
        { text: "Hoy no te sientas mal por sentirte mal. 🖤", emoji: "🖤" },
        { text: "No hay nada malo en tomarse un tiempo para sanar. 🌸", emoji: "🌸" },
        { text: "Está bien sentirse mal de vez en cuando. Lo importante es seguir adelante. 🌷", emoji: "🌷" },
        { text: "Todo lo que sientes es una parte del proceso. 🌱", emoji: "🌱" },
        { text: "Recuerda que la tristeza es solo una emoción pasajera. 🌞", emoji: "🌞" },
        { text: "Aunque hoy te sientas mal, las cosas cambiarán. 🌈", emoji: "🌈" },
        { text: "Respira hondo, pronto sentirás alivio. 💖", emoji: "💖" },
        { text: "Hoy es un día triste, pero eso también pasará. 💫", emoji: "💫" },
        { text: "Recuerda que no estás solo/a. 💙", emoji: "💙" },
        { text: "Hoy te abrazo a la distancia, todo pasará. 🌸", emoji: "🌸" },
        { text: "La tristeza también forma parte de la vida, todo pasará. 🌷", emoji: "🌷" },
        //romatico
        { text: "En los días grises, siempre seré tu sol, mi amor. 🌞", emoji: "🌞" },
        { text: "No importa lo que pase, mi corazón siempre estará a tu lado. 💖", emoji: "💖" },
        { text: "Cada paso que das, mi amor por ti crece más. Juntos podemos con todo. 💕", emoji: "💕" },
        { text: "En cada lágrima que caes, mi amor se convierte en tu refugio. 💧", emoji: "💧" },
        { text: "Tu fortaleza es mi inspiración, juntos somos invencibles. 💪", emoji: "💪" },
        { text: "No te preocupes por el mañana, mi amor, porque contigo todo lo supero. 🌅", emoji: "🌅" },
        { text: "Aunque hoy sea difícil, sé que el amor que nos une nos hará más fuertes. 🌸", emoji: "🌸" },
        { text: "Te abrazo en cada pensamiento, amor mío, siempre estaré allí para ti. 🫂", emoji: "🫂" },
        { text: "Aunque las nubes cubran el cielo, mi amor por ti será siempre la estrella brillante. ⭐", emoji: "⭐" },
        { text: "Hoy, mi amor, es solo un capítulo en nuestra hermosa historia. Mañana será mejor. 📖", emoji: "📖" },
        { text: "Cuando el mundo se ponga pesado, yo seré tu refugio eterno. 💙", emoji: "💙" },
        { text: "Lo que sientes es una huella de lo que estás aprendiendo, y yo estaré a tu lado en cada paso. 🌷", emoji: "🌷" },
        { text: "Que tu corazón se calme, mi amor, porque en mis brazos siempre encontrarás paz. 🌺", emoji: "🌺" },
        { text: "Nada podrá separarnos, amor mío, porque mi alma está contigo siempre. 🖤", emoji: "🖤" },
        { text: "Las estrellas brillan para ti, amor mío, y yo siempre estaré mirando hacia ellas con cariño. 🌠", emoji: "🌠" },
        { text: "Mi amor, cada vez que te caes, mi corazón se levanta para abrazarte. 🌸", emoji: "🌸" },
        { text: "Hoy todo puede parecer difícil, pero mi amor por ti lo hará todo más ligero. 💖", emoji: "💖" },
        { text: "Aunque las lágrimas caigan, mi amor por ti siempre las secará. 💧", emoji: "💧" },
        { text: "Si alguna vez dudas de tu fuerza, recuerda que soy tu razón para ser fuerte. 💪", emoji: "💪" },
        { text: "Te amo más de lo que las palabras pueden expresar, y siempre estaré a tu lado. 💕", emoji: "💕" },
        { text: "Todo lo que necesitas está dentro de ti, pero yo estaré aquí para recordártelo siempre. 🌟", emoji: "🌟" },
        { text: "Aunque hoy el viento sople fuerte, siempre seré tu abrigo. 🌬️", emoji: "🌬️" },
        { text: "Hoy te mando un beso al viento, mi amor, para que sientas mi cariño donde estés. 💋", emoji: "💋" },
        { text: "En cada momento difícil, recuerda que eres mi razón de sonreír. 🌹", emoji: "🌹" },
        { text: "Nada ni nadie podrá apagar el amor que tengo por ti, ni en los días más oscuros. 🌑", emoji: "🌑" },
        { text: "Los días tristes también pasan, mi amor, y al final siempre habrá sol y un abrazo. 🌞", emoji: "🌞" },
        { text: "Te envío mil abrazos con cada suspiro, porque en cada uno de ellos está mi amor por ti. 💖", emoji: "💖" },
        { text: "Nunca olvides que todo lo que sientes es válido, y siempre tendrás mi amor para sanarte. 🌱", emoji: "🌱" },
        { text: "Hoy te sostengo con mis pensamientos, y mañana estaré a tu lado con mis brazos. 🤗", emoji: "🤗" },
        { text: "En cada batalla, tu fuerza será la mía, y juntos conquistaremos todo. 🛡️", emoji: "🛡️" },
        { text: "Te amo más de lo que las palabras pueden decir, y hoy es solo un recordatorio de ello. 🌟", emoji: "🌟" },
        { text: "El sol puede esconderse, pero mi amor por ti siempre brillará. 🌅", emoji: "🌅" },
        { text: "Amor mío, cuando el camino sea incierto, caminaré contigo. 🌷", emoji: "🌷" }
    ],
    feliz: [
        { text: "¡Qué alegría verte sonreír, amor! 😍", emoji: "😍" },
        { text: "Tu felicidad ilumina mi mundo. ✨", emoji: "✨" },
        { text: "Sigue disfrutando cada momento, mi amor. 🌟", emoji: "🌟" },
        { text: "¡Qué alegría verte sonreír, amor! 😍", emoji: "😍" },
        { text: "Tu felicidad ilumina mi mundo. ✨", emoji: "✨" },
        { text: "Sigue disfrutando cada momento, mi amor. 🌟", emoji: "🌟" },
        { text: "Me haces tan feliz cada día. 😄", emoji: "😄" },
        { text: "Cada momento contigo es pura alegría. 💖", emoji: "💖" },
        { text: "No hay nada mejor que verte feliz. 🌞", emoji: "🌞" },
        { text: "Tu felicidad es mi mayor alegría. 🌈", emoji: "🌈" },
        { text: "Me haces sonreír incluso en los días difíciles. 😊", emoji: "😊" },
        { text: "Tu risa es la mejor melodía. 🎶", emoji: "🎶" },
        { text: "Eres mi razón para sonreír. 😁", emoji: "😁" },
        { text: "Hoy, más que nunca, me siento agradecido por ti. 💖", emoji: "💖" },
        { text: "Tu sonrisa ilumina mi día. 😄", emoji: "😄" },
        { text: "No puedo dejar de sonreír cuando estoy contigo. 😍", emoji: "😍" },
        { text: "Tu felicidad es contagiosa. ✨", emoji: "✨" },
        { text: "Que nunca te falte la razón para sonreír. 🌟", emoji: "🌟" },
        { text: "Cada momento contigo es una bendición. 💕", emoji: "💕" },
        { text: "Tu felicidad me hace feliz. 😁", emoji: "😁" },
        { text: "Verte feliz es lo mejor de mi día. 🌞", emoji: "🌞" },
        { text: "Eres una fuente de alegría para todos. 🎉", emoji: "🎉" },
        { text: "Tu felicidad llena mi corazón de paz. 💖", emoji: "💖" },
        { text: "Cada vez que sonríes, el mundo parece mejor. 😊", emoji: "😊" },
        { text: "Me encanta ver cómo disfrutas la vida. 🌸", emoji: "🌸" },
        { text: "Tu alegría es la mía. 😄", emoji: "😄" },
        { text: "Que nunca dejes de sonreír. 🌻", emoji: "🌻" },
        { text: "Tu felicidad es mi mayor regalo. 🎁", emoji: "🎁" },
        { text: "Me haces feliz solo con estar cerca. 💕", emoji: "💕" },
        { text: "Tu risa es mi canción favorita. 🎶", emoji: "🎶" },
        { text: "Eres un rayo de luz en mi vida. ✨", emoji: "✨" },
        { text: "Siempre que estás feliz, todo parece mejor. 💖", emoji: "💖" },
        { text: "Verte feliz me llena de paz. 💙", emoji: "💙" },
        { text: "Eres mi motivo de alegría diaria. 🌈", emoji: "🌈" },
        { text: "Qué bueno verte tan feliz, mi amor. 😘", emoji: "😘" },
        { text: "Tu alegría ilumina mi mundo. 🌞", emoji: "🌞" },
        { text: "¡Qué felicidad verte así de contento! 😄", emoji: "😄" },
        //romantico
        { text: "Tu sonrisa es mi razón para soñar cada día. 💖", emoji: "💖" },
        { text: "Eres mi sol en los días nublados, mi felicidad constante. 🌞", emoji: "🌞" },
        { text: "Ver tu risa es mi mayor bendición. 🎶", emoji: "🎶" },
        { text: "Cada vez que te veo sonreír, siento que el mundo es perfecto. 💖", emoji: "💖" },
        { text: "Tu alegría se convierte en la luz que ilumina mi camino. ✨", emoji: "✨" },
        { text: "Me haces tan feliz con solo ser tú. 🌸", emoji: "🌸" },
        { text: "Tu felicidad es el eco de mi corazón. ❤️", emoji: "❤️" },
        { text: "Cada día contigo es un regalo lleno de risas y amor. 🎁", emoji: "🎁" },
        { text: "Verte feliz es mi mayor deseo cumplido. 🌟", emoji: "🌟" },
        { text: "Tu sonrisa es mi refugio en este mundo. 😍", emoji: "😍" },
        { text: "Cuando te veo sonreír, mi corazón late más fuerte. 💓", emoji: "💓" },
        { text: "Eres mi inspiración para sonreír, siempre. 🌻", emoji: "🌻" },
        { text: "Tu alegría me envuelve como un abrazo cálido. 💞", emoji: "💞" },
        { text: "Cada vez que veo tu sonrisa, todo en mi mundo cobra sentido. 💖", emoji: "💖" },
        { text: "Tu felicidad es el mejor regalo que me puedes dar. 🎁", emoji: "🎁" },
        { text: "Mi día se ilumina al verte sonreír. 🌞", emoji: "🌞" },
        { text: "No hay nada más bonito que verte tan feliz, mi amor. 💕", emoji: "💕" },
        { text: "Tu risa es la melodía que mi corazón quiere escuchar siempre. 🎶", emoji: "🎶" },
        { text: "Eres el sol que hace brillar cada uno de mis días. 🌞", emoji: "🌞" },
        { text: "Cuando te veo sonreír, el tiempo se detiene para mí. 💖", emoji: "💖" },
        { text: "Cada vez que te ríes, el mundo parece un lugar más hermoso. 🌍", emoji: "🌍" },
        { text: "Eres la chispa de alegría que enciende mi corazón. 🔥", emoji: "🔥" },
        { text: "Tu sonrisa es mi paz y mi felicidad. 😄", emoji: "😄" },
        { text: "Gracias por llenar mi vida de momentos tan felices. 🌈", emoji: "🌈" },
        { text: "Tu alegría es mi motor para seguir adelante, siempre. 🚀", emoji: "🚀" },
        { text: "Cada día me enamoro más de ti, especialmente cuando te veo sonreír. 💖", emoji: "💖" },
        { text: "Tu felicidad es mi mayor tesoro. 💎", emoji: "💎" },
        { text: "Al verte feliz, todo mi ser se llena de paz. 💙", emoji: "💙" },
        { text: "Lo más hermoso de mi día es verte reír. 😍", emoji: "😍" },
        { text: "Tu risa es como un canto de esperanza para mi corazón. 🎶", emoji: "🎶" },
        { text: "El mejor momento de mi día es cuando compartimos risas juntos. 💖", emoji: "💖" },
        { text: "Nunca dejes de sonreír, porque tu sonrisa es la que hace brillar mi mundo. ✨", emoji: "✨" }
    ],
    ansiosa: [
        { text: "Respira profundo, todo estará bien. 🌸", emoji: "🌸" },
        { text: "Estoy contigo, siempre a tu lado. 🫂", emoji: "🫂" },
        { text: "Eres valiente y superarás cualquier desafío. 💖", emoji: "💖" },
        { text: "Respira profundo, todo estará bien. 🌸", emoji: "🌸" },
        { text: "Estoy contigo, siempre a tu lado. 🫂", emoji: "🫂" },
        { text: "Eres valiente y superarás cualquier desafío. 💖", emoji: "💖" },
        { text: "Todo pasará, solo respira. 🌱", emoji: "🌱" },
        { text: "Relájate, todo va a estar bien. 💖", emoji: "💖" },
        { text: "Eres más fuerte de lo que piensas. 🌟", emoji: "🌟" },
        { text: "Todo se resolverá a su tiempo. ⏳", emoji: "⏳" },
        { text: "No estás solo/a, estoy aquí para ti. 🫂", emoji: "🫂" },
        { text: "Todo lo que sientes es temporal. 🌈", emoji: "🌈" },
        { text: "Respira, y piensa que todo tiene solución. 💙", emoji: "💙" },
        { text: "El miedo es solo una sensación, tú eres más fuerte. 💪", emoji: "💪" },
        { text: "Poco a poco todo se irá calmando. 🌷", emoji: "🌷" },
        { text: "Estarás bien, solo respira y relájate. 🌸", emoji: "🌸" },
        { text: "Es normal sentirse ansioso/a, todo pasará. 🌿", emoji: "🌿" },
        { text: "Confía, todo se resolverá pronto. 🌟", emoji: "🌟" },
        { text: "Todo se solucionará con calma. 🕊️", emoji: "🕊️" },
        { text: "Recuerda que esto también pasará. 🌸", emoji: "🌸" },
        { text: "Sigue respirando profundamente, todo estará bien. 🌞", emoji: "🌞" },
        { text: "Estás haciendo lo mejor que puedes, todo se solucionará. 💖", emoji: "💖" },
        { text: "No dejes que la ansiedad te controle, todo se irá calmando. 🌿", emoji: "🌿" },
        { text: "La calma vendrá pronto, solo sigue respirando. 🌸", emoji: "🌸" },
        { text: "No estás solo/a en esto. Siempre estaré aquí. 🤗", emoji: "🤗" },
        { text: "La ansiedad es solo temporal. Respira y sigue adelante. 🌿", emoji: "🌿" },
        { text: "Confía en ti, todo se resolverá. 🌈", emoji: "🌈" },
        { text: "Sé que lo superarás, eres más fuerte de lo que crees. 💪", emoji: "💪" },
        { text: "Todo lo que sientes es válido, pero también pasará. 💙", emoji: "💙" },
        { text: "Lo peor ya pasó, ahora solo queda respirar y relajarte. 🌿", emoji: "🌿" },
        { text: "Estoy aquí para ti, nunca olvides eso. 🫂", emoji: "🫂" },
        { text: "Recuerda que todo se resolverá. 🌟", emoji: "🌟" },
        { text: "Todo lo que sientes es solo un momento, todo se calmará. 💙", emoji: "💙" },
        { text: "Relájate, todo estará bien. 🌞", emoji: "🌞" },
        { text: "No te preocupes, esto también pasará. 🌸", emoji: "🌸" },
        { text: "La paz llegará cuando menos lo esperes. 🕊️", emoji: "🕊️" },
        { text: "Sigue respirando, todo se solucionará a su tiempo. 💖", emoji: "💖" },
        { text: "Te abrazo desde aquí, todo mejorará. 🫂", emoji: "🫂" },
        { text: "Confía en que todo mejorará, pronto estarás en paz. 🌿", emoji: "🌿" },
        { text: "No hay tormenta que dure para siempre, la calma está cerca. 🌸", emoji: "🌸" },
        { text: "Todo lo que sientes es válido, pero también es solo un momento. 🌱", emoji: "🌱" },
        { text: "Te abrazo en pensamiento, todo estará bien. 💖", emoji: "💖" },
        { text: "El tiempo sanará todo, solo sigue respirando. 🕊️", emoji: "🕊️" },
        { text: "Recuerda que siempre tienes un refugio en mí. 🫂", emoji: "🫂" },
        { text: "Cada paso que das te acerca más a la calma. 🌷", emoji: "🌷" },
        { text: "Todo lo que ahora te preocupa se resolverá con paciencia. ⏳", emoji: "⏳" },
        { text: "Tienes dentro de ti la fuerza para superar todo. 💪", emoji: "💪" },
        { text: "Eres más valiente de lo que crees, confío en ti. 💖", emoji: "💖" },
        { text: "Este momento también pasará, solo respira profundo. 🌸", emoji: "🌸" },
        { text: "En los momentos difíciles, recuerda que siempre te apoyo. 🫂", emoji: "🫂" },
        { text: "La serenidad llegará cuando menos lo esperes. 🌞", emoji: "🌞" },
        { text: "Cada día es una oportunidad para dejar ir el estrés. 💙", emoji: "💙" },
        { text: "Sé que todo se resolverá a su tiempo. 🌟", emoji: "🌟" },
        { text: "No te preocupes, todo lo que sientes es parte del proceso. 🌱", emoji: "🌱" },
        { text: "Todo se calmará, solo respira y sigue adelante. 🌸", emoji: "🌸" },
        { text: "Tu fuerza interior te llevará hacia la calma. 💪", emoji: "💪" },
        { text: "Este momento de ansiedad pasará, y todo mejorará. 🌿", emoji: "🌿" },
        { text: "Tu paz está a solo un respiro de distancia. 💖", emoji: "💖" },
        { text: "Te mando un abrazo lleno de calma y fuerza. 🫂", emoji: "🫂" },
        { text: "No estás solo/a en esto, siempre estaré aquí para ti. 💙", emoji: "💙" },
        { text: "Todo se resolverá, solo sigue respirando. 🌸", emoji: "🌸" },
        { text: "Recuerda que cada respiro te acerca más a la paz. 🌿", emoji: "🌿" },
        { text: "A veces, solo hay que dejar ir y confiar en el proceso. 🌱", emoji: "🌱" },
        { text: "Todo lo que sientes hoy pasará, la calma llegará. 💖", emoji: "💖" },
        { text: "Sigue respirando profundamente, todo mejorará. 🌞", emoji: "🌞" },
        { text: "La paz está en camino, solo mantén la calma. 🌷", emoji: "🌷" },
        { text: "Te acompaño en este momento, todo estará bien. 🫂", emoji: "🫂" },
        { text: "La serenidad es tuya, solo respira y confía. 💖", emoji: "💖" },
        { text: "La calma vendrá con cada respiro, estás en el camino correcto. 💙", emoji: "💙" }
    ],
    enojada:[
        { text: "Sé que estás molesta, pero recuerda que siempre estoy aquí para ti. ❤️", emoji: "❤️" },
        { text: "Te entiendo, y aunque ahora esté todo difícil, te amo más que nunca. 💖", emoji: "💖" },
        { text: "Aunque estés pasando por un mal momento, mi amor por ti sigue intacto. 💞", emoji: "💞" },
        { text: "Lo que más quiero es verte feliz, y haré todo lo posible para que eso pase. 🌸", emoji: "🌸" },
        { text: "Te amo y sé que todo esto pasará, solo tenemos que ser pacientes. 🌿", emoji: "🌿" },
        { text: "Siempre te apoyaré, incluso cuando el mundo se sienta en tu contra. 💪", emoji: "💪" },
        { text: "Este enojo pasará, pero mi amor por ti es para siempre. 💖", emoji: "💖" },
        { text: "Sé que ahora no es fácil, pero juntos superamos cualquier cosa. 🫂", emoji: "🫂" },
        { text: "Aunque el enojo sea grande, mi cariño por ti lo es mucho más. ❤️", emoji: "❤️" },
        { text: "Mi amor por ti es más fuerte que cualquier enojo o mal día. 💕", emoji: "💕" },
        { text: "Pase lo que pase, siempre estaré a tu lado, dispuesto a escucharte. 🫶", emoji: "🫶" },
        { text: "Entiendo lo que sientes, solo recuerda que siempre tienes mi apoyo. 🤗", emoji: "🤗" },
        { text: "Sé que las cosas no siempre son fáciles, pero juntos podemos con todo. 💫", emoji: "💫" },
        { text: "Aunque ahora esté todo complicado, mi amor por ti es lo más firme. 💖", emoji: "💖" },
        { text: "No importa lo que pase, te amo profundamente y eso no cambiará. 💘", emoji: "💘" },
        { text: "Tu felicidad es lo que más quiero, así que cuídate mucho. 🌸", emoji: "🌸" },
        { text: "A veces la vida nos pone a prueba, pero juntos podemos con todo. 💪", emoji: "💪" },
        { text: "No importa cuánto nos frustremos, siempre encontraremos la manera de ser felices juntos. 💕", emoji: "💕" },
        { text: "Aunque ahora estés molesta, sé que podemos superar cualquier cosa. 🫶", emoji: "🫶" },
        { text: "Te entiendo, mi amor. Cuando estés lista, aquí estaré para ti. 💖", emoji: "💖" },
        { text: "No importa lo que estés sintiendo, siempre contarás con mi amor. 💕", emoji: "💕" },
        { text: "Te abrazo en mi corazón mientras superas lo que sientes ahora. 🤗", emoji: "🤗" },
        { text: "Sé que las palabras no arreglan todo, pero mi amor siempre te acompañará. 💘", emoji: "💘" },
        { text: "El enojo se irá, pero mi amor por ti siempre será constante. 💖", emoji: "💖" },
        { text: "Mi mayor deseo es verte sonreír, y haré lo que esté en mis manos para lograrlo. 🌞", emoji: "🌞" },
        { text: "Lo que más quiero es que te sientas mejor, y lo lograré a tu lado. 💖", emoji: "💖" },
        { text: "Sé que esto pasará, y cuando lo haga, estaré aquí para abrazarte. 🫂", emoji: "🫂" },
        { text: "Tómate tu tiempo para calmarte, yo estaré aquí esperando con paciencia. 💖", emoji: "💖" },
        { text: "Entiendo que a veces las cosas no son fáciles, pero juntos siempre lo conseguimos. 💪", emoji: "💪" },
        { text: "Eres tan valiente, y sé que todo lo que sientes hoy pronto será solo un recuerdo. 💫", emoji: "💫" },
        { text: "Te quiero con todo mi corazón, y estaré aquí mientras superas todo esto. ❤️", emoji: "❤️" },
        { text: "No importa lo que sientas ahora, siempre encontraré una forma de hacerte sonreír. 😊", emoji: "😊" },
        { text: "Lo que más deseo es verte en paz, y haré lo posible por ayudarte a encontrarla. 🕊️", emoji: "🕊️" },
        { text: "A veces nos sentimos abrumados, pero eso no cambia cuánto te amo. 💖", emoji: "💖" },
        { text: "Siempre estaré aquí para escucharte, apoyarte y hacerte sentir mejor. 🫶", emoji: "🫶" },
        { text: "Nada ni nadie puede cambiar lo que siento por ti. Siempre estaré aquí para ti. 💖", emoji: "💖" },
        { text: "Lo que más quiero es verte bien, y lo lograremos juntos. 💕", emoji: "💕" },
        { text: "A veces las cosas se complican, pero mi amor por ti es lo más constante. 💖", emoji: "💖" },
        { text: "Entiendo que estés pasando por un momento difícil, pero quiero que sepas que te amo profundamente. 💖", emoji: "💖" },
        { text: "Sé que las palabras no pueden solucionar todo, pero mi amor siempre será tu refugio. 🫂", emoji: "🫂" },
        { text: "Te amo, y eso es lo que más importa en este momento. ❤️", emoji: "❤️" },
        { text: "Mi mayor deseo es verte en paz, y haré lo que sea para que eso pase. 🌿", emoji: "🌿" },
        { text: "Aunque las cosas no sean fáciles, lo que más importa es que siempre estaré a tu lado. 🫶", emoji: "🫶" },
        { text: "Sé que lo que sientes es real, y estoy aquí para ayudarte a superarlo. 💖", emoji: "💖" },
        { text: "A veces la vida nos pone obstáculos, pero juntos podemos superarlos. 💪", emoji: "💪" },
        { text: "Te amo, y eso es lo que me da fuerza para acompañarte en todo. 💖", emoji: "💖" },
        { text: "Lo importante es que siempre nos tengamos el uno al otro. 💕", emoji: "💕" }

    ]
};

// Función para generar un mensaje aleatorio con animación
function generateMessage() {
    const selectedEmotion = emotionSelect.value;

    if (!selectedEmotion) {
        alert('Por favor, selecciona una emoción.');
        return;
    }

    // Seleccionar un mensaje aleatorio
    const messageList = messages[selectedEmotion];
    const randomIndex = Math.floor(Math.random() * messageList.length);
    const randomMessage = messageList[randomIndex];

    // Mostrar el mensaje en el área correspondiente
    messageOutput.textContent = randomMessage.text;

  
}
function mensDia(){
    let mensaje = document.getElementById('mensajeDia').value;

    // Seleccionar un mensaje aleatorio
    const message = messages[mensaje];
    const Index = Math.floor(Math.random() * message.length);
    const random = message[Index];

    // Mostrar el mensaje en el área correspondiente
    messageOutput.textContent = random.text;

  

}

// Evento para generar mensaje
generateMessageBtn.addEventListener('click', generateMessage);



//mostrar el poema
// Definir el poema
const poema = `En el rincón del ayer,
donde el tiempo quiso arder,
viven tus ojos serenos,
y tus suspiros eternos.

Eres un eco en mi mente,
un latido persistente.
Aunque el tiempo nos desate,
en mi alma siempre late.`;

// Obtener el elemento donde se insertará el poema
const poemaElement = document.getElementById('poema');

// Insertar el poema en el contenedor
poemaElement.innerHTML = poema;
