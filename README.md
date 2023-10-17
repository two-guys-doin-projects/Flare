# Strona tytułowa

**Projekt przedmiotu Wstęp do programowania w języku Python**

Grupa P5

Krystian Urban
Filip Walkowicz

# Wstęp

Tematem projektu jest system back-end serwisu pozwalającego na trening i hostowanie modeli uczenia maszynowego.

# Opis architektury serwisu

Strona back-endu podzielona jest na dwa mikroserwisy:

- ML - służący do zarządzania, trenowania i używania modeli,
- Data scraping - służący do pobierania i przetwarzania zbiorów danych.

![image](https://github.com/two-guys-doin-projects/Flare/assets/62908964/c92708ec-a523-41e3-b1a2-520e3c8e2e0f)


# Opis pojęć

## Architektura

### Mikroserwis

Odizolowana część aplikacji internetowej, z którą komunikacja odbywa się za pomocą udostępnionego przez nią interfejsu.

### Backend

Część aplikacji internetowej, której zadaniem jest obsługa zapytań wysłanych przez użytkownika, obsługę bazy danych etc.

### REST

TODO

## Technologie

### FastAPI

Biblioteka pozwalająca na łatwe tworzenie REST API w języku Python.

### PyTorch

Wersja biblioteki *torch* służącej do tworzenia modeli uczenia maszynowego zaimplementowana w języku Python.

### requests

Biblioteka służąca do wykonywania zapytań HTTP/HTTPS.

# Założenia

## Ogólne

Cały serwis powinien udostępniać użytkownikowi swoją funkcjonalność po autoryzacji przy pomocy osobnej usługi.

## ML

Serwis powinien pozwalać na tworzenie, zapisywanie, wczytywanie i trening modeli uczenia maszynowego o zdefiniowanej ogólnej strukturze:

- sieć neuronowa,
- konwolucyjna sieć neuronowa,
- modele bezpośrednio zaimplementowane w bibliotece *PyTorch*.

Trening powinien odbywać się przy pomocy zbioru danych pobranego z mikroserwisu Data Scraping.

## Data Scraping

Serwis powinien pozwalać na pobieranie zbiorów danych z serwisu Kaggle oraz prostą modyfikację ich poprzez wycięcie kolumn i zaznaczenie podziału kolumn na wejściowe/wyjściowe.

# Wykonanie

## ML

Mikroserwis został wykonany jako serwis REST API przy pomocy biblioteki FastAPI. Modele uczenia maszynowego obsługiwane przez serwis są reprezentowane przez klasę `manageableModel` rozszerzające klasę `torch.nn.Module`. Zawiera ona metody zapisu i wczytywania modeli zapisanych jako zbiór plików:

- konfiguracyjnego(w formacie JSON),
- stanu(w formacie obsługiwanym przez *torch*).
