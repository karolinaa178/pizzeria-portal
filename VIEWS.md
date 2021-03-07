# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  -listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  -guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 min
    -ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne kolumny
    - po kliknięciu rezerwacji lub eventu , przechodzimy na stronę szczegółową
- `/tables/booking/:id`
  - zawiera wszystkie informacjie dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian
- `/tables/booking/new`
  - analogicznie do powyższej , bez początkowych informacji
- `/tables/events/:id`
  - analogicznie do powyższej, dla eventów
- `/tables/events/new`
  - analogicznie do powyższej , dla eventów, bez początkowych informacji

# Widok kelnera

- `/waiter`
  - tabela
    - w wierszasz stoliki
    - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
    -w ostatniej kolumnie dostępne akcjie dla danego stolika
- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówenie (zamówione produkty z opcjami i ceną)
  - kwotę zamówienia
- `/waiter/order/:id`
  - jak powyzsza

# Widok kuchni

- `/kitchen`
  - wyświetla listę zamówień w kolejności ich złożenia
  - lista musi zawierać
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacjie dot. zamówionych dań
  - na liście musi być możliwość oznaczenia zamowieniajako zrealizowanego
