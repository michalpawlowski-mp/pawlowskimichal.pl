import * as img from "../assets/imports";
import { ProjectsDataProps } from "../types/ProjectsProps";

export const projectsData: ProjectsDataProps[] = [
  //e-kantor
  {
    id: "e-kantor",
    title: "e-Kantor",
    features: [
      "Aktualne kursy walut pobierane z API NBP",
      "Przelicznik walut w czasie rzeczywistym",
      "Wybór waluty bazowej i docelowej",
    ],
    description: [
      `e-Kantor to aplikacja do sprawdzania aktualnych kursów walut oraz
      przeliczania kwot między walutami, korzystająca z oficjalnego API
      Narodowego Banku Polskiego (NBP). Użytkownik może wybrać walutę bazową
      i docelową, a przelicznik automatycznie aktualizuje wynik.`,
      `Projekt został zbudowany w oparciu o Next.js 16 i React 19 z TypeScript,
      a stylowanie oparte jest o czysty CSS3 (bez frameworków CSS). W trakcie
      rozwoju aplikacja przeszła kilka iteracji refaktoryzacji hooków oraz
      poprawek semantyki HTML.`,
    ],
    miniDescription: `Aplikacja do sprawdzania kursów walut i przeliczania kwot w czasie
    rzeczywistym, oparta o oficjalne dane z API NBP.`,
    images: [img.ekantor],
    technologies: [
      { name: "React", src: img.react },
      { name: "TypeScript", src: img.ts },
      { name: "CSS3", src: img.css },
    ],
    devTools: [
      { name: "next.js", src: img.next },
      { name: "vercel", src: img.vercel },
      { name: "npm", src: img.npm },
      { name: "node.js", src: img.node },
      { name: "API NBP", src: img.api },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/e-Kantor",
      website: "https://e-kantor.vercel.app",
    },
    example: true,
  },
  //food-explorer
  {
    id: "food-explorer",
    title: "FoodExplorer",
    features: [
      "Przeglądanie przepisów po kategoriach",
      "Wyszukiwanie przepisów po nazwie",
      "Panel szczegółów przepisu (składniki i instrukcje) w widoku split-view",
      "Ulubione przepisy zapisywane w localStorage",
      "Tryb ciemny z wykrywaniem preferencji systemowych",
      "Obsługa pustego stanu (brak wyników)",
    ],
    description: [
      `FoodExplorer to aplikacja do przeglądania i wyszukiwania przepisów
      kulinarnych, korzystająca z publicznego API TheMealDB. Użytkownik może
      przeglądać przepisy po kategoriach lub wyszukać konkretne danie, a
      szczegóły przepisu wyświetlają się w dedykowanym panelu obok listy.`,
      `Projekt zbudowany w Vite + React + TypeScript, ze stylowaniem opartym
      o Tailwind CSS w wersji 4 — najnowszy dostępny stack narzędziowy.
      Zamiast React Routera, nawigacja między widokami (lista / szczegóły)
      oparta jest o warunkowe renderowanie stanu.`,
      `Aplikacja pozwala zapisywać ulubione przepisy w localStorage, wspiera
      tryb ciemny z automatycznym wykrywaniem preferencji systemowych oraz
      obsługuje pusty stan, gdy wyszukiwanie nie zwróci żadnych wyników.`,
    ],
    miniDescription: `Aplikacja do przeglądania i wyszukiwania przepisów kulinarnych, z
    podglądem szczegółów dania w panelu obok listy.`,
    images: [
      img.foodExMain,
      img.foodExFood,
      img.foodExEmpty,
      img.foodExFoodWhite,
      img.foodExMainWhite,
    ],
    technologies: [
      { name: "React", src: img.react },
      { name: "TypeScript", src: img.ts },
      { name: "Tailwind", src: img.tailwind },
    ],
    devTools: [
      { name: "Vite", src: img.vite },
      { name: "vercel", src: img.vercel },
      { name: "npm", src: img.npm },
      { name: "API", src: img.api },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/food-explorer",
      website: "https://food-explorer-mpdev.vercel.app",
    },
    example: true,
  },
  //ShoesShop
  {
    id: "ShoesShop",
    title: "ShoesShop",
    features: [
      "Lista produktów (Nike, Adidas, New Balance) na stronie głównej",
      "Filtrowanie produktów według marki, płci, ceny oraz nazwy",
      "Dynamiczny przycisk resetowania filtrów widoczny przy aktywnych filtrach",
      "Informacja o braku wyników przy niepasujących filtrach",
      "Koszyk zakupowy z możliwością dodawania i usuwania produktów",
      "Komunikat o pustym koszyku, gdy brak produktów",
      "Automatyczne sumowanie wartości koszyka",
      "Zapisywanie koszyka w LocalStorage",
      "Strona szczegółów produktu z galerią zdjęć",
      "Wybór rozmiaru – brak możliwości dodania produktu bez wybranego rozmiaru",
      "Responsywny interfejs dopasowany do desktopu i urządzeń mobilnych",
    ],
    description: [
      `ShoesShop to aplikacja webowa typu e-commerce umożliwiająca przeglądanie i
      zakup obuwia sportowego marek Nike, Adidas oraz New Balance.
      przeglądarki.`,
      `Na stronie głównej użytkownik ma dostęp do listy produktów z rozbudowanym
      systemem filtrowania według marki, płci, ceny oraz nazwy. Aktywne filtry są
      sygnalizowane, a ich reset możliwy jest jednym kliknięciem. W przypadku
      braku produktów spełniających kryteria wyświetlany jest odpowiedni
      komunikat.`,
      `Aplikacja posiada koszyk zakupowy z możliwością dodawania i usuwania
      produktów, automatycznym sumowaniem ceny oraz obsługą pustego stanu koszyka.
      Zawartość koszyka zapisywana jest w LocalStorage, dzięki czemu pozostaje
      zachowana po odświeżeniu strony.`,
      `Każdy produkt posiada dedykowaną stronę szczegółów z galerią zdjęć oraz
      możliwością wyboru rozmiaru. Dodanie produktu do koszyka jest możliwe
      dopiero po wybraniu rozmiaru, co zapobiega błędom użytkownika. Projekt
      został wykonany z naciskiem na czytelny UX i responsywność interfejsu.`,
    ],
    miniDescription: `Sklep internetowy z obuwiem sportowym (Nike, Adidas, New Balance) z
                      filtrowaniem produktów, koszykiem zakupowym i zapisem stanu koszyka w
                      LocalStorage.`,
    images: [
      img.shoesShop,
      img.shooesShopNoResult,
      img.shoesShopCartFull,
      img.shoesShopProduct,
      img.shoesShopCartEmpty,
    ],
    technologies: [
      { name: "React", src: img.react },
      { name: "TypeScript", src: img.ts },
      { name: "Styled Component", src: img.styled },
    ],
    devTools: [
      { name: "next.js", src: img.next },
      { name: "Vite", src: img.vite },
      { name: "npm", src: img.npm },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/ShoesShop",
      website: "https://michalpawlowski-mp.github.io/ShoesShop/",
    },
    example: true,
  },
  //ford-soltysiak
  {
    id: "ford-soltysiak",
    title: "FordSołtysiak",
    features: [
      "Hero z animowanym tłem i opiniami klientów",
      "Sekcja usług — 8 kart z ofertą serwisu",
      "Sekcja atutów firmy (dlaczego warto)",
      "Dane kontaktowe, godziny otwarcia oraz mapa Google",
      "Płynne animacje pojawiania się sekcji przy scrollowaniu (własny hook useFadeIn)",
      "Pełna responsywność",
    ],
    description: [
      `Strona wizytówka zrealizowana na zlecenie realnego klienta biznesowego —
      serwisu samochodowego FORD Sołtysiak z Bydgoszczy, specjalizującego się
      w diagnostyce i naprawach samochodów marki Ford. Projekt komercyjny,
      wykonany dla działającej firmy, a nie jako ćwiczenie własne.`,
      `Aplikacja zbudowana w React + Vite, z ręcznie pisanym, podzielonym na
      pliki CSS (bez frameworków CSS) oraz własnym hookiem useFadeIn do
      animacji pojawiania się sekcji przy scrollowaniu, zamiast gotowej
      biblioteki animacji.`,
    ],
    miniDescription: `Strona wizytówka dla lokalnego serwisu samochodowego, zrealizowana na
    zlecenie realnego klienta.`,
    images: [img.fordMain, img.fordAdvantages, img.fordServices, img.fordContactLocation],
    technologies: [
      { name: "React", src: img.react },
      { name: "JavaScript", src: img.js },
      { name: "CSS3", src: img.css },
    ],
    devTools: [
      { name: "Vite", src: img.vite },
      { name: "npm", src: img.npm },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/FordSoltysiak",
      website: "https://fordsoltysiak.vercel.app",
    },
  },
  //Clonetube
  {
    id: "clonetube",
    title: "CloneTube",
    features: [
      "Wyświetlanie filmów z API YouTube",
      "Wyszukiwanie treści",
      "Filtrowanie kategorii",
      "Modalny odtwarzacz",
    ],
    description: [
      `CloneTube to aplikacja stworzona jako klon YouTube, umożliwiająca
      przeglądanie filmów z różnych kategorii oraz wyszukiwanie treści za pomocą
      API YouTube v3. Użytkownik może łatwo otwierać wybrane wideo w odtwarzaczu
      oraz przełączać się pomiędzy interesującymi go kategoriami tematycznymi.`,
      `Projekt został zaprojektowany z myślą o prostocie i intuicyjności. Dzięki
      dynamicznemu filtrowaniu i wyszukiwaniu, użytkownik szybko znajdzie
      interesujące materiały. Całość oparta jest o React i Next.js, a interfejs
      został dostosowany do urządzeń mobilnych i desktopowych.`,
      `CloneTube łączy w sobie podstawowe funkcje serwisu YouTube, zapewniając
      przejrzysty układ, responsywność i prosty system nawigacji. Projekt
      świetnie pokazuje wykorzystanie zewnętrznego API i obsługę dynamicznych
      komponentów w nowoczesnej aplikacji webowej.`,
    ],
    miniDescription: `Moja aplikacja CloneTube wykorzystuje API YouTube v3 do wyświetlania filmów wideo w
    wybranej kategorii lub na podstawie wyszukiwanego hasła. Umożliwia użytkownikowi
    przeglądanie listy filmów, otwieranie ich w odtwarzaczu oraz szybkie przełączanie się między różnymi kategoriami tematycznymi`,
    images: [img.clonetube, img.clonetubeVW],
    technologies: [
      { name: "React", src: img.react },
      { name: "TypeScript", src: img.ts },
      { name: "Tailwind", src: img.tailwind },
    ],
    devTools: [
      { name: "next.js", src: img.next },
      { name: "vercel", src: img.vercel },
      { name: "npm", src: img.npm },
      { name: "node.js", src: img.node },
      { name: "API YT v3", src: img.yt },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/CloneTube",
      website: "https://clone-tube-ecru.vercel.app/",
    },
  },
  //WeatherApp
  {
    id: "WeatherApp",
    title: "Aplikacja Pogodowa",
    features: [
      "Wyszukiwanie pogody na podstawie nazwy miasta",
      "Pobieranie danych pogodowych z API OpenWeatherMap",
      "Wyświetlanie temperatury, opisu pogody oraz wilgotności",
      "Obsługa błędów i informowanie użytkownika o problemach",
      "Dynamiczna aktualizacja danych bez przeładowania strony",
      "Obsługa klawisza Enter do wyszukiwania",
      "Responsywny design",
    ],
    description: [
      `Użytkownik wpisuje nazwę miasta w pole tekstowe i naciska przycisk "Pokaż
      pogodę" lub klawisz Enter. Aplikacja wysyła zapytanie do API OpenWeatherMap,
      pobiera aktualne dane pogodowe i wyświetla je na ekranie w przejrzystej
      formie. Jeśli miasto nie istnieje lub wystąpił problem z połączeniem,
      użytkownik otrzymuje odpowiedni komunikat.`,
      `Strona posiada nowoczesny i przyjazny interfejs, a dzięki gradientowemu tłu i
      animacjom zmiana danych odbywa się płynnie.`,
    ],
    miniDescription: `Moja aplikacja pogodowa wykorzystuje API OpenWeather do wyświetlania bieżącej
    pogody w wybranym mieście. Umożliwia użytkownikowi sprawdzenie aktualnej
    temperatury, wilgotności oraz ogólnych warunków pogodowych.`,
    images: [img.wApp, img.wAppTemp],
    technologies: [
      { name: "HTML", src: img.html },
      { name: "Bootstrap", src: img.bootstrap },
      { name: "sass", src: img.sass },
      { name: "JavaScript", src: img.js },
      { name: "API OpenWeather", src: img.api },
    ],
    devTools: [
      { name: "node.js", src: img.node },
      { name: "Vercel", src: img.vercel },
      { name: "npm", src: img.npm },
      { name: "next.js", src: img.next },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/WeatherApp",
      website: "https://weather-app-red-delta-87.vercel.app/",
    },
  },
  //keyboard-test
  {
    id: "keyboard-test",
    title: "Keyboard & Mouse Tester",
    features: [
      "Pełnowymiarowa wizualna klawiatura (104 klawisze, układ ANSI z numpadem)",
      "Podświetlanie klawisza w momencie fizycznego wciśnięcia (keydown/keyup)",
      "Test przycisków myszy: lewy, prawy, scroll",
      "Rozpoznawanie klawiszy po event.code, niezależnie od układu klawiatury",
      "Wskaźniki Num Lock / Caps Lock / Scroll Lock na żywo",
      "Blokada domyślnych akcji przeglądarki (F3, F5, Tab) w trakcie testu",
      "Personalizacja koloru podświetlenia klawiszy",
    ],
    description: [
      `Wizualny tester klawiatury i myszy napisany w czystym JavaScript, bez
      żadnego frameworka. Kliknięcie fizycznego klawisza lub przycisku myszy
      podświetla odpowiadający mu element na ekranie w czasie rzeczywistym,
      co pozwala łatwo sprawdzić, czy wszystkie klawisze działają poprawnie.`,
      `Do rozpoznawania klawiszy użyto event.code zamiast event.key, dzięki
      czemu klawiatura reaguje na fizyczne położenie klawisza, a nie na
      wpisany znak — niezależnie od układu klawiatury czy stanu Shift/CapsLock.`,
      `Projekt świadomie dokumentuje własne ograniczenia (np. klawisz Win czy
      boczne przyciski myszy, które są przechwytywane przez system operacyjny
      zanim JavaScript zdąży zareagować) zamiast je ukrywać.`,
    ],
    miniDescription: `Wizualny tester klawiatury i myszy — sprawdza w czasie rzeczywistym,
    czy wszystkie klawisze i przyciski działają poprawnie.`,
    images: [img.keyboardTest, img.keyboardTestKey, img.keyboardTestRgb],
    technologies: [
      { name: "JavaScript", src: img.js },
      { name: "HTML", src: img.html },
      { name: "CSS", src: img.css },
    ],
    devTools: [
      { name: "Vite", src: img.vite },
      { name: "Vercel", src: img.vercel },
      { name: "npm", src: img.npm },
    ],
    links: {
      github: "https://github.com/michalpawlowski-mp/keyboard-test",
      website: "https://keyboard-test-mpdev.vercel.app/",
    },
  },
];
