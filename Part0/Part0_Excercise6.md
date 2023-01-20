Excercise 0.6 New note in Single page app diagram

```mermaid

sequenceDiagram

    participant browser
    participant server
    
    Note right of browser: User input"a", Click "submit"
    Note right of browser: Even handleer create new note to the note list, render the note on the page and send the note to the server.
    Note right of browser: Post data to server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Status:HTTP code 201: POST
    deactivate server


    
```