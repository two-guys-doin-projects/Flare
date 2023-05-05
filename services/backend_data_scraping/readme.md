# Backend - pobieranie danych

Mikroserwis odpowiedzialny za dostarczenie danych użytych do treningu modeli ML.

Użyte technologie:
 - Kaggle API 
 - Pandas

# Opis działania
Na początku użytkownik wpisuje interesujący go temat, następnie wysyłane jest zapytanie do kaggle
które zwraca listę zbiorów danych z podanego tematu.
![dataset](./images/dataset_list.png)
Następnie użytkownik wybierze interesujący go zbiór który 
zostanie pobrany i wyświetlony do podglądu. W tym momencie zostanie dana 
możliwość wyboru z których dokłądnie danych ma model kożystać.
![dataset](./images/dataset_view.png)
