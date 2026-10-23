export type Lang = 'en' | 'pl'

export interface Dict {
  meta: { title: string; description: string }
  banner: string
  skip: string
  nav: { langLabel: string; join: string; links: { href: string; label: string }[] }
  hero: { title: string; tagline: string; lead: string; cta: string; pause: string; play: string }
  problem: { title: string; lines: string[] }
  offer: {
    title: string
    intro: string
    pillars: { name: string; text: string }[]
  }
  how: {
    title: string
    draft: string
    steps: { name: string; text: string }[]
  }
  fit: {
    title: string
    forTitle: string
    forItems: string[]
    notTitle: string
    notItems: string[]
  }
  next: { title: string; placeholder: string; note: string; cta: string }
  form: {
    title: string
    lead: string
    name: string
    email: string
    help: string
    options: { value: HelpChoice; label: string }[]
    submit: string
    sent: string
    emailInvalid: string
  }
  footer: { line: string; owner: string; note: string; media: string }
}

export type HelpChoice = 'health' | 'growth' | 'financial' | 'unsure'

export const en: Dict = {
  meta: {
    title: 'Within: Keeping founders in the game',
    description:
      'Within is a peer community for founders: health, personal growth and financial wellbeing. Concept preview.',
  },
  banner: 'Concept preview prepared for Within by Zariyan. Draft copy, not a live site.',
  skip: 'Skip to main content',
  nav: {
    langLabel: 'Language',
    join: 'Join the waitlist',
    links: [
      { href: '#what', label: 'What Within is' },
      { href: '#how', label: 'How it works' },
      { href: '#fit', label: 'Who it is for' },
      { href: '#waitlist', label: 'Waitlist' },
    ],
  },
  hero: {
    title: 'Keeping founders *in the game.*',
    tagline: 'Less noise. More direction.',
    lead: 'Within is a peer community for founders. Health, personal growth and financial wellbeing, with people who know what your week looks like.',
    cta: 'Join the waitlist',
    pause: 'Pause background videos',
    play: 'Play background videos',
  },
  problem: {
    title: 'You *already* know this.',
    lines: [
      'The pressure does not fully switch off, not even on a quiet evening.',
      'Training, sleep and checkups slide first. The business always has a reason to go before them.',
      'Few people around you run a company, so you carry most of it alone.',
    ],
  },
  offer: {
    title: 'What *Within* is',
    intro: 'A small, steady group of founders. Three things, taken seriously.',
    pillars: [
      {
        name: 'Health',
        text: 'Training sessions you can actually fit in, run alongside people who also have a full calendar.',
      },
      {
        name: 'Growth',
        text: 'Honest conversation with peers about the decision you keep putting off.',
      },
      {
        name: 'Financial wellbeing',
        text: 'A calmer approach to money: open talk about cash, pay and risk, without pretending everything is under control.',
      },
    ],
  },
  how: {
    title: 'How a gathering *works*',
    draft: 'Draft format. It may change once Kuba confirms the details.',
    steps: [
      {
        name: 'Show up',
        text: 'Arrive as you are. A small group, a relaxed room, no pitching.',
      },
      {
        name: 'Train and talk',
        text: 'Move together first, then talk honestly about what is on your plate.',
      },
      {
        name: 'Leave with one clear next step',
        text: 'One thing to do this week, said out loud to people who will ask how it went.',
      },
    ],
  },
  fit: {
    title: 'Who it is for, and *who it is not*',
    forTitle: 'Within is for you if you',
    forItems: [
      'run a business, big or small, and carry it mostly on your own',
      'want peers and a steady rhythm, not another course',
      'are willing to be straight about health, money and doubt',
    ],
    notTitle: 'Within is not for you if you',
    notItems: [
      'are looking for clients, investors or a place to pitch',
      'want a guru, a hustle plan or a motivational speech',
      'need clinical or medical care. Within is not therapy or treatment',
    ],
  },
  next: {
    title: 'Next *gathering*',
    placeholder: 'Date and place to be announced',
    note: 'Nothing is fixed yet. Join the waitlist and you will be first to know once it is.',
    cta: 'Join the waitlist',
  },
  form: {
    title: 'Join the *waitlist*',
    lead: 'Two details and one question. That is all.',
    name: 'Your name',
    email: 'Email address',
    help: 'What would help you most right now?',
    options: [
      { value: 'health', label: 'Health' },
      { value: 'growth', label: 'Growth' },
      { value: 'financial', label: 'Financial wellbeing' },
      { value: 'unsure', label: 'Not sure yet' },
    ],
    submit: 'Join the waitlist',
    sent: 'This is a preview, so nothing was sent.',
    emailInvalid: 'Please enter a valid email address.',
  },
  footer: {
    line: 'Keeping founders in the game.',
    owner: 'Within is run by Kuba Domanus.',
    note: 'Concept preview. Draft copy, not a live site.',
    media: 'Video and stills are free stock footage used as placeholders. They do not show Within members or events.',
  },
}

export const pl: Dict = {
  meta: {
    title: 'Within: Pomagamy founderom wytrwać w grze',
    description:
      'Within to społeczność rówieśnicza dla founderów: zdrowie, rozwój osobisty i spokój finansowy. Podgląd koncepcji.',
  },
  banner:
    'Podgląd koncepcji przygotowany dla Within (autor: Zariyan). Wstępne teksty, to nie jest działająca strona.',
  skip: 'Przejdź do treści',
  nav: {
    langLabel: 'Język',
    join: 'Dołącz do listy',
    links: [
      { href: '#what', label: 'Czym jest Within' },
      { href: '#how', label: 'Jak to działa' },
      { href: '#fit', label: 'Dla kogo' },
      { href: '#waitlist', label: 'Lista' },
    ],
  },
  hero: {
    title: 'Pomagamy founderom *wytrwać w grze.*',
    tagline: 'Mniej szumu. Więcej kierunku.',
    lead: 'Within to społeczność rówieśnicza dla founderów. Zdrowie, rozwój osobisty i spokój finansowy, wśród ludzi, którzy wiedzą, jak wygląda Twój tydzień.',
    cta: 'Dołącz do listy oczekujących',
    pause: 'Zatrzymaj wideo w tle',
    play: 'Włącz wideo w tle',
  },
  problem: {
    title: '*Znasz* to.',
    lines: [
      'Presja nie znika całkiem, nawet w spokojny wieczór.',
      'Trening, sen i badania odpadają pierwsze. Firma zawsze ma ważniejszy powód.',
      'Mało kto wokół prowadzi firmę, więc większość nosisz w sobie.',
    ],
  },
  offer: {
    title: 'Czym jest *Within*',
    intro: 'Mała, stała grupa founderów. Trzy sprawy, potraktowane serio.',
    pillars: [
      {
        name: 'Zdrowie',
        text: 'Treningi, które da się zmieścić w kalendarzu, w grupie ludzi z równie pełnym grafikiem.',
      },
      {
        name: 'Rozwój',
        text: 'Szczera rozmowa z rówieśnikami o decyzji, którą odkładasz od tygodni.',
      },
      {
        name: 'Spokój finansowy',
        text: 'Spokojniejsze podejście do pieniędzy: otwarta rozmowa o gotówce, wypłatach i ryzyku, bez udawania, że wszystko jest pod kontrolą.',
      },
    ],
  },
  how: {
    title: 'Jak wygląda *spotkanie*',
    draft: 'Wstępny format. Może się zmienić, gdy Kuba potwierdzi szczegóły.',
    steps: [
      {
        name: 'Przychodzisz',
        text: 'Bez przygotowań i bez pitchowania. Mała grupa, swobodna atmosfera.',
      },
      {
        name: 'Trenujesz i rozmawiasz',
        text: 'Najpierw ruch, potem szczera rozmowa o tym, co leży Ci na głowie.',
      },
      {
        name: 'Wychodzisz z jednym jasnym krokiem',
        text: 'Jedna rzecz do zrobienia w tym tygodniu, powiedziana ludziom, którzy zapytają, jak poszło.',
      },
    ],
  },
  fit: {
    title: 'Dla kogo jest Within, a *dla kogo nie*',
    forTitle: 'Within jest dla Ciebie, jeśli',
    forItems: [
      'prowadzisz firmę, dużą lub małą, i dźwigasz ją głównie sam lub sama',
      'chcesz mieć rówieśników i stały rytm, a nie kolejny kurs',
      'jesteś gotowy lub gotowa mówić wprost o zdrowiu, pieniądzach i wątpliwościach',
    ],
    notTitle: 'Within nie jest dla Ciebie, jeśli',
    notItems: [
      'szukasz klientów, inwestorów albo miejsca na pitch',
      'oczekujesz guru, planu na hustle albo przemowy motywacyjnej',
      'potrzebujesz pomocy medycznej lub terapeutycznej. Within nie jest terapią ani leczeniem',
    ],
  },
  next: {
    title: 'Najbliższe *spotkanie*',
    placeholder: 'Termin i miejsce zostaną ogłoszone',
    note: 'Nic nie jest jeszcze ustalone. Zapisz się na listę, a dowiesz się pierwszy lub pierwsza.',
    cta: 'Dołącz do listy oczekujących',
  },
  form: {
    title: 'Dołącz do *listy oczekujących*',
    lead: 'Dwa dane i jedno pytanie. To wszystko.',
    name: 'Imię',
    email: 'Adres e-mail',
    help: 'Co pomogłoby Ci teraz najbardziej?',
    options: [
      { value: 'health', label: 'Zdrowie' },
      { value: 'growth', label: 'Rozwój' },
      { value: 'financial', label: 'Spokój finansowy' },
      { value: 'unsure', label: 'Jeszcze nie wiem' },
    ],
    submit: 'Dołącz do listy oczekujących',
    sent: 'To jest podgląd, więc nic nie zostało wysłane.',
    emailInvalid: 'Podaj poprawny adres e-mail.',
  },
  footer: {
    line: 'Pomagamy founderom wytrwać w grze.',
    owner: 'Within prowadzi Kuba Domanus.',
    note: 'Podgląd koncepcji. Wstępne teksty, to nie jest działająca strona.',
    media: 'Wideo i zdjęcia to darmowe materiały stockowe użyte jako zastępcze. Nie pokazują członków ani wydarzeń Within.',
  },
}

export const dictionaries: Record<Lang, Dict> = { en, pl }
