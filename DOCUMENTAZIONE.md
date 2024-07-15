## Documentazione del Progetto ##

### Descrizione del Progetto
Questo progetto gestisce i record di studenti, insegnanti e le interazioni tra di loro, come i dettagli di ricevimento. Lo schema del database include tre modelli principali: **Student (Studente)**, **Teacher (Insegnante)** e **Receiving (Ricevimento)**.

### Modelli

#### 1. Modello Student (Studente)
Il modello **Student** rappresenta gli studenti nel database.

**Campi:**
- **id (auto-generato):** Identificativo unico per ogni studente.
- **firstname (STRINGA):** Nome dello studente.
- **lastname (STRINGA):** Cognome dello studente.
- **date_of_birth (STRINGA):** Data di nascita dello studente.
- **email (STRINGA):** Indirizzo email dello studente.
- **tel_number (STRINGA):** Numero di telefono dello studente.

**Associazioni:**
- **Receiving:** Uno studente può avere molti record di ricevimento. Questa associazione è definita tramite `studentId` nel modello **Receiving**.

#### 2. Modello Teacher (Insegnante)
Il modello **Teacher** rappresenta gli insegnanti nel database.

**Campi:**
- **id (auto-generato):** Identificativo unico per ogni insegnante.
- **fullname (STRINGA):** Nome completo dell'insegnante.
- **specialization (STRINGA):** Specializzazione dell'insegnante.
- **experience (STRINGA):** Esperienza dell'insegnante.
- **days_of_availability (STRINGA):** Giorni di disponibilità dell'insegnante.
- **method_of_receiving (STRINGA):** Metodo di ricevimento dell'insegnante.
- **receiving_availability (STRINGA):** Disponibilità per ricevere dell'insegnante.

**Associazioni:**
- **Receiving:** Un insegnante può avere molti record di ricevimento. Questa associazione è definita tramite `teacher_interested` nel modello **Receiving**.

#### 3. Modello Receiving (Ricevimento)
Il modello **Receiving** rappresenta i record di ricevimento tra studenti e insegnanti.

**Campi:**
- **id (auto-generato):** Identificativo unico per ogni record di ricevimento.
- **description (STRINGA):** Descrizione del ricevimento.
- **date_time_of_receiving (DATA):** Data e ora del ricevimento.
- **teacher_interested (INTERO):** Identificativo dell'insegnante interessato. Questo campo è una chiave esterna che si riferisce al campo `id` nel modello **Teacher**.
- **studentId (INTERO):** Identificativo dello studente. Questo campo è una chiave esterna che si riferisce al campo `id` nel modello **Student**.

**Associazioni:**
- **Student:** Ogni record di ricevimento appartiene a uno studente specifico, definito tramite `studentId`.
- **Teacher:** Ogni record di ricevimento appartiene a un insegnante specifico, definito tramite `teacher_interested`.

### Esempio di Utilizzo

#### Creazione di un nuovo Studente
Per creare un nuovo studente, è necessario fornire:
- Nome
- Cognome
- Data di nascita
- Email
- Numero di telefono

#### Creazione di un nuovo Insegnante
Per creare un nuovo insegnante, è necessario fornire:
- Nome completo
- Specializzazione
- Esperienza
- Giorni di disponibilità
- Metodo di ricevimento
- Disponibilità per ricevere

#### Creazione di un nuovo Ricevimento
Per creare un nuovo ricevimento, è necessario fornire:
- Descrizione
- Data e ora del ricevimento
- Identificativo dell'insegnante interessato
- Identificativo dello studente

### Componenti Software Previsti e Flussi di Dati tra Componenti

#### Architettura del Sistema
Il sistema è composto da tre principali componenti software:
1. **Frontend**: Realizzato con **Angular**.
2. **Backend**: Realizzato con **Node.js**.
3. **Database**: Utilizza **PostgreSQL** in esecuzione su **Docker**.

#### Flussi di Dati
1. **Interazione Utente - Frontend (Angular)**
   - L'utente interagisce con l'interfaccia web per inserire, aggiornare e visualizzare i dati di studenti, insegnanti e ricevimenti.
   - Angular invia richieste HTTP al backend per effettuare queste operazioni.

2. **Comunicazione Frontend - Backend (Node.js)**
   - Le richieste HTTP dal frontend vengono gestite da API RESTful nel backend.
   - Il backend processa le richieste e interagisce con il database PostgreSQL per recuperare o modificare i dati.


3. **Interazione Backend - Database (PostgreSQL)**
   - Il backend utilizza una libreria ORM (come Sequelize) per comunicare con il database.
   - Le operazioni CRUD (Create, Read, Update, Delete) vengono eseguite sul database in risposta alle richieste dal frontend.

### Diagramma dei Flussi di Dati
Ecco un diagramma semplificato dei flussi di dati:

```
[Utente Admin]
    |
    v
[Frontend (Angular)]
    |
    v
[Backend (Node.js)]
    |
    v
[Database (PostgreSQL su Docker)]
```

###
Questa documentazione fornisce una panoramica dettagliata dei modelli di dati, esempi di utilizzo, componenti software e flussi di dati per il progetto di gestione dei record di studenti e insegnanti. Utilizzando Angular per il frontend, Node.js per il backend e PostgreSQL su Docker per il database, il sistema offre una soluzione robusta e scalabile per la gestione delle interazioni tra studenti e insegnanti.