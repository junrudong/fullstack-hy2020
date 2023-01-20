```mermaid

New Note Diagram 0.4 


    participant browser
    participant server
    
    Note left of browser: User input"a", Click "submit"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: Status:HTTP code 203: URL redirect
    deactivate server

   
    Note left of server: Server recieve the input update the JSON

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
        
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content: 'a', date: '2023-01-20T15:35:52.188Z'}, ... ]
    deactivate server       

    Note right of browser: The browser executes the callback function that renders the notes
```