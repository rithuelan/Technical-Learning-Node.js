Setup & Run

Install dependencies:

npm install


Make CLI globally executable:

npm link


Use commands:

filemgr create-folder myFolder
filemgr create-file myFile.txt "Hello"
filemgr append-file myFile.txt " More content"
filemgr read-file myFile.txt
filemgr delete-file myFile.txt
filemgr delete-folder myFolder
filemgr sys-info
filemgr parse-url https://example.com
filemgr interactive