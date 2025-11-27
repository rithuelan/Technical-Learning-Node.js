1) What is MongoDB (basics)

Type: MongoDB is a NoSQL document database (not a relational DB). Data is stored in documents (JSON-like BSON format) inside collections (like tables in RDBMS). Each document has a unique _id field. 
MongoDB

Schema: Schema-flexible — documents in a collection can have different fields.

Use cases: fast reads/writes, hierarchical / nested data, analytics, microservices, caching, and apps where schema changes often. 
MongoDB

Cluster features: supports replica sets (high availability), sharding (horizontal scaling), and transactions (multi-document ACID in modern versions). 
MongoDB

2) Before you start (requirements & tools)

Default port: 27017.

Key tools: mongod (server), mongosh (modern MongoDB shell / CLI), MongoDB Compass (GUI). Download/install guides below. 
MongoDB
+1

3) Install & run — Quick OS-specific instructions

Important: these commands assume modern MongoDB 7.x (docs use that by default). If you need a specific version, select it on the MongoDB docs/download pages and follow the corresponding instructions. 
MongoDB

A. Ubuntu (apt) — example (Ubuntu LTS)

Import MongoDB public GPG key, create source list, update and install (follow the exact lines on official page for your Ubuntu version). Example (replace <version> and check docs):

# fetch the MongoDB GPG key (example)
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor

# create the list file (example for ubuntu jammy 22.04)
echo "deb [signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

sudo apt update
sudo apt install -y mongodb-org


Start & enable service (systemd):

sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod   # start on boot


Open the shell:

mongosh


(If package names differ or dependencies missing, check the official Ubuntu tutorial for the exact commands and troubleshooting notes.) 
MongoDB
+1

B. macOS (Homebrew recommended)

Install via Homebrew (recommended):

brew tap mongodb/brew
brew install mongodb-community@7.0   # or `mongodb-community` depending on brew output


Run MongoDB (Homebrew service):

brew services start mongodb/brew/mongodb-community
# Or run in foreground:
mongod --config /opt/homebrew/etc/mongod.conf


Start shell:

mongosh


(If you prefer downloading tarball / manual install, follow the macOS guide in the official docs.) 
MongoDB
+1

C. Windows (MSI installer)

Download the Windows MSI for MongoDB Community Edition and the MongoDB Database Tools from the official downloads page. Run the MSI and follow the installer steps (choose “Complete” for typical dev setup). 
MongoDB

Run as a Service (optional): the MSI installer gives an option to install mongod as a Windows Service. If you installed without service, you can run from Command Prompt or PowerShell:

# Example (adjust path to your install)
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath "C:\data\db"
# To run mongosh:
"C:\Program Files\MongoDB\tools\mongosh\bin\mongosh.exe"


Verify service: use Services.msc or:

Get-Service -Name MongoDB*


(Exact paths and UI options depend on version — use official Windows install doc for step-by-step screenshots.) 
MongoDB

D. Windows/Linux/macOS — mongosh and Compass

mongosh (modern shell) is recommended instead of legacy mongo. Download/install using the shell page or use the package manager. Then connect locally:

mongosh "mongodb://localhost:27017"


MongoDB Compass is the GUI — download from the Compass page and connect to localhost:27017 for local development. 
MongoDB
+1

4) Run MongoDB manually (dev machine quick-start)

If you just want a quick local instance (dev only):

Create a data directory:

# Linux/macOS
sudo mkdir -p /data/db
sudo chown $(whoami) /data/db

# Windows (PowerShell)
mkdir C:\data\db


Start mongod:

mongod --dbpath /data/db --port 27017


Leave that terminal open; open another terminal and run mongosh to connect. (On production systems, run MongoDB as a service and use a proper config file.) 
MongoDB

5) Basic mongosh (CRUD) examples you can run now

Open mongosh connected to localhost, then try:

// switch / create database
use myappdb

// create / insert documents
db.users.insertOne({ name: "Alice", email: "alice@example.com", age: 28 })
db.users.insertMany([{ name:"Bob" }, { name:"Carol", age:33 }])

// read
db.users.find().pretty()
db.users.find({ age: { $gte: 30 } })

// update
db.users.updateOne({ name: "Alice" }, { $set: { age: 29 } })
db.users.updateMany({}, { $set: { active: true } })

// delete
db.users.deleteOne({ name: "Bob" })
db.users.deleteMany({ active: false })

// count
db.users.countDocuments()


These commands follow the standard CRUD API — see the MongoDB CRUD manual for the full command set and operators. 
MongoDB

6) Connect from an application

Typical connection URI format:

mongodb://<username>:<password>@<host>:<port>/<dbname>?authSource=admin


Or for local no-auth dev:

mongodb://localhost:27017/myappdb


Use official drivers for Node.js, Python, Java, etc. Drivers and connection examples are in MongoDB docs for each language. 
MongoDB

7) Next steps & tips

Use a recent version: check the official docs / downloads for the latest stable release for your OS. 
MongoDB

Production: secure your deployment — enable authentication, use TLS, configure firewall, use replica sets for HA, monitoring. Docs have full security and production hardening guides. 
MongoDB

GUI: install MongoDB Compass for schema exploration & query building. 
MongoDB

Shell features: mongosh provides modern JS REPL, autocomplete, and helpful messages. 
MongoDB

8) Quick troubleshooting (common issues)

Port already in use / mongod won't start: check logs, ensure default 27017 free, verify dbpath exists and permissions ok.

Ubuntu dependency issues: some Ubuntu versions require extra packages (e.g., libssl) — use the distro-specific install doc and troubleshooting notes. 
Ask Ubuntu
+1