<script setup>
const lines = `🧔🏻 Анкӏла заман це.
It's time to sleep.
👦🏼‍ Атта, гьана килсана ду варццул аккуда.
Father, I'm tired yet to go to bed.
🧔🏻 Кьан сят це, гъурш чирка исле гьирццан де и.
It's late hour, you are waking up early tomorrow. 
👦🏼 Ду ус кагьана авиргьуд.
I can't fall asleep.
🧔🏻 Абал мярццре лигана чикигьеттел аргану?
And what if you start countnig sheep?
👦🏼 Сар дираде, дам буццул акку.
I did before, doesn't work for me.
🧔🏻 Цигон тяр биччеттел-ра кешки, усана игънил це.
Regarding of how you like it, you need to sleep.  
👦🏼 Цили дам хайри адиргьу угара циннал ус кагьанай?
Why can't I stay untill I fall asleep myself?
🧔🏻 Дул гьел ихтийар луччедел и гьелтте уганде сукке дярхя.
If I allow you that you'll stay the whole night.
👦🏼 Чигьурсул да кко килсана цаникӏолжи.
Please, I promise to go to bed soon.
🧔🏻 Акку, и гьана килсанде, дучче ягь дигьав.
No, you're going now, good night.
👦🏼 Етти-ра, чиркала чидиганда.
You too, see you romorrow.`.split('\n');

const phrases = [];
for (let i = 0; i < lines.length;i+=2) {
    phrases.push([lines[i], lines[i+1]]);
}
</script>

# Анкӏла заман

<p v-for="(p,i) in phrases" class="b" :class="i%2 ? 't-e' : ''">
    <span>
        {{p[0]}}
    </span>
    <br>
    <span class="s">
        <Say :url="`/audio/bedtime/${i+1}.ogg`">{{p[1]}}</Say>
    </span>
</p>

<!-- [Атта, #<гьана|how> килсана ду варццул аккуда.]{.main}
[Отец, я ещё не устал, чтобы лечь.]{/}
[Кьан сят це, гъурш чирка исле гьирццан де и.]{.main .t-e}
[Уже поздний час, завтра утром тебе рано вставать.]{.t-e}
{.gl} -->
